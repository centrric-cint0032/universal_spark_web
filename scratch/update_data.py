import re

filepath = "/Users/centrric-developer/Documents/react_projects/universal-spark/src/sections/home/ServicesSection.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Add imports
imports_to_add = """import industrialImg1 from '@/assets/images/about_industrial_execution_1790580549206.jpg';
import mechanicalImg2 from '@/assets/images/about_mechanical_works_1790580562383.jpg';
import civilImg from '@/assets/images/about_civil_infrastructure_1790580582420.jpg';
import corpImg from '@/assets/images/about_corporate_clean_1790585081901.jpg';
"""

content = content.replace("import mechanicalImg from '@/assets/images/services-mechanical.jpg';", "import mechanicalImg from '@/assets/images/services-mechanical.jpg';\n" + imports_to_add)

# Replace Interface
old_interface = """export interface ServiceDivision {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tag: string;
  capabilities: string[];
  active?: boolean;
}"""

new_interface = """export interface ServiceCapability {
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
}"""

content = content.replace(old_interface, new_interface)

# Replace the data
old_data = """export const SERVICES_DATA: ServiceDivision[] = [
  {
    id: 'mechanical',
    icon: Wrench,
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
    icon: Zap,
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
    icon: Building2,
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
    icon: Cpu,
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
];"""

new_data = """export const SERVICES_DATA: ServiceDivision[] = [
  {
    id: 'mechanical',
    icon: Wrench,
    title: 'Mechanical Works',
    subtitle: 'Industrial Installation, Fabrication & Shutdown Support',
    description: 'We provide mechanical installation, fabrication, maintenance, and project support services across industrial, petrochemical, and construction projects.',
    image: mechanicalImg,
    tag: 'ASME & Saudi Aramco Standards',
    capabilities: [
      { name: 'Mechanical equipment installation', description: 'Precision mounting and alignment of heavy industrial machinery.', image: mechanicalImg2 },
      { name: 'Piping installation', description: 'Comprehensive pipework for fluid, gas, and steam processes.', image: industrialImg1 },
      { name: 'Pipe fabrication and erection', description: 'Custom spooling and on-site erection of complex piping systems.', image: mechanicalImg2 },
      { name: 'Structural mechanical works', description: 'Erection of structural steel and mechanical support structures.', image: civilImg },
      { name: 'Pumps and equipment installation', description: 'Complete setup of rotary and static pumping equipment.', image: mechanicalImg },
      { name: 'Tanks and vessels installation support', description: 'Support for pressure vessels and bulk storage tanks.', image: industrialImg1 },
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
    capabilities: [
      { name: 'Substation and switchgear installation', description: 'Installation of main power distribution hubs and switchgears.', image: corpImg },
      { name: 'High-voltage and low-voltage power distribution', description: 'Complete MV/LV cable networks and distribution panels.', image: corpImg },
      { name: 'Cable tray laying and cable pulling', description: 'Industrial cable management and heavy cable pulling.', image: mechanicalImg2 },
      { name: 'Transformer testing and commissioning', description: 'Pre-commissioning and testing of power transformers.', image: corpImg },
      { name: 'Industrial electrical lighting & grounding', description: 'Plant-wide illumination and earthing system grids.', image: industrialImg1 },
      { name: 'Power panel fabrication and wiring', description: 'Custom electrical control panels and local control stations.', image: corpImg },
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
    capabilities: [
      { name: 'Heavy machine foundation casting', description: 'Precision concrete casting for vibratory equipment.', image: civilImg },
      { name: 'Deep geotechnical piling & earthworks', description: 'Site preparation, excavation, and structural piling.', image: civilImg },
      { name: 'Industrial structural concrete works', description: 'Erection of robust concrete superstructures.', image: civilImg },
      { name: 'Trenching, duct banks & underground utilities', description: 'Subsurface trenching for power and piping networks.', image: civilImg },
      { name: 'Blast-resistant control room civil construction', description: 'Construction of reinforced safety facilities.', image: civilImg },
      { name: 'Roads, paving & site development', description: 'Complete site grading and asphalt paving solutions.', image: civilImg },
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
    capabilities: [
      { name: 'Process instrumentation and loop calibration', description: 'Calibration of field transmitters and control valves.', image: mechanicalImg2 },
      { name: 'Central chiller plants & HVAC ducting networks', description: 'Industrial cooling and ventilation systems.', image: mechanicalImg },
      { name: 'NFPA-compliant fire suppression & deluge systems', description: 'Critical safety and active fire protection systems.', image: mechanicalImg },
      { name: 'Industrial plumbing and sanitary drainage', description: 'Complete water distribution and drainage works.', image: civilImg },
      { name: 'SCADA, BMS & PLC control automation', description: 'Centralized control room automation and telemetry.', image: corpImg },
      { name: 'Third-party FAT / SAT verification', description: 'Factory and site acceptance testing for systems.', image: corpImg },
    ],
    active: false,
  },
];"""

content = content.replace(old_data, new_data)

# Fix mapping in ServicesSection.tsx
old_map = """{activeService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/10 flex items-start gap-2.5 group hover:border-secondary/50 hover:bg-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[13px] font-sans text-on-surface font-medium leading-tight">
                        {cap}
                      </span>
                    </div>
                  ))}"""

new_map = """{activeService.capabilities.map((cap) => (
                    <div
                      key={cap.name}
                      className="p-3 rounded-lg bg-surface-container-low/70 border border-primary/10 flex items-start gap-2.5 group hover:border-secondary/50 hover:bg-white transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[13px] font-sans text-on-surface font-medium leading-tight">
                        {cap.name}
                      </span>
                    </div>
                  ))}"""

content = content.replace(old_map, new_map)

# Replace the Action Buttons with just top-right arrow link
content = content.replace("""{/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2.5 bg-secondary hover:bg-emerald-600 text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Request Scope Proposal</span>
                </a>

                <Link
                  to={`/services/${activeService.id}`}
                  className="group relative inline-flex items-center gap-2.5 bg-slate-900 hover:bg-primary-navy text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-slate-900/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>View Detailed Service</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>""", """{/* Action Buttons */}
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
              </div>""")

# Add the top-right arrow link to the active service panel
old_panel_start = """{/* Active Service Deep-Dive Panel */}
        <div className="bg-white rounded-2xl border border-primary/15 shadow-xl p-5 sm:p-8 lg:p-10 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">"""

new_panel_start = """{/* Active Service Deep-Dive Panel */}
        <div className="relative bg-white rounded-2xl border border-primary/15 shadow-xl p-5 sm:p-8 lg:p-10 transition-all duration-500 group/panel">
          {/* Top Right Navigation Arrow */}
          <Link to={`/services/${activeService.id}`} className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-primary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-105 z-20" title="View Detailed Service">
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">"""

content = content.replace(old_panel_start, new_panel_start)

with open(filepath, "w") as f:
    f.write(content)
