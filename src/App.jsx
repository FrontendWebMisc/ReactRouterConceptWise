import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 1. Import the RootLayout (parent wrapper with <Outlet />)
import RootLayout from './layouts/RootLayout';

// 2. Import the child page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

/**
 * Configure routes:
 * - RootLayout is the parent route ('/')
 * - HomePage is the default child route (index: true)
 * - AboutPage is the child route for '/about'
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // 👈 Parent component with shared Header and <Outlet />
    children: [
      {
        index: true, // 👈 Default child route ("/")
        element: <HomePage />,
      },
      {
        path: 'about', // 👈 Child route ("/about")
        element: <AboutPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
