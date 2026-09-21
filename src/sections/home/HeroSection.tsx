import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Coins,
  Layers,
  Wrench,
  Zap,
} from 'lucide-react';
import { HeroShaderBackground } from './HeroShaderBackground';
import heroBgImg from '@/assets/images/hero-infrastructure.jpg';

interface ProjectScope {
  id: string;
  tabLabel: string;
  discipline: string;
  title: string;
  sectorCode: string;
  progressPercent: number;
  specs: {
    primaryMetricLabel: string;
    primaryMetricValue: string;
    qaStatus: string;
    complianceStandard: string;
  };
  location: string;
}

const PROJECT_SCOPES: ProjectScope[] = [
  {
    id: 'mech-elec',
    tabLabel: 'MECH & ELEC',
    discipline: 'Integrated Mechanical & Electrical',
    title: 'Industrial Plant Piping, Substation & Heavy Power Works',
    sectorCode: 'IND-PWR-01',
    progressPercent: 94,
    specs: {
      primaryMetricLabel: 'Fabrication / Equipment',
      primaryMetricValue: '18,500 MT',
      qaStatus: '100% Passed',
      complianceStandard: 'ASME SEC VIII',
    },
    location: '26.9587° N, 49.6682° E • Jubail Industrial',
  },
  {
    id: 'civil-const',
    tabLabel: 'CIVIL & STRUCTURAL',
    discipline: 'Civil Construction & Foundations',
    title: 'High-Tolerance Heavy Foundations & Structural Steel',
    sectorCode: 'CIV-STR-04',
    progressPercent: 88,
    specs: {
      primaryMetricLabel: 'Poured Volume',
      primaryMetricValue: '42,000 m³',
      qaStatus: 'Third-Party Verified',
      complianceStandard: 'ACI 318 / SBC',
    },
    location: '24.0891° N, 38.0637° E • Yanbu Industrial',
  },
  {
    id: 'mep-inst',
    tabLabel: 'MEP & INSTRUMENTATION',
    discipline: 'MEP, Instrumentation & Commissioning',
    title: 'Precision Process Instrumentation & Commercial MEP',
    sectorCode: 'MEP-INST-09',
    progressPercent: 92,
    specs: {
      primaryMetricLabel: 'Loop Calibration',
      primaryMetricValue: '3,850 Points',
      qaStatus: 'FAT / SAT Passed',
      complianceStandard: 'ISA / IEC 61511',
    },
    location: '24.7136° N, 46.6753° E • Riyadh Metropolitan',
  },
];

const LIFECYCLE_STAGES = [
  'Planning & Engineering',
  'Procurement',
  'Installation',
  'Testing & Commissioning',
  'Maintenance',
];

