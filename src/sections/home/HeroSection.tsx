import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Layers,
  Globe,
  CheckCircle2,
} from 'lucide-react';

import heroBgImg from '@/assets/images/hero-infrastructure.jpg';
import projectExecutionImg from '@/assets/images/project-execution.jpg';
import servicesMechanicalImg from '@/assets/images/services-mechanical.jpg';
import contactBgImg from '@/assets/images/contact-infrastructure.jpg';
import universalSparkSiteOpsImg from '@/assets/images/universal-spark-site-ops.jpg';

interface TrustPillar {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TRUST_PILLARS: TrustPillar[] = [
  {
    title: 'Turnkey Delivery',
    subtitle: 'Full Lifecycle Project Solutions',
    icon: Layers,
  },
  {
    title: 'Zero LTI Safety',
    subtitle: 'Rigorous QHSE Site Governance',
    icon: ShieldCheck,
  },
  {
    title: 'Kingdom-Wide',
    subtitle: 'Industrial & Commercial Coverage',
    icon: Globe,
  },
  {
    title: 'Accredited Standards',
    subtitle: 'Saudi Aramco & SEC Alignment',
    icon: Award,
  },
];

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'mechanical',
    title: 'Mechanical Works',
    category: 'Piping & Fabrication',
    image: servicesMechanicalImg,
    href: '#services-matrix',
  },
  {
    id: 'civil',
    title: 'Civil Construction',
    category: 'Foundations & Earthworks',
    image: projectExecutionImg,
    href: '#services-matrix',
  },
  {
    id: 'electrical',
    title: 'Electrical & MEP',
    category: 'Substations & HVAC',
    image: heroBgImg,
    href: '#services-matrix',
  },
  {
    id: 'maintenance',
    title: 'Plant Turnaround',
    category: 'Modifications & Maintenance',
    image: contactBgImg,
    href: '#services-matrix',
  },
];

