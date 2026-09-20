import React from 'react';
// 1. Import useParams from react-router-dom
import { useParams, Link } from 'react-router-dom';

/**
 * UserDetailPage: Demonstrates reading dynamic route parameters.
 *
 * Route path defined in App.jsx: "/users/:userId"
 * React Router populates `useParams()` with an object: { userId: "..." }
 */
export default function UserDetailPage() {
  // 👈 useParams extracts the dynamic ":userId" from the current URL
  const { userId } = useParams();

  return (
    <div className="card">
      <h2>👤 User Detail Page</h2>
      <p>
        The parameter read from <code>useParams()</code> is:
      </p>
      <div className="param-display">
        userId: <strong>{userId}</strong>
      </div>
      <p style={{ marginTop: '16px' }}>
        <Link to="/">← Back to Users List</Link>
      </p>
    </div>
  );
}
