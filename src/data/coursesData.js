/**
 * In-memory data store for courses.
 * Keeps the project 100% self-contained without needing a backend database.
 */
let courses = [
  {
    id: '1',
    title: 'React Fundamentals',
    category: 'frontend',
    description: 'Learn components, props, state, and hooks from scratch.',
  },
  {
    id: '2',
    title: 'React Router In-Depth',
    category: 'frontend',
    description: 'Master nested layouts, loaders, actions, and route parameters.',
  },
  {
    id: '3',
    title: 'Node.js & Express Basics',
    category: 'backend',
    description: 'Build fast RESTful APIs and handle backend routing.',
  },
];

export function getCourses() {
  return [...courses];
}

export function getCourseById(id) {
  return courses.find((c) => c.id === id);
}

export function addCourse({ title, category, description }) {
  const newCourse = {
    id: String(Date.now()),
    title,
    category: category || 'general',
    description: description || 'No description provided.',
  };
  courses.push(newCourse);
  return newCourse;
}
