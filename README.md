# React Router Concept-Wise

A clean, standalone learning repository explaining modern **React Router** concepts in isolation.

Each branch in this repository demonstrates **one single concept** with zero project bloat, minimal code, and targeted comments.

---

## 📚 Concepts & Branches Index

| # | Concept | Branch Name | Key React Router APIs | Description |
|---|---|---|---|---|
| 1 | **Nested Layouts & Outlet** | [`outlet`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/outlet) | `<Outlet />`, `children`, `index: true` | Persistent parent layout with shared Header and dynamic child swapping. |
| 2 | **Dynamic URL Parameters** | [`dynamic-params`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/dynamic-params) | `useParams`, `:paramName` | Reading dynamic segments (`/users/:userId`) from the URL. |
| 3 | **Query Strings** | [`search-params`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/search-params) | `useSearchParams` | Reading and mutating query parameters (`?category=books`). |
| 4 | **Active Navigation Links** | [`navlink`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/navlink) | `<NavLink>`, `isActive` | Applying active styles and classes to matching links. |
| 5 | **Programmatic Navigation** | [`programmatic-nav`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/programmatic-nav) | `useNavigate`, `navigate(-1)` | Navigating via JavaScript events and navigating history. |
| 6 | **Route Data Fetching** | [`loaders`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/loaders) | `loader`, `useLoaderData` | Loading data before component render without `useEffect` waterfalls. |
| 7 | **Form Mutations** | [`actions`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/actions) | `<Form>`, `action`, `useActionData` | Form submissions, action handlers, and mutation validation. |
| 8 | **Error Handling** | [`error-boundary`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/error-boundary) | `errorElement`, `useRouteError` | Catching route exceptions, 404s, and failed loaders gracefully. |
| 9 | **Protected Routes** | [`protected-routes`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/protected-routes) | `<Navigate />`, layout guard | Restricting routes to authenticated users with redirects. |
| 10 | **Lazy Loading** | [`lazy-loading`](https://github.com/FrontendWebMisc/ReactRouterConceptWise/tree/lazy-loading) | `lazy: () => import(...)` | Built-in route code splitting on demand to reduce bundle size. |

---

## 🚀 How to Use This Repository

### 1. Clone the repository
```bash
git clone https://github.com/FrontendWebMisc/ReactRouterConceptWise.git
cd ReactRouterConceptWise
npm install
```

### 2. Switch to any concept branch to learn and test it
```bash
git checkout <branch-name>
npm run dev
```

For example, to explore **Protected Routes**:
```bash
git checkout protected-routes
npm run dev
```
