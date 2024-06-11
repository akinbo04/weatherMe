import { Location } from "../location/Location";

export type WeatherForecast = {
  condition: string | null;
  createdAt: Date;
  forecastTime: Date | null;
  id: string;
  location?: Location | null;
  temperature: number | null;
  updatedAt: Date;
};
