import React, { useEffect, useState } from "react";

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      console.log("Geolocation is available", navigator);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(
            "🚀 ~ file: useGeoLocation.js:13 ~ useEffect ~ position:",
            position
          );
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

  useEffect(() => {
    // getCurrentLocation();
  }, []);

  return { getCurrentLocation, location, error };
};

export default useGeoLocation;
