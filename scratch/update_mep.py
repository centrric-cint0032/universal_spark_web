import re

filepath = "/Users/centrric-developer/Documents/react_projects/universal-spark/src/sections/home/ServicesSection.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Add new imports
new_imports = """
import mepImg1 from '@/assets/mep-instrumentation/still1.jpg';
import mepImg2 from '@/assets/mep-instrumentation/still2.jpg';
import mepImg3 from '@/assets/mep-instrumentation/still3.jpg';
import mepImg4 from '@/assets/mep-instrumentation/still4.jpg';
import mepImg5 from '@/assets/mep-instrumentation/still5.jpg';
import mepImg6 from '@/assets/mep-instrumentation/still6.jpg';
"""

content = content.replace("import civImg6 from '@/assets/civil-construction/img6.jpg';", "import civImg6 from '@/assets/civil-construction/img6.jpg';" + new_imports)


# Replace mep block
old_mep = """  {
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
  },"""

new_mep = """  {
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
  },"""

content = content.replace(old_mep, new_mep)

with open(filepath, "w") as f:
    f.write(content)
