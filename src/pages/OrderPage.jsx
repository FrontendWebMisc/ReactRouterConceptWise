import React, { useState } from 'react';
// 1. Import useNavigate from react-router-dom
import { useNavigate } from 'react-router-dom';

/**
 * OrderPage: Demonstrates programmatic navigation on button click.
 */
export default function OrderPage() {
  // 👈 useNavigate returns a function to navigate imperatively
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    // Simulate a brief operation, then navigate programmatically
    setTimeout(() => {
      // 👈 navigate() imperatively redirects the user to /confirmation
      navigate('/confirmation');
    }, 500);
  };

  return (
    <div className="card">
      <h2>🛒 Checkout Page</h2>
      <p>Click below to simulate placing an order:</p>
      <button
        className="primary-btn"
        onClick={handlePlaceOrder}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing...' : 'Place Order Now'}
      </button>
    </div>
  );
}
