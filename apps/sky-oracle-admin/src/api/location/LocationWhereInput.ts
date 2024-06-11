import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WeatherForecastListRelationFilter } from "../weatherForecast/WeatherForecastListRelationFilter";

export type LocationWhereInput = {
  cityName?: StringNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  weatherForecasts?: WeatherForecastListRelationFilter;
};
