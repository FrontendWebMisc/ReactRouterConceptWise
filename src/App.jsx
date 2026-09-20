import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FilterPage from './pages/FilterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FilterPage />,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Query Strings (`useSearchParams`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
