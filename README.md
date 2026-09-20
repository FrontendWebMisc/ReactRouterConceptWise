# Concept: Dynamic Route Parameters (`useParams`)

This branch demonstrates **dynamic route parameters** using React Router's `useParams()` hook.

---

## 🎯 What are Dynamic Params?
When building web applications, you often have pages that share the same layout/component but show data based on an ID in the URL (e.g. `/users/101`, `/users/102`).

In React Router:
1. Define a dynamic segment with a colon `:` in the path: `path: "/users/:userId"`
2. Read the parameter inside your component using `const { userId } = useParams();`

---

## 🔑 Key Code

### Route Definition (`src/App.jsx`)
```jsx
const router = createBrowserRouter([
  { path: '/', element: <UsersPage /> },
  { path: '/users/:userId', element: <UserDetailPage /> }, // 👈 ":userId" is dynamic
]);
```

### Reading the Parameter (`src/pages/UserDetailPage.jsx`)
```jsx
import { useParams } from 'react-router-dom';

export default function UserDetailPage() {
  const { userId } = useParams(); // 👈 extracts { userId: "101" }

  return <div>Viewing user: {userId}</div>;
}
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click on **User 101** or **User 102**
3. Notice the URL updates to `/users/101` and the page displays `userId: 101`.
