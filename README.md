# Concept: Route Error Handling with `errorElement`

This branch demonstrates how to catch errors, failed loaders, and 404s using React Router's `errorElement` and `useRouteError()`.

---

## 🎯 What is `errorElement`?
When a loader throws an error, an action fails, or a user visits a non-existent URL, React Router will catch it and display the closest `errorElement` defined in the route tree instead of crashing the whole app.

---

## 🔑 Key Code

### 1. Error Component (`src/pages/ErrorPage.jsx`)
```jsx
import { useRouteError, Link } from 'react-router-dom';

export default function ErrorPage() {
  // 👈 Access error message or HTTP status
  const error = useRouteError();

  return (
    <div>
      <h2>Oops! An error occurred</h2>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}
```

### 2. Route Definition (`src/App.jsx`)
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />, // 👈 Catches errors and 404s
  },
  {
    path: '/broken',
    loader: () => {
      throw new Error('Database connection failed!'); // 👈 Triggers errorElement
    },
    errorElement: <ErrorPage />,
  },
]);
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click **"Visit /broken"** to see the custom error UI catch the thrown error.
3. Click **"Return to Home"** to safely recover.
