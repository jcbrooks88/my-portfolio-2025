import { lazy } from 'react';

// Lazy load components
export const AboutMe = lazy(() => import('../pages/AboutMe'));
export const Portfolio = lazy(() => import('../pages/Portfolio'));
export const Contact = lazy(() => import('../pages/Contact'));
export const Resume = lazy(() => import('../pages/Resume'));

// Loading indicator component
export function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <span>Loading...</span>
    </div>
  );
}

// Not found page
export function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}


