import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface px-6 py-24 text-center">
      <div className="max-w-md mx-auto">
        <span className="font-mono text-sm font-bold text-secondary uppercase tracking-widest block mb-2">
          Error 404
        </span>
        <h1 className="font-sans font-bold text-3xl text-primary mb-4">
          Page Not Found
        </h1>
        <p className="font-sans text-on-surface-variant text-sm mb-8">
          The requested engineering spec or page route does not exist or has been relocated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-white font-montserrat text-[11px] font-semibold tracking-wider uppercase hover:bg-primary-navy transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Headquarters</span>
        </Link>
      </div>
    </div>
  );
};
