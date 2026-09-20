import React from 'react';
// 1. Import useSearchParams from react-router-dom
import { useSearchParams } from 'react-router-dom';

/**
 * FilterPage: Demonstrates reading and updating query parameters (?category=electronics).
 *
 * `useSearchParams()` works just like React's `useState()`,
 * but syncs state directly with the browser's URL query string!
 */
export default function FilterPage() {
  // 👈 searchParams: URLSearchParams object to read params
  // 👈 setSearchParams: function to update params in the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Read the "category" query param, defaulting to "all" if not set
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'default';

  return (
    <div className="card">
      <h2>🔍 Search Params (`useSearchParams`)</h2>
      <p>Click buttons below to update the query string in the browser URL:</p>

      {/* Filter Buttons */}
      <div className="button-group">
        <button
          className={currentCategory === 'all' ? 'active' : ''}
          onClick={() => setSearchParams({ category: 'all', sort: currentSort })}
        >
          All
        </button>
        <button
          className={currentCategory === 'books' ? 'active' : ''}
          onClick={() => setSearchParams({ category: 'books', sort: currentSort })}
        >
          Books
        </button>
        <button
          className={currentCategory === 'tech' ? 'active' : ''}
          onClick={() => setSearchParams({ category: 'tech', sort: currentSort })}
        >
          Tech
        </button>
      </div>

      {/* Current URL State Display */}
      <div className="display-box">
        <p>
          Current Category: <strong>{currentCategory}</strong>
        </p>
        <p>
          Active Query String: <code>?{searchParams.toString() || '(none)'}</code>
        </p>
      </div>
    </div>
  );
}
