import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Typography, Paper } from '@material-ui/core';

const dataset = [
  {
    Actual: 571,
    Forecast: 638,
    month: 'Jan',
  },
  {
    Actual: 437,
    Forecast: 550,
    month: 'Feb',
  },
  {
    Actual: 558,
    Forecast: 683,
    month: 'Mar',
  },
  {
    Actual: 605,
    Forecast: 648,
    month: 'Apr',
  },
  {
    Actual: 595,
    Forecast: 619,
    month: 'May',
  },
  {
    Actual: 416,
    Forecast: 614,
    month: 'June',
  },
  {
    Actual: 0,
    Forecast: 659,
    month: 'July',
  },
  {
    Actual: 0,
    Forecast: 719,
    month: 'Aug',
  },
  {
    Actual: 0,
    Forecast: 803,
    month: 'Sept',
  },
  {
    Actual: 0,
    Forecast: 601,
    month: 'Oct',
  },
  {
    Actual: 0,
    Forecast: 625,
    month: 'Nov',
  },
  {
    Actual: 0,
    Forecast: 717,
    month: 'Dec',
  },


 
];

const chartSetting = {
  yAxis: [
    {
      label: 'Revenue ',
    },
  ],
  width: 500,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value} k AED`;

const Forecast = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Revenue-Forecast VS Actual
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'Actual', label: 'Actual', valueFormatter,color: '#B1AFFF', borderColor: 'rgb(54, 162, 235)' },
          { dataKey: 'Forecast', label: 'Forecast', valueFormatter,color:'#81A263' },
        ]}
        {...chartSetting}
      />
    </Paper>
  );
};

export default Forecast;
