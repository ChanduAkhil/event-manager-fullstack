// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Stack, CircularProgress, Box } from '@mui/material';
import EventCard from '../components/EventCard';
import { getAllEvents } from '../services/eventService';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
  }

  return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Upcoming Events
      </Typography>
      <Stack spacing={4}>
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;