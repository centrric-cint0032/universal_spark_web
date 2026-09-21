import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  ClipboardList,
  Users,
  PackageCheck,
  Sliders,
  TrendingUp,
  FileCheck,
  Flame,
  Activity,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import projectExecutionImg from '@/assets/images/project-execution.jpg';

interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const EXECUTION_STEPS: ProcessStep[] = [
  {
    title: 'Requirement Understanding',
    subtitle: 'Strategic Scoping & Specification Review',
    description:
      "Comprehensive study of client's scope, technical specifications, drawings, project milestones, and contractual objectives.",
    deliverables: [
      'Scope Matrix & Gap Analysis',
      'Technical Specification Review',
      'Regulatory & Aramco Standard Alignment',
      'Preliminary Risk Assessment',
    ],
    icon: FileSearch,
  },
  {
    title: 'Planning & Engineering Coordination',
    subtitle: 'Execution Architecture & Resource Sequencing',
    description:
      'Developing rigorous execution plans, master schedules, resource mobilization matrices, and inter-discipline site coordination protocols.',
    deliverables: [
      'Level-4 Baseline Schedule (Primavera)',
      'Manpower & Equipment Mobilization Curve',
      'Site Logistics & Staging Plans',
      'Method Statements & HSE Procedures',
    ],
    icon: CalendarClock,
  },
  {
    title: 'Procurement & Mobilization',
    subtitle: 'Supply Chain Assurance & Rapid Deployment',
    description:
      'Coordinating long-lead materials, certified workforce, heavy lifting equipment, certified tools, and temporary site facilities.',
    deliverables: [
      'Material Submittal Approvals (MAR)',
      'Certified Skilled Labor Deployment',
      'Heavy Equipment Third-Party Inspection',
      'Site Office & Welfare Mobilization',
    ],
    icon: Truck,
  },
  {
    title: 'Installation & Construction',
    subtitle: 'High-Tolerance Engineering Execution',
    description:
      'Physical site execution in strict adherence to approved IFC drawings, technical specifications, Saudi building codes, and safety standards.',
    deliverables: [
      'Daily Progress Monitoring & QA/QC Hold Points',
      'Permit to Work (PTW) Compliance',
      'Civil, Mechanical, Electrical & MEP Erection',
      'Weekly Engineering Coordination Meetings',
    ],
    icon: HardHat,
  },
  {
    title: 'Testing & Commissioning',
    subtitle: 'Performance Verification & Loop Testing',
    description:
      'Hydrostatic pressure testing, electrical megger testing, instrument loop checks, HVAC balancing, and functional performance verification.',
    deliverables: [
      'FAT & SAT Protocol Execution',
      'Cold & Hot Commissioning Runs',
      'Pre-Commissioning Punch Lists',
      'Regulatory Authority Compliance Certification',
    ],
    icon: CheckCircle2,
  },
  {
    title: 'Handover & Closeout',
    subtitle: 'Documentation, As-Builts & Client Transition',
    description:
      'Consolidating comprehensive documentation, final inspections, punch-list rectification, as-built submittals, and smooth formal handover.',
    deliverables: [
      'Final Inspection Sign-Offs & Closeout Dossier',
      'As-Built Drawings & O&M Manuals',
      'Warranty Certification & Spares Handover',
      'Client Training & Operations Transition',
    ],
    icon: Award,
  },
];

