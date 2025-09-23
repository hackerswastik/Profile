import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Blog from './pages/Blog';
import Thanks from './pages/Thanks';
import { SEO } from './lib/seo';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/blog', element: <Blog /> },
  { path: '/thanks', element: <Thanks /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SEO />
    <RouterProvider router={router} />
  </React.StrictMode>,
);

