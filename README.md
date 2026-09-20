# Concept: Route Mutations with `action` & `<Form>`

This branch demonstrates how React Router handles form submissions and mutations using route **actions** and the `<Form>` component.

---

## 🎯 What is a Route `action`?
Instead of manually wiring up `onSubmit={(e) => { e.preventDefault(); ... }}`, React Router lets you use HTML-like forms:

1. `<Form method="post">` intercepts submission automatically.
2. React Router calls the route's `action({ request })` function.
3. The action inspects `formData` and can return errors, success data, or a `redirect()`.
4. The component accesses the action's return value via `useActionData()`.
5. Any loaders on the page automatically re-fetch fresh data!

---

## 🔑 Key Code

### 1. The Action Function (`src/pages/FeedbackPage.jsx`)
```jsx
export async function feedbackAction({ request }) {
  const formData = await request.formData();
  const message = formData.get('message');

  if (!message) {
    return { error: 'Message cannot be empty!' };
  }
  return { success: true, message };
}
```

### 2. The Form & Consumer Component
```jsx
import { Form, useActionData } from 'react-router-dom';

export default function FeedbackPage() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <input name="message" />
      <button type="submit">Send</button>
      {actionData?.error && <p>{actionData.error}</p>}
      {actionData?.success && <p>Saved: {actionData.message}</p>}
    </Form>
  );
}
```

---

## 🧪 How to Test
1. Run `npm run dev`
2. Click **"Send Feedback"** with an empty input to see the validation error.
3. Type a message and submit to see the success message.
