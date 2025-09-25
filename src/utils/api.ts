export const OPEN_WEATHER_KEY = "9d729cfd40c256defac28e6a8266b774";
export const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeatherIcon = (iconCode: string) =>
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
