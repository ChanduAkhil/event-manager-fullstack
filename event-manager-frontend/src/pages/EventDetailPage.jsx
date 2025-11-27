import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/eventService';
import { Container, Typography, Box, Paper, Button, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEventById(id).then(data => {
      setEvent(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  if (!event) {
    return <Container><Typography variant="h5" sx={{ mt: 4 }}>Event not found.</Typography></Container>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3}>
        <Box component="img" sx={{ height: 300, width: '100%', objectFit: 'cover' }} alt={event.name} src={event.imagePath} />
        <Box sx={{ p: 3 }}>
          <Typography variant="h3" component="h1" gutterBottom>{event.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}><CalendarMonthIcon sx={{ mr: 1 }} /><Typography variant="h6">{event.date}</Typography></Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}><LocationOnIcon sx={{ mr: 1 }} /><Typography variant="h6">{event.location}</Typography></Box>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>Register for this Event</Button>
        </Box>
      </Paper>
    </Container>
  );
};
export default EventDetailPage;