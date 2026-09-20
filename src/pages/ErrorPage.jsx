import React from 'react';
// CONCEPT 8: Route Error Handling with useRouteError
import { useRouteError, Link } from 'react-router-dom';

/**
 * CONCEPT 8: Error Boundary Component
 * Rendered whenever a route throws an error, loader fails, or 404 is encountered.
 */
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="card error-card">
      <h2>🚨 Route Error Caught!</h2>
      <p>React Router prevented a crash using <code>errorElement</code>:</p>

      <div className="error-box">
        {error.statusText || error.message || 'Page Not Found (404)'}
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/courses" className="primary-link">
          ← Return to Courses
        </Link>
      </div>
    </div>
  );
}
