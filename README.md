# Concept: Query Strings with `useSearchParams`

This branch demonstrates how to manage **URL query parameters** (e.g. `?category=books`) using React Router's `useSearchParams()` hook.

---

## 🎯 What is `useSearchParams`?
`useSearchParams()` is React Router's URL-based equivalent of React's `useState()`.
Instead of storing state in memory, it stores it in the URL query string, which makes the UI shareable and bookmarkable.

---

## 🔑 Key Code (`src/pages/FilterPage.jsx`)

```jsx
import { useSearchParams } from 'react-router-dom';

export default function FilterPage() {
  // 1. Get searchParams object and setter function
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Read query parameter
  const currentCategory = searchParams.get('category') || 'all';

  // 3. Update query parameter
  const setCategory = (category) => {
    setSearchParams({ category });
  };

  return (
    <div>
      <p>Current category: {currentCategory}</p>
      <button onClick={() => setCategory('books')}>Books</button>
      <button onClick={() => setCategory('tech')}>Tech</button>
    </div>
  );
}
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click **"Books"** or **"Tech"**
3. Notice that the URL in the browser address bar updates to `?category=books` or `?category=tech` and the page reflects the change immediately.
