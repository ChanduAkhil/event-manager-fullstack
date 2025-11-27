import React from 'react';
import { Container, Typography } from '@mui/material';

const MyEventsPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4">My Registered Events</Typography>
      <Typography sx={{ mt: 2 }}>This page is protected. You can only see it when you are logged in.</Typography>
    </Container>
  );
};
export default MyEventsPage;