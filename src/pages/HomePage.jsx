import React from 'react';
// CONCEPT 5: useNavigate for imperative event-driven navigation
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Welcome to CourseHub</h2>
      <p>
        This unified application demonstrates all <strong>10 core React Router concepts</strong> working
        together cleanly.
      </p>

      <div style={{ marginTop: '20px' }}>
        {/* CONCEPT 5: Programmatic navigation */}
        <button
          className="primary-btn"
          onClick={() => navigate('/courses')}
        >
          Explore Courses via useNavigate() →
        </button>
      </div>
    </div>
  );
}
