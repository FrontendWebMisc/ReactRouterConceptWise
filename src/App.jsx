import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import OrderPage from './pages/OrderPage';
import ConfirmationPage from './pages/ConfirmationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OrderPage />,
  },
  {
    path: '/confirmation',
    element: <ConfirmationPage />,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Programmatic Navigation (`useNavigate`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
