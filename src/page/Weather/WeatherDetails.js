import React from "react";
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";

const WeatherDetails = ({
  weather,
  weatherStatus,
  WeatherCard,
  WeatherCardSkeleton,
}) => {
  return (
    <Box mt={3} sx={{ width: "100%" }}>
      {!!weather.data && (
        <Typography variant="h6" textAlign={"center"} mb={2}>
          Weather Data
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        {weather.status === weatherStatus.loading && (
          <Box mt={3} sx={{ width: "100%" }}>
            <Stack direction="row" spacing={2}>
              {Array.from(new Array(10)).map((_, index) => (
                <WeatherCardSkeleton key={index} />
              ))}
            </Stack>
          </Box>
        )}
        {weather.status === weatherStatus.succeeded && weather.data && (
          <Stack direction="row" spacing={2}>
            {weather.data.properties.periods.map((weatherData) => (
              <WeatherCard key={weatherData.number} weather={weatherData} />
            ))}
          </Stack>
        )}
        {weather.status === weatherStatus.failed && (
          <Typography color="error">{weather.error}</Typography>
        )}
      </Box>
    </Box>
  );
};

export default WeatherDetails;
