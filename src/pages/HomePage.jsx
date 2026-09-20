import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="card">
      <h2>🏠 Home Page (Included in Main Bundle)</h2>
      <p>
        The Analytics page below is <strong>not loaded yet</strong>. Its JavaScript chunk
        will only be fetched over the network when you click the link!
      </p>

      <div style={{ marginTop: '16px' }}>
        <Link to="/analytics" className="primary-link">
          🚀 Open Analytics (Lazy-Loaded Chunk) →
        </Link>
      </div>
    </div>
  );
}
