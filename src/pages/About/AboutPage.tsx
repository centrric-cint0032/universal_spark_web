import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Target,
  Users,
  Building2,
  Cpu,
  Wrench,
  Layers,
  MapPin,
  FileText,
  PhoneCall,
} from 'lucide-react';
import aboutHqImg from '@/assets/images/about-hq.jpg';
import aboutReelVideo from '@/assets/videos/about-reel.webm';
import { OptimizedVideo } from '@/components/common/OptimizedVideo';

interface CoreValue {
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  accentColor: string;
  bgGradient: string;
  borderHover: string;
}

const VALUES: CoreValue[] = [
  {
    id: 'safety',
    num: '01',
    name: 'Safety',
    tagline: 'Zero-Harm Commitment',
    description: 'We prioritize the safety of our people, clients, assets, and the environment.',
    icon: ShieldCheck,
    accentColor: 'text-emerald-400',
    bgGradient: 'from-emerald-950/40 via-slate-900/60 to-slate-950',
    borderHover: 'hover:border-emerald-500/60 group-hover:border-emerald-500/50',
  },
  {
    id: 'quality',
    num: '02',
    name: 'Quality',
    tagline: 'Specification Integrity',
    description: 'We aim to deliver work that meets project specifications and required standards.',
    icon: CheckCircle2,
    accentColor: 'text-amber-400',
    bgGradient: 'from-amber-950/40 via-slate-900/60 to-slate-950',
    borderHover: 'hover:border-amber-500/60 group-hover:border-amber-500/50',
  },
  {
    id: 'integrity',
    num: '03',
    name: 'Integrity',
    tagline: 'Principled Governance',
    description: 'We conduct our business with transparency, professionalism, and accountability.',
    icon: Compass,
    accentColor: 'text-cyan-400',
    bgGradient: 'from-cyan-950/40 via-slate-900/60 to-slate-950',
    borderHover: 'hover:border-cyan-500/60 group-hover:border-cyan-500/50',
  },
  {
    id: 'commitment',
    num: '04',
    name: 'Commitment',
    tagline: 'Execution Accountability',
    description: 'We take responsibility for project requirements and work toward successful completion.',
    icon: Target,
    accentColor: 'text-blue-400',
    bgGradient: 'from-blue-950/40 via-slate-900/60 to-slate-950',
    borderHover: 'hover:border-blue-500/60 group-hover:border-blue-500/50',
  },
  {
    id: 'teamwork',
    num: '05',
    name: 'Teamwork',
    tagline: 'Synergistic Collaboration',
    description: 'We believe effective collaboration is essential for successful project delivery.',
    icon: Users,
    accentColor: 'text-violet-400',
    bgGradient: 'from-violet-950/40 via-slate-900/60 to-slate-950',
    borderHover: 'hover:border-violet-500/60 group-hover:border-violet-500/50',
  },
];

const CAPABILITY_PHASES = [
  {
    phaseNum: 'PHASE 01',
    phaseTitle: 'Planning, Pre-Construction & Engineering',
    phaseDescription: 'Early-stage technical scoping, regulatory compliance, and procurement coordination.',
    items: [
      {
        title: 'Project planning and coordination',
        detail: 'Milestone scheduling, critical-path analysis, logistics sequencing, and inter-trade alignment.',
      },
      {
        title: 'Engineering support',
        detail: 'Constructability reviews, shop drawing review, detail drafting, and technical problem-solving.',
      },
      {
        title: 'Procurement assistance',
        detail: 'Material vendor vetting, specification matching, long-lead tracking, and QA inspection.',
      },
      {
        title: 'Site preparation',
        detail: 'Site layout, clearing, grading, temporary utilities, perimeter containment, and site offices.',
      },
    ],
  },
  {
    phaseNum: 'PHASE 02',
    phaseTitle: 'Core Multidisciplinary Construction & Installation',
    phaseDescription: 'Direct-hire turnkey execution across civil, structural, mechanical, electrical, and control packages.',
    items: [
      {
        title: 'Civil construction',
        detail: 'Reinforced concrete structures, foundation works, industrial paving, retaining walls, and earthworks.',
      },
      {
        title: 'Mechanical installation',
        detail: 'Piping networks, structural steel erection, vessel positioning, ducting, and hydraulic assemblies.',
      },
      {
        title: 'Electrical installation',
        detail: 'Power distribution, MV/LV cabling, switchgear integration, grounding, and emergency backup systems.',
      },
      {
        title: 'MEP works',
        detail: 'Comprehensive HVAC systems, industrial plumbing, firefighting infrastructure, and ventilation.',
      },
      {
        title: 'Instrumentation and control',
        detail: 'Sensors, transmitters, PLC/SCADA panels, calibration, cabling, and process automation loops.',
      },
      {
        title: 'Equipment installation',
        detail: 'Static and rotating machinery rigging, precision alignment, vibration isolation, and skid mounting.',
      },
    ],
  },
  {
    phaseNum: 'PHASE 03',
    phaseTitle: 'Testing, Commissioning & Lifecycle Care',
    phaseDescription: 'Rigorous handover verification, client training, and long-term asset reliability maintenance.',
    items: [
      {
        title: 'Testing and commissioning',
        detail: 'Hydrotesting, loop testing, insulation resistance, pre-commissioning runs, and certification.',
      },
      {
        title: 'Preventive and corrective maintenance',
        detail: 'Scheduled inspections, emergency repairs, plant turnarounds, part replacements, and asset upkeep.',
      },
      {
        title: 'Project supervision and management',
        detail: 'Full turnkey site governance, QA/QC audits, HSE inspections, and commercial progress administration.',
      },
    ],
  },
];

