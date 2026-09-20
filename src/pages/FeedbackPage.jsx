import React from 'react';
// 1. Import Form and useActionData from react-router-dom
import { Form, useActionData } from 'react-router-dom';

/**
 * ACTION FUNCTION:
 * React Router calls this function when the <Form method="post"> is submitted.
 * It intercepts the request, reads form data, and handles mutations or validation.
 */
export async function feedbackAction({ request }) {
  const formData = await request.formData();
  const message = formData.get('message');

  // Simple validation: check if message is provided
  if (!message || message.trim().length === 0) {
    return { error: 'Message cannot be empty!' };
  }

  // Return success payload (or redirect)
  return { success: true, message };
}

/**
 * COMPONENT:
 * Uses <Form> for native-like submission, and useActionData() for feedback.
 */
export default function FeedbackPage() {
  // 👈 useActionData receives whatever feedbackAction() returned
  const actionData = useActionData();

  return (
    <div className="card">
      <h2>✍️ Submit Feedback (`action` &amp; `&lt;Form&gt;`)</h2>
      <p>Submit this form without manually writing <code>e.preventDefault()</code>:</p>

      {/* 👈 React Router Form component */}
      <Form method="post" className="feedback-form">
        <label htmlFor="message">Your Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Type your feedback here..."
        />
        <button type="submit" className="primary-btn">
          Send Feedback
        </button>
      </Form>

      {/* Display Validation Error from action */}
      {actionData?.error && (
        <div className="alert error-alert">⚠️ {actionData.error}</div>
      )}

      {/* Display Success message from action */}
      {actionData?.success && (
        <div className="alert success-alert">
          ✅ Received your message: "{actionData.message}"
        </div>
      )}
    </div>
  );
}
