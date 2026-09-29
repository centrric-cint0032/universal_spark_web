import re

filepath = "/Users/centrric-developer/Documents/react_projects/universal-spark/src/sections/home/ServicesSection.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Add new imports
new_imports = """
import elecImg1 from '@/assets/electrical-works/pic1.jpg';
import elecImg2 from '@/assets/electrical-works/pic2.jpg';
import elecImg3 from '@/assets/electrical-works/pic3.jpg';
import elecImg4 from '@/assets/electrical-works/pic4.jpg';
import elecImg5 from '@/assets/electrical-works/pic5.jpg';
"""

content = content.replace("import mechImg5 from '@/assets/mechanical-services-images/image5.avif';", "import mechImg5 from '@/assets/mechanical-services-images/image5.avif';" + new_imports)


# Replace electrical capabilities mapping
old_elec = """    capabilities: [
      { name: 'Substation and switchgear installation', description: 'Installation of main power distribution hubs and switchgears.', image: corpImg },
      { name: 'High-voltage and low-voltage power distribution', description: 'Complete MV/LV cable networks and distribution panels.', image: corpImg },
      { name: 'Cable tray laying and cable pulling', description: 'Industrial cable management and heavy cable pulling.', image: mechanicalImg2 },
      { name: 'Transformer testing and commissioning', description: 'Pre-commissioning and testing of power transformers.', image: corpImg },
      { name: 'Industrial electrical lighting & grounding', description: 'Plant-wide illumination and earthing system grids.', image: industrialImg1 },
      { name: 'Power panel fabrication and wiring', description: 'Custom electrical control panels and local control stations.', image: corpImg },
    ],"""

new_elec = """    capabilities: [
      { name: 'Substation and switchgear installation', description: 'Installation of main power distribution hubs and switchgears.', image: elecImg1 },
      { name: 'High-voltage and low-voltage power distribution', description: 'Complete MV/LV cable networks and distribution panels.', image: elecImg2 },
      { name: 'Cable tray laying and cable pulling', description: 'Industrial cable management and heavy cable pulling.', image: elecImg3 },
      { name: 'Transformer testing and commissioning', description: 'Pre-commissioning and testing of power transformers.', image: elecImg4 },
      { name: 'Industrial electrical lighting & grounding', description: 'Plant-wide illumination and earthing system grids.', image: elecImg5 },
      { name: 'Power panel fabrication and wiring', description: 'Custom electrical control panels and local control stations.', image: elecImg1 },
    ],"""

content = content.replace(old_elec, new_elec)

with open(filepath, "w") as f:
    f.write(content)
