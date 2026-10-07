import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Zap,
  Building2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FlaskConical,
  Network,
  UtensilsCrossed,
} from 'lucide-react';
import mechanicalImg from '@/assets/images/services-mechanical.jpg';
import mechImg1 from '@/assets/mechanical-services-images/image1.jpg';
import mechImg2 from '@/assets/mechanical-services-images/image2.avif';
import mechImg3 from '@/assets/mechanical-services-images/image3.jpg';
import mechImg4 from '@/assets/mechanical-services-images/image4.webp';
import mechImg5 from '@/assets/mechanical-services-images/image5.avif';
import elecImg1 from '@/assets/electrical-works/pic1.jpg';
import elecImg2 from '@/assets/electrical-works/pic2.jpg';
import elecImg3 from '@/assets/electrical-works/pic3.jpg';
import elecImg4 from '@/assets/electrical-works/pic4.jpg';
import elecImg5 from '@/assets/electrical-works/pic5.jpg';
import elecImg6 from '@/assets/electrical-works/pic6.jpg';
import civImg1 from '@/assets/civil-construction/img1.jpg';
import civImg2 from '@/assets/civil-construction/img2.jpg';
import civImg3 from '@/assets/civil-construction/img3.jpg';
import civImg4 from '@/assets/civil-construction/img4.jpg';
import civImg5 from '@/assets/civil-construction/img5.jpg';
import civImg6 from '@/assets/civil-construction/img6.jpg';
import mepImg1 from '@/assets/mep-instrumentation/still1.jpg';
import mepImg2 from '@/assets/mep-instrumentation/still2.jpg';
import mepImg3 from '@/assets/mep-instrumentation/still3.jpg';
import mepImg4 from '@/assets/mep-instrumentation/still4.jpg';
import mepImg5 from '@/assets/mep-instrumentation/still5.jpg';
import mepImg6 from '@/assets/mep-instrumentation/still6.jpg';


import chemImg1 from '@/assets/chemical-test-services/chemical_1.jpg';
import chemImg3 from '@/assets/chemical-test-services/chemical_3.jpg';
import chemImg5 from '@/assets/chemical-test-services/chemical_5.jpg';
import chemImg6 from '@/assets/chemical-test-services/chemical_6.jpg';
import chemImgRock from '@/assets/chemical-test-services/rock_composition.jpg';
import chemImgAsbestos from '@/assets/chemical-test-services/asbetos.jpg';
import chemImgBuilding from '@/assets/chemical-test-services/building_material.jpg';

import netImg1 from '@/assets/network-services/network_1.jpeg';
import netImg2 from '@/assets/network-services/network_2.jpg';
import netImg3 from '@/assets/network-services/network_3.jpg';
import netImgWifi from '@/assets/network-services/wifi.jpeg';
import netImgServer from '@/assets/network-services/server_room.webp';
import netImgMaint from '@/assets/network-services/network_maintenance.jpg';

import foodImg1 from '@/assets/food-services/food_1.jpeg';
import foodImg2 from '@/assets/food-services/food_2.jpeg';
import foodImg3 from '@/assets/food-services/food_3.jpeg';
import foodImg4 from '@/assets/food-services/food_4.jpeg';
import foodImg5 from '@/assets/food-services/food_5.png';
import foodImg6 from '@/assets/food-services/food_6.webp';
import foodImgSpecial from '@/assets/food-services/special_dietary.jpg';

export interface ServiceCapability {
  name: string;
  description: string;
  image: string;
}

export interface ServiceDivision {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tag: string;
  capabilities: ServiceCapability[];
  active?: boolean;
}

