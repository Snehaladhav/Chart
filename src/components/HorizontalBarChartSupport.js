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
    "Abu",
    "Adil",
    "Ajit",
    "Amol",
    "Anoop",
    "Bhagyashree",
    "Chintamani",
    "Dhiraj",
    "DeDote",
    "Gajendra",
    "Jose",
    "Justine",
    "Naeem",
    "Pankaj",
    "Praveen",
    "Priyanka",
    "Rajesh",
    "Rohan",
    "Ronald",
    "Sabir",
    "Saji",
    "Sreejith",
    "Vikrant",
    "Zahid",
  ],
  datasets: [
    {
      label: "Tickets",
      data: [
        10, 15, 20, 25, 10, 35, 20, 55, 30, 25, 60, 20, 5.5, 60, 70, 20, 80, 25,
        5, 10, 50, 100,
      ],
      backgroundColor: "#7ABA78",
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
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
    },
  },
  scales: {
    y: {
      ticks: {
        autoSkip: false,
        maxTicksLimit: 50,
        font: {
          size: 12,
        },
      },
    },
    x: {
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
};

const HorizontalBarChartSupport = () => {
  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 900, }}>
          <CardHeader title="Tickets By Support Staff" />
          <CardContent sx={{ height: 400 }}>
            <Bar data={data} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarChartSupport;
