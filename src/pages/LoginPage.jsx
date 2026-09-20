import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * LoginPage: Public login component.
 */
export default function LoginPage({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    // After logging in, redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="card">
      <h2>🔑 Login Page</h2>
      <p>Click below to authenticate and enter the protected dashboard:</p>
      <button className="primary-btn" onClick={handleLogin}>
        Simulate Log In
      </button>
    </div>
  );
}
