import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

// Minimal child components
const HomePage = () => <h2>🏠 Home Page</h2>;
const DashboardPage = () => <h2>📊 Dashboard Page</h2>;
const SettingsPage = () => <h2>⚙️ Settings Page</h2>;

// Layout with Navbar and Outlet
function Layout() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - NavLink (`isActive`)</h1>
      </header>
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
