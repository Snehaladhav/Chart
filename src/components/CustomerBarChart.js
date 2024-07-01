import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card } from '@material-ui/core';
import { CardHeader } from '@mui/material';

const data = [
  { name: 'AE', uv: 5478},
  { name: 'MA', uv: 682 },
  { name: 'IN', uv: 489 },
  { name: 'US', uv: 487 },
  { name: 'PK', uv: 316 },
  { name: 'SA', uv: 309 },
  { name: 'GB', uv: 230 },
  { name: 'GB', uv: 171 },
  { name: 'GB', uv: 121 },
  { name: 'GB', uv: 100 }
];

const CustomBarChart = () => {
  return (
    <Card style={{ padding: '20px', margin: '20px' }}>
      <CardHeader title="New Customer by type"/>
      <BarChart
        width={730}
        height={250}
        data={data}
        margin={{
          top: 20, right: 30, left: 10, bottom: 15,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </Card>
  );
};

export default CustomBarChart;
