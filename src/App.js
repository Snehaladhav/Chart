import React from "react";
import { Box, Container, Grid } from "@mui/material";
import PieChart from "./components/PieChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import BasicLineChart from "./components/BasicLineChart";
import HorizontalBarChartSupport from "./components/HorizontalBarChartSupport";
import HorizontalBarDepartment from "./components/HorizontalBarDepartment";
import HorizontalBarClient from "./components/HorizontalBarClient";

function App() {
  return (
    <Container sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <PieChart />
          </Box>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <BasicLineChart />
          </Box>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <HorizontalBarChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <HorizontalBarChartSupport />
          </Box>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <HorizontalBarDepartment />
          </Box>
          <Box mb={3} sx={{ width: '100%', overflow: 'auto' }}>
            <HorizontalBarClient />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
