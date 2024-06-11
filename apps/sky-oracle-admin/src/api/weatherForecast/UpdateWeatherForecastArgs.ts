import { WeatherForecastWhereUniqueInput } from "./WeatherForecastWhereUniqueInput";
import { WeatherForecastUpdateInput } from "./WeatherForecastUpdateInput";

export type UpdateWeatherForecastArgs = {
  where: WeatherForecastWhereUniqueInput;
  data: WeatherForecastUpdateInput;
};
