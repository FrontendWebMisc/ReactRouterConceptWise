import React from 'react';

/**
 * CONCEPT 10: Lazy-Loaded Route Module
 * Exported as `Component` for React Router's `lazy` route property.
 * This file is only downloaded when /stats is requested.
 */
export function Component() {
  return (
    <div className="card">
      <h2>📈 Platform Statistics (Lazy-Loaded)</h2>
      <p>
        ⚡ This entire view was code-split and downloaded asynchronously via{' '}
        <code>lazy: () =&gt; import(...)</code>!
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Concepts</h4>
          <span className="stat-number">10</span>
        </div>
        <div className="stat-card">
          <h4>Architecture</h4>
          <span className="stat-number">Data APIs</span>
        </div>
        <div className="stat-card">
          <h4>Bundle Optimization</h4>
          <span className="stat-number">Lazy Loaded</span>
        </div>
      </div>
    </div>
  );
}
