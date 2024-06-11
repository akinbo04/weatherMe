import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeatherForecastCreateNestedManyWithoutLocationsInput } from "./WeatherForecastCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  cityName?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  user?: UserWhereUniqueInput | null;
  weatherForecasts?: WeatherForecastCreateNestedManyWithoutLocationsInput;
};
