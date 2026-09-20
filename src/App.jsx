import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ArticlesPage, { articlesLoader } from './pages/ArticlesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ArticlesPage />,
    // 👈 The loader function is attached directly to the route definition!
    loader: articlesLoader,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Data Loaders (`useLoaderData`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
