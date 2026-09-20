import React from 'react';
// CONCEPT 1: <Outlet /> for rendering child routes
// CONCEPT 4: <NavLink /> with active styling callback
import { Outlet, NavLink } from 'react-router-dom';

/**
 * RootLayout: Common persistent parent wrapper.
 * - Shared Header across all routes
 * - NavLink tabs with active highlighting
 * - <Outlet /> where matching child pages are swapped
 */
export default function RootLayout({ isAuthenticated, onLogout }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-top">
          <h1 className="logo">🎓 CourseHub</h1>
          <div className="auth-status">
            {isAuthenticated ? (
              <span>
                👤 Admin <button className="logout-btn" onClick={onLogout}>Logout</button>
              </span>
            ) : (
              <span className="guest-badge">Guest Mode</span>
            )}
          </div>
        </div>

        {/* CONCEPT 4: NavLink with isActive callback */}
        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Courses
          </NavLink>

          <NavLink
            to="/courses/new"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            + Add Course
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Admin (Guarded)
          </NavLink>

          <NavLink
            to="/stats"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Stats (Lazy)
          </NavLink>
        </nav>
      </header>

      {/* CONCEPT 1: <Outlet /> slot where child page components render */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
