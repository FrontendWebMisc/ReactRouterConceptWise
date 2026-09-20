# Concept: Protected Routes & Auth Guards (`<Navigate />`)

This branch demonstrates how to protect routes and redirect unauthenticated users using React Router's `<Navigate />` and layout wrapping.

---

## 🎯 What is a Protected Route?
In most web applications, certain pages (like `/dashboard`, `/account`) should only be accessible if the user is authenticated. If they are not logged in, React Router redirects them to `/login`.

---

## 🔑 Key Code

### 1. The Route Guard (`src/components/ProtectedRoute.jsx`)
```jsx
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    // 👈 Redirect unauthenticated users
    return <Navigate to="/login" replace />;
  }

  // 👈 Render child route if authenticated
  return <Outlet />;
}
```

### 2. Route Configuration (`src/App.jsx`)
```jsx
const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    // 👈 Protects all nested child routes
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
]);
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. With status **Logged Out**, click **"Try Accessing /dashboard"**.
3. Notice React Router immediately intercepts the navigation and redirects you to `/login`.
4. Click **"Simulate Log In"**.
5. You are now permitted into `/dashboard`!
