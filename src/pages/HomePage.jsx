import React from 'react';

/**
 * Child Component 1: HomePage
 * Renders inside RootLayout's <Outlet /> when URL is "/"
 */
export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This child component is rendered inside &lt;Outlet /&gt; at route "/"</p>
    </div>
  );
}
