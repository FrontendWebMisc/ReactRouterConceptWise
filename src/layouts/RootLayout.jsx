import React, { useState } from 'react';
// 1. IMPORT `Outlet` and `NavLink` FROM 'react-router-dom'
// - `Outlet`: Acts as a placeholder where child route elements are rendered.
// - `NavLink`: Special Link component that knows if it is currently "active".
import { Outlet, NavLink } from 'react-router-dom';

/**
 * ============================================================================
 * ROOT LAYOUT COMPONENT (Parent Route Element)
 * ============================================================================
 *
 * What is a Layout in React Router?
 * ---------------------------------
 * A Layout is a wrapper component that renders common UI elements
 * (like Headers, Navbars, Sidebars, Footers) around page-specific content.
 *
 * What is <Outlet />?
 * -------------------
 * <Outlet /> is a component provided by 'react-router-dom'.
 * Think of it as a "hole" or "slot" inside this layout component.
 * Whatever child route matches the current URL will be dynamically
 * injected right into this slot!
 *
 * In our router configuration (see App.jsx):
 *   When URL is "/"      ==> <Outlet /> renders <HomePage />
 *   When URL is "/about" ==> <Outlet /> renders <AboutPage />
 */
export default function RootLayout() {
  // A simple state in the Header to prove layout persistence!
  // When you switch between Home and About, this counter WILL NOT RESET.
  // This proves that RootLayout stays mounted while only the Outlet changes.
  const [persistentCounter, setPersistentCounter] = useState(0);

  return (
    <div className="layout-container">
      {/* ================================================================ */}
      {/* 1. PERSISTENT HEADER (Common to ALL child routes)                 */}
      {/* ================================================================ */}
      <header className="shared-header">
        <div className="header-brand">
          <span className="brand-icon">⚡</span>
          <div>
            <h1 className="brand-title">React Router Concepts</h1>
            <span className="concept-tag">Concept: &lt;Outlet /&gt;</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="header-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home Route (/)
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About Route (/about)
          </NavLink>
        </nav>

        {/* Layout Persistence Demonstration Widget */}
        <div className="header-widget">
          <span className="widget-label">Layout State:</span>
          <button
            className="counter-button"
            onClick={() => setPersistentCounter((prev) => prev + 1)}
            title="Click to increment. Notice this value stays when switching routes!"
          >
            Clicks: <strong>{persistentCounter}</strong>
          </button>
        </div>
      </header>

      {/* Visual architecture banner */}
      <div className="architecture-banner">
        <div className="badge layout-badge">🔵 RootLayout Wrapper (Persistent)</div>
        <p className="banner-text">
          The <strong>Header</strong> above and the <strong>Footer</strong> below
          never re-mount during navigation. Only the slot below changes.
        </p>
      </div>

      {/* ================================================================ */}
      {/* 2. THE <Outlet /> PLACEHOLDER                                     */}
      {/* ================================================================ */}
      <main className="outlet-wrapper">
        <div className="outlet-header-indicator">
          <span className="badge outlet-badge">🟢 &lt;Outlet /&gt; Slot</span>
          <span className="outlet-hint">
            The active child component below is rendered here by React Router
          </span>
        </div>

        {/* 
          👇 THIS IS THE MAGIC!
          React Router renders either <HomePage /> or <AboutPage /> here,
          depending on whether the current browser path is "/" or "/about".
        */}
        <div className="outlet-content-box">
          <Outlet />
        </div>
      </main>

      {/* ================================================================ */}
      {/* 3. PERSISTENT FOOTER (Also common across all child routes)        */}
      {/* ================================================================ */}
      <footer className="shared-footer">
        <p>
          Branch: <code>outlet</code> &bull; Concept: Nested Routes &amp; Shared Layouts
        </p>
      </footer>
    </div>
  );
}
