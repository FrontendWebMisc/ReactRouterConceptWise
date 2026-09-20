import React, { useState, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout & Guards
import RootLayout from './layouts/RootLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Pages, Loaders, and Actions
import HomePage from './pages/HomePage';
import CoursesPage, { coursesLoader } from './pages/CoursesPage';
import CourseDetailPage, { courseDetailLoader } from './pages/CourseDetailPage';
import NewCoursePage, { newCourseAction } from './pages/NewCoursePage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

/**
 * ============================================================================
 * UNIFIED REACT ROUTER CONFIGURATION
 * Combining all 10 Concepts:
 * 1. Outlet & RootLayout
 * 2. Dynamic Params (:courseId)
 * 3. Search Params (?category=...)
 * 4. NavLink Active Styles
 * 5. Programmatic Navigation (useNavigate)
 * 6. Data Loaders (coursesLoader, courseDetailLoader)
 * 7. Form Actions (newCourseAction)
 * 8. Error Boundaries (errorElement)
 * 9. Protected Routes (ProtectedRoute)
 * 10. Lazy Loading (lazy: () => import(...))
 * ============================================================================
 */
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          // CONCEPT 1: Persistent RootLayout with Header + <Outlet />
          // CONCEPT 4: NavLink inside RootLayout
          element: (
            <RootLayout
              isAuthenticated={isAuthenticated}
              onLogout={() => setIsAuthenticated(false)}
            />
          ),
          // CONCEPT 8: Catches route errors and 404s
          errorElement: <ErrorPage />,
          children: [
            {
              // Home page with CONCEPT 5: useNavigate
              index: true,
              element: <HomePage />,
            },
            {
              // CONCEPT 3: useSearchParams + CONCEPT 6: loader & useLoaderData
              path: 'courses',
              element: <CoursesPage />,
              loader: coursesLoader,
            },
            {
              // CONCEPT 7: <Form>, action handler, and useActionData
              path: 'courses/new',
              element: <NewCoursePage />,
              action: newCourseAction,
            },
            {
              // CONCEPT 2: Dynamic segment (:courseId) + CONCEPT 6: detail loader
              path: 'courses/:courseId',
              element: <CourseDetailPage />,
              loader: courseDetailLoader,
              errorElement: <ErrorPage />,
            },
            {
              // CONCEPT 10: Lazy route code splitting
              path: 'stats',
              lazy: () => import('./pages/StatsPage'),
            },
            {
              // CONCEPT 9: Protected route guard
              element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
              children: [
                {
                  path: 'admin',
                  element: (
                    <AdminDashboardPage
                      onLogout={() => setIsAuthenticated(false)}
                    />
                  ),
                },
              ],
            },
            {
              // Public Login page
              path: 'login',
              element: <LoginPage onLogin={() => setIsAuthenticated(true)} />,
            },
          ],
        },
      ]),
    [isAuthenticated]
  );

  return <RouterProvider router={router} />;
}
