import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WeatherForecastService } from "./weatherForecast.service";
import { WeatherForecastControllerBase } from "./base/weatherForecast.controller.base";

@swagger.ApiTags("weatherForecasts")
@common.Controller("weatherForecasts")
export class WeatherForecastController extends WeatherForecastControllerBase {
  constructor(protected readonly service: WeatherForecastService) {
    super(service);
  }
}
