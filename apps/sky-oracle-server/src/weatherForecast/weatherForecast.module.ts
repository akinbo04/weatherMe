import { Module } from "@nestjs/common";
import { WeatherForecastModuleBase } from "./base/weatherForecast.module.base";
import { WeatherForecastService } from "./weatherForecast.service";
import { WeatherForecastController } from "./weatherForecast.controller";
import { WeatherForecastResolver } from "./weatherForecast.resolver";

@Module({
  imports: [WeatherForecastModuleBase],
  controllers: [WeatherForecastController],
  providers: [WeatherForecastService, WeatherForecastResolver],
  exports: [WeatherForecastService],
})
export class WeatherForecastModule {}
