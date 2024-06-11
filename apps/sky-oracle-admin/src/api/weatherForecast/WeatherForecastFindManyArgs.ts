import { WeatherForecastWhereInput } from "./WeatherForecastWhereInput";
import { WeatherForecastOrderByInput } from "./WeatherForecastOrderByInput";

export type WeatherForecastFindManyArgs = {
  where?: WeatherForecastWhereInput;
  orderBy?: Array<WeatherForecastOrderByInput>;
  skip?: number;
  take?: number;
};
