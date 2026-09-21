import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/Home/HomePage';
import { AboutPage } from '@/pages/About/AboutPage';
import { NotFoundPage } from '@/pages/NotFound/NotFoundPage';

/**
 * Application Routes Configuration
 * Scalable routing setup ready for future multi-page navigation.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },

      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
