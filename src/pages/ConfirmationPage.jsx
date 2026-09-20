import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ConfirmationPage: Demonstrates `navigate(-1)` to go back in browser history.
 */
export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="card success-card">
      <h2>🎉 Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed.</p>

      <div className="button-group">
        {/* 👈 navigate(-1) goes back one page in history (like browser back button) */}
        <button onClick={() => navigate(-1)}>
          ← Go Back (navigate(-1))
        </button>

        {/* 👈 navigate('/') navigates directly to root */}
        <button className="primary-btn" onClick={() => navigate('/')}>
          Return Home
        </button>
      </div>
    </div>
  );
}
