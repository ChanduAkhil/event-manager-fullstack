// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
          Event Manager
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">Events</Button>
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/my-events">My Events</Button>
              {user.role === 'ADMIN' && (
                  <Button color="inherit" component={RouterLink} to="/admin">Admin</Button>
              )}
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={RouterLink} to="/login">Login</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;