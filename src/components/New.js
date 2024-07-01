import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Typography, Paper } from '@material-ui/core';

const dataset = [
  {
    ExistingNew: 31.5,
    NewNew: 15.4,
    month: 'Jan',
  },
  {
    ExistingNew: 23.3,
    NewNew: 20.3,
    month: 'Feb',
  },
  {
    ExistingNew: 38.8,
    NewNew: 36.5,
    month: 'Mar',
  },
  {
    ExistingNew: 19.7,
    NewNew: 52.3,
    month: 'Apr',
  },
  {
    ExistingNew: 56.6,
    NewNew: 32.0,
    month: 'May',
  },
  {
    ExistingNew: 26.3,
    NewNew: 13.4,
    month: 'June',
  }
];

const chartSetting = {
  yAxis: [
    {
      label: 'Revenue',
    },
  ],
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

const valueFormatter = (value) => `${value} k AED`;

const New = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Revenue-NN VS EN
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'ExistingNew', label: 'Existing New', valueFormatter, color: '#B1C381' }, 
          { dataKey: 'NewNew', label: 'New New', valueFormatter, color: '#EEC759' }, 
        ]}
        {...chartSetting}
      />
    </Paper>
  );
};

export default New;
