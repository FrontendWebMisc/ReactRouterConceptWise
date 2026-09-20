import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="card">
      <h2>🏠 Home Page</h2>
      <p>Test React Router's built-in error handling:</p>

      <div className="link-list">
        {/* Link 1: Route that deliberately throws an error */}
        <Link to="/broken" className="test-link danger">
          💥 Visit "/broken" (Throws Runtime Error in loader)
        </Link>

        {/* Link 2: 404 Route */}
        <Link to="/does-not-exist" className="test-link">
          🔍 Visit Non-Existent Route (Triggers 404)
        </Link>
      </div>
    </div>
  );
}
