import { WeatherForecastWhereInput } from "./WeatherForecastWhereInput";

export type WeatherForecastListRelationFilter = {
  every?: WeatherForecastWhereInput;
  some?: WeatherForecastWhereInput;
  none?: WeatherForecastWhereInput;
};
