import React from 'react';

/**
 * ============================================================================
 * CHILD COMPONENT 1: HomePage
 * ============================================================================
 *
 * This component is matched when the user visits the root path: "/"
 *
 * Notice:
 * - This component does NOT import or render the Header.
 * - This component does NOT know anything about RootLayout.
 * - React Router automatically places this component inside the <Outlet />
 *   defined in RootLayout.jsx!
 */
export default function HomePage() {
  return (
    <div className="page-card home-card">
      <div className="page-badge home-badge">Child Route: / (index: true)</div>
      <h2>🏠 Home Component</h2>
      <p>
        This content is rendered inside the <code>&lt;Outlet /&gt;</code> of the{' '}
        <strong>RootLayout</strong> because the URL currently matches <code>/</code>.
      </p>
      <div className="concept-callout">
        <h4>💡 Key Concept: Index Route</h4>
        <p>
          In <code>App.jsx</code>, this route is defined with <code>index: true</code>.
          That means when the parent route <code>/</code> is exact, this child component
          is rendered by default inside the parent's <code>&lt;Outlet /&gt;</code>.
        </p>
      </div>
    </div>
  );
}
