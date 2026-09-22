import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import type { NavItem } from '@/types';
import logoImg from '@/assets/images/logo.png';

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/#services-matrix' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'HSE & QUALITY', href: '/#capabilities' },
  { label: 'CONTACT', href: '/contact' },
];

export const Header: React.FC = () => {
  const isScrolled = useScrollHeader(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200'
          : 'bg-white/90 backdrop-blur-md border-primary/10'
      }`}
    >
      <div className="h-20 w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Logo & Company Name - Clean & Minimalist */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 py-1">
          <img
            src={logoImg}
            alt="Universal Spark"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-montserrat font-extrabold tracking-wider text-primary text-base sm:text-lg lg:text-xl uppercase leading-none group-hover:text-primary-navy transition-colors whitespace-nowrap">
            UNIVERSAL SPARK
          </span>
        </Link>

        {/* Right End: Desktop Navigation + Mobile Toggle */}
        <div className="flex items-center gap-6 xl:gap-8 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href.startsWith('/#')
                ? location.pathname === '/' && location.hash === item.href.replace('/', '')
                : location.pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative py-2 font-montserrat text-[12px] font-semibold tracking-wider transition-colors ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary rounded-md focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href.startsWith('/#')
                ? location.pathname === '/' && location.hash === item.href.replace('/', '')
                : location.pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 font-montserrat text-[13px] font-semibold tracking-wider border-b border-slate-100 last:border-0 transition-colors ${
                    isActive
                      ? 'text-primary font-bold bg-slate-50 px-2 rounded-lg'
                      : 'text-on-surface hover:text-primary'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary" />}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
