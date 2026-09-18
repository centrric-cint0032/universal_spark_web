import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased font-sans">
      <Header />
      <main className="w-full pt-20 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
