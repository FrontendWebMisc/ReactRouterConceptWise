# 🎓 CourseHub: Complete React Router Project

> A clean, lightweight, and cohesive web application combining all **10 modern React Router concepts** into a single runnable project with zero domain bloat and no external database.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

The application will be live at:  
👉 **[http://localhost:5173/](http://localhost:5173/)**

---

## 🧭 Live Route & Concept Navigation

| Route | Concept Highlight | What You See & Can Do |
|---|---|---|
| **`/`** | `<Outlet />` & `useNavigate()` | Persistent root layout header; explore button navigating via `useNavigate()`. |
| **`/courses`** | `loader` & `useSearchParams` | Courses pre-loaded before render; filter buttons updating `?category=frontend`. |
| **`/courses/:courseId`** | `useParams` & `navigate(-1)` | Dynamic course detail reading `:courseId`; back button traveling in history. |
| **`/courses/new`** | `<Form>`, `action`, `useActionData` | Form submission intercepted by route action; validation feedback & auto-redirect. |
| **`/admin`** | Protected Route & `<Navigate />` | Guarded by `ProtectedRoute`; redirects unauthenticated guests directly to `/login`. |
| **`/login`** | Auth Toggle | Public login screen; authenticate as admin to unlock `/admin`. |
| **`/stats`** | Route Code Splitting (`lazy`) | JavaScript chunk downloaded asynchronously only when visited. |
| **`/courses/999`** | `errorElement` & `useRouteError` | Custom error UI catching missing items or 404s without crashing the app. |

---

## 📚 Deep Dive: The 10 Concepts Explained in Code

### 1. Persistent Root Layout & `<Outlet />`
- **File**: [`src/layouts/RootLayout.jsx`](./src/layouts/RootLayout.jsx)
- **Concept**: The parent component renders the common header once. `<Outlet />` acts as a dynamic slot where matching child pages are mounted.
```jsx
export default function RootLayout() {
  return (
    <div className="layout">
      <header>...</header>
      <main>
        <Outlet /> {/* 👈 Child routes inject here */}
      </main>
    </div>
  );
}
```

---

### 2. Dynamic Route Parameters (`useParams`)
- **File**: [`src/pages/CourseDetailPage.jsx`](./src/pages/CourseDetailPage.jsx)
- **Concept**: Extracts dynamic segments declared with a colon (e.g. `/courses/:courseId`).
```jsx
const { courseId } = useParams(); // 👈 e.g. "1" or "2"
```

---

### 3. Query Strings (`useSearchParams`)
- **File**: [`src/pages/CoursesPage.jsx`](./src/pages/CoursesPage.jsx)
- **Concept**: Synchronizes component state directly with URL search parameters (e.g. `?category=frontend`).
```jsx
const [searchParams, setSearchParams] = useSearchParams();
const category = searchParams.get('category') || 'all';

// Updates the browser URL without page reload
setSearchParams({ category: 'frontend' });
```

---

### 4. Active Navigation Links (`<NavLink>`)
- **File**: [`src/layouts/RootLayout.jsx`](./src/layouts/RootLayout.jsx)
- **Concept**: Automatically receives `isActive` boolean to apply active styling/classes to links.
```jsx
<NavLink
  to="/courses"
  className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
>
  Courses
</NavLink>
```

---

### 5. Programmatic Navigation (`useNavigate`)
- **Files**: [`src/pages/HomePage.jsx`](./src/pages/HomePage.jsx), [`src/pages/CourseDetailPage.jsx`](./src/pages/CourseDetailPage.jsx)
- **Concept**: Triggering navigation inside functions and navigating backward in history.
```jsx
const navigate = useNavigate();

navigate('/courses'); // 👈 Navigate to path
navigate(-1);         // 👈 Go back one step in browser history
```

---

### 6. Route Data Fetching (`loader` & `useLoaderData`)
- **Files**: [`src/pages/CoursesPage.jsx`](./src/pages/CoursesPage.jsx), [`src/App.jsx`](./src/App.jsx)
- **Concept**: Fetches data *before* the component mounts, eliminating `useEffect` loading spinners and waterfalls.
```jsx
// 1. Attached to route in App.jsx:
{ path: 'courses', element: <CoursesPage />, loader: coursesLoader }

// 2. Read inside the component:
const courses = useLoaderData();
```

---

### 7. Form Mutations (`<Form>`, `action`, `useActionData`)
- **Files**: [`src/pages/NewCoursePage.jsx`](./src/pages/NewCoursePage.jsx), [`src/App.jsx`](./src/App.jsx)
- **Concept**: Native-like form handling without manual `e.preventDefault()`. Action validates input, handles data, and returns feedback or redirects.
```jsx
<Form method="post">
  <input name="title" />
  <button type="submit">Create Course</button>
  {actionData?.error && <p>{actionData.error}</p>}
</Form>
```

---

### 8. Route Error Handling (`errorElement` & `useRouteError`)
- **Files**: [`src/pages/ErrorPage.jsx`](./src/pages/ErrorPage.jsx), [`src/App.jsx`](./src/App.jsx)
- **Concept**: Catches runtime errors, failed loaders, and 404s gracefully without breaking the rest of the application.
```jsx
const error = useRouteError();
return <div>Error: {error.statusText || error.message}</div>;
```

---

### 9. Protected Routes & Auth Guards (`<Navigate />`)
- **Files**: [`src/components/ProtectedRoute.jsx`](./src/components/ProtectedRoute.jsx), [`src/App.jsx`](./src/App.jsx)
- **Concept**: Wraps privileged child routes. If `isAuthenticated` is false, it redirects to `/login`.
```jsx
export default function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
```

---

### 10. Route Code Splitting & Lazy Loading (`lazy`)
- **Files**: [`src/pages/StatsPage.jsx`](./src/pages/StatsPage.jsx), [`src/App.jsx`](./src/App.jsx)
- **Concept**: Splits route code into separate chunks loaded only on demand via React Router's built-in `lazy` property.
```jsx
{
  path: 'stats',
  lazy: () => import('./pages/StatsPage'), // 👈 Chunks StatsPage separately
}
```

---

## 📂 Project Structure

```text
src/
├── data/
│   └── coursesData.js         # In-memory data store with initial courses & CRUD functions
├── layouts/
│   └── RootLayout.jsx         # Persistent Header, NavLink tabs, and <Outlet /> slot
├── components/
│   └── ProtectedRoute.jsx     # Guard component redirecting unauthorized users
├── pages/
│   ├── HomePage.jsx           # Welcome page + useNavigate() button
│   ├── CoursesPage.jsx        # useLoaderData() + useSearchParams() category filtering
│   ├── CourseDetailPage.jsx   # useParams() + navigate(-1) + error boundary triggering
│   ├── NewCoursePage.jsx      # <Form method="post"> + action handler + useActionData()
│   ├── AdminDashboardPage.jsx # Protected dashboard
│   ├── LoginPage.jsx          # Public login page with auth toggle
│   ├── StatsPage.jsx          # Lazy-loaded route module
│   └── ErrorPage.jsx          # Error boundary catching route errors & 404s
├── App.jsx                    # createBrowserRouter orchestrating the complete route tree
├── main.jsx                   # Application entry mount
└── index.css                  # Clean, responsive styling
```

---

## 🧪 Interactive Testing Checklist

- [x] **Active Links**: Click between *Home*, *Courses*, *+ Add Course*. Notice the blue active bottom border.
- [x] **Query Strings**: On *Courses*, click *Frontend* or *Backend*. Observe the URL update to `?category=frontend`.
- [x] **Dynamic Param & Back**: Click on *React Router In-Depth*. Notice the URL is `/courses/2`. Click `← Back` to return.
- [x] **Form Validation**: Go to *+ Add Course*, leave title blank, and click *Create Course*. Observe the validation error.
- [x] **Form Redirect**: Enter a title and submit. Observe immediate redirect to the new course details page.
- [x] **Auth Guard**: In *Guest Mode*, click *Admin (Guarded)*. Observe redirect to `/login`. Click *Log In as Admin* to gain access.
- [x] **Error Handling**: Visit [`http://localhost:5173/courses/999`](http://localhost:5173/courses/999). Notice the custom error boundary gracefully displays *"Course with ID '999' was not found!"*.
- [x] **Lazy Loading**: Open browser DevTools Network tab and click *Stats (Lazy)*. Observe the `StatsPage` chunk downloaded dynamically.
