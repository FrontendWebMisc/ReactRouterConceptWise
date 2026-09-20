import React from 'react';

/**
 * DashboardPage: Secret page only visible to logged-in users.
 */
export default function DashboardPage({ onLogout }) {
  return (
    <div className="card success-card">
      <h2>🔒 Secret Dashboard (Protected)</h2>
      <p>You can see this because you are authenticated!</p>
      <button className="danger-btn" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
}
