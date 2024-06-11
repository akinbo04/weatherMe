import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type WeatherForecastWhereInput = {
  condition?: StringNullableFilter;
  forecastTime?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  temperature?: FloatNullableFilter;
};