interface ManagementService {
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MANAGEMENT_SERVICES: ManagementService[] = [
  {
    name: 'Project planning',
    category: 'Engineering & Schedule',
    description: 'Developing CPM baselines, milestone sequencing, and resource histograms.',
    icon: CalendarClock,
  },
  {
    name: 'Site management',
    category: 'Operations',
    description: 'Direct field supervision, daily staging logistics, and contractor alignment.',
    icon: HardHat,
  },
  {
    name: 'Engineering coordination',
    category: 'Engineering & Schedule',
    description: 'Resolving technical queries (RFIs), design interfaces, and shop drawings.',
    icon: Sliders,
  },
  {
    name: 'Manpower management',
    category: 'Resources',
    description: 'Certified trade crews, welder qualifications, and multi-shift allocations.',
    icon: Users,
  },
  {
    name: 'Material coordination',
    category: 'Supply Chain',
    description: 'Material receipt inspection, climate-controlled warehousing, and inventory tracking.',
    icon: PackageCheck,
  },
  {
    name: 'Equipment coordination',
    category: 'Supply Chain',
    description: 'Cranes, heavy transport, rigging gear, and certified operators.',
    icon: Wrench,
  },
  {
    name: 'Subcontractor coordination',
    category: 'Operations',
    description: 'Specialist vendor management, interface matrices, and contractual compliance.',
    icon: Layers,
  },
  {
    name: 'Quality control',
    category: 'Governance & Safety',
    description: 'Strict ITP inspection points, non-destructive testing (NDT), and Aramco QA standards.',
    icon: ShieldCheck,
  },
  {
    name: 'HSE coordination',
    category: 'Governance & Safety',
    description: 'Zero LTI culture, daily toolbox talks, task risk assessments, and environmental audit.',
    icon: Activity,
  },
  {
    name: 'Progress monitoring',
    category: 'Engineering & Schedule',
    description: 'S-curve variance tracking, EVM progress metrics, and executive reporting.',
    icon: TrendingUp,
  },
  {
    name: 'Client coordination',
    category: 'Governance & Safety',
    description: 'Transparent communication, steering committee briefings, and change order management.',
    icon: ClipboardList,
  },
  {
    name: 'Testing and commissioning',
    category: 'Engineering & Schedule',
    description: 'Functional loop tests, pre-commissioning dossiers, and authority approvals.',
    icon: CheckCircle2,
  },
  {
    name: 'Documentation and handover',
    category: 'Operations',
    description: 'Final close-out dossiers, warranty bonds, as-built packages, and asset transfer.',
    icon: FileCheck,
  },
];

interface ProjectSector {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: { name: string; highlight: string }[];
}

const PROJECT_SECTORS: ProjectSector[] = [
  {
    title: 'Industrial & Manufacturing',
    subtitle: 'Heavy civil, mechanical fabrication, and plant infrastructure',
    icon: Factory,
    projects: [
      { name: 'Industrial projects', highlight: 'Turnkey industrial sites & processing units' },
      { name: 'Manufacturing facilities', highlight: 'Heavy machinery foundations & structural steel' },
      { name: 'Factories', highlight: 'Production lines, utilities & power distribution' },
      { name: 'Warehouses', highlight: 'High-bay logistics centers & specialized cold storage' },
    ],
  },
  {
    title: 'Commercial & Infrastructure',
    subtitle: 'Civic developments, commercial real estate, and municipal utilities',
    icon: Building,
    projects: [
      { name: 'Commercial buildings', highlight: 'Multi-story administrative & commercial headquarters' },
      { name: 'Infrastructure projects', highlight: 'Underground utilities, culverts, paving & substations' },
      { name: 'MEP projects', highlight: 'Comprehensive HVAC chiller plants & firefighting networks' },
    ],
  },
  {
    title: 'Specialized Operations & Maintenance',
    subtitle: 'Continuous plant reliability, revamps, and urgent shutdowns',
    icon: Flame,
    projects: [
      { name: 'Plant maintenance projects', highlight: 'Preventative & predictive ongoing plant servicing' },
      { name: 'Facility maintenance', highlight: 'Integrated MEP & asset management services' },
      { name: 'Renovation and modification projects', highlight: 'Structural retrofits & facility expansions' },
      { name: 'Equipment installation projects', highlight: 'Precision pump, vessel & skid alignment' },
      { name: 'Shutdown and turnaround projects', highlight: 'Critical-path rapid turnaround & emergency overhauls' },
    ],
  },
];

export const ProjectsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const categories = ['All', 'Engineering & Schedule', 'Operations', 'Supply Chain', 'Governance & Safety'];

  const filteredServices =
    selectedFilter === 'All'
      ? MANAGEMENT_SERVICES
      : MANAGEMENT_SERVICES.filter((s) => s.category === selectedFilter);

