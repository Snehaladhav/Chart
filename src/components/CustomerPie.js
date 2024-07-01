import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, Container, Box } from '@material-ui/core';

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
const data = [
  { value: 80, label: 'Infotech LLC', color: '#729762' },
  { value: 19, label: 'Nik', color: '#FFBF00' },
];

const size = {
  width: 400,
  height: 400,
};

export default function CustomerPie() {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between" gap="16px">
        <Card style={{ padding: '10px', margin: '10px' }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 45,
                data: data1,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'black',
                fontSize: '5px',
                margin: '5px',
              },
            }}
            {...size}
          />
        </Card>
        <Card style={{ padding: '10px', margin: '10px' }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value})`,
                arcLabelMinAngle: 15,
                data: data1,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'black',
                fontSize: '5px',
              },
            }}
            {...size}
          />
        </Card>
        <Card style={{ padding: '10px', margin: '10px' }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.label} (${item.value}%)`,
                arcLabelMinAngle: 45,
                data,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontWeight: 'bold',
              },
            }}
            {...size}
          />
        </Card>
      </Box>
    </Container>
  );
}
