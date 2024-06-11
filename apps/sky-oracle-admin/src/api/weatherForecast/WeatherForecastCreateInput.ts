import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WeatherForecastCreateInput = {
  condition?: string | null;
  forecastTime?: Date | null;
  location?: LocationWhereUniqueInput | null;
  temperature?: number | null;
};
