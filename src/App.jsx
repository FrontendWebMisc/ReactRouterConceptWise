import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UsersPage from './pages/UsersPage';
import UserDetailPage from './pages/UserDetailPage';

/**
 * Configure routes with Dynamic Segments:
 * - "/" matches the list page
 * - "/users/:userId" has a dynamic segment ":userId"
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersPage />,
  },
  {
    // 👈 The colon ":" denotes a dynamic route parameter named "userId"
    path: '/users/:userId',
    element: <UserDetailPage />,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Dynamic Params (`useParams`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
