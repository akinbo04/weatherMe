import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type WeatherForecastUpdateInput = {
  condition?: string | null;
  forecastTime?: Date | null;
  location?: LocationWhereUniqueInput | null;
  temperature?: number | null;
};
