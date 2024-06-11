import { User } from "../user/User";
import { WeatherForecast } from "../weatherForecast/WeatherForecast";

export type Location = {
  cityName: string | null;
  createdAt: Date;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
  user?: User | null;
  weatherForecasts?: Array<WeatherForecast>;
};
