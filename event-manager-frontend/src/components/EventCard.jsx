// src/components/EventCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={event.imagePath}
        alt={event.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.date} - {event.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={`/events/${event.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCard; // Make sure this line is at the end!