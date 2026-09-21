import React, { useState } from 'react';
import {
  Wrench,
  Zap,
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import mechanicalImg from '@/assets/images/services-mechanical.jpg';

interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tag: string;
  capabilities: string[];
  active?: boolean;
}

const SERVICES_DATA: ServiceDivision[] = [
  {
    id: 'mechanical',
    number: '01',
    title: 'Mechanical Works',
    subtitle: 'Industrial Installation, Fabrication & Shutdown Support',
    description:
      'We provide mechanical installation, fabrication, maintenance, and project support services across industrial, petrochemical, and construction projects.',
    image: mechanicalImg,
    tag: 'ASME & Saudi Aramco Standards',
    capabilities: [
      'Mechanical equipment installation',
      'Piping installation',
      'Pipe fabrication and erection',
      'Structural mechanical works',
      'Pumps and equipment installation',
      'Tanks and vessels installation support',
      'HVAC mechanical works',
      'Mechanical maintenance',
      'Equipment alignment and installation',
      'Shutdown and maintenance support',
    ],
    active: true,
  },
  {
    id: 'electrical',
    number: '02',
    title: 'Electrical Works',
    subtitle: 'High & Low Voltage Power Distribution & Systems',
    description:
      'Turnkey electrical installations, substation engineering, cable laying, switchgear testing, and power distribution systems engineered to Saudi Electricity Company (SEC) benchmarks.',
    tag: 'SEC & IEC Certified',
    capabilities: [
      'Substation and switchgear installation',
      'High-voltage and low-voltage power distribution',
      'Cable tray laying and cable pulling',
      'Transformer testing and commissioning',
      'Industrial electrical lighting & grounding',
      'Power panel fabrication and wiring',
    ],
    active: false,
  },
  {
    id: 'civil',
    number: '03',
    title: 'Civil Construction',
    subtitle: 'Heavy Foundations, Earthworks & Structural Works',
    description:
      'Robust civil engineering solutions including high-tolerance machine foundations, deep piling, structural concrete casting, and industrial site infrastructure.',
    tag: 'SBC 301-306 Compliant',
    capabilities: [
      'Heavy machine foundation casting',
      'Deep geotechnical piling & earthworks',
      'Industrial structural concrete works',
      'Trenching, duct banks & underground utilities',
      'Blast-resistant control room civil construction',
      'Roads, paving & site development',
    ],
    active: false,
  },
  {
    id: 'mep-instrumentation',
    number: '04',
    title: 'MEP & Instrumentation',
    subtitle: 'Process Automation, Telemetry & Building Services',
    description:
      'Integrated HVAC ducting, plumbing, firefighting networks, precision instrumentation calibration, and industrial SCADA automation services.',
    tag: 'ISA & NFPA Standards',
    capabilities: [
      'Process instrumentation and loop calibration',
      'Central chiller plants & HVAC ducting networks',
      'NFPA-compliant fire suppression & deluge systems',
      'Industrial plumbing and sanitary drainage',
      'SCADA, BMS & PLC control automation',
      'Third-party FAT / SAT verification',
    ],
    active: false,
  },
];

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('mechanical');
  const activeService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <section
      id="services-matrix"
      className="w-full bg-surface py-20 lg:py-28 border-b border-outline-variant/30 relative"
    >
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-6 border-b border-primary/10 gap-6">
          <div>
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-widest">
                03 // ENGINEERING &amp; CONTRACTING SERVICES
              </span>
            </div>

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-primary tracking-tight font-montserrat">
              Comprehensive Solutions Under One Roof
            </h2>
          </div>

          {/* Section Subtitle */}
          <p className="font-sans text-[15.5px] text-on-surface-variant max-w-xl leading-relaxed">
            Our technical and contracting services are designed to support a wide range of
            construction, industrial, commercial, and infrastructure projects across the Kingdom.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 -translate-y-1'
                    : 'bg-white text-on-surface border-slate-200 hover:border-primary/40 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-3 w-full">
                  <span
                    className={`font-mono text-[12px] font-bold ${
                      isSelected ? 'text-secondary-fixed' : 'text-primary/50'
                    }`}
                  >
                    {service.number}
                  </span>
                  {service.id === 'mechanical' && (
                    <span
                      className={`inline-flex items-center gap-1 text-[9.5px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-secondary text-white'
                          : 'bg-secondary/15 text-secondary border border-secondary/20'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      Detailed
                    </span>
                  )}
                </div>

                <div>
                  <h3
                    className={`font-montserrat font-bold text-[15px] sm:text-[16px] leading-tight mb-1 ${
                      isSelected ? 'text-white' : 'text-primary group-hover:text-primary-navy'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[11.5px] truncate font-sans ${
                      isSelected ? 'text-slate-300' : 'text-on-surface-variant/80'
                    }`}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep-Dive Panel */}
        <div className="bg-white rounded-2xl border border-primary/15 shadow-xl p-6 sm:p-8 lg:p-10 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Scope & 10 Capabilities Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-white font-bold text-[15px] font-montserrat shadow-sm">
                  {activeService.number}
                </span>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[11px] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{activeService.tag}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight font-montserrat mb-3">
                {activeService.title}
              </h3>

              <p className="font-sans text-[15.5px] text-on-surface-variant leading-relaxed mb-6 font-normal">
                {activeService.description}
              </p>

              <div className="mb-4">
                <span className="font-montserrat text-[11px] font-bold text-primary uppercase tracking-widest block mb-4">
                  Key Capabilities &amp; Execution Scope:
                </span>

                {/* 10 Capabilities Checklist in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/10 flex items-start gap-2.5 group hover:border-secondary/50 hover:bg-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[13px] font-sans text-on-surface font-medium leading-tight">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href="#tender-console"
                  className="group relative inline-flex items-center gap-2.5 bg-secondary hover:bg-emerald-600 text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Request Scope Proposal / RFP</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <div className="text-[11.5px] font-mono text-on-surface-variant/80">
                  <span className="text-secondary font-bold">✓</span> Fast Deployment &amp;
                  Direct Engineering Supervision
                </div>
              </div>
            </div>

            {/* Right Column: Industrial Visual & Telemetry Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-slate-950 group">
                <img
                  src={activeService.image || mechanicalImg}
                  alt={`${activeService.title} - Universal Spark Contracting Saudi Arabia`}
                  className="w-full h-full object-cover aspect-[4/3] filter brightness-[0.96] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-mono text-[10.5px] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="tracking-wider font-semibold text-white uppercase">
                    {activeService.title} DIVISION
                  </span>
                </div>

                {/* Floating Bottom Metric Bar */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-xl border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/30 border border-primary-container/40 flex items-center justify-center text-secondary">
                      {activeService.id === 'mechanical' && <Wrench className="w-5 h-5" />}
                      {activeService.id === 'electrical' && <Zap className="w-5 h-5" />}
                      {activeService.id === 'civil' && <Building2 className="w-5 h-5" />}
                      {activeService.id === 'mep-instrumentation' && <Cpu className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-montserrat font-bold text-[13px] text-white">
                        Turnkey Execution Ready
                      </div>
                      <div className="font-mono text-[9.5px] text-slate-300">
                        Aramco &amp; Royal Commission Spec
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-secondary-fixed font-bold uppercase tracking-wider hidden sm:inline">
                    ACTIVE SITES
                  </span>
                </div>
              </div>

              {/* Decorative Blueprint Corner Accents */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-primary/20 pointer-events-none rounded-bl-xl" />
              <div className="absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-secondary/40 pointer-events-none rounded-tr-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
