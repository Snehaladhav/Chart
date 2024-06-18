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
  scales,
} from "chart.js";
import { Card, CardHeader, CardContent, Box, Container } from "@mui/material";
// import { getBarSizeList } from "recharts/types/util/ChartUtils";

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
    "Billing",
    "Business Emails",
    "Cloud Servers",
    "Dedicated Server",
    "Domail Services",
    "Email Marketing",
    "Linux Hosting",
    "Linux Reseller Hosting",
    "Live Chat",
    "Microsoft Office 365",
    "Notifications",
    "Remote Desktop",
    "Report An Issue",
    "Request For Information",
    "Sales",
    "Service Delivery",
    "Ssl Certificates",
    "Vps",
  ],
  datasets: [
    {
      data: [110, 2, 2, 2, 6, 2, 9, 3, 32, 4, 222, 2, 42, 4, 4, 34, 2, 27],
      backgroundColor: ["Brown"],
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
          size: 10,
        },
      },
    },
  },
};

const HorizontalBarDepartment = () => {
  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 900 }}>
          <CardHeader title="Tickets By Department" />
          <CardContent sx={{ height: 400 }}>
            <Bar data={data} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarDepartment;
