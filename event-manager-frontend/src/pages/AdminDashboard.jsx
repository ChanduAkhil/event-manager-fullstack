// src/pages/AdminDashboard.jsx
import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import CreateEventForm from '../components/CreateEventForm';

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Create New Event
        </Typography>
        <CreateEventForm />
      </Paper>
    </Container>
  );
};

export default AdminDashboard; // Make sure this line is at the end