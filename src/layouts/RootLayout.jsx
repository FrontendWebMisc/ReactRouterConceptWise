import React from 'react';
// 1. Import Outlet and Link from react-router-dom
import { Outlet, Link } from 'react-router-dom';

/**
 * RootLayout: The parent layout component.
 *
 * - The <header> is common and visible across all child pages.
 * - The <Outlet /> is where child components (HomePage, AboutPage) appear.
 */
export default function RootLayout() {
  return (
    <div className="layout">
      {/* Shared Header across all child pages */}
      <header className="header">
        <h1>My App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      {/* Child components will be rendered here */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
