import React from 'react';
// 1. Import Navigate and Outlet from react-router-dom
import { Navigate, Outlet } from 'react-router-dom';

/**
 * ProtectedRoute: Route guard component.
 *
 * - If user is NOT authenticated: redirects immediately to /login using <Navigate />.
 * - If user IS authenticated: renders child protected routes using <Outlet />.
 */
export default function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    // 👈 Navigate redirects imperatively via JSX
    return <Navigate to="/login" replace />;
  }

  // 👈 User is authenticated, render the protected child page
  return <Outlet />;
}
