import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Wrench,
  ArrowRight,
  Award,
} from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badge: string;
  focusItems: string[];
}

const PILLARS: Pillar[] = [
  {
    id: 'hse',
    title: 'Health, Safety & Environment',
    tagline: 'Zero-Incident Culture',
    description:
      'Our objective is to minimize risks and create a safe working environment for employees, contractors, clients, and site visitors across all project activities.',
    icon: ShieldCheck,
    accentColor: 'text-secondary',
    badge: 'Zero LTI Protocol',
    focusItems: [
      'Site risk assessment',
      'Safe work practices',
      'Permit-to-work coordination',
      'Toolbox safety meetings',
      'Regular site supervision',
    ],
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    tagline: 'Built-In Verification',
    description:
      'Quality is integrated into every stage of our work through systematic material verification, multi-tier inspection hold points, and client coordination.',
    icon: CheckCircle2,
    accentColor: 'text-primary',
    badge: 'Multi-Tier QA/QC',
    focusItems: [
      'Material verification',
      'Work & installation inspection',
      'Testing and commissioning',
      'Corrective action protocols',
      'Client inspection coordination',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    tagline: 'Operational Continuity',
    description:
      'Reliable ongoing support to help clients improve operational continuity, facility safety, equipment reliability, and system performance across the Kingdom.',
    icon: Wrench,
    accentColor: 'text-secondary',
    badge: '24/7 Deployment Ready',
    focusItems: [
      'Preventive scheduled maintenance',
      'Corrective repair & troubleshooting',
      'Industrial systems servicing',
      'Shutdown & turnaround support',
      'Facility performance upkeep',
    ],
  },
];

export const HseQualitySection: React.FC = () => {
  return (
    <section
      id="capabilities"
      className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant/30 relative overflow-hidden"
    >
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-primary/10 gap-6">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-widest">
                QUALITY, HSE &amp; MAINTENANCE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary tracking-tight font-montserrat mb-4">
              Safety, Quality and Responsibility
            </h2>

            {/* Philosophy Statement */}
            <p className="font-sans text-[15.5px] text-on-surface-variant leading-relaxed font-normal">
              At Universal Spark, safety and quality are fundamental components of project execution.
              We work to establish safe working practices, proper site supervision, and effective quality
              control throughout all project activities.
            </p>
          </div>

          {/* Quick Credential Badge */}
          <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl border border-primary/10 self-start lg:self-auto shrink-0 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-montserrat font-bold text-[13.5px] text-primary">
                Unconditional Site Governance
              </div>
              <div className="font-mono text-[11px] text-on-surface-variant/80">
                Aramco, SEC &amp; Royal Commission Standard
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Architectural Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl border border-primary/15 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header: Discipline Icon & Pill Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[10.5px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20 uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-primary font-montserrat group-hover:text-primary-navy transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <div className="font-mono text-[11px] text-secondary font-semibold mb-4">
                    {pillar.tagline}
                  </div>

                  {/* Brief Narrative */}
                  <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Key Focus Tags */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <span className="font-montserrat text-[10.5px] font-bold uppercase text-primary tracking-wider block mb-2.5">
                      Core Disciplines:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.focusItems.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center text-[11.5px] font-sans font-medium px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface border border-slate-200/80 group-hover:border-secondary/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10.5px] text-slate-400">
                    Full Compliance Plan
                  </span>
                  <span className="font-mono text-[11px] text-primary group-hover:text-secondary font-bold flex items-center gap-1 transition-colors">
                    <span>Verified</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
