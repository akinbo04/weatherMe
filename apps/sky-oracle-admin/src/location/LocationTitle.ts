import { Location as TLocation } from "../api/location/Location";

export const LOCATION_TITLE_FIELD = "cityName";

export const LocationTitle = (record: TLocation): string => {
  return record.cityName?.toString() || String(record.id);
};
