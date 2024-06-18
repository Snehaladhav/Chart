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
    "Ghulam Hasan",
    "Mani",
    "Genx Systems LIc",
    "Mr.Ali_reza",
    "Danube Building Material",
    "Bakemart Fz LIc",
  ],
  datasets: [
    {
      data: [9, 5, 5, 4, 4, 4],
      backgroundColor: [
        "#7ABA78",
        "#FD9B63",
        "#FD9B63",
        "#FF5580",
        "#FF5580",
        "#FF5580",
        "#FF5580",
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

const HorizontalBarClient = () => {
  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 800 }}>
          <CardHeader title="Tickets By Support Staff" />
          <CardContent sx={{ height: 300 }}>
            <Bar data={data} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarClient;
