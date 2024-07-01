
import React, { useState, useEffect } from "react";
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
import axios from "axios";

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
        label: "Tickets",
        data: [],
        backgroundColor: [
          "#729762",
         
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchDataTopchatGenerator = async () => {
      const fromDate = "2024-04-01";
      const toDate = "2024-04-10";

      const url = `https://api.buzinessware.com/bwreporting/support/topchatgenerator?from_date=2024-04-01&qtype=client&to_date=2024-04-10
`;

      const username = "bwreporting";
      const password = "xJy8IE549LvKheo94FgNDnWQ384EA3wRGapTUIuObsvRVC";

      const basicAuth = {
        username: username,
        password: password,
      };

      try {
        const response = await axios.get(url, {
          params: {
            from_date: fromDate,
            to_date: toDate,
          },
          auth: basicAuth,
        });

        if (response.data && response.data.result) {
          console.log("Data received:", response.data);

          const responseData = response.data;
          const labels = responseData.result.map((item) => item.value);
          const chartData = responseData.result.map((item) => item.count);

          setChartData({
            labels: labels,
            datasets: [
              {
                label: "Chats",
                data: chartData,
                backgroundColor: [
                  "#973131",
                  "#E0A75E",
                  "#E0A75E",
                  "#E0A75E",
                  "#729762",
                  "#729762",
                  "#729762",
                  "#729762",
                  "#729762",
                  "#071952",
                  "#071952",

                  
                ],
              },
            ],
          });
        } else {
          console.log("No data received from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataTopchatGenerator();
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
        <Card sx={{ width: "90%", maxWidth: 900 }}>
          <CardHeader title="Live Chat By Client (Top 10)" />
          <CardContent sx={{ height: 400 }}>
            <Bar data={chartData} options={options} />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HorizontalBarChartSupport;
