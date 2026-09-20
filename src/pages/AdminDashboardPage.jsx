import React from 'react';

/**
 * CONCEPT 9: Admin Dashboard (Protected Route)
 * Only accessible when isAuthenticated is true.
 */
export default function AdminDashboardPage({ onLogout }) {
  return (
    <div className="card success-card">
      <h2>🔒 Protected Admin Dashboard</h2>
      <p>
        ✅ You have access because <code>isAuthenticated === true</code>!
      </p>

      <div className="admin-box">
        <p><strong>Privileged Settings:</strong> System Healthy &bull; All Routes Active</p>
        <button className="danger-btn" onClick={onLogout}>
          Log Out of Admin
        </button>
      </div>
    </div>
  );
}