export const HeroSection: React.FC = () => {
  const [activeGalleryId, setActiveGalleryId] = useState<string>('mechanical');

  return (
    <section className="w-full bg-white text-on-surface border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Architectural Ambient Background Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-10 pb-16 lg:pt-14 lg:pb-24 relative z-10">
        
        {/* ─────────────────────────────────────────────────────────────
            ZONE 1: TOP HERO STATEMENT & VIDEO/METRICS (Asymmetric 60/40)
        ────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16 lg:mb-20">
          
          {/* Left Column (Approx 60%): Massive Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-sans text-[11px] font-bold tracking-wider text-primary uppercase">
                General Service Contracting &amp; Project Solutions
              </span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
              Building Solutions.{' '}
              <span className="text-secondary block sm:inline">
                Delivering Excellence.
              </span>
            </h1>

            {/* Original Full Narrative */}
            <p className="font-sans text-base sm:text-lg text-on-surface-variant font-normal leading-relaxed max-w-2xl mb-8">
              Universal Spark is a Saudi Arabia–based general service contracting company providing integrated Mechanical, Electrical, MEP, Instrumentation, Civil Construction, Maintenance, and Project Management solutions for industrial, commercial, infrastructure, and construction projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services-matrix"
                className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary-navy text-white font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-primary font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl border border-slate-300 hover:border-primary transition-all duration-300"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column (Approx 40%): Site Operations Card & Key Numerical Proof Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Operational Site Engineering Showcase Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-950 aspect-[16/9] group">
              <img
                src={universalSparkSiteOpsImg}
                alt="Universal Spark active industrial EPC contracting site operations in Saudi Arabia"
                className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary/90 flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-montserrat text-xs font-bold block leading-tight">
                      Executive Site Operations
                    </span>
                    <span className="font-sans text-[11px] text-slate-300">
                      Universal Spark Field Execution
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-sans font-bold text-secondary uppercase bg-black/50 backdrop-blur-md px-2.5 py-1 rounded border border-white/20">
                  KSA A-Class
                </span>
              </div>
            </div>

            {/* Video Caption */}
            <p className="font-sans text-xs text-on-surface-variant/90 leading-relaxed -mt-2">
              Integrated project execution throughout planning, procurement, civil, mechanical, electrical, and facility commissioning.
            </p>

            {/* 3 Key Operational Proof Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div>
                <div className="font-montserrat text-2xl sm:text-3xl font-black text-primary tracking-tight">
                  Zero LTI
                </div>
                <div className="font-sans text-xs text-on-surface-variant mt-0.5">
                  Safety Protocol
                </div>
              </div>
              <div>
                <div className="font-montserrat text-2xl sm:text-3xl font-black text-secondary tracking-tight">
                  100%
                </div>
                <div className="font-sans text-xs text-on-surface-variant mt-0.5">
                  Aramco &amp; SEC Standards
                </div>
              </div>
              <div>
                <div className="font-montserrat text-2xl sm:text-3xl font-black text-primary tracking-tight">
                  Tier-1
                </div>
                <div className="font-sans text-xs text-on-surface-variant mt-0.5">
                  KSA EPC Rating
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ZONE 2: SIGNATURE SEGMENTED CAPABILITIES GALLERY STRIP
        ────────────────────────────────────────────────────────────── */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider">
                CORE CONTRACTING DISCIPLINES
              </span>
            </div>
            <a
              href="#services-matrix"
              className="text-xs font-montserrat font-bold text-primary hover:text-secondary flex items-center gap-1 transition-colors uppercase tracking-wider"
            >
              <span>View All Services (10)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Horizontal Segmented Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {GALLERY_ITEMS.map((item) => {
              const isActive = activeGalleryId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveGalleryId(item.id)}
                  onClick={() => setActiveGalleryId(item.id)}
                  className={`relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border ${
                    isActive
                      ? 'border-secondary shadow-xl ring-2 ring-secondary/20'
                      : 'border-slate-200 hover:border-slate-400'
                  }`}
                >
                  {/* Background Discipline Imagery */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'scale-110' : 'filter grayscale contrast-125 group-hover:grayscale-0'
                    }`}
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isActive
                        ? 'bg-gradient-to-t from-[#00875A]/95 via-[#00875A]/60 to-transparent'
                        : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                    }`}
                  />

                  {/* Card Content & Action Button */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-10">
                    <div className="flex justify-end">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive ? 'bg-white text-secondary' : 'bg-white/20 text-white'
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/90 block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-montserrat font-extrabold text-lg leading-tight text-white">
                        {item.title}
                      </h3>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-white/90 mt-2">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                          <span>Turnkey Execution</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Dark Callout End-Card (Matching the Reference Design "Check out our machines / View all") */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1 h-64 sm:h-72 rounded-2xl bg-[#060e1e] p-6 text-white flex flex-col justify-between border border-slate-800 shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-secondary flex items-center justify-center transition-colors text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-secondary block mb-1.5">
                  CAPABILITY MATRIX
                </span>
                <h3 className="font-montserrat font-extrabold text-xl sm:text-2xl text-white leading-tight mb-2">
                  Explore All Disciplines
                </h3>
                <p className="font-sans text-xs text-slate-400 mb-4">
                  Mechanical, Civil, Electrical, MEP, and Process Instrumentation.
                </p>
                <a
                  href="#services-matrix"
                  className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold text-secondary-fixed group-hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>View All (10)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ZONE 3: CORPORATE MANIFESTO & 4 ORIGINAL TRUST PILLARS
        ────────────────────────────────────────────────────────────── */}
        <div className="pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7">
              <h2 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-primary leading-tight">
                Redefining the standards of{' '}
                <span className="text-secondary">integrated contracting</span> across Saudi Arabia.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Our approach is built around understanding technical requirements, developing practical execution plans, managing resources effectively, and completing projects safely and professionally.
              </p>
            </div>
          </div>

          {/* Clean Architectural 4 Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TRUST_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#faf8ff] border border-slate-200/80 hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-sans font-bold text-slate-400 group-hover:text-secondary transition-colors">
                      Verified
                    </span>
                  </div>

                  <div>
                    <h4 className="font-montserrat font-bold text-[15px] text-primary leading-snug mb-1">
                      {pillar.title}
                    </h4>
                    <p className="font-sans text-[12.5px] text-on-surface-variant leading-relaxed">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
