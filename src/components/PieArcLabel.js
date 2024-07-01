import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, CardHeader } from '@material-ui/core';
import { Container, Typography } from '@mui/material';

const data1 = [
  { value: 17, label: 'Backup security', color: '#939B62' },
  { value: 17, label: 'Multi Cloud', color: '#939B62' },
  { value: 17, label: 'Software Licenses', color: '#939B62' },
  { value: 17, label: 'Support&Services', color: '#939B62' },
  { value: 17, label: 'System Config', color: '#939B62' },
  { value: 17, label: 'Web Presence', color: '#939B62' },
];
const data2= [
  { value: 17, label: 'Backup & storage', color: '#939B62' },
  { value: 17, label: 'Compute', color: '#939B62' },
  { value: 17, label: 'Domains', color: '#939B62' },
  { value: 17, label: 'Licenses', color: '#939B62' },
  { value: 17, label: 'Managed server ', color: '#939B62' },
  { value: 17, label: 'WorkPlce security', color: '#939B62' },
];
const data3= [
  { value: 25, label: 'Sales discount', color: '#FF5580' },
  { value: 13, label: 'Cloud Backup', color: '#939B62' },
  { value: 13, label: 'EmailProtect', color: '#939B62' },
  { value: 13, label: 'Fully Managed Server', color: '#939B62' },
  { value: 13, label: ' License ', color: '#939B62' },
  { value: 13, label: 'Scalable Virtual Machine', color: '#939B62' },
//   { value: 13, label: 'TLD Domains', color: '#939B62' },
];
const data4= [
  { value: 90, label: 'UAE', color: '#939B62' },
 
];

const size = {
  width: 600,
  height: 200,
};

export default function PieArcLabel() {
  // Calculate total value of all segments
  const totalValue = data1.reduce((acc, item) => acc + item.value, 0);

  return (
    <Container sx={{ width: '150%', marginRight: '50px' }}>
      <Card>
        <CardHeader title="Total Active Customer" />
        <Typography sx={{textAlign:'center',color:'red'}}>782</Typography>
      </Card>
      <Card>
      <CardHeader title='Business Unit'/>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${((item.value / totalValue) * 100).toFixed(0)}%`,
              arcLabelMinAngle: 45,
              data: data1,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
              paddingRight: '10px',
            },
          }}
          {...size}
        />
      </Card>
      <br></br>
      <Card>
      <CardHeader title='Product Category'/>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${((item.value / totalValue) * 100).toFixed(0)}%`,
              arcLabelMinAngle: 45,
              data: data2,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
              paddingRight: '10px',
            },
          }}
          {...size}
        />
      </Card>
      <br></br>
      <Card>
      <CardHeader title='Product Group'/>
        <PieChart
          series={[
            {
              arcLabel: (item) => `${((item.value / totalValue) * 100).toFixed(0)}%`,
              arcLabelMinAngle: 45,
              data: data3,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
              paddingRight: '10px',
            },
          }}
          {...size}
        />
      </Card>
      <br></br>
      <Card>
      <CardHeader title='Region'/>
        <PieChart
          series={[
            {
              arcLabel: (item) => `100%`,
              arcLabelMinAngle: 45,
              data: data4,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'black',
            
              AlignItem:'center'
            },
          }}
          {...size}
        />
      </Card>
    </Container>
  );
}
