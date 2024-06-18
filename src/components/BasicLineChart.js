import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card, CardHeader, Grid, Typography } from "@mui/material";

export default function GridDemo() {
  return (
    <container>
      <Card>
        <CardHeader title="Daily Ticket Volume" />
        <Grid>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            width={500}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Grid>
      </Card>
      <br></br>
      <Card>
        <CardHeader title="Daily Chat Volume" />
        <Grid>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
            width={500}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ vertical: true, horizontal: true }}
          />
        </Grid>
      </Card>
    </container>
  );
}
