import React from 'react';
import { Link } from 'react-router-dom';

/**
 * LAZY-LOADED ROUTE MODULE:
 * React Router's `lazy` feature automatically expects this component as `Component`.
 * It is only downloaded by the browser when the user visits "/analytics".
 */
export function Component() {
  return (
    <div className="card success-card">
      <h2>📊 Heavy Analytics Page</h2>
      <p>
        ✅ This page and its JavaScript chunk were loaded on demand via{' '}
        <code>lazy: () =&gt; import(...)</code>!
      </p>

      <div style={{ marginTop: '16px' }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
