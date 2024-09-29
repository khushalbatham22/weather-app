import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import {
  getWeatherData,
  setInitialData,
  weatherStatus,
} from "../../redux/features/weatherSlice";
import useGeoLocation from "../../hooks/useGeoLocation";
import WeatherCard from "../../components/Cards/WeatherCard/Cards";
import WeatherCardSkeleton from "../../components/Cards/WeatherCard/Skeleton";
import WeatherForm from "./WeatherForm";
import WeatherDetails from "./WeatherDetails";

const Weather = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const dispatch = useDispatch();
  const weather = useSelector(({ weather }) => weather);
  const { getCurrentLocation, location } = useGeoLocation();

  const handleSubmit = () => {
    if (latitude && longitude) {
      dispatch(getWeatherData({ latitude, longitude }));
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
    }
    return () => {
      setLatitude("");
      setLongitude("");
      dispatch(setInitialData());
    };
  }, [location]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
      <WeatherForm
        getCurrentLocation={getCurrentLocation}
        handleSubmit={handleSubmit}
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      <WeatherDetails
        weather={weather}
        weatherStatus={weatherStatus}
        WeatherCard={WeatherCard}
        WeatherCardSkeleton={WeatherCardSkeleton}
      />
    </Box>
  );
};

export default Weather;
