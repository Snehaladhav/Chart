import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, CardHeader, CardContent, Box, Container, Typography } from '@mui/material'; // Assuming Materio uses MUI components




const data2 = [
  { label: 'Active 100%', value: 100, color: '#41B06E' },
  
];
const data3 = [
  { label: '100%', value: 100, color: '#41B06E' },
  
];
const data4 = [
  
  { label: '100%', value: 100, color: '#41B06E' },
  
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
  

  return (
    <Container>

     <Card>
     <CardHeader title='Customer Dashboard'/>
     <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexWrap: 'wrap', gap: 1 }}>
        <Card sx={{ width: '15%', maxWidth: 200, margin: 1, height: 200 }}>
          <CardHeader title="Total Active Customer" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
             <Typography sx={{color:'red'}}>1850</Typography>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '15%', maxWidth: 300, margin: 1, height: 200 }}>
          <CardHeader title="Customer By Status" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
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
                    fontSize: 18,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '15%', maxWidth: 300, margin: 1, height: 200 }}>
          <CardHeader title="Customer By Type" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
          <CardContent>
          <Typography sx={{textAlign:'center'}}>No data</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '15%', maxWidth: 300, margin: 1, height: 200 }}>
          <CardHeader title="Customer By Market" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
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
                    fontSize: 18,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ width: '15%', maxWidth: 300, margin: 1, height: 200 }}>
          <CardHeader title="Customer By Payment Type" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12} }} />
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
                    fontSize: 18,
                  },
                }}
                {...sizing}
              />
            </Box>
          </CardContent>
        </Card>
        
        
      </Container>
     </Card>
    </Container>
  );
}
