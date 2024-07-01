

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

const HorizontalBarChartSupport = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#729762",
          "#FF7F3E",
          "#FF7F3E",
          "#F075AA",
          "#F075AA",
          "#F075AA",
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchTicketsByDepartment = () => {
      const fromDate = "2024-04-01";
      const toDate = "2024-04-10";
      const qtype = "department";

      const url = `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment?from_date=2024-04-01&qtype=client&to_date=2024-04-10`;

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
          if (response.data && response.data.result) {
            console.log("Data received:", response.data);

            const responseData = response.data;
            const labels = responseData.result.map((item) => item.value);
            const chartValues = responseData.result.map((item) => item.count);

            setChartData({
              labels: labels,
              datasets: [
                {
                  data: chartValues,
                  backgroundColor: [
                    "#729762",
                    "#FF7F3E",
                    "#FF7F3E",
                    "#F075AA",
                    "#F075AA",
                    "#F075AA",
                  ],
                },
              ],
            });
          } else {
            console.log("No data received from the server");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchTicketsByDepartment();
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
        text: "Tickets By Department",
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

  return (
    <Container sx={{ paddingLeft: "90px" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ width: "90%", maxWidth: 900 }}>
          <CardHeader title="Tickets By Support Staff" />
          <CardContent sx={{ height: 400 }}>
            <Bar data={chartData} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarChartSupport;
