import React from 'react';
// CONCEPT 2: Link to dynamic routes (:courseId)
// CONCEPT 3: useSearchParams for filtering query strings
// CONCEPT 6: useLoaderData for pre-fetched route data
import { useLoaderData, useSearchParams, Link } from 'react-router-dom';
import { getCourses } from '../data/coursesData';

/**
 * CONCEPT 6: Route Loader Function
 * Fetches course data before the CoursesPage component mounts.
 */
export function coursesLoader() {
  return getCourses();
}

export default function CoursesPage() {
  // 👈 CONCEPT 6: Access data pre-loaded by coursesLoader
  const courses = useLoaderData();

  // 👈 CONCEPT 3: Read and write query strings (?category=...)
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  // Filter courses based on query string
  const filteredCourses =
    selectedCategory === 'all'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <div className="card">
      <div className="card-header">
        <h2>📚 Available Courses</h2>
        <span className="badge">
          Query: <code>?{searchParams.toString() || 'all'}</code>
        </span>
      </div>

      {/* Filter buttons updating searchParams */}
      <div className="filters">
        <span>Filter Category:</span>
        <button
          className={selectedCategory === 'all' ? 'active-filter' : ''}
          onClick={() => setSearchParams({ category: 'all' })}
        >
          All
        </button>
        <button
          className={selectedCategory === 'frontend' ? 'active-filter' : ''}
          onClick={() => setSearchParams({ category: 'frontend' })}
        >
          Frontend
        </button>
        <button
          className={selectedCategory === 'backend' ? 'active-filter' : ''}
          onClick={() => setSearchParams({ category: 'backend' })}
        >
          Backend
        </button>
      </div>

      {/* List of courses linking to dynamic routes */}
      <div className="course-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-item">
            <span className="category-pill">{course.category}</span>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {/* 👈 CONCEPT 2: Link to dynamic param route /courses/:courseId */}
            <Link to={`/courses/${course.id}`} className="view-link">
              View Course Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
