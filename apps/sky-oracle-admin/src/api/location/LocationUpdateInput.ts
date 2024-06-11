import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeatherForecastUpdateManyWithoutLocationsInput } from "./WeatherForecastUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  cityName?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  user?: UserWhereUniqueInput | null;
  weatherForecasts?: WeatherForecastUpdateManyWithoutLocationsInput;
};
