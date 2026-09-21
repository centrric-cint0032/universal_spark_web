import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileSearch,
  CalendarClock,
  Truck,
  HardHat,
  CheckCircle2,
  Award,
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
} from 'lucide-react';
import projectExecutionImg from '@/assets/images/project-execution.jpg';

interface Stage {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: Stage[] = [
  {
    id: 's1',
    step: '01',
    title: 'Requirement Understanding',
    tagline: 'Scope & Technical Vetting',
    description: "Study client's scope, specifications, drawings, schedule, and strategic objectives.",
    icon: FileSearch,
  },
  {
    id: 's2',
    step: '02',
    title: 'Planning & Engineering',
    tagline: 'Resource & Site Sequencing',
    description: 'Develop execution plans, timelines, manpower/material schedules, and site coordination procedures.',
    icon: CalendarClock,
  },
  {
    id: 's3',
    step: '03',
    title: 'Procurement & Mobilization',
    tagline: 'Kingdom-Wide Supply Chain',
    description: 'Coordinate materials, manpower, heavy equipment, tools, and site resources for rapid deployment.',
    icon: Truck,
  },
  {
    id: 's4',
    step: '04',
    title: 'Installation & Construction',
    tagline: 'Precision Execution',
    description: 'Execute per approved engineering drawings, Saudi specifications, safety standards, and schedules.',
    icon: HardHat,
  },
  {
    id: 's5',
    step: '05',
    title: 'Testing & Commissioning',
    tagline: 'Multi-Tier Quality Assurance',
    description: 'Inspect, test, and commission completed systems under strict operational benchmarks.',
    icon: CheckCircle2,
  },
  {
    id: 's6',
    step: '06',
    title: 'Handover & Sign-Off',
    tagline: 'Turnkey Delivery',
    description: 'Coordinate documentation, joint inspections, punch-list closeout, and final handover.',
    icon: Award,
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('s1');
  const activeStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];
  const ActiveIcon = activeStage.icon;

  return (
    <section
      id="projects"
      className="w-full bg-[#080E16] text-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-800/80"
    >
      {/* Ambient Lighting & Architectural Grid */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-mono text-[11px] font-bold tracking-widest text-secondary uppercase">
                PROJECT EXECUTION &amp; MANAGEMENT
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-black tracking-tight font-montserrat leading-tight text-white">
              From Planning to Completion
            </h2>
          </div>

          {/* Intro Description */}
          <p className="font-sans text-[15.5px] text-slate-300 max-w-xl leading-relaxed font-normal">
            Successful project execution requires proper planning, coordination, technical expertise,
            and disciplined site management. Universal Spark provides comprehensive project handling
            from initial engineering through final completion and handover.
          </p>
        </div>

        {/* Interactive Lifecycle Command Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Column: Interactive 6-Stage Stepper & Live HUD Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Stage Selector Pills */}
            <div className="bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3">
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  6-Stage Execution Lifecycle
                </span>
                <span className="font-mono text-[10.5px] text-secondary flex items-center gap-1.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                  INTERACTIVE STAGES
                </span>
              </div>

              {/* 6 Step Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {STAGES.map((stg) => {
                  const isSelected = stg.id === activeStageId;
                  const Icon = stg.icon;
                  return (
                    <button
                      key={stg.id}
                      type="button"
                      onClick={() => setActiveStageId(stg.id)}
                      className={`p-3 rounded-xl text-left transition-all duration-300 flex flex-col items-center sm:items-start cursor-pointer group ${
                        isSelected
                          ? 'bg-secondary text-white shadow-lg shadow-secondary/30 scale-[1.02]'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <span
                          className={`font-mono text-[11px] font-bold ${
                            isSelected ? 'text-white' : 'text-slate-400'
                          }`}
                        >
                          {stg.step}
                        </span>
                        <Icon
                          className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                            isSelected ? 'text-white' : 'text-secondary'
                          }`}
                        />
                      </div>
                      <span className="text-[11px] font-montserrat font-bold truncate w-full hidden sm:block">
                        {stg.title.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Detail Display Box */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-secondary/30 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-secondary uppercase bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    STAGE {activeStage.step} // {activeStage.tagline}
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    Quality Gate Verified
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg shadow-secondary/25">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-montserrat text-white tracking-tight">
                      {activeStage.title}
                    </h3>
                    <p className="font-sans text-[15px] text-slate-300 mt-2 leading-relaxed">
                      {activeStage.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 mt-6">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Disciplines</div>
                  <div className="font-montserrat font-bold text-[14px] text-white">13 Handled</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Sectors</div>
                  <div className="font-montserrat font-bold text-[14px] text-secondary">12 Types</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Safety</div>
                  <div className="font-montserrat font-bold text-[14px] text-white">Zero LTI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Industrial Site Card & Telemetry */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 h-full min-h-[380px] group">
              <img
                src={projectExecutionImg}
                alt="Mega Project Execution in Saudi Arabia - Universal Spark Contracting"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Floating Top Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10.5px] shadow-lg">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="tracking-wider font-semibold uppercase">
                  ACTIVE KINGDOM-WIDE SITES
                </span>
              </div>

              {/* Floating Bottom Console */}
              <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-secondary font-mono text-[11px] font-bold uppercase">
                    <Activity className="w-4 h-4" />
                    <span>Project Types Covered</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">KSA Standard</span>
                </div>

                <div className="text-[13px] font-sans text-slate-200 leading-snug mb-3">
                  Industrial Facilities • Commercial Buildings • Warehouses • Infrastructure • Plant Shutdowns
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10 font-mono text-[10.5px] text-secondary">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Direct Site Leadership &amp; Turnkey Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Call to Action Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-primary-navy/40 to-slate-900 border border-secondary/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 text-secondary flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-montserrat text-white">
                Explore Detailed Project Execution &amp; Management
              </h4>
              <p className="font-sans text-[13.5px] text-slate-300 mt-0.5">
                Review all 13 management disciplines, complete 12 project sectors, and lifecycle quality gates.
              </p>
            </div>
          </div>

          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 bg-secondary hover:bg-emerald-600 text-white font-montserrat text-[12.5px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <span>View Detailed Project Screen</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
