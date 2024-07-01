import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Typography, Paper } from '@material-ui/core';

const dataset = [
  {
    ExtistingRecurring: 524,
    NewRecurring: 0.0999,
    month: 'Jan',
    
    
  },
  {
    ExtistingRecurring: 392,
    NewRecurring: 1.83,
    month: 'Feb',
  
  },
  {
    ExtistingRecurring: 477,
    NewRecurring: 5.47,
    month: 'Mar',
  },
  {
    ExtistingRecurring: 524,
    NewRecurring: 9.51,
    month: 'Apr',
  },
  {
    ExtistingRecurring: 506,
    NewRecurring: 11.2,
    month: 'May',
  },
  {
    ExtistingRecurring: 365,
    NewRecurring: 10.5,
    month: 'June',
  }
 
];

const chartSetting = {
  yAxis: [
    {
      label: 'Revenue ',
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

const Recurring = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '10px',marginBottom:'10px' }}>
      <Typography variant="h6" gutterBottom>
        Revenue-NR vs ER
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'ExtistingRecurring', label: 'Existing Recurring', valueFormatter ,color:'#80C4E9'},
          { dataKey: 'NewRecurring', label: 'New Recurring', valueFormatter,color:'Blue' },
        ]}
        {...chartSetting}
      />
    </Paper>
  );
};

export default Recurring;
