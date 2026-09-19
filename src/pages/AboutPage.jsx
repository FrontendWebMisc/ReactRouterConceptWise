import React from 'react';

/**
 * Child Component 2: AboutPage
 * Renders inside RootLayout's <Outlet /> when URL is "/about"
 */
export default function AboutPage() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This child component is rendered inside &lt;Outlet /&gt; at route "/about"</p>
    </div>
  );
}
