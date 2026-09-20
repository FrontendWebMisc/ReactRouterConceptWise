import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';

/**
 * Configure routes with Lazy Loading:
 * - "/" is loaded immediately in the main bundle.
 * - "/analytics" uses the modern `lazy` route property, splitting it into its own bundle!
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/analytics',
    // 👈 React Router's built-in code splitting
    lazy: () => import('./pages/AnalyticsPage'),
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Lazy Loading &amp; Code Splitting (`lazy`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
