import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, Sparkles } from 'lucide-react';
import aboutHqImg from '@/assets/images/about-hq.jpg';
import aboutReelVideo from '@/assets/videos/about-reel.webm';
import { OptimizedVideo } from '@/components/common/OptimizedVideo';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-us"
      className="w-full bg-obsidian text-white py-24 lg:py-32 border-b border-slate-800 relative overflow-hidden"
    >
      {/* Precision Engineering Blueprint Ambient Backdrop */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint Crosshair Marks at Edges */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-slate-600 select-none hidden sm:block">
        + COORD: 26.3927°N / 49.9777°E
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-slate-600 select-none hidden sm:block">
        SPEC: A-CLASS EPC +
      </div>

      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authoritative Editorial Statement & Clean Teaser */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-mono text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                CORPORATE OVERVIEW // SAUDI ARABIA
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-5 font-montserrat">
              Your Trusted Contracting Partner in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
                Saudi Arabia
              </span>
            </h2>

            {/* Shortened, Punchy Executive Narrative */}
            <p className="text-slate-300 text-[16px] sm:text-[17px] leading-relaxed mb-6 font-sans font-normal">
              Universal Spark is a Saudi Arabia–based general service contracting company providing
              integrated Mechanical, Electrical, MEP, Civil Construction, and Project Management
              solutions—engineered with safety, technical rigor, and reliable execution.
            </p>

            {/* Integrated Discipline Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['Mechanical', 'Electrical', 'MEP & Instrumentation', 'Civil Construction', 'Project Management'].map(
                (scope) => (
                  <span
                    key={scope}
                    className="font-mono text-[11px] text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-md hover:border-secondary/50 transition-colors"
                  >
                    {scope}
                  </span>
                )
              )}
            </div>

            {/* Three Glassmorphic Metric Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-9">
              {/* Metric 1 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-secondary/40 hover:bg-white/[0.07] transition-all duration-300 group">
                <div className="flex items-center gap-1.5 text-secondary-fixed mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    STATUS
                  </span>
                </div>
                <div className="font-montserrat font-bold text-[13px] sm:text-[14px] text-white leading-tight mb-0.5">
                  Aramco &amp; SABIC
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-400 font-sans truncate">
                  Approved Vendor
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-secondary/40 hover:bg-white/[0.07] transition-all duration-300 group">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Award className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    IKTVA
                  </span>
                </div>
                <div className="font-montserrat font-bold text-[13px] sm:text-[14px] text-white leading-tight mb-0.5">
                  84.2% Rating
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-400 font-sans truncate">
                  Domestic Content
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-secondary/40 hover:bg-white/[0.07] transition-all duration-300 group">
                <div className="flex items-center gap-1.5 text-teal-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    SAFETY
                  </span>
                </div>
                <div className="font-montserrat font-bold text-[13px] sm:text-[14px] text-secondary-fixed leading-tight mb-0.5">
                  Zero LTI
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-slate-400 font-sans truncate">
                  Rigorous QHSE
                </div>
              </div>
            </div>

            {/* High-Impact CTA Button Linking to Dedicated Screen */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-3 bg-secondary hover:bg-emerald-600 text-white font-montserrat font-bold text-[12.5px] tracking-wider uppercase px-7 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/35 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <span>Discover Our Story &amp; Full Profile</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </Link>

              <a
                href="#tender-console"
                className="font-mono text-[12px] text-slate-400 hover:text-white transition-colors flex items-center gap-1 py-2"
              >
                <span>Request Pre-Qualifications</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Video Showcase Viewport */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl group">
              <OptimizedVideo
                src={aboutReelVideo}
                poster={aboutHqImg}
                alt="Universal Spark industrial site operations, civil engineering, and infrastructure projects in Saudi Arabia"
                aspectRatio="aspect-[4/3]"
                title="Universal Spark Operational Reel"
              />

              {/* Top Status HUD Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10.5px] shadow-lg z-20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="tracking-wider font-semibold uppercase">
                  Class-A General Contractor
                </span>
              </div>

              {/* Interactive Audio/Play Hint Badge */}
              <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/15 text-slate-300 font-mono text-[10px] z-20">
                <Sparkles className="w-3 h-3 text-secondary" />
                <span>CLICK TO PLAY / UNMUTE</span>
              </div>

              {/* Bottom Glassmorphic Overlay Console */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-xl flex flex-wrap items-center justify-between gap-3 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary-container/40 flex items-center justify-center text-secondary">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-bold text-[13.5px] text-white">
                      Universal Spark Infrastructure
                    </div>
                    <div className="font-mono text-[10px] text-slate-300">
                      CR 4030281902 • Aramco Vendor Certified
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end">
                  <span className="font-mono text-[9.5px] uppercase text-secondary-fixed font-bold tracking-wider">
                    VISION 2030 PARTNER
                  </span>
                  <span className="font-mono text-[9.5px] text-slate-400">
                    EASTERN PROVINCE &amp; RIYADH HQ
                  </span>
                </div>
              </div>
            </div>

            {/* Precision Blueprint Corner Accents */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-secondary/40 pointer-events-none rounded-bl-xl z-0" />
            <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-primary-fixed/40 pointer-events-none rounded-tr-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