export const HeroSection: React.FC = () => {
  const [activeScopeIndex, setActiveScopeIndex] = useState(0);
  const activeScope = PROJECT_SCOPES[activeScopeIndex];

  return (
    <section className="w-full relative overflow-hidden border-b border-slate-800 bg-obsidian text-white">
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

      {/* Live Telemetry Strip */}
      <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md relative z-10">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 py-2.5 flex flex-wrap items-center justify-between font-montserrat text-[10.5px] text-slate-300 tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-secondary-fixed font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              OPERATIONAL READY
            </span>
            <span className="text-white/30">/</span>
            <span className="font-light text-slate-300">
              RIYADH &amp; EASTERN PROVINCE BRANCHES • CR 4030281902
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[10px]">
            <span className="text-slate-400 font-medium">
              SAUDI ARABIA GENERAL CONTRACTING
            </span>
            <span className="text-white/30">•</span>
            <span className="text-secondary-fixed font-semibold tracking-wider">
              ISO 9001:2015 &amp; ISO 45001 STANDARDS
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Container */}
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 pt-12 pb-16 lg:pt-16 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center justify-between py-4">
          {/* Left Column: Master Architectural Headline & Content */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* High-Impact Commanding Headline */}
            <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
              Building Solutions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56b3f9] via-[#87aaff] to-[#38bdf8] font-black">
                Delivering Excellence.
              </span>
            </h1>

            {/* Primary Company Narrative */}
            <p className="font-sans text-[15.5px] sm:text-[16.5px] text-slate-200 font-normal leading-relaxed max-w-2xl mb-4 drop-shadow-sm">
              Universal Spark is a Saudi Arabia–based general service contracting company providing integrated Mechanical, Electrical, MEP, Instrumentation, Civil Construction, Maintenance, and Project Management solutions for industrial, commercial, infrastructure, and construction projects.
            </p>

            {/* Lifecycle Commitment Subtext */}
            <p className="font-sans text-[13.5px] text-slate-300/90 font-normal leading-relaxed max-w-2xl mb-6 border-l-2 border-secondary/70 pl-4 py-0.5">
              We support clients throughout the project lifecycle—from planning and engineering to procurement, installation, testing, commissioning, and maintenance—with a strong focus on quality, safety, reliability, and timely project execution.
            </p>

            {/* Interactive Lifecycle Micro-Track */}
            <div className="hidden sm:flex flex-wrap items-center gap-2 mb-8 font-mono text-[10px] text-slate-400">
              <span className="text-secondary font-bold uppercase tracking-wider mr-1">LIFECYCLE:</span>
              {LIFECYCLE_STAGES.map((stage, idx) => (
                <React.Fragment key={stage}>
                  <span className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-slate-300">
                    {stage}
                  </span>
                  {idx < LIFECYCLE_STAGES.length - 1 && (
                    <span className="text-secondary font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Elevated Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {/* High-Impact Tactile Primary CTA */}
              <a
                href="#services-matrix"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#146e00] via-[#1a8c00] to-[#25a205] text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(20,110,0,0.45)] hover:shadow-[0_6px_28px_rgba(32,166,5,0.65)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                {/* Light Sweep Shimmer Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Explore Project Solutions</span>
                <span className="relative z-10 w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
              </a>

              {/* High-Tech Terminal Secondary CTA */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 text-white font-montserrat text-[12px] font-semibold tracking-wider uppercase border border-slate-700/80 hover:border-cyan-400/70 backdrop-blur-xl transition-all duration-300 shadow-md hover:shadow-[0_0_22px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="font-mono text-cyan-400 font-bold group-hover:animate-pulse">&gt;_</span>
                <span className="text-slate-100 group-hover:text-white">Contact Our Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Discipline Telemetry HUD Console */}
          <div className="lg:col-span-5 xl:col-span-5 flex lg:justify-end relative mt-4 lg:mt-0">
            <div className="w-full lg:max-w-[490px] xl:max-w-[530px] relative bg-slate-900/85 backdrop-blur-xl p-5 sm:p-6 rounded-xl shadow-2xl border border-white/15 hover:border-white/30 transition-all duration-500 overflow-hidden group">
              {/* CAD Blueprint Top Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[10px] text-white/20 select-none">+</div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-secondary/40 select-none">+</div>

              {/* HUD Header with Status Blip */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-montserrat text-[10px] tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                  <span className="text-slate-200 font-semibold">
                    PROJECT EXECUTION MATRIX
                  </span>
                </div>
                <div className="text-slate-400 font-mono text-[9.5px]">
                  LIVE TELEMETRY
                </div>
              </div>

              {/* Interactive Scope Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-black/40 rounded-lg border border-white/10 mb-4">
                {PROJECT_SCOPES.map((scope, idx) => (
                  <button
                    key={scope.id}
                    type="button"
                    onClick={() => setActiveScopeIndex(idx)}
                    className={`py-1.5 px-2 rounded font-mono text-[9px] sm:text-[10px] font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${activeScopeIndex === idx
                      ? 'bg-secondary text-white shadow-md shadow-secondary/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {idx === 0 && <Zap className="w-3 h-3" />}
                    {idx === 1 && <Layers className="w-3 h-3" />}
                    {idx === 2 && <Wrench className="w-3 h-3" />}
                    <span>{scope.tabLabel}</span>
                  </button>
                ))}
              </div>

              {/* Active Scope Content */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-montserrat text-[10.5px] text-secondary-fixed uppercase tracking-widest font-semibold">
                    {activeScope.discipline}
                  </span>
                  <span className="font-mono text-[9.5px] bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">
                    {activeScope.sectorCode}
                  </span>
                </div>
                <h4 className="font-montserrat text-[15px] font-bold tracking-tight text-white leading-snug">
                  {activeScope.title}
                </h4>
              </div>

              {/* Animated Progress Completion Bar */}
              <div className="mb-4 p-3 rounded bg-black/40 border border-white/10">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                  <span className="text-slate-400 uppercase text-[9.5px]">
                    Execution &amp; QC Readiness
                  </span>
                  <span className="text-secondary-fixed font-bold">
                    {activeScope.progressPercent}% Active
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${activeScope.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Telemetry Data Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded bg-black/40 border border-white/10 mb-4 font-mono text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[9.5px] uppercase">
                    {activeScope.specs.primaryMetricLabel}
                  </span>
                  <span className="text-white font-bold text-[13px]">
                    {activeScope.specs.primaryMetricValue}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9.5px] uppercase">
                    QA / QC Status
                  </span>
                  <span className="text-secondary-fixed font-bold text-[13px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                    {activeScope.specs.qaStatus}
                  </span>
                </div>
                <div className="pt-1.5 border-t border-white/5">
                  <span className="text-slate-400 block text-[9.5px] uppercase">
                    Location Matrix
                  </span>
                  <span className="text-slate-200 font-medium text-[10px] truncate block">
                    {activeScope.location}
                  </span>
                </div>
                <div className="pt-1.5 border-t border-white/5">
                  <span className="text-slate-400 block text-[9.5px] uppercase">
                    Technical Code
                  </span>
                  <span className="text-slate-200 font-medium text-[11px]">
                    {activeScope.specs.complianceStandard}
                  </span>
                </div>
              </div>

              {/* HUD Bottom Strip */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-montserrat pt-2 border-t border-white/10">
                <span className="tracking-wider uppercase text-slate-300">
                  QUALITY • SAFETY • RELIABILITY
                </span>
                <span className="text-secondary font-mono text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  VERIFIED DEPLOYMENT
                </span>
              </div>
            </div>

            {/* Decorative Framing Accents */}
            <div className="absolute -bottom-3 -left-3 w-14 h-14 border-l border-b border-white/20 pointer-events-none" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-r border-t border-secondary/40 pointer-events-none" />
          </div>
        </div>

        {/* Bottom Floating Executive Metrics Strip */}
        <div className="mt-8 lg:mt-12 pt-8 border-t border-white/10 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-6 w-full">
            {/* Metric 1 */}
            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group">
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[9.5px] text-slate-400 tracking-wider uppercase">
                  SERVICES
                </span>
              </div>
              <div className="mb-1">
                <span className="font-montserrat font-extrabold text-white text-2xl tracking-tight block">
                  Turnkey
                </span>
              </div>
              <span className="font-montserrat text-[11px] text-slate-300 font-medium tracking-wide uppercase leading-tight">
                EPC &amp; Project Solutions
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group">
              <div className="flex items-center justify-between mb-3">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span className="font-mono text-[9.5px] text-secondary font-semibold tracking-wider">
                  SAFETY FIRST
                </span>
              </div>
              <div className="mb-1">
                <span className="font-montserrat font-extrabold text-white text-2xl tracking-tight block">
                  100%
                </span>
              </div>
              <span className="font-montserrat text-[11px] text-secondary-fixed font-semibold tracking-wide uppercase leading-tight">
                Zero LTI Commitment
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group">
              <div className="flex items-center justify-between mb-3">
                <Coins className="w-4 h-4 text-[#56b3f9]" />
                <span className="font-mono text-[9.5px] text-slate-400 tracking-wider uppercase">
                  COVERAGE
                </span>
              </div>
              <div className="mb-1">
                <span className="font-montserrat font-extrabold text-white text-2xl tracking-tight block">
                  Kingdom-Wide
                </span>
              </div>
              <span className="font-montserrat text-[11px] text-slate-300 font-medium tracking-wide uppercase leading-tight">
                Industrial &amp; Construction
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col justify-between p-4 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/40 group">
              <div className="flex items-center justify-between mb-3">
                <Award className="w-4 h-4 text-slate-200" />
                <span className="font-mono text-[9.5px] text-secondary-fixed font-semibold tracking-wider">
                  STANDARDS
                </span>
              </div>
              <div className="mb-1">
                <span className="font-montserrat font-extrabold text-white text-2xl tracking-tight block">
                  ISO &amp; QHSE
                </span>
              </div>
              <span className="font-montserrat text-[11px] text-slate-300 font-medium tracking-wide uppercase leading-tight">
                Integrated Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
