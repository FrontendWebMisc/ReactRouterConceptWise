# Concept: Active Navigation Styling with `<NavLink>`

This branch demonstrates how to build navigation tabs and highlight the active link using React Router's `<NavLink>`.

---

## 🎯 What is `<NavLink>`?
`<NavLink>` is a specialized wrapper around `<Link>` that knows whether it is currently matching the browser's active URL.

Instead of passing a simple string to `className` or `style`, you can pass a callback function:
```jsx
<NavLink
  to="/dashboard"
  className={({ isActive }) => (isActive ? 'nav-tab active' : 'nav-tab')}
>
  Dashboard
</NavLink>
```

---

## 🔑 Key Features
- **`isActive` boolean**: Passed automatically to `className` and `style` props.
- **`isPending` boolean**: Indicates if a route transition (with data loader) is currently loading.
- **No manual route checking**: Eliminates the need to compare `window.location.pathname === '/path'` manually.

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click between **Home**, **Dashboard**, and **Settings**.
3. Notice the active tab automatically gains the blue highlight and bottom border.
