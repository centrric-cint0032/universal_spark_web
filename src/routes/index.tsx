import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/Home/HomePage';
import { ProjectsPage } from '@/pages/Projects/ProjectsPage';
import { AboutPage } from '@/pages/About/AboutPage';
import { ContactPage } from '@/pages/Contact/ContactPage';
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
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      /* Additional pages can be cleanly registered here in future phases:
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      */
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