  return (
    <div className="w-full bg-surface min-h-screen pt-24 pb-28">
      {/* Hero Header */}
      <section className="w-full bg-[#080E16] text-white py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
          <img src={projectExecutionImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 font-mono text-[12px] text-slate-400 mb-6">
            <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-secondary font-semibold">Projects &amp; Management</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-secondary uppercase">
                  PROJECT EXECUTION &amp; MANAGEMENT
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight text-white mb-6">
                From Planning to Completion
              </h1>

              <p className="font-sans text-[16.5px] text-slate-300 leading-relaxed max-w-3xl">
                Successful project execution requires proper planning, coordination, technical expertise,
                and disciplined site management. Universal Spark provides project handling and execution
                support from initial planning through final completion and handover across Saudi Arabia.
              </p>
            </div>

            {/* Credential Metrics Card */}
            <div className="lg:col-span-4 bg-slate-900/90 border border-white/15 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-white text-[15px]">
                    Zero LTI Benchmark
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">
                    Aramco &amp; SEC Rigorous Safety
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-2xl font-black font-montserrat text-secondary">6</div>
                  <div className="font-mono text-[10.5px] text-slate-400 uppercase">Quality Gates</div>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-2xl font-black font-montserrat text-white">13</div>
                  <div className="font-mono text-[10.5px] text-slate-400 uppercase">Disciplines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 mt-16 space-y-20">
        {/* Module 1: 6-Stage Project Execution Process */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-primary/10 gap-4">
            <div>
              <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
                STRUCTURED WORKFLOW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-montserrat tracking-tight">
                Our Project Execution Process
              </h2>
            </div>
            <p className="font-sans text-[14px] text-on-surface-variant max-w-lg">
              Every phase is engineered with strict stage-gate approvals ensuring zero schedule slippage
              and full quality compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTION_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="bg-white p-7 rounded-2xl border border-primary/15 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary group-hover:bg-secondary group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-montserrat font-extrabold text-[18px] text-primary group-hover:text-primary-navy transition-colors mb-1">
                      {step.title}
                    </h3>
                    <div className="font-mono text-[11px] text-secondary font-semibold mb-3">
                      {step.subtitle}
                    </div>

                    <p className="font-sans text-[13.5px] text-on-surface-variant leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="font-mono text-[10.5px] font-bold uppercase text-primary tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px] font-sans text-on-surface">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Module 2: Project Management Services (13 Disciplines) */}
        <section className="bg-surface-container-low p-8 sm:p-12 rounded-3xl border border-primary/15 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-4 border-b border-primary/10 gap-6">
            <div>
              <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
                DISCIPLINED GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-montserrat tracking-tight">
                Project Management Services
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-[12px] font-mono font-bold transition-all cursor-pointer ${
                    selectedFilter === cat
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-on-surface-variant border border-slate-200 hover:border-primary/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredServices.map((srv) => {
              const SrvIcon = srv.icon;
              return (
                <div
                  key={srv.name}
                  className="bg-white p-5 rounded-xl border border-primary/10 hover:border-secondary/50 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-white flex items-center justify-center transition-colors">
                      <SrvIcon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      {srv.category}
                    </span>
                  </div>

                  <h4 className="font-montserrat font-bold text-[15px] text-primary mb-1">
                    {srv.name}
                  </h4>
                  <p className="font-sans text-[12.5px] text-on-surface-variant leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Module 3: Project Types (12 Sectors) */}
        <section>
          <div className="mb-10 pb-4 border-b border-primary/10">
            <span className="font-mono text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">
              PORTFOLIO COVERAGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary font-montserrat tracking-tight">
              Project Types
            </h2>
            <p className="font-sans text-[14.5px] text-on-surface-variant mt-1">
              Universal Spark executes across diverse industrial, commercial, infrastructure, and specialized maintenance sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECT_SECTORS.map((sector) => {
              const SectorIcon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="bg-white rounded-2xl border border-primary/15 shadow-md p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center">
                        <SectorIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-bold text-[18px] text-primary leading-tight">
                          {sector.title}
                        </h3>
                        <p className="font-sans text-[12px] text-on-surface-variant/80 mt-0.5">
                          {sector.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      {sector.projects.map((proj) => (
                        <div
                          key={proj.name}
                          className="p-3 rounded-xl bg-surface-container-low/70 border border-primary/10 hover:border-secondary/40 transition-colors"
                        >
                          <div className="font-montserrat font-bold text-[13.5px] text-primary">
                            {proj.name}
                          </div>
                          <div className="font-sans text-[12px] text-on-surface-variant mt-0.5">
                            {proj.highlight}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-secondary font-mono text-[11px] font-bold">
                    <span>Aramco / Royal Commission Spec</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Inquiry / Tender Dispatch Callout */}
        <section className="bg-gradient-to-r from-primary to-primary-navy text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] text-secondary-fixed uppercase tracking-widest block mb-2 font-bold">
              SUBMIT AN RFP OR TENDER
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-white mb-3">
              Ready to Discuss Your Project Requirements?
            </h3>
            <p className="font-sans text-[14.5px] text-slate-200 leading-relaxed">
              Connect with our project execution leadership to review technical drawings, schedules,
              and resource allocations for your upcoming project in Saudi Arabia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/#tender-console"
              className="inline-flex items-center gap-2.5 bg-secondary hover:bg-emerald-600 text-white text-[12px] font-montserrat font-bold tracking-wider uppercase px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Initiate Tender / RFP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-[12px] font-montserrat font-bold tracking-wider uppercase px-6 py-3.5 rounded-xl border border-white/15 transition-all"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
