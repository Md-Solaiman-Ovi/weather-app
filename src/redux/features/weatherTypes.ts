/* eslint-disable @typescript-eslint/no-explicit-any */
export interface WeatherState {
  loading: boolean;
  error: string | null;
  current: any | null;
  forecast: any | null;
}
