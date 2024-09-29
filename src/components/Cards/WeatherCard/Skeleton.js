import React from "react";
import { Card, CardContent, Skeleton, Box, Grid, Divider } from "@mui/material";

const WeatherCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", mt: 5 }}>
      <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Skeleton variant="text" height={40} width="60%" />
        <Skeleton variant="text" height={20} width="80%" sx={{ mb: 2 }} />
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Skeleton variant="text" height={20} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="text" height={20} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="text" height={20} width="100%" />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="text" height={20} width="100%" />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCardSkeleton;
