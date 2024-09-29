import axios from "axios";
import { API_ENDPOINT } from "../../config";

export const fetchZones = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINT}zones`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
