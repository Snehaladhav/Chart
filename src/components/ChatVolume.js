
import * as React from "react";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Card, CardHeader, Grid } from "@mui/material";
import axios from "axios";

export default function TicketVolume() {
  const [dailyChatData, setDailyChatData] = useState({
    labels: [],
    datasets: [
      {
        label: "Daily Ticket Volume",
        data: [],
        backgroundColor: "#729762",
      },
    ],
  });

  useEffect(() => {
    const fetchDataChat = () => {
      const fromDate = "2024-04-01";
      const toDate = "2024-04-10";
      const qtype = 'Ticket';
      const url = `https://api.buzinessware.com/bwreporting/support/summary/chat?from_date=2024-04-01&to_date=2024-04-10`;

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
            const labels = responseData.result.map((item) => item.time_stamp);
            const chartValues = responseData.result.map((item) => item.count);

            setDailyChatData({
              labels: labels,
              datasets: [
                {
                  label: "Daily Chat Volume",
                  data: chartValues,
                  backgroundColor: "#729762",
                },
              ],
            });
          } else {
            console.log("No data received");
          }
        })
        .catch((error) => {
          console.error("Error fetching daily ticket data:", error);
        });
    };

    fetchDataChat();
  }, []);

  return (
    <Box>
      <Card sx={{ marginBottom: 2 }}>
        <CardHeader title="Daily Chat Volume" />
        <Grid>
          {dailyChatData.labels.length > 0 && ( // Check if dailyChatData is not empty
            <LineChart
              xAxis={[{ data: dailyChatData.labels }]}
              series={[
                {
                  data: dailyChatData.datasets[0].data,
                  label: dailyChatData.datasets[0].label,
                },
              ]}
              height={300}
              width={500}
              margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
              grid={{ vertical: true, horizontal: true }}
            />
          )}
        </Grid>
      </Card>
    </Box>
  );
}
