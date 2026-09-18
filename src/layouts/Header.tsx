import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useScrollHeader } from '@/hooks/useScrollHeader';
import type { NavItem } from '@/types';
import logoImg from '@/assets/images/logo.png';

const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'SERVICES', href: '#services', isActive: true },
  { number: '02', label: 'PROJECTS', href: '#projects' },
  { number: '03', label: 'CAPABILITIES', href: '#capabilities' },
  { number: '04', label: 'ABOUT', href: '#about-us' },
  { number: '05', label: 'CONTACT', href: '#contact' },
];

export const Header: React.FC = () => {
  const isScrolled = useScrollHeader(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200'
          : 'bg-white/90 backdrop-blur-md border-primary/10'
      }`}
    >
      <div className="h-20 w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Logo & Registration Details - Left End */}
        <a href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative w-10 h-10 rounded-lg bg-white p-1 border border-primary/15 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md group-hover:scale-105">
            <img
              src={logoImg}
              alt="Universal Spark Company Emblem"
              className="w-full h-full object-contain"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-secondary rounded-full ring-2 ring-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-montserrat font-bold tracking-wider text-primary text-[15px] leading-tight group-hover:text-primary-navy transition-colors">
                UNIVERSAL SPARK
              </span>
              <span className="text-[8.5px] font-montserrat font-semibold tracking-wider text-secondary bg-secondary-fixed/30 border border-secondary/20 px-1.5 py-0.5 rounded leading-none uppercase">
                KSA A-CLASS
              </span>
            </div>
            <span className="font-montserrat text-[9.5px] tracking-[0.2em] text-on-surface-variant/70 uppercase font-medium mt-0.5">
              INFRASTRUCTURE &amp; EPC • CR-403028190
            </span>
          </div>
        </a>

        {/* Right End: Desktop Navigation + Action Button + Mobile Toggle */}
        <div className="flex items-center gap-6 xl:gap-8 ml-auto">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 h-full">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.number}
                href={item.href}
                className={`relative py-2 font-montserrat text-[11px] font-semibold tracking-wider flex items-center gap-1.5 transition-colors ${
                  item.isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <span
                  className={`text-[10px] font-bold ${
                    item.isActive ? 'text-secondary' : 'text-primary/40'
                  }`}
                >
                  {item.number}
                </span>
                <span>{item.label}</span>
                {item.isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                )}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#tender-console"
              className="group relative hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 rounded bg-obsidian text-white border border-primary-container/30 hover:border-secondary/60 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-secondary/15 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary" />
              </span>
              <span className="font-montserrat text-[11px] font-semibold tracking-wider uppercase text-slate-100 group-hover:text-white">
                Initiate Tender / RFP
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-on-surface-variant hover:text-primary rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.number}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 font-montserrat text-[12px] font-semibold tracking-wider text-on-surface hover:text-primary border-b border-slate-100 last:border-0"
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-secondary font-bold">{item.number}</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#tender-console"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-obsidian text-white font-montserrat text-[11px] font-semibold uppercase tracking-wider"
              >
                <span>Initiate Tender / RFP</span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
