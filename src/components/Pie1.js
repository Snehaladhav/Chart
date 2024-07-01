import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, CardHeader, CardContent, Box, Container, Typography } from '@mui/material'; // Assuming Materio uses MUI components
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const data1 = [
  { label: '523 k AED 92%', value: 900, color: '#F4CE14' },
  { label: '', value: 40, color: '#00C49F' },
  { label: '27.6k AED 5%', value: 20, color: '#0088FE' },
];
const data2 = [
  { label: '524 k AED 94%', value: 900, color: '#41B06E' },
  { label: '32.5 k AED 6%', value: 40, color: '#F4CE14' },
];
const data3 = [
  { label: '402 k AED', value: 300, color: '#E72929' },
  { label: '144 k AED', value: 110, color: '#C8CFA0' },
  { label: '', value: 10, color: 'blue' },
];
const data4 = [
  { label: '51%', value: 350, color: '#F4CE14' },
  { label: '44%', value: 300, color: '#41B06E' },
  { label: '6%', value: 50, color: 'skyblue' },
];
const data5 = [
  { label: '22407 k AED', value: 350, color: '#E72929' },
  { label: '9836 k AED', value: 200, color: '#E8C872' },
  { label: '4408 k AED', value: 50, color: '#4F709C' },
  { label: '3199 K AED', value: 40, color: '#577B8D' },
  { label: '', value: 10, color: '#5356FF' },
  { label: '', value: 10, color: '#5356FF' },
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 150, 
  legend: { hidden: true },
};

const getArcLabel = (params) => {
 
  return `${params.label}`;
};

export default function Pie1() {
  const [startDateTime, setStartDateTime] = React.useState(dayjs('2024-06-17T06:45'));
  const [endDateTime, setEndDateTime] = React.useState(dayjs('2024-06-17T18:00'));

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h4">Revenue Dashboard</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
            <DateTimePicker
              value={startDateTime}
              onChange={(newValue) => setStartDateTime(newValue)}
              sx={{ border: 'none', boxShadow: 'none' }}
            />
            <Typography variant="body1">to</Typography>
            <DateTimePicker
              value={endDateTime}
              onChange={(newValue) => setEndDateTime(newValue)}
              sx={{ border: 'none', boxShadow: 'none' }}
            />
          </Box>
        </LocalizationProvider>
      </Box>

      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexWrap: 'wrap', gap: 1 }}>
        <Card sx={{ width: '20%', maxWidth: 200, margin: 1, height: 250 }}>
          <CardHeader title="Revenue" titleTypographyProps={{ variant: 'h6', sx: { fontSize: 14 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    outerRadius: 60,
                    data: data1,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 12,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '20%', maxWidth: 300, margin: 1, height: 250 }}>
          <CardHeader title="Revenue" titleTypographyProps={{ variant: 'h6', sx: { fontSize: 14 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    outerRadius: 60,
                    data: data2,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 12,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '20%', maxWidth: 300, margin: 1, height: 250 }}>
          <CardHeader title="Revenue" titleTypographyProps={{ variant: 'h6', sx: { fontSize: 14 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    outerRadius: 60,
                    data: data3,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 12,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '20%', maxWidth: 300, margin: 1, height: 250 }}>
          <CardHeader title="Revenue" titleTypographyProps={{ variant: 'h6', sx: { fontSize: 14 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    outerRadius: 60,
                    data: data4,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 12,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '20%', maxWidth: 300, margin: 1, height: 250 }}>
          <CardHeader title="Revenue" titleTypographyProps={{ variant: 'h6', sx: { fontSize: 14 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <PieChart
                series={[
                  {
                    outerRadius: 60,
                    data: data5,
                    arcLabel: getArcLabel,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'black',
                    fontSize: 12,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        
        
      </Container>
    </Container>
  );
}
