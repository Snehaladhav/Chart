import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, CardHeader, CardContent, Box, Container } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "arbab",
    "ghazzi",
    "Ali",
    "SM",
    "yasmeen",
    "tabish",
    "Ghulam",
    "hashim",
    "DeDote",
    "abdul gaen",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0],
      backgroundColor: [
        "brown",
        "#E0A75E",
        "#E0A75E",
        "#6B8A7A",
        "#6B8A7A",
        "#6B8A7A",
        "#6B8A7A",
        "#6B8A7A",
        "#10439F",
        "#10439F",
      ],
    },
  ],
};

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
    },
  },
};

const HorizontalBarChart = () => {
  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 800 }}>
          <CardHeader title="Live Chat By Client(Top 10)" />
          <CardContent >
            <Bar data={data} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarChart;
