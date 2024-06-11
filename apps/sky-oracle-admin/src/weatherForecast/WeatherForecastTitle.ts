import { WeatherForecast as TWeatherForecast } from "../api/weatherForecast/WeatherForecast";

export const WEATHERFORECAST_TITLE_FIELD = "condition";

export const WeatherForecastTitle = (record: TWeatherForecast): string => {
  return record.condition?.toString() || String(record.id);
};
