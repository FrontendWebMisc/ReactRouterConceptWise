import React from 'react';
// 1. IMPORT `createBrowserRouter` AND `RouterProvider` FROM 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 2. IMPORT THE ROOT LAYOUT (The wrapper component that contains <Outlet />)
import RootLayout from './layouts/RootLayout';

// 3. IMPORT THE CHILD COMPONENTS (The components that get swapped into <Outlet />)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

/**
 * ============================================================================
 * ROUTER CONFIGURATION
 * ============================================================================
 *
 * We define our routes using `createBrowserRouter()`.
 *
 * HOW NESTED ROUTES & OUTLET WORK TOGETHER:
 * -----------------------------------------
 * Notice the `children` array below inside the "/" route object.
 *
 * 1. The parent route specifies `element: <RootLayout />`.
 * 2. Whenever a URL matches ANY route in the `children` array, React Router:
 *    - Renders the parent `<RootLayout />`.
 *    - Finds the `<Outlet />` component placed inside `<RootLayout />`.
 *    - Injects the matching child's element right inside that `<Outlet />`!
 *
 * URL MATCHING BREAKDOWN:
 * - When URL is "/":
 *     -> Matches the `index: true` child.
 *     -> RootLayout renders, and its <Outlet /> renders <HomePage />.
 *
 * - When URL is "/about":
 *     -> Matches the `path: "about"` child.
 *     -> RootLayout stays rendered, and its <Outlet /> renders <AboutPage />.
 */
const router = createBrowserRouter([
  {
    // Parent route path
    path: '/',

    // Parent layout component that renders the common Header and <Outlet />
    element: <RootLayout />,

    // Child routes rendered inside RootLayout's <Outlet />
    children: [
      {
        // `index: true` indicates this is the default child route for path "/"
        index: true,
        element: <HomePage />,
      },
      {
        // Nested path "about" is automatically appended to parent path "/" -> "/about"
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

/**
 * ============================================================================
 * MAIN APP COMPONENT
 * ============================================================================
 *
 * RouterProvider supplies the router configuration to the entire application.
 */
export default function App() {
  return <RouterProvider router={router} />;
}
