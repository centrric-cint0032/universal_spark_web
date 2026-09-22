import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * ScrollManager handles scroll behavior across SPA page changes:
 * - When route has a hash (e.g., /#services-matrix), smoothly scrolls to that element.
 * - When route has no hash (e.g., /about, /contact), smoothly scrolls to the top (0, 0).
 */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased font-sans">
      <ScrollManager />
      <Header />
      <main className="w-full pt-20 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

