/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { WeatherState } from "./weatherTypes";
  

const API_KEY = "9d729cfd40c256defac28e6a8266b774";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const current = await axios.get(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecast = await axios.get(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      return { current: current.data, forecast: forecast.data };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error fetching weather");
    }
  }
);

const initialState: WeatherState = {
  loading: false,
  error: null,
  current: null,
  forecast: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.current;
        state.forecast = action.payload.forecast;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
