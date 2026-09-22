import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import aboutHqImg from '@/assets/images/about-hq.jpg';
import aboutReelVideo from '@/assets/videos/about-reel.webm';
import { OptimizedVideo } from '@/components/common/OptimizedVideo';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="w-full bg-[#f4f7fb] py-20 lg:py-28 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Precision Blueprint Ambient Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      {/* Subtle Lighting Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Pre-Qualifications */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-wider">
                ABOUT UNIVERSAL SPARK
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary tracking-tight leading-tight mb-5 font-montserrat">
              Your Trusted Contracting Partner in Saudi Arabia
            </h2>

            {/* Primary Client Narrative */}
            <p className="text-on-surface-variant text-[15.5px] sm:text-[16.5px] leading-relaxed mb-4 font-normal font-sans">
              Universal Spark is a Saudi Arabia–based general service contracting company providing integrated Mechanical, Electrical, MEP, Instrumentation, Civil Construction, Maintenance, and Project Management solutions for industrial, commercial, infrastructure, and construction projects.
            </p>

            {/* Strategic Execution Approach Callout */}
            <p className="text-[14px] sm:text-[14.5px] text-on-surface-variant/90 leading-relaxed mb-7 font-sans border-l-2 border-primary pl-4 py-2 bg-white rounded-r-lg border border-slate-200/80 shadow-xs">
              Our approach is built around understanding our client’s technical requirements, developing practical execution plans, managing resources effectively, and completing projects safely and professionally.
            </p>

            {/* 3 Pre-Qualification & Credential Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
              {/* Card 1: Aramco & SABIC */}
              <div className="p-4 bg-white border border-primary/15 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="flex items-center gap-1.5 text-secondary mb-1.5">
                  <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans text-[10.5px] font-bold uppercase tracking-wider">
                    ACCURACY
                  </span>
                </div>
                <span className="text-primary font-bold text-[13.5px] group-hover:text-primary-navy transition-colors font-montserrat">
                  Aramco &amp; SABIC
                </span>
                <span className="text-on-surface-variant/80 text-[11px]">
                  Approved Vendor System
                </span>
              </div>

              {/* Card 2: IKTVA */}
              <div className="p-4 bg-white border border-primary/15 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="flex items-center gap-1.5 text-primary mb-1.5">
                  <Award className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans text-[10.5px] font-bold uppercase tracking-wider">
                    IKTVA
                  </span>
                </div>
                <span className="text-primary font-bold text-[13.5px] group-hover:text-primary-navy transition-colors font-montserrat">
                  84.2% Rating
                </span>
                <span className="text-on-surface-variant/80 text-[11px]">
                  Domestic Content Value
                </span>
              </div>

              {/* Card 3: Safety */}
              <div className="p-4 bg-white border border-primary/15 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer">
                <div className="flex items-center gap-1.5 text-secondary mb-1.5">
                  <ShieldCheck className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans text-[10.5px] font-bold uppercase tracking-wider">
                    SAFETY
                  </span>
                </div>
                <span className="text-secondary font-bold text-[13.5px] group-hover:text-emerald-700 transition-colors font-montserrat">
                  Zero LTI Protocol
                </span>
                <span className="text-on-surface-variant/80 text-[11px]">
                  QHSE Integrated System
                </span>
              </div>
            </div>

            {/* CTA Button to Detailed Company Profile */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary-navy text-white text-[12px] font-bold font-montserrat tracking-wider uppercase px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <span>Detailed Company Profile</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Corporate Site Video Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <OptimizedVideo
                src={aboutReelVideo}
                poster={aboutHqImg}
                alt="Universal Spark industrial site engineering, machinery, and civil operations in Saudi Arabia"
                aspectRatio="aspect-[4/3]"
                title="Universal Spark Executive Site Operations"
              />

              {/* Bottom Glassmorphic Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-xl flex flex-wrap items-center justify-between gap-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary-container/40 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-[13.5px] text-white">
                      Universal Spark Infrastructure
                    </div>
                    <div className="font-sans text-[11px] text-slate-300">
                      CR 4030281902 • Aramco Vendor Certified
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="font-sans text-[10px] uppercase text-secondary-fixed font-bold tracking-wider">
                    VISION 2030 PARTNER
                  </span>
                  <span className="font-sans text-[10px] text-slate-400">
                    EASTERN PROVINCE &amp; RIYADH HQ
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Blueprint Corner Brackets */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-primary/20 pointer-events-none rounded-bl-xl z-0" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-secondary/40 pointer-events-none rounded-tr-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
