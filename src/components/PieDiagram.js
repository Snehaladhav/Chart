import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, CardHeader, CardContent, Box, Container, Typography } from '@mui/material';

const data1 = [
  { value: 80, label: 'Add', color: '#41B06E' },
  { value: 76, label: 'ALF', color: '#FFBF00' },
  { value: 25, label: 'Efforts', color: '#80C4E9' },
  { value: 25, label: 'Oracle', color: '#F97300' },
  { value: 10, label: 'Onlinedxb', color: '#FF4B91' },
  { value: 10, label: 'Unisys', color: '#83A2FF' },
  { value: 10, label: 'Holistic', color: '#E2BBE9' },
  { value: 10, label: 'Gulf', color: '#9B86BD' },
  { value: 10, label: 'Point', color: '#799351' },
  { value: 5, label: 'ECC', color: '#FFDB5C' },
];
const data3 = [
  { value: 80, label: 'Italian', color: '#41B06E' },
  { value: 70, label: 'FLEET', color: '#FFBF00' },
  { value: 25, label: 'Deli', color: '#80C4E9' },
  { value: 10, label: 'Decisive', color: '#FF4B91' },
  { value: 10, label: 'Seven', color: '#83A2FF' },
  { value: 10, label: 'Rabiah', color: '#E2BBE9' },
  { value: 10, label: 'ABC', color: '#9B86BD' },
  { value: 10, label: 'Powder', color: '#799351' },
  { value: 5, label: 'Ajman', color: '#FFDB5C' },
  { value: 5, label: 'Digital', color: '#FFDB5C' },
];


const data2= [
  { value: 80, label: 'Infotech LLC', color: '#729762' },
  { value: 19, label: 'Nik', color: '#FFBF00' },
];

const sizing = {
  width: 150,
  height: 150,
};

const PieChartWithLabels = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <PieChart
        series={[
          {
            arcLabel: () => '',
            arcLabelMinAngle: 15,
            data,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'black',
            fontSize: '5px',
          },
        }}
        {...sizing}
      />
      <Box sx={{ ml: 2 }}>
        {data.map((item) => (
          <Typography key={item.label} variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: item.color, mr: 1 }} />
            {item.label} ({item.value}%)
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default function PieDiagram() {
  return (
    <Container>
      <Card>
        <CardHeader title="Customer Dashboard" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mt: 2 }}>
          <Card sx={{ width: '90%', margin: 1 }}>
            <CardHeader title="Total Active Customer" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
            <CardContent>
              <PieChartWithLabels data={data1} />
            </CardContent>
          </Card>
          <Card sx={{ width: '30%', margin: 1 }}>
            <CardHeader title="Customer By Status" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
            <CardContent>
              <PieChartWithLabels data={data3} />
            </CardContent>
          </Card>
          <Card sx={{ width: '30%', margin: 1 }}>
            <CardHeader title="Customer By Type" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
            <CardContent>
              <PieChartWithLabels data={data2} />
            </CardContent>
          </Card>
        </Box>
      </Card>
    </Container>
  );
}
