import React from 'react';
import {
  FileSearch,
  CalendarClock,
  Truck,
  HardHat,
  CheckCircle2,
  Award,
  Layers,
  Building,
  Factory,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Users,
  PackageCheck,
  Sliders,
  TrendingUp,
  FileCheck,
  Flame,
  Activity,
} from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EXECUTION_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirement Understanding',
    description:
      "Study client's scope, technical requirements, specifications, drawings, schedule, and objectives.",
    icon: FileSearch,
  },
  {
    step: '02',
    title: 'Planning & Engineering Coordination',
    description:
      'Develop execution plans, schedules, manpower/material requirements, and site coordination procedures.',
    icon: CalendarClock,
  },
  {
    step: '03',
    title: 'Procurement & Mobilization',
    description:
      'Coordinate materials, manpower, equipment, tools, and site resources for timely site deployment.',
    icon: Truck,
  },
  {
    step: '04',
    title: 'Installation & Construction',
    description:
      'Execute per approved drawings, technical specifications, safety requirements, and milestones.',
    icon: HardHat,
  },
  {
    step: '05',
    title: 'Testing & Commissioning',
    description:
      'Inspect, test, and commission completed systems in strict compliance with engineering benchmarks.',
    icon: CheckCircle2,
  },
  {
    step: '06',
    title: 'Handover',
    description:
      'Coordinate comprehensive documentation, final inspection, corrections, and smooth client handover.',
    icon: Award,
  },
];

