import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Typography, Paper } from '@material-ui/core';

const dataset = [ 
  { CurrentYear: 571, PreviousYear: 587, month: 'Jan' },
  { CurrentYear: 437, PreviousYear: 503, month: 'Feb' },
  { CurrentYear: 558, PreviousYear: 625, month: 'Mar' },
  { CurrentYear: 605, PreviousYear: 595, month: 'Apr' },
  { CurrentYear: 595, PreviousYear: 568, month: 'May' },
  { CurrentYear: 416, PreviousYear: 560, month: 'June' },
  { CurrentYear: 0, PreviousYear: 602, month: 'July' },
  { CurrentYear: 0, PreviousYear: 657, month: 'Aug' },
  { CurrentYear: 0, PreviousYear: 711, month: 'Sept' },
  { CurrentYear: 0, PreviousYear: 554, month: 'Oct' },
  { CurrentYear: 0, PreviousYear: 562, month: 'Nov' },
  { CurrentYear: 0, PreviousYear: 596, month: 'Dec' },
];


const chartSetting = {
  yAxis: [{ label: 'Revenue ' }],
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)'
    },
  },
};

const valueFormatter = (value) => `${value} k AED`;

const RevenueYear = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Revenue-Year vs Year
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'CurrentYear', label: 'Current Year', valueFormatter,color: '#596FB7' },
          { dataKey: 'PreviousYear', label: 'Previous Year', valueFormatter, color:'#FFC94A'},
        ]}
        {...chartSetting}
      />
    </Paper>
  );
};

export default RevenueYear;
