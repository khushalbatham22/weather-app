import axios from "axios";
import { API_ENDPOINT } from "../../config";

export const fetchZonesData = async (zoneId) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}zones/forecast/${zoneId}/observations`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
