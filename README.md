# Concept: Route Data Fetching with `loader` & `useLoaderData`

This branch demonstrates how React Router fetches data *before* rendering using route **loaders**.

---

## 🎯 What is a Route `loader`?
Traditionally in React, components mount empty, trigger a `useEffect()` fetch, show a loading spinner, and then render data (creating network waterfalls).

With React Router's **Data APIs**:
1. You provide a `loader` function in the route definition.
2. React Router executes the loader before rendering the component.
3. The component consumes the data synchronously using `useLoaderData()`.

---

## 🔑 Key Code

### 1. The Loader & Component (`src/pages/ArticlesPage.jsx`)
```jsx
import { useLoaderData } from 'react-router-dom';

// 👈 Loader runs before the component renders
export async function articlesLoader() {
  const response = await fetch('/api/articles');
  return response.json();
}

export default function ArticlesPage() {
  // 👈 Access data directly without useEffect
  const articles = useLoaderData();

  return (
    <ul>
      {articles.map(a => <li key={a.id}>{a.title}</li>)}
    </ul>
  );
}
```

### 2. Route Configuration (`src/App.jsx`)
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <ArticlesPage />,
    loader: articlesLoader, // 👈 Hooked directly to the route
  },
]);
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Notice the articles render immediately on load without any flicker or `useEffect` loading state.