interface ManagementService {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MANAGEMENT_SERVICES: ManagementService[] = [
  { name: 'Project planning', icon: CalendarClock },
  { name: 'Site management', icon: HardHat },
  { name: 'Engineering coordination', icon: Sliders },
  { name: 'Manpower management', icon: Users },
  { name: 'Material coordination', icon: PackageCheck },
  { name: 'Equipment coordination', icon: Wrench },
  { name: 'Subcontractor coordination', icon: Layers },
  { name: 'Quality control', icon: ShieldCheck },
  { name: 'HSE coordination', icon: Activity },
  { name: 'Progress monitoring', icon: TrendingUp },
  { name: 'Client coordination', icon: ClipboardList },
  { name: 'Testing and commissioning', icon: CheckCircle2 },
  { name: 'Documentation and handover', icon: FileCheck },
];

interface ProjectCategory {
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  items: string[];
}

const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    category: 'Industrial & Manufacturing Facilities',
    icon: Factory,
    tag: 'Heavy Industry Spec',
    items: [
      'Industrial projects',
      'Manufacturing facilities',
      'Factories',
      'Warehouses',
    ],
  },
  {
    category: 'Commercial & Infrastructure Developments',
    icon: Building,
    tag: 'Vision 2030 Built-Environment',
    items: [
      'Commercial buildings',
      'Infrastructure projects',
      'MEP projects',
    ],
  },
  {
    category: 'Specialized Operations, Maintenance & Turnarounds',
    icon: Flame,
    tag: 'Rapid Deployment & Upgrades',
    items: [
      'Plant maintenance projects',
      'Facility maintenance',
      'Shutdown and turnaround projects',
      'Equipment installation projects',
      'Renovation and modification projects',
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full bg-surface-container-low py-20 lg:py-28 border-b border-outline-variant/30 relative overflow-hidden"
    >
      {/* Background Accent Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-primary/10 gap-6">
          <div className="max-w-3xl">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-widest">
                PROJECT EXECUTION &amp; MANAGEMENT
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary tracking-tight font-montserrat mb-4">
              From Planning to Completion
            </h2>

            {/* Section Lead Narrative */}
            <p className="font-sans text-[15.5px] text-on-surface-variant leading-relaxed font-normal">
              Successful project execution requires proper planning, coordination, technical
              expertise, and disciplined site management. Universal Spark provides project handling
              and execution support from initial planning through final completion and handover.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-primary/15 shadow-sm self-start lg:self-auto shrink-0">
            <div className="w-10 h-10 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-montserrat font-bold text-[14px] text-primary">
                Full-Lifecycle Oversight
              </div>
              <div className="font-mono text-[11px] text-on-surface-variant/80">
                Turnkey Project Delivery Across KSA
              </div>
            </div>
          </div>
        </div>

        {/* 6-Stage Project Execution Process Flow */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
                LIFECYCLE METHODOLOGY
              </span>
              <h3 className="text-2xl font-extrabold text-primary font-montserrat">
                Our Project Execution Process
              </h3>
            </div>
            <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-on-surface-variant/70">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              6 Sequential Quality Gates
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {EXECUTION_PROCESS.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="relative p-5 rounded-xl bg-white border border-primary/15 shadow-sm hover:shadow-md hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top: Step Badge & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[12px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/20">
                        STAGE {stage.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h4 className="font-montserrat font-bold text-[14.5px] text-primary leading-snug mb-2 group-hover:text-primary-navy transition-colors">
                      {stage.title}
                    </h4>

                    {/* Step Description */}
                    <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Bottom Indicator Line */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400">
                      Phase {idx + 1} of 6
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 group-hover:scale-150 group-hover:bg-secondary transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dual Console: Project Management Services & Project Types */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Console: Project Management Services (13 Capabilities) */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-primary/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest">
                  SITE MANAGEMENT &amp; GOVERNANCE
                </span>
                <span className="font-mono text-[11px] text-primary font-bold bg-primary/5 px-2.5 py-0.5 rounded">
                  13 Disciplines
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-primary font-montserrat mb-3">
                Project Management Services
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed mb-6">
                Our site leadership teams integrate rigorous engineering management, quality assurance,
                and safety compliance directly at the workface.
              </p>

              {/* 13 Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {MANAGEMENT_SERVICES.map((srv) => {
                  const SrvIcon = srv.icon;
                  return (
                    <div
                      key={srv.name}
                      className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/10 flex items-center gap-2.5 hover:border-secondary/40 hover:bg-white hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-6 h-6 rounded bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                        <SrvIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[13px] font-sans text-on-surface font-semibold">
                        {srv.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QA/QC & HSE Operational Assurance Note */}
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-mono text-[11.5px] text-primary font-semibold">
                  Zero LTI Protocol &amp; Multi-Tier QA/QC Site Auditing
                </span>
              </div>
              <span className="font-mono text-[10.5px] text-secondary font-bold uppercase tracking-wider hidden sm:inline">
                VERIFIED
              </span>
            </div>
          </div>

          {/* Right Console: Project Types (12 Sectors across 3 Domains) */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-primary/15 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest">
                  EXECUTION TRACK RECORD
                </span>
                <span className="font-mono text-[11px] text-primary font-bold bg-primary/5 px-2.5 py-0.5 rounded">
                  12 Project Sectors
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-primary font-montserrat mb-3">
                Project Types
              </h3>
              <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed mb-6">
                Universal Spark delivers comprehensive contracting solutions tailored to the technical
                demands and operational environments of varied project categories.
              </p>

              {/* Categorized Sectors */}
              <div className="space-y-4 mb-8">
                {PROJECT_CATEGORIES.map((cat) => {
                  const CatIcon = cat.icon;
                  return (
                    <div
                      key={cat.category}
                      className="p-4 rounded-xl border border-primary/15 bg-surface-container-lowest hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-primary font-montserrat font-bold text-[14px]">
                          <CatIcon className="w-4 h-4 text-secondary" />
                          <span>{cat.category}</span>
                        </div>
                        <span className="font-mono text-[10px] text-on-surface-variant bg-slate-100 px-2 py-0.5 rounded">
                          {cat.tag}
                        </span>
                      </div>

                      {/* Items Pills */}
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-1.5 text-[12px] font-sans font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-on-surface shadow-2xs hover:border-secondary/50 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="font-sans text-[12.5px] text-on-surface-variant">
                Have a specialized project requirement in Saudi Arabia?
              </div>
              <a
                href="#tender-console"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-navy text-white text-[11.5px] font-montserrat font-bold tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all group shrink-0"
              >
                <span>Submit Tender Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
