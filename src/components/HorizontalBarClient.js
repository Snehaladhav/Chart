

import React, { useState, useEffect } from "react";
import axios from "axios";
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

const HorizontalBarClient = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Tickets",
        data: [],
        backgroundColor: "#7ABA78",
      },
    ],
  });

  useEffect(() => {
    const fetchData = () => {
      const fromDate = "2024-04-01";
      const toDate = "2024-04-10";
      const qtype = "staff";

      const url =
        `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment`;

      const username = "bwreporting";
      const password = "xJy8IE549LvKheo94FgNDnWQ384EA3wRGapTUIuObsvRVC";

      const basicAuth = {
        username: username,
        password: password,
      };

      axios
        .get(url, {
          params: {
            from_date: fromDate,
            to_date: toDate,
            qtype: qtype,
          },
          auth: basicAuth,
        })
        .then((response) => {
          if (response.data) {
            console.log("Data received:", JSON.stringify(response.data));
            const data = response.data;

            const labels = data.result.map((item) => item.value); 
            const datasets = data.result.map((item) => item.count); 

            setChartData({
              labels: labels,
              datasets: [
                {
                  label: "Tickets",
                  data: datasets,
                  backgroundColor: "#7ABA78",
                },
              ],
            });
          } else {
            console.log("No data received");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

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
        text: "Ticket By Support Staff",
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

  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 800 }}>
          <CardHeader title="Tickets By Support Staff" />
          <CardContent sx={{ height: 300 }}>
            <Bar data={chartData} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarClient;
