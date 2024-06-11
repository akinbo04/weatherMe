import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeatherForecastServiceBase } from "./base/weatherForecast.service.base";

@Injectable()
export class WeatherForecastService extends WeatherForecastServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
