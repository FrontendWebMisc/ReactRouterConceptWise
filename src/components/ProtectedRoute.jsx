import React from 'react';
// CONCEPT 9: Protected Routes & Auth Guard
import { Navigate, Outlet } from 'react-router-dom';

/**
 * ProtectedRoute: Checks if user is authenticated.
 * If not, redirects to /login using <Navigate replace />.
 * If authenticated, renders child routes inside <Outlet />.
 */
export default function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    // 👈 Redirect unauthenticated users
    return <Navigate to="/login" replace />;
  }

  // 👈 Render protected child page
  return <Outlet />;
}