export const SERVICES_DATA: ServiceDivision[] = [
  {
    id: 'mechanical',
    icon: Wrench,
    title: 'Mechanical Works',
    subtitle: 'Industrial Installation, Fabrication & Shutdown Support',
    description: 'We provide mechanical installation, fabrication, maintenance, and project support services across industrial, petrochemical, and construction projects.',
    image: mechanicalImg,
    tag: 'ASME & Saudi Aramco Standards',
    capabilities: [
      { name: 'Mechanical equipment installation', description: 'Precision mounting and alignment of heavy industrial machinery.', image: mechImg1 },
      { name: 'Piping installation', description: 'Comprehensive pipework for fluid, gas, and steam processes.', image: mechImg2 },
      { name: 'Pipe fabrication and erection', description: 'Custom spooling and on-site erection of complex piping systems.', image: mechImg3 },
      { name: 'Structural mechanical works', description: 'Erection of structural steel and mechanical support structures.', image: mechImg4 },
      { name: 'Pumps and equipment installation', description: 'Complete setup of rotary and static pumping equipment.', image: mechImg5 },
      { name: 'Tanks and vessels installation support', description: 'Support for pressure vessels and bulk storage tanks.', image: mechImg1 },
    ],
    active: true,
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical Works',
    subtitle: 'High & Low Voltage Power Distribution & Systems',
    description: 'Turnkey electrical installations, substation engineering, cable laying, switchgear testing, and power distribution systems engineered to Saudi Electricity Company (SEC) benchmarks.',
    tag: 'SEC & IEC Certified',
    image: elecImg1,
    capabilities: [
      { name: 'Substation and switchgear installation', description: 'Installation of main power distribution hubs and switchgears.', image: elecImg1 },
      { name: 'High-voltage and low-voltage power distribution', description: 'Complete MV/LV cable networks and distribution panels.', image: elecImg2 },
      { name: 'Cable tray laying and cable pulling', description: 'Industrial cable management and heavy cable pulling.', image: elecImg3 },
      { name: 'Transformer testing and commissioning', description: 'Pre-commissioning and testing of power transformers.', image: elecImg4 },
      { name: 'Industrial electrical lighting & grounding', description: 'Plant-wide illumination and earthing system grids.', image: elecImg5 },
      { name: 'Power panel fabrication and wiring', description: 'Custom electrical control panels and local control stations.', image: elecImg6 },
    ],
    active: false,
  },
  {
    id: 'civil',
    icon: Building2,
    title: 'Civil Construction',
    subtitle: 'Heavy Foundations, Earthworks & Structural Works',
    description: 'Robust civil engineering solutions including high-tolerance machine foundations, deep piling, structural concrete casting, and industrial site infrastructure.',
    tag: 'SBC 301-306 Compliant',
    image: civImg1,
    capabilities: [
      { name: 'Heavy machine foundation casting', description: 'Precision concrete casting for vibratory equipment.', image: civImg1 },
      { name: 'Deep geotechnical piling & earthworks', description: 'Site preparation, excavation, and structural piling.', image: civImg2 },
      { name: 'Industrial structural concrete works', description: 'Erection of robust concrete superstructures.', image: civImg3 },
      { name: 'Trenching, duct banks & underground utilities', description: 'Subsurface trenching for power and piping networks.', image: civImg4 },
      { name: 'Blast-resistant control room civil construction', description: 'Construction of reinforced safety facilities.', image: civImg5 },
      { name: 'Roads, paving & site development', description: 'Complete site grading and asphalt paving solutions.', image: civImg6 },
    ],
    active: false,
  },
  {
    id: 'mep-instrumentation',
    icon: Cpu,
    title: 'MEP & Instrumentation',
    subtitle: 'Process Automation, Telemetry & Building Services',
    description: 'Integrated HVAC ducting, plumbing, firefighting networks, precision instrumentation calibration, and industrial SCADA automation services.',
    tag: 'ISA & NFPA Standards',
    image: mepImg1,
    capabilities: [
      { name: 'Process instrumentation and loop calibration', description: 'Calibration of field transmitters and control valves.', image: mepImg1 },
      { name: 'Central chiller plants & HVAC ducting networks', description: 'Industrial cooling and ventilation systems.', image: mepImg2 },
      { name: 'NFPA-compliant fire suppression & deluge systems', description: 'Critical safety and active fire protection systems.', image: mepImg3 },
      { name: 'Industrial plumbing and sanitary drainage', description: 'Complete water distribution and drainage works.', image: mepImg4 },
      { name: 'SCADA, BMS & PLC control automation', description: 'Centralized control room automation and telemetry.', image: mepImg5 },
      { name: 'Third-party FAT / SAT verification', description: 'Factory and site acceptance testing for systems.', image: mepImg6 },
    ],
    active: false,
  },
  {
    id: 'rgf-chemical-laboratory',
    icon: FlaskConical,
    title: 'RGF Chemical Laboratory',
    subtitle: 'Comprehensive Analytical & Consulting Services',
    description: 'State-of-the-art analytical testing services across agricultural, environmental, industrial, and geological sectors with rigorous quality control and ISO/IEC 17025 accredited standards.',
    tag: 'ISO/IEC 17025 Accredited',
    image: chemImg5,
    capabilities: [
      { name: 'Agricultural & Soil Diagnostics', description: 'Comprehensive evaluation of soil fertility, chemical composition, and irrigation suitability for optimized yield.', image: chemImg3 },
      { name: 'Building Materials Analysis', description: 'Rigorous physical and chemical evaluation of construction materials to ensure structural integrity and compliance.', image: chemImgBuilding },
      { name: 'Water & Wastewater Analysis', description: 'Advanced testing for potability, environmental compliance, industrial effluents, and construction water.', image: chemImg5 },
      { name: 'Microbiological Analysis', description: 'Comprehensive biological screening in water, soil, and environmental air matrices for pathogen detection.', image: chemImg6 },
      { name: 'Rock & Mineral Composition', description: 'Quantitative geochemical profiling of rock, ore, sand, and industrial minerals using XRF/AAS/ICP-OES.', image: chemImgRock },
      { name: 'Asbestos & Hazard Analysis', description: 'High-precision asbestos identification, fiber contamination quantification, and ambient exposure monitoring.', image: chemImgAsbestos },
    ],
    active: false,
  },
  {
    id: 'networking-cabling',
    icon: Network,
    title: 'Networking & Cabling',
    subtitle: 'Reliable Connectivity & Professional Infrastructure',
    description: 'End-to-end professional networking and structured cabling solutions for offices, industrial facilities, and commercial buildings.',
    tag: 'Enterprise & Industrial Connectivity',
    image: netImg3,
    capabilities: [
      { name: 'Structured Cabling', description: 'High-performance Cat5e, Cat6 & Cat6A cabling with organized management and certification.', image: netImg1 },
      { name: 'Fiber Optic Solutions', description: 'Precision fiber optic installation, splicing, OTDR testing, and link troubleshooting.', image: netImg2 },
      { name: 'Network Installation', description: 'Deployment of switches, routers, VLANs, and robust IP network segmentation.', image: netImg3 },
      { name: 'Wi-Fi & Wireless Networks', description: 'Enterprise Wi-Fi access point installation, coverage planning, and wireless optimization.', image: netImgWifi },
      { name: 'Server Room Setup', description: 'Professional installation of server racks, patch panels, and seamless UPS integration.', image: netImgServer },
      { name: 'Network Maintenance', description: 'Proactive fault diagnosis, preventive maintenance, and rapid network troubleshooting.', image: netImgMaint },
    ],
    active: false,
  },
  {
    id: 'food-catering',
    icon: UtensilsCrossed,
    title: 'Food Catering Services',
    subtitle: 'Reliable Catering & Nutritious Meals',
    description: 'Professional catering solutions providing fresh, hygienically prepared, and cost-effective meals for labor camps, corporate offices, and industrial construction sites.',
    tag: 'Workforce & Corporate Catering',
    image: foodImg5,
    capabilities: [
      { name: 'Labor Camp Catering', description: 'Complete daily meal preparation and bulk food production for workforce accommodations.', image: foodImg5 },
      { name: 'Corporate & Office Catering', description: 'Daily employee meals, executive lunch programs, and corporate event refreshments.', image: foodImg2 },
      { name: 'Industrial & Site Catering', description: 'Reliable packed meals and flexible bulk delivery for construction sites and factories.', image: foodImg4 },
      { name: 'Multicultural Customized Menus', description: 'Diverse culinary options including Indian, Arabic, and Asian cuisines to suit every workforce.', image: foodImg3 },
      { name: 'Special Dietary Solutions', description: 'Tailored vegetarian, non-vegetarian, and specific dietary requirement meals.', image: foodImgSpecial },
      { name: 'Full-Cycle Catering Logistics', description: 'End-to-end service from hygienic food preparation and packaging to scheduled site delivery.', image: foodImg6 },
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
              <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-wider">
                ENGINEERING &amp; CONTRACTING SERVICES
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
          {SERVICES_DATA.map((service) => {
            const isSelected = service.id === selectedServiceId;
            const ServiceIcon = service.icon;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-3 sm:p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer group min-w-0 ${
                  isSelected
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 -translate-y-0.5 sm:-translate-y-1'
                    : 'bg-white text-on-surface border-slate-200 hover:border-primary/40 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3 w-full gap-1">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-white/15 text-secondary-fixed'
                        : 'bg-primary/5 text-primary group-hover:bg-primary/10'
                    }`}
                  >
                    <ServiceIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  {service.id === 'mechanical' && (
                    <span
                      className={`inline-flex items-center gap-1 text-[8px] sm:text-[9.5px] font-sans font-bold uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded shrink-0 ${
                        isSelected
                          ? 'bg-secondary text-white'
                          : 'bg-secondary/15 text-secondary border border-secondary/20'
                      }`}
                    >
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>Detailed</span>
                    </span>
                  )}
                </div>

                <div className="min-w-0 w-full">
                  <h3
                    className={`font-montserrat font-bold text-[12.5px] sm:text-[15px] lg:text-[16px] leading-snug mb-1 break-words ${
                      isSelected ? 'text-white' : 'text-primary group-hover:text-primary-navy'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[10.5px] sm:text-[11.5px] truncate font-sans ${
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
        <div className="relative bg-white rounded-2xl border border-primary/15 shadow-xl p-5 sm:p-8 lg:p-10 transition-all duration-500 group/panel">
          {/* Top Right Navigation Arrow */}
          <Link to={`/services/${activeService.id}`} className="absolute top-5 right-5 sm:top-8 sm:right-8 text-primary hover:text-secondary transition-all duration-300 hover:translate-x-2 z-20" title="View Detailed Service">
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Scope & 10 Capabilities Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-secondary shadow-sm">
                  <activeService.icon className="w-5 h-5" />
                </div>
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
                      key={cap.name}
                      className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/10 flex items-start gap-2.5 group hover:border-secondary/50 hover:bg-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[13px] font-sans text-on-surface font-medium leading-tight">
                        {cap.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2.5 bg-secondary hover:bg-emerald-600 text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Request Scope Proposal</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <div className="text-[11.5px] font-sans text-on-surface-variant/80">
                  <span className="text-secondary font-bold">✓</span> Fast Deployment &amp;
                  Direct Engineering Supervision
                </div>
              </div>
            </div>

            {/* Right Column: Industrial Visual & Telemetry Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl bg-slate-950 min-h-[300px] sm:min-h-0 group">
                <img
                  src={activeService.image || mechanicalImg}
                  alt={`${activeService.title} - Universal Spark Contracting Saudi Arabia`}
                  className="w-full h-full object-cover aspect-[16/11] sm:aspect-[4/3] filter brightness-[0.96] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Top Tag */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-white/20 text-white font-sans text-[10px] sm:text-[11px] shadow-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="tracking-wider font-semibold text-white uppercase">
                    {activeService.title} DIVISION
                  </span>
                </div>

                {/* Floating Bottom Metric Bar */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-white/15 text-white shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/30 border border-primary-container/40 flex items-center justify-center text-secondary shrink-0">
                      <activeService.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-montserrat font-bold text-[12px] sm:text-[13px] text-white truncate">
                        Turnkey Execution Ready
                      </div>
                      <div className="font-sans text-[10px] sm:text-[11px] text-slate-300 truncate">
                        Aramco &amp; Royal Commission Spec
                      </div>
                    </div>
                  </div>

                  <span className="font-sans text-[10px] sm:text-[10.5px] text-secondary-fixed font-bold uppercase tracking-wider hidden sm:inline shrink-0">
                    ACTIVE SITES
                  </span>
                </div>
              </div>

              {/* Decorative Blueprint Corner Accents */}
              <div className="hidden sm:block absolute -bottom-3 -left-3 w-16 h-16 border-l-2 border-b-2 border-primary/20 pointer-events-none rounded-bl-xl" />
              <div className="hidden sm:block absolute -top-3 -right-3 w-16 h-16 border-r-2 border-t-2 border-secondary/40 pointer-events-none rounded-tr-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

