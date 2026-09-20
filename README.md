# CourseHub: Complete Project with All 10 React Router Concepts

This branch (**`complete-project`**) brings together all 10 isolated React Router concepts into one unified, cohesive, and simple application.

---

## 🗺️ How the 10 Concepts Are Integrated

| # | Concept | Where to Look | What It Does |
|---|---|---|---|
| 1 | **`<Outlet />` & Root Layout** | [`src/layouts/RootLayout.jsx`](./src/layouts/RootLayout.jsx) | Renders persistent header and dynamic child pages. |
| 2 | **Dynamic Params (`useParams`)** | [`src/pages/CourseDetailPage.jsx`](./src/pages/CourseDetailPage.jsx) | Reads `:courseId` from `/courses/:courseId`. |
| 3 | **Search Params (`useSearchParams`)** | [`src/pages/CoursesPage.jsx`](./src/pages/CoursesPage.jsx) | Filters courses via query string (`?category=frontend`). |
| 4 | **Active Links (`<NavLink>`)** | [`src/layouts/RootLayout.jsx`](./src/layouts/RootLayout.jsx) | Highlights active navigation tab in Header. |
| 5 | **Programmatic Navigation (`useNavigate`)** | [`src/pages/HomePage.jsx`](./src/pages/HomePage.jsx) & [`CourseDetailPage.jsx`](./src/pages/CourseDetailPage.jsx) | "Explore Courses" button and `navigate(-1)` back button. |
| 6 | **Data Loaders (`useLoaderData`)** | [`src/pages/CoursesPage.jsx`](./src/pages/CoursesPage.jsx) | Pre-fetches courses before component render without `useEffect`. |
| 7 | **Form & Actions (`useActionData`)** | [`src/pages/NewCoursePage.jsx`](./src/pages/NewCoursePage.jsx) | Submits `<Form method="post">` to route action with validation. |
| 8 | **Error Boundary (`errorElement`)** | [`src/pages/ErrorPage.jsx`](./src/pages/ErrorPage.jsx) | Catches thrown errors (e.g. non-existent `/courses/999`) and 404s. |
| 9 | **Protected Routes (`<Navigate />`)** | [`src/components/ProtectedRoute.jsx`](./src/components/ProtectedRoute.jsx) | Restricts `/admin` and redirects unauthorized guests to `/login`. |
| 10 | **Lazy Loading (`lazy`)** | [`src/pages/StatsPage.jsx`](./src/pages/StatsPage.jsx) | Route code-split on demand via `lazy: () => import(...)`. |

---

## 🧪 Testing the Concepts in Action

1. **Start the dev server**:
   ```bash
   npm run dev
   ```
2. **Explore the concepts**:
   - **Active Tabs**: Click between *Home*, *Courses*, *Add Course*, etc. Notice `<NavLink>` active indicator.
   - **Search Params**: On *Courses*, click *Frontend* or *Backend* buttons. Notice URL updates to `?category=frontend`.
   - **Dynamic Params & Back**: Click on any course. Notice URL `/courses/1` and click `← Back` (`navigate(-1)`).
   - **Actions & Validation**: Go to *+ Add Course*. Click *Create Course* with empty title to see validation error; fill it to see redirect.
   - **Protected Route**: Click *Admin (Guarded)* while logged out. You are redirected to `/login`. Click *Log In as Admin* to gain access.
   - **Error Handling**: Try visiting `http://localhost:5173/courses/999` to see the custom error boundary catch the missing course.
