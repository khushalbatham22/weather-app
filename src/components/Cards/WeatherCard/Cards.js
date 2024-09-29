import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Box,
  Stack,
  Divider,
  Grid,
} from "@mui/material";

const WeatherCard = ({ weather }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={weather.icon}
        alt={weather.shortForecast}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weather.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, whiteSpace: "normal" }}
        >
          {weather.detailedForecast}
        </Typography>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                <strong>Temperature:</strong> {weather.temperature}°
                {weather.temperatureUnit}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                <strong>Wind:</strong> {weather.windSpeed}{" "}
                {weather.windDirection}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                <strong>Start Time:</strong>{" "}
                {new Date(weather.startTime).toLocaleString()}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                <strong>End Time:</strong>{" "}
                {new Date(weather.endTime).toLocaleString()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
