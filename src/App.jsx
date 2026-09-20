import React, { useState, useMemo } from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  // Simple state simulating authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Router configuration responds to changes in isAuthenticated state
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: (
            <div className="card">
              <h2>🏠 Public Home</h2>
              <p>
                Authentication Status:{' '}
                <strong>{isAuthenticated ? '✅ Logged In' : '❌ Logged Out'}</strong>
              </p>
              <div className="link-group">
                <Link to="/dashboard">Try Accessing /dashboard (Protected)</Link>
                <Link to="/login">Go to /login</Link>
              </div>
            </div>
          ),
        },
        {
          path: '/login',
          element: <LoginPage onLogin={() => setIsAuthenticated(true)} />,
        },
        {
          // 👈 Guarded Route: wraps all protected children
          element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
          children: [
            {
              path: '/dashboard',
              element: (
                <DashboardPage onLogout={() => setIsAuthenticated(false)} />
              ),
            },
          ],
        },
      ]),
    [isAuthenticated]
  );

  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Protected Routes (`&lt;Navigate /&gt;`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
