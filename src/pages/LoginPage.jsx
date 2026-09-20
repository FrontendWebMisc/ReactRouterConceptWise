import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * CONCEPT 9: Public Login Page
 * When unauthenticated users attempt to access /admin, ProtectedRoute redirects here.
 */
export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    // Navigate to the protected page after successful login
    navigate('/admin');
  };

  return (
    <div className="card">
      <h2>🔑 Admin Authentication Required</h2>
      <p>You were redirected here because <code>/admin</code> is a protected route.</p>

      <div style={{ marginTop: '16px' }}>
        <button className="primary-btn" onClick={handleLogin}>
          Log In as Admin →
        </button>
      </div>
    </div>
  );
}
