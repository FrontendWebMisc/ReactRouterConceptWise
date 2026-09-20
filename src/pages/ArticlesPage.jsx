import React from 'react';
// 1. Import useLoaderData from react-router-dom
import { useLoaderData } from 'react-router-dom';

/**
 * LOADER FUNCTION:
 * React Router executes this function BEFORE the ArticlesPage component renders.
 * It can be async and fetch data from any API or source.
 */
export async function articlesLoader() {
  // Simulating an asynchronous data fetch
  return [
    { id: 1, title: 'Understanding React Router v6 Data APIs' },
    { id: 2, title: 'Say Goodbye to useEffect Fetch Waterfalls' },
    { id: 3, title: 'Fast Web Apps with Route Loaders' },
  ];
}

/**
 * COMPONENT:
 * Reads the loaded data via `useLoaderData()`. No useEffect or useState needed!
 */
export default function ArticlesPage() {
  // 👈 useLoaderData grabs whatever articlesLoader() returned
  const articles = useLoaderData();

  return (
    <div className="card">
      <h2>📰 Articles (Fetched via Route `loader`)</h2>
      <p>Data was loaded before the component mounted:</p>

      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id}>
            <span className="badge">#{article.id}</span>
            <strong>{article.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
