import { SortOrder } from "../../util/SortOrder";

export type WeatherForecastOrderByInput = {
  condition?: SortOrder;
  createdAt?: SortOrder;
  forecastTime?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  temperature?: SortOrder;
  updatedAt?: SortOrder;
};
