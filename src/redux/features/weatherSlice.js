import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchZones } from "../services/fetchZones";
import { fetchZonesData } from "../services/fetchZonesData";
import { fetchWeatherData } from "../services/fetchWeatherData";

export const getWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ latitude, longitude }) => {
    const data = await fetchWeatherData(latitude, longitude);
    return data;
  }
);
export const getZones = createAsyncThunk("weather/fetchZones", async () => {
  const data = await fetchZones();
  return data;
});
export const getZonseWeatherData = createAsyncThunk(
  "weather/fetchZonesWeather",
  async ({ zoneId }) => {
    const data = await fetchZonesData(zoneId);
    return data;
  }
);

export const weatherStatus = {
  idle: "idle",
  loading: "loading",
  succeeded: "succeeded",
  failed: "failed",
};

const initialState = {
  data: null,
  status: weatherStatus.idle,
  error: null,
  zones: null,
};
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherPending: (state) => {
      state.status = weatherStatus.loading;
    },
    fetchWeatherFulfilled: (state, action) => {
      state.status = weatherStatus.succeeded;
      state.data = action.payload;
    },
    fetchWeatherRejected: (state, action) => {
      state.status = weatherStatus.failed;
      state.error = action.payload.error;
    },
    setZones: (state, action) => {
      state.zones = action.payload;
    },
    setInitialData: (state) => {
      state.data = null;
      state.status = weatherStatus.idle;
      state.error = null;
    },
  },
});

export const {
  fetchWeatherPending,
  fetchWeatherFulfilled,
  fetchWeatherRejected,
  setZones,
  setInitialData,
} = weatherSlice.actions;

export const getWeatherData =
  ({ latitude, longitude }) =>
  async (dispatch) => {
    dispatch(fetchWeatherPending());
    try {
      const data = await fetchWeatherData(latitude, longitude);
      dispatch(fetchWeatherFulfilled(data));
    } catch (error) {
      console.log(error, error.message, "error");
      dispatch(fetchWeatherRejected({ error: error.message }));
    }
  };
export const getZoneWeatherData = (zoneId) => async (dispatch) => {
  dispatch(fetchWeatherPending());
  try {
    const data = await fetchZonesData(zoneId);
    dispatch(fetchWeatherFulfilled(data));
  } catch (error) {
    console.log(error, error.message, "error");
    dispatch(fetchWeatherRejected({ error: error.message }));
  }
};
export const getAllZones = (latitude, longitude) => async (dispatch) => {
  try {
    const data = await fetchZones(latitude, longitude);
    dispatch(setZones(data));
  } catch (error) {
    console.log(error, error.message, "error");
    dispatch(setZones([]));
  }
};

export default weatherSlice.reducer;
