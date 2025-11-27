import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../services/eventService';

const CreateEventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent({ name, date, location });
    navigate('/');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField margin="normal" required fullWidth label="Event Name" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField margin="normal" required fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <TextField margin="normal" required fullWidth label="Date" type="date" InputLabelProps={{ shrink: true }} value={date} onChange={(e) => setDate(e.target.value)} />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Create Event</Button>
    </Box>
  );
};
export default CreateEventForm;