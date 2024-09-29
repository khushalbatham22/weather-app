import React, { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError(new Error("Geolocation is not supported by this browser."));
    }
  };

  return { getCurrentLocation, location, error };
};

export default useGeoLocation;