const REGIONS = [
  {
    name: 'Eastern Province',
    hubs: 'Jubail Industrial City • Dammam • Al Khobar • Ras Al Khair',
    role: 'Petrochemical facilities, refinery shutdowns, marine works, and heavy fabrication operations.',
  },
  {
    name: 'Central Province',
    hubs: 'Riyadh Metropolitan • Industrial Cities • Strategic Megaprojects',
    role: 'Commercial complexes, infrastructure networks, institutional facilities, and MEP expansions.',
  },
  {
    name: 'Western Province',
    hubs: 'Jeddah • Yanbu Industrial • Red Sea Coastal Economic Corridors',
    role: 'Port logistics, industrial zones, municipal infrastructure, and specialized installation.',
  },
  {
    name: 'Kingdom-Wide Mobilization',
    hubs: 'Any Remote or Greenfield Site Across KSA',
    role: 'Rapid deployment of site management, certified equipment fleet, and HSE-compliant crews.',
  },
];

export const AboutPage: React.FC = () => {
  const [activeValue, setActiveValue] = useState<string>('safety');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-surface min-h-screen pt-20">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO & EXECUTIVE OVERVIEW (Obsidian Architectural Dark)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#060e1e] text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        {/* Subtle Ambient Blueprint Grid */}
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[12.5px] font-sans text-slate-400 mb-8">
            <Link to="/" className="hover:text-secondary flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-secondary-fixed font-semibold">ABOUT UNIVERSAL SPARK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authoritative Editorial Statement */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary-fixed text-[11px] font-sans font-semibold uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Corporate Profile &amp; Overview
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat tracking-tight text-white mb-4 leading-tight">
                About Universal Spark
              </h1>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-montserrat text-secondary-fixed mb-6 leading-snug">
                Your Trusted Contracting Partner in Saudi Arabia
              </h2>

              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                Universal Spark is a general service contracting and project execution company serving clients across Saudi Arabia. We provide comprehensive contracting solutions covering Mechanical, Electrical, MEP, Instrumentation, Civil Construction, Maintenance, and Project Management. Our approach is built around understanding client technical requirements, developing practical execution plans, managing resources effectively, and completing projects safely and professionally.
              </p>

              {/* Quick Credentials Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800 font-sans text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">Commercial Registration</span>
                  <span className="font-bold text-white text-sm">CR-4030281902</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Contractor Status</span>
                  <span className="font-bold text-secondary text-sm">KSA Class-A EPC</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block mb-1">Regional Reach</span>
                  <span className="font-bold text-white text-sm">Kingdom-Wide Mobilization</span>
                </div>
              </div>
            </div>

            {/* Right Column: Site Video Reel & Operational Proof */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/30 bg-slate-950">
                <OptimizedVideo
                  src={aboutReelVideo}
                  poster={aboutHqImg}
                  alt="Universal Spark engineering, project execution, and industrial site operations across Saudi Arabia"
                  aspectRatio="aspect-[4/3]"
                  title="Universal Spark Operational Reel"
                />
              </div>

              {/* Floating Architectural Badge */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-white uppercase tracking-wider">
                      Integrated Project Delivery
                    </h4>
                    <p className="font-sans text-[11px] text-slate-400">
                      Engineering, Construction, Commissioning &amp; Maintenance
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-sans font-bold text-secondary uppercase px-2 py-1 bg-secondary/10 rounded border border-secondary/20">
                  Turnkey
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: MISSION & VISION (Asymmetric Editorial Horizon)
      ────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#f2f3ff] border-b border-slate-200 relative overflow-hidden">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Mission Panel: Editorial Statement with Emerald Anchor */}
            <div className="lg:col-span-6 relative bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600" />
              <div className="absolute top-4 right-6 text-7xl font-extrabold font-montserrat text-slate-100 select-none pointer-events-none">
                01
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-700">
                    OUR PURPOSE
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-primary tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="font-sans text-lg sm:text-xl text-on-surface-variant font-medium leading-relaxed mb-6">
                  &ldquo;To provide reliable contracting and engineering services that deliver quality, safety, efficiency, and customer satisfaction while creating long-term value for our clients.&rdquo;
                </p>
              </div>

              {/* Mission Pillars */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 font-sans text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-primary font-bold">Uncompromising Safety</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-primary font-bold">Engineered Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-primary font-bold">Operational Efficiency</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-primary font-bold">Long-Term Value</span>
                </div>
              </div>
            </div>

            {/* Vision Panel: Offset Architectural Horizon with Sapphire Anchor */}
            <div className="lg:col-span-6 relative bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="absolute top-4 right-6 text-7xl font-extrabold font-montserrat text-slate-100 select-none pointer-events-none">
                02
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                    OUR AMBITION
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-primary tracking-tight mb-6">
                  Our Vision
                </h2>
                <p className="font-sans text-lg sm:text-xl text-on-surface-variant font-medium leading-relaxed mb-6">
                  &ldquo;To establish Universal Spark as a trusted and recognized contracting partner in Saudi Arabia for industrial, commercial, infrastructure, and construction projects.&rdquo;
                </p>
              </div>

              {/* Vision Scope Domains */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-4 font-sans text-xs">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-primary font-bold">Industrial Facilities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-primary font-bold">Commercial Complexes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-primary font-bold">Civil Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-primary font-bold">Turnkey Construction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: OUR VALUES — Architectural Interactive Spectrum
      ────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#060e1e] text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-secondary">
                CORE PRINCIPLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat tracking-tight text-white mb-4">
              Our Values
            </h2>
            <p className="font-sans text-slate-300 text-base sm:text-lg">
              Five non-negotiable principles that guide every decision, site protocol, client relationship, and engineering execution across our company.
            </p>
          </div>

          {/* Interactive Monolithic Value Spectrum */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
            {VALUES.map((val) => {
              const Icon = val.icon;
              const isSelected = activeValue === val.id;

              return (
                <div
                  key={val.id}
                  onClick={() => setActiveValue(val.id)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
                    isSelected
                      ? `bg-gradient-to-b ${val.bgGradient} border-slate-600 shadow-2xl scale-[1.02] ring-1 ring-white/15`
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  {/* Subtle Background Numeral Watermark */}
                  <div className="absolute -top-4 -right-2 text-6xl font-extrabold font-montserrat text-white/[0.04] select-none pointer-events-none">
                    {val.num}
                  </div>

                  <div>
                    {/* Value Number & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-montserrat text-xs font-bold text-slate-400 tracking-wider">
                        {val.num}
                      </span>
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-white/10 shadow-inner' : 'bg-slate-800/60'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${val.accentColor}`} />
                      </div>
                    </div>

                    {/* Value Title & Sub-tag */}
                    <h3 className="text-2xl font-extrabold font-montserrat text-white mb-2 tracking-tight">
                      {val.name}
                    </h3>
                    <p className={`font-sans text-xs uppercase tracking-wider font-semibold mb-4 ${val.accentColor}`}>
                      {val.tagline}
                    </p>

                    {/* Value Narrative */}
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-sans">
                    <span className={isSelected ? val.accentColor : 'text-slate-500'}>
                      {isSelected ? 'Active Focus' : 'Select to inspect'}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-secondary' : 'bg-slate-700'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: OUR CAPABILITIES — Multidisciplinary Lifecycle Blueprint
      ────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-b border-slate-200 relative">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Capabilities Narrative (Sticky on Desktop) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                    SCOPE OF EXCELLENCE
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-primary tracking-tight mb-6">
                  Our Capabilities
                </h2>

                <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-8">
                  Our multidisciplinary capabilities enable us to undertake projects involving multiple engineering and construction disciplines. We provide integrated contracting solutions across the full lifecycle—from early-stage scoping to handover and long-term asset care.
                </p>

                {/* Scope Highlight Metrics */}
                <div className="p-6 rounded-2xl bg-[#f2f3ff] border border-primary/15 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-primary">
                        Single-Source Accountability
                      </h4>
                      <p className="font-sans text-[11px] text-on-surface-variant">
                        Eliminates interface friction between civil, MEP, and mechanical trades.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-xs text-primary">
                        Strict Technical Standards
                      </h4>
                      <p className="font-sans text-[11px] text-on-surface-variant">
                        Engineered to meet Saudi Aramco, SABIC, SEC, and Royal Commission requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consultation Link */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 text-xs font-bold font-montserrat text-primary uppercase tracking-wider hover:text-secondary transition-colors"
                  >
                    <span>Submit Your Project Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: 3-Phase Execution Progression */}
            <div className="lg:col-span-8 space-y-12">
              {CAPABILITY_PHASES.map((phase, idx) => (
                <div
                  key={phase.phaseNum}
                  className="relative p-8 sm:p-10 rounded-2xl bg-surface-container-lowest border border-slate-200 shadow-sm hover:border-primary/30 transition-colors"
                >
                  {/* Phase Badge & Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-[11px] font-sans font-bold text-secondary bg-secondary-fixed/30 border border-secondary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {phase.phaseNum}
                    </span>
                    <span className="text-xs font-sans text-slate-400">
                      Step 0{idx + 1} of 03
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-montserrat text-primary mb-2">
                    {phase.phaseTitle}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant mb-8">
                    {phase.phaseDescription}
                  </p>

                  {/* Capabilities List in this Phase */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.items.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-primary/40 hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                          <div>
                            <h4 className="font-montserrat font-bold text-sm text-primary mb-1 group-hover:text-primary-navy transition-colors">
                              {item.title}
                            </h4>
                            <p className="font-sans text-xs text-on-surface-variant/90 leading-relaxed">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SERVING SAUDI ARABIA — Kingdom Coverage & Mobilization
      ────────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#060e1e] text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-secondary">
                KINGDOM-WIDE DEPLOYMENT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat tracking-tight text-white mb-4">
              Serving Saudi Arabia
            </h2>
            <p className="font-sans text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
              Universal Spark is positioned to support projects across the Kingdom of Saudi Arabia, subject to project requirements and mobilization requirements.
            </p>
          </div>

          {/* Regional Hubs & Coverage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REGIONS.map((region, idx) => (
              <div
                key={region.name}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-montserrat font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <h3 className="text-lg font-bold font-montserrat text-white mb-2">
                    {region.name}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-secondary-fixed mb-3">
                    {region.hubs}
                  </p>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed">
                    {region.role}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-sans text-slate-400">
                  Mobilization Ready
                </div>
              </div>
            ))}
          </div>

          {/* Logistics & Mobilization Notice */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-sm text-white">
                  Project Inquiries &amp; Pre-Qualification Dossiers
                </h4>
                <p className="font-sans text-xs text-slate-400">
                  Have a tender, drawing set, or site requiring rapid mobilization? Coordinate directly with our engineering team.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-secondary hover:bg-emerald-600 text-white font-montserrat font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              <span>Coordinate Mobilization</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: CLOSING CONSULTATION BANNER
      ────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold font-montserrat text-primary mb-2">
              Ready to Discuss Your Project?
            </h3>
            <p className="font-sans text-sm text-on-surface-variant">
              Send us your project scope, drawings, BOQ, or specifications for a prompt technical review.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+966500000000"
              className="inline-flex items-center gap-2 text-xs font-bold font-montserrat text-primary uppercase tracking-wider px-5 py-3.5 rounded-xl border border-slate-300 hover:border-primary transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-secondary" />
              <span>Contact Us</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-navy text-white text-xs font-bold font-montserrat tracking-wider uppercase px-7 py-3.5 rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-primary/25"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4 text-secondary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
