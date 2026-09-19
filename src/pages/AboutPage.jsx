import React from 'react';

/**
 * ============================================================================
 * CHILD COMPONENT 2: AboutPage
 * ============================================================================
 *
 * This component is matched when the user visits the path: "/about"
 *
 * Notice:
 * - When you click "About" in the header, only THIS section updates!
 * - The Header above NEVER unmounts or re-renders unnecessarily.
 * - React Router simply swaps HomePage for AboutPage inside the <Outlet />.
 */
export default function AboutPage() {
  return (
    <div className="page-card about-card">
      <div className="page-badge about-badge">Child Route: /about</div>
      <h2>ℹ️ About Component</h2>
      <p>
        This content is rendered inside the <code>&lt;Outlet /&gt;</code> of the{' '}
        <strong>RootLayout</strong> because the URL currently matches <code>/about</code>.
      </p>
      <div className="concept-callout">
        <h4>💡 Key Concept: Nested Path Matching</h4>
        <p>
          In <code>App.jsx</code>, this route is defined as <code>path: "about"</code> under
          the parent <code>path: "/"</code>. React Router joins them into <code>/about</code>.
          Notice the persistent counter in the Header did not reset!
        </p>
      </div>
    </div>
  );
}
