import React from 'react';
import { ArrowRight, ShieldCheck, Award, Layers, Globe } from 'lucide-react';
import { HeroShaderBackground } from './HeroShaderBackground';
import heroBgImg from '@/assets/images/hero-infrastructure.jpg';

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

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#060e1e] text-white border-b border-slate-800">
      {/* Background Infrastructure Image with Multi-Layered Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroBgImg}
          alt="Saudi Industrial Infrastructure and Construction Contracting Site"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17]/95 via-[#071328]/85 to-[#050b17]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] via-transparent to-[#060e1e]/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#13223f_1px,transparent_1px),linear-gradient(to_bottom,#13223f_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      </div>

      {/* WebGL Interactive Shader Background Animation */}
      <HeroShaderBackground />

      {/* Main Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 pt-28 pb-16 lg:pt-36 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clear, Impactful Corporate Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 self-start backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-slate-200 uppercase">
                General Service Contracting &amp; Project Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.14] mb-6 drop-shadow-md">
              Building Solutions.{' '}
              <span className="text-secondary block sm:inline">
                Delivering Excellence.
              </span>
            </h1>

            {/* Narrative */}
            <p className="font-sans text-[16px] sm:text-[17.5px] text-slate-200 font-normal leading-relaxed max-w-2xl mb-8 drop-shadow-sm">
              Universal Spark is a Saudi Arabia–based general service contracting company providing
              integrated Mechanical, Electrical, MEP, Instrumentation, Civil Construction,
              Maintenance, and Project Management solutions for industrial, commercial, infrastructure,
              and construction projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services-matrix"
                className="inline-flex items-center gap-2.5 bg-secondary hover:bg-emerald-600 text-white font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-lg shadow-secondary/20 hover:shadow-secondary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/35 backdrop-blur-sm transition-all duration-300"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Frosted Executive Summary Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-slate-900/60 backdrop-blur-xl border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div>
                  <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
                    Kingdom of Saudi Arabia
                  </span>
                  <h3 className="font-montserrat font-bold text-lg text-white">
                    Full Lifecycle Contracting
                  </h3>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              </div>

              <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                Supporting clients throughout the project lifecycle—from planning and engineering to procurement, installation, testing, commissioning, and maintenance—with uncompromised focus on quality and safety.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-slate-400">Core Disciplines</span>
                  <span className="text-white font-medium">Mechanical • Electrical • Civil</span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-slate-400">Governance</span>
                  <span className="text-white font-medium">ISO 9001 &amp; ISO 45001</span>
                </div>
                <div className="flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-slate-400">Safety Metric</span>
                  <span className="text-secondary font-semibold">Zero LTI Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Bottom Trust Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t border-white/10">
          {TRUST_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-[14px] text-white leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="font-sans text-[12px] text-slate-400 mt-0.5 leading-normal">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
