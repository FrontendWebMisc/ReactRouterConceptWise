import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    // 👈 Catches errors thrown on "/" or missing 404 routes under this tree
    errorElement: <ErrorPage />,
  },
  {
    path: '/broken',
    element: <div>This won't render because loader throws</div>,
    // 👈 Simulating a failure during data loading
    loader: () => {
      throw new Error('Failed to load server data! (500 Internal Server Error)');
    },
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Error Boundaries (`errorElement`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
