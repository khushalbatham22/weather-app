import axios from "axios";
import { API_ENDPOINT } from "../../config";

export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}points/${latitude},${longitude}`
    );
    const forecastData = await axios.get(response.data.properties.forecast);
    return forecastData.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
