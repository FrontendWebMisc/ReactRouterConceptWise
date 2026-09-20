import React from 'react';
// CONCEPT 2: useParams to read dynamic URL segment
// CONCEPT 5: useNavigate for history back navigation
// CONCEPT 6: useLoaderData to access single course data
import { useParams, useLoaderData, useNavigate, Link } from 'react-router-dom';
import { getCourseById } from '../data/coursesData';

/**
 * CONCEPT 6: Loader receives route params directly ({ params })
 * CONCEPT 8: Throws error if course does not exist, activating errorElement!
 */
export function courseDetailLoader({ params }) {
  const course = getCourseById(params.courseId);

  if (!course) {
    // 👈 Throwing an error triggers the route's errorElement
    throw new Error(`Course with ID "${params.courseId}" was not found!`);
  }

  return course;
}

export default function CourseDetailPage() {
  // 👈 CONCEPT 2: Extract dynamic param
  const { courseId } = useParams();

  // 👈 CONCEPT 6: Loaded data
  const course = useLoaderData();

  // 👈 CONCEPT 5: Navigate back in history
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="badge-row">
        <span className="category-pill">{course.category}</span>
        <span className="badge">Param: :courseId = {courseId}</span>
      </div>

      <h2 style={{ marginTop: '12px' }}>{course.title}</h2>
      <p style={{ marginTop: '8px' }}>{course.description}</p>

      <div className="button-row" style={{ marginTop: '24px' }}>
        {/* CONCEPT 5: navigate(-1) goes back */}
        <button onClick={() => navigate(-1)} className="secondary-btn">
          ← Back (navigate(-1))
        </button>

        <Link to="/courses" className="secondary-link">
          All Courses
        </Link>
      </div>
    </div>
  );
}
