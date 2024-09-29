import { TextField, Typography, Button } from "@mui/material";
import React from "react";

import AddLocationIcon from "@mui/icons-material/AddLocation";

const WeatherForm = ({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  getCurrentLocation,
  handleSubmit,
}) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Weather Forecast
      </Typography>

      <TextField
        label="Latitude"
        variant="outlined"
        value={latitude}
        type="number"
        onChange={(e) => setLatitude(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Longitude"
        variant="outlined"
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        margin="normal"
      />

      <p>Or</p>

      <Button onClick={getCurrentLocation}>
        {" "}
        <AddLocationIcon /> Get Current Location
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSubmit}
        disabled={!latitude || !longitude}
      >
        Get Weather
      </Button>
    </>
  );
};

export default WeatherForm;
