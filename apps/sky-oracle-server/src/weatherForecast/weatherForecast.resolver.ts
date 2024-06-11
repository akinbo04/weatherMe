import * as graphql from "@nestjs/graphql";
import { WeatherForecastResolverBase } from "./base/weatherForecast.resolver.base";
import { WeatherForecast } from "./base/WeatherForecast";
import { WeatherForecastService } from "./weatherForecast.service";

@graphql.Resolver(() => WeatherForecast)
export class WeatherForecastResolver extends WeatherForecastResolverBase {
  constructor(protected readonly service: WeatherForecastService) {
    super(service);
  }
}
