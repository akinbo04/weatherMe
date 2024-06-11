import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  cityName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
