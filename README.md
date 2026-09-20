# Concept: Lazy Loading & Route Code Splitting (`lazy`)

This branch demonstrates route-level code splitting using React Router's built-in `lazy` route property.

---

## 🎯 What is Route `lazy`?
Instead of bundling every page into a single huge JavaScript file, React Router's `lazy` property lets you split routes into separate chunks that are downloaded only when the user navigates to that route.

In React Router v6.4+, you don't even need `React.lazy()` or `<Suspense>` wrappers:
```jsx
{
  path: '/analytics',
  lazy: () => import('./pages/AnalyticsPage'),
}
```

The exported file simply exports a `Component`:
```jsx
export function Component() {
  return <div>Heavy Analytics Page</div>;
}
```

---

## 🔑 Key Benefits
- **Smaller Initial Bundle**: Users download only the JavaScript needed for the landing page.
- **Fast Initial Page Load**: Speeds up Largest Contentful Paint (LCP) and First Input Delay (FID).
- **Parallel Fetching**: React Router can also lazy-load loaders and actions in the exact same import statement (`export async function loader() { ... }`).

---

## 🧪 How to Test
1. Run `npm run build`
2. Notice in the build output that Vite generated a separate JavaScript chunk (e.g. `AnalyticsPage-xxxx.js`)!
3. Run `npm run dev`, open the browser's Network tab, and click **"Open Analytics"**.
4. You will see the `AnalyticsPage` chunk fetched on demand.
