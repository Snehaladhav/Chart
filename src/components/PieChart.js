import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
// import { green } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          margin: 0,
        }}
      >
        <Card>
          <CardHeader title="Total Tickets" />
          <Box sx={{ width: 200, height: 100 }}>
            <Gauge
              value={529}
              startAngle={-100}
              endAngle={100}
              sx={{
                fontSize: 20,
                transform: "translate(10px)",
              }}
            />
          </Box>
        </Card>
        <Card>
          <CardHeader title="Total Live chats" />
          <Box sx={{ width: 200, height: 100, display: "flex" }}>
            <Gauge
              value={83}
              startAngle={-100}
              endAngle={100}
              sx={{
                fontSize: 20,
                transform: "translate(10px, 0px)",
              }}
            />
          </Box>
        </Card>
        <Card>
          <CardHeader title="Total Calls" />
          <Box sx={{ width: 200, height: 100, display: "flex" }}>
            <Gauge
              value={0}
              startAngle={-100}
              endAngle={100}
              sx={{
                fontSize: 20,
                transform: "translate(10px, 0px)",
                Color: "red",
              }}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default PieChart;
