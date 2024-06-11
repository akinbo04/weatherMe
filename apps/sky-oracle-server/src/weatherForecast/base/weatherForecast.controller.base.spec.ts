import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { WeatherForecastController } from "../weatherForecast.controller";
import { WeatherForecastService } from "../weatherForecast.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  condition: "exampleCondition",
  createdAt: new Date(),
  forecastTime: new Date(),
  id: "exampleId",
  temperature: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  condition: "exampleCondition",
  createdAt: new Date(),
  forecastTime: new Date(),
  id: "exampleId",
  temperature: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    condition: "exampleCondition",
    createdAt: new Date(),
    forecastTime: new Date(),
    id: "exampleId",
    temperature: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  condition: "exampleCondition",
  createdAt: new Date(),
  forecastTime: new Date(),
  id: "exampleId",
  temperature: 42.42,
  updatedAt: new Date(),
};

const service = {
  createWeatherForecast() {
    return CREATE_RESULT;
  },
  weatherForecasts: () => FIND_MANY_RESULT,
  weatherForecast: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("WeatherForecast", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: WeatherForecastService,
          useValue: service,
        },
      ],
      controllers: [WeatherForecastController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /weatherForecasts", async () => {
    await request(app.getHttpServer())
      .post("/weatherForecasts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        forecastTime: CREATE_RESULT.forecastTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /weatherForecasts", async () => {
    await request(app.getHttpServer())
      .get("/weatherForecasts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          forecastTime: FIND_MANY_RESULT[0].forecastTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /weatherForecasts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weatherForecasts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /weatherForecasts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/weatherForecasts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        forecastTime: FIND_ONE_RESULT.forecastTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /weatherForecasts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/weatherForecasts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        forecastTime: CREATE_RESULT.forecastTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/weatherForecasts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
