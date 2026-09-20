import React from 'react';
// 1. Import useRouteError and Link from react-router-dom
import { useRouteError, Link } from 'react-router-dom';

/**
 * ErrorPage: Rendered by React Router whenever a route throws an error or hits 404.
 */
export default function ErrorPage() {
  // 👈 useRouteError retrieves the thrown error object or 404 response
  const error = useRouteError();

  return (
    <div className="card error-card">
      <h2>🚨 Oops! An error occurred</h2>
      <p>React Router caught this error with <code>errorElement</code>:</p>

      <div className="error-details">
        <strong>Error Message:</strong>{' '}
        {error.statusText || error.message || 'Unknown Error'}
      </div>

      <p style={{ marginTop: '20px' }}>
        <Link to="/" className="back-link">
          ← Safely Return to Home
        </Link>
      </p>
    </div>
  );
}
