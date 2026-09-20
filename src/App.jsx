import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FeedbackPage, { feedbackAction } from './pages/FeedbackPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FeedbackPage />,
    // 👈 The action function handles POST submissions for this route
    action: feedbackAction,
  },
]);

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>React Router - Form Actions (`&lt;Form&gt;` &amp; `action`)</h1>
      </header>
      <main>
        <RouterProvider router={router} />
      </main>
    </div>
  );
}
