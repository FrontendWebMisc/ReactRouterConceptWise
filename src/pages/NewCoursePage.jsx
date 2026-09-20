import React from 'react';
// CONCEPT 7: Form, useActionData, and redirect from react-router-dom
import { Form, useActionData, redirect } from 'react-router-dom';
import { addCourse } from '../data/coursesData';

/**
 * CONCEPT 7: Route Action Function
 * Handles POST requests from <Form>, validates, and redirects on success.
 */
export async function newCourseAction({ request }) {
  const formData = await request.formData();
  const title = formData.get('title');
  const category = formData.get('category');
  const description = formData.get('description');

  // Simple validation
  if (!title || title.trim().length === 0) {
    return { error: 'Course Title is required!' };
  }

  // Add course to store
  const newCourse = addCourse({ title, category, description });

  // 👈 redirect to the newly created course's page
  return redirect(`/courses/${newCourse.id}`);
}

export default function NewCoursePage() {
  // 👈 Access validation errors returned by newCourseAction
  const actionData = useActionData();

  return (
    <div className="card">
      <h2>✍️ Create a New Course</h2>
      <p>Demonstrating React Router Form &amp; Action mutation:</p>

      {actionData?.error && (
        <div className="alert error-alert">⚠️ {actionData.error}</div>
      )}

      {/* 👈 CONCEPT 7: React Router Form component */}
      <Form method="post" className="course-form">
        <label htmlFor="title">Course Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="e.g. Master React 19"
        />

        <label htmlFor="category">Category</label>
        <select id="category" name="category">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
        </select>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          placeholder="Brief description..."
        />

        <button type="submit" className="primary-btn">
          Create Course (Triggers Action)
        </button>
      </Form>
    </div>
  );
}
