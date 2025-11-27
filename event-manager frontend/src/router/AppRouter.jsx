// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import EventDetailPage from '../pages/EventDetailPage';
import LoginPage from '../pages/LoginPage';
import MyEventsPage from '../pages/MyEventsPage';
import AdminDashboard from '../pages/AdminDashboard';
import ProtectedRoute from './ProtectedRoute';
import AdminRoute from './AdminRoute';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* The HomePage is now a protected route */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        
        {/* All other routes remain protected as before */}
        <Route path="/events/:id" element={<ProtectedRoute><EventDetailPage /></ProtectedRoute>} />
        <Route path="/my-events" element={<ProtectedRoute><MyEventsPage /></ProtectedRoute>} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Routes>
    </Router>
  );
};
export default AppRouter;