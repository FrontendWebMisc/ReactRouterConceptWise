# Concept: Programmatic Navigation (`useNavigate`)

This branch demonstrates how to navigate programmatically using React Router's `useNavigate()` hook.

---

## 🎯 What is `useNavigate`?
While `<Link>` and `<NavLink>` are designed for user-clicked anchors, `useNavigate()` allows you to trigger navigation from inside your JavaScript functions (e.g. after submitting a form, checking validation, or clicking an action button).

---

## 🔑 Key Patterns

### 1. Navigating to a New Path
```jsx
const navigate = useNavigate();

const handleClick = () => {
  navigate('/confirmation'); // 👈 Pushes /confirmation to browser history
};
```

### 2. Navigating Back in History (`navigate(-1)`)
```jsx
<button onClick={() => navigate(-1)}>
  Go Back
</button>
```

### 3. Replacing Current History Entry (`replace: true`)
```jsx
navigate('/login', { replace: true });
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click **"Place Order Now"**
3. Notice that after a brief simulated delay, the app programmatically navigates to `/confirmation`.
4. Click **"← Go Back (navigate(-1))"** to go back to the previous screen.
