import React from 'react';
import { Link } from 'react-router-dom';

/**
 * UsersPage: Displays a list of users.
 * Notice how the <Link to={`/users/${id}`}> passes the dynamic ID in the URL.
 */
export default function UsersPage() {
  const users = [
    { id: '101', name: 'Alice' },
    { id: '102', name: 'Bob' },
    { id: '103', name: 'Charlie' },
  ];

  return (
    <div className="card">
      <h2>👥 Users List</h2>
      <p>Click on any user to navigate to their dynamic URL:</p>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            {/* 👈 Dynamic URL navigation */}
            <Link to={`/users/${user.id}`}>
              View Profile: {user.name} (ID: {user.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
