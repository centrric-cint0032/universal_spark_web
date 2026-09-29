import re

filepath = "/Users/centrric-developer/Documents/react_projects/universal-spark/src/sections/home/ServicesSection.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Add new imports
new_imports = """
import mechImg1 from '@/assets/mechanical-services-images/image1.jpg';
import mechImg2 from '@/assets/mechanical-services-images/image2.avif';
import mechImg3 from '@/assets/mechanical-services-images/image3.jpg';
import mechImg4 from '@/assets/mechanical-services-images/image4.webp';
import mechImg5 from '@/assets/mechanical-services-images/image5.avif';
"""

content = content.replace("import hqImg from '@/assets/images/about-hq.jpg';", "import hqImg from '@/assets/images/about-hq.jpg';" + new_imports)

# Not sure if hqImg is there, let's just append after mechanicalImg
content = content.replace("import mechanicalImg from '@/assets/images/services-mechanical.jpg';", "import mechanicalImg from '@/assets/images/services-mechanical.jpg';" + new_imports)


# Replace mechanical capabilities mapping
old_mech = """    capabilities: [
      { name: 'Mechanical equipment installation', description: 'Precision mounting and alignment of heavy industrial machinery.', image: mechanicalImg2 },
      { name: 'Piping installation', description: 'Comprehensive pipework for fluid, gas, and steam processes.', image: industrialImg1 },
      { name: 'Pipe fabrication and erection', description: 'Custom spooling and on-site erection of complex piping systems.', image: mechanicalImg2 },
      { name: 'Structural mechanical works', description: 'Erection of structural steel and mechanical support structures.', image: civilImg },
      { name: 'Pumps and equipment installation', description: 'Complete setup of rotary and static pumping equipment.', image: mechanicalImg },
      { name: 'Tanks and vessels installation support', description: 'Support for pressure vessels and bulk storage tanks.', image: industrialImg1 },
    ],"""

new_mech = """    capabilities: [
      { name: 'Mechanical equipment installation', description: 'Precision mounting and alignment of heavy industrial machinery.', image: mechImg1 },
      { name: 'Piping installation', description: 'Comprehensive pipework for fluid, gas, and steam processes.', image: mechImg2 },
      { name: 'Pipe fabrication and erection', description: 'Custom spooling and on-site erection of complex piping systems.', image: mechImg3 },
      { name: 'Structural mechanical works', description: 'Erection of structural steel and mechanical support structures.', image: mechImg4 },
      { name: 'Pumps and equipment installation', description: 'Complete setup of rotary and static pumping equipment.', image: mechImg5 },
      { name: 'Tanks and vessels installation support', description: 'Support for pressure vessels and bulk storage tanks.', image: mechImg1 },
    ],"""

content = content.replace(old_mech, new_mech)

with open(filepath, "w") as f:
    f.write(content)
