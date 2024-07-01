import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Card, CardHeader, CardContent, Box, Container, Typography } from '@mui/material'; // Assuming Materio uses MUI components




const data = [
  { value:17,label:'Backup & Security', label:'17%',color:'#939B62'},
  { value:17,label:'Multi Cloud',color:'#939B62'}
,  { value:17,label:'Software & Licencses',color:'#939B62'},
  { value:17,label:'Support & Services',color:'#939B62'},
  { value:17,label:'System Configuration',color:'#939B62'},
  { value:17,label:'Web Presence',color:'#939B62'},
  
];
const data3 = [
  { label: '100%', value: 100, color: '#41B06E' },
  
];
const data4 = [
  
  { label: '100%', value: 100, color: '#41B06E' },
  
];


const sizing = {
  margin: { right: 5 },
  width:200,
  height: 200, 
  legend: { hidden: true },
};

const getArcLabel = (params) => {
 
  return `${params.label}`;
};

export default function CatlaugeReport() {
  

  return (
    <Container>

     <CardHeader title='Customer Dashboard'/>
     <Container sx={{ display: 'flex', justifyContent: 'center', mt: 2, flexWrap: 'wrap', gap: 1 }}>
        <Card sx={{ width: '15%', maxWidth: 200, margin: 1, height: 200 }}>
          <CardHeader title="Total Active Customer" titleTypographyProps={{ variant: 'h5', sx: { fontSize: 12 } }} />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
             <Typography sx={{color:'red'}}>782</Typography>
            </Box>
          </CardContent>
        </Card>
        
      </Container>
    
    </Container>
  );
}
