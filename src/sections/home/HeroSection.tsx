import React from 'react';
import { ArrowRight, ShieldCheck, Award, Layers, Globe } from 'lucide-react';
import { HeroShaderBackground } from './HeroShaderBackground';
import projectImg from '@/assets/images/project-execution.jpg';

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
    <section className="w-full relative overflow-hidden bg-[#080E16] text-white border-b border-slate-800">
      {/* Ambient Lighting & Grid */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Subtle WebGL Shader Animation */}
      <HeroShaderBackground />

      {/* Main Content Container */}
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 pt-28 pb-16 lg:pt-36 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clear, Impactful Corporate Message */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-secondary uppercase">
                General Service Contracting &amp; Project Solutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.14] mb-6">
              Building Solutions.{' '}
              <span className="text-secondary block sm:inline">
                Delivering Excellence.
              </span>
            </h1>

            {/* Narrative */}
            <p className="font-sans text-[16px] sm:text-[17.5px] text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
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
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl border border-white/15 hover:border-white/30 transition-all duration-300"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Photography Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group">
              <img
                src={projectImg}
                alt="Universal Spark Contracting Projects in Saudi Arabia"
                className="w-full aspect-[4/3] object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Quiet Location Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 flex items-center justify-between text-white">
                <div>
                  <div className="font-montserrat font-bold text-[14px] text-white">
                    Kingdom of Saudi Arabia
                  </div>
                  <div className="font-mono text-[11px] text-slate-300 mt-0.5">
                    Class-A Contracting • Turnkey EPC Delivery
                  </div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shrink-0" />
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
