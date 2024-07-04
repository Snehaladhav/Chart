import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import axios from 'axios';
import { Card, CardHeader, CardContent, Box, Container, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import ChatVolume from './ChatVolume';
import HorizontalBarChart from './HorizontalBarChart';
import HorizontalBarChartSupport from './HorizontalBarChartSupport';
import HorizontalBarClient from './HorizontalBarClient';
import HorizontalBarDepartment from './HorizontalBarDepartment';
import TicketVolume from './TicketVolume';

const ReportSupport = () => {
  const [startDateTime, setStartDateTime] = useState(dayjs('2024-06-17T06:45'));
  const [endDateTime, setEndDateTime] = useState(dayjs('2024-06-17T06:45'));
  const [chartData, setChartData] = useState({
    chatVolumeData: [],
    ticketVolumeData: [],
    horizontalBarChartData: [],
    horizontalBarChartSupportData: [],
    horizontalBarClientData: [],
    horizontalBarDepartmentData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const fromDate = startDateTime.format('YYYY-MM-DD');
      const toDate = endDateTime.format('YYYY-MM-DD');

   
      const ChatVolumeUrl = `https://api.buzinessware.com/bwreporting/support/summary/chat?from_date=${fromDate}&to_date=${toDate}
`;
      const TicketVolumeUrl = `https://api.buzinessware.com/bwreporting/support/summary/ticket?from_date=${fromDate}&to_date=${toDate}`;
      const horizontalBarChartUrl = ` https://api.buzinessware.com/bwreporting/support/topchatgenerator?from_date=${fromDate}&to_date=${toDate}`;
      const horizontalBarChartSupportUrl = `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment?from_date=2024-04-01&qtype=staff&to_date=2024-04-10`;
      const horizontalBarClientUrl = `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment?from_date=${fromDate}&to_date=${toDate}`;
      const horizontalBarDepartmentUrl = `https://api.buzinessware.com/bwreporting/support/ticketsbydepartment?from_date=${fromDate}&to_date=${toDate}`;

      try {
        const [chatResponse, ticketResponse, hbcResponse, hbcSupportResponse, hbcClientResponse, hbcDepartmentResponse] = await Promise.all([
          axios.get(ChatVolumeUrl),
          axios.get(TicketVolumeUrl),
          axios.get(horizontalBarChartUrl),
          axios.get(horizontalBarChartSupportUrl),
          axios.get(horizontalBarClientUrl),
          axios.get(horizontalBarDepartmentUrl),
        ]);

        setChartData({
          chatVolumeData: chatResponse.data,
          ticketVolumeData: ticketResponse.data,
          horizontalBarChartData: hbcResponse.data,
          horizontalBarChartSupportData: hbcSupportResponse.data,
          horizontalBarClientData: hbcClientResponse.data,
          horizontalBarDepartmentData: hbcDepartmentResponse.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [startDateTime, endDateTime]);

  const handleStartDateTimeChange = (newValue) => {
    setStartDateTime(newValue);
  };

  const handleEndDateTimeChange = (newValue) => {
    setEndDateTime(newValue);
  };
console.log("Date is recv",startDateTime,endDateTime)
  return (
    <Grid container spacing={0}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography>Support Dashboard</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end', alignItems: 'center' }}>
            <DateTimePicker
              value={startDateTime}
              onChange={handleStartDateTimeChange}
              sx={{ border: 'none', boxShadow: 'none' }}
            />
            <Typography variant="body1">to</Typography>
            <DateTimePicker
              value={endDateTime}
              onChange={handleEndDateTimeChange}
              sx={{ border: 'none', boxShadow: 'none' }}
            />
          </Box>
        </LocalizationProvider>
      </Box>
      <Grid item xs={6}>
        <ChatVolume data={chartData.chatVolumeData} />
        <TicketVolume data={chartData.ticketVolumeData} />
      </Grid>
      <Grid item xs={6}>
        <HorizontalBarChart data={chartData.horizontalBarChartData} />
        <HorizontalBarChartSupport data={chartData.horizontalBarChartSupportData} />
        <HorizontalBarClient data={chartData.horizontalBarClientData} />
        <HorizontalBarDepartment data={chartData.horizontalBarDepartmentData} />
      </Grid>
    </Grid>
  );
};

ReportSupport.acl = {
  action: 'read',
  subject: 'mgmt-reports-support'
};

export default ReportSupport;
