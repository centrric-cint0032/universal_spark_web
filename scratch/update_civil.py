import re

filepath = "/Users/centrric-developer/Documents/react_projects/universal-spark/src/sections/home/ServicesSection.tsx"
with open(filepath, "r") as f:
    content = f.read()

# Add new imports
new_imports = """
import civImg1 from '@/assets/civil-construction/img1.jpg';
import civImg2 from '@/assets/civil-construction/img2.jpg';
import civImg3 from '@/assets/civil-construction/img3.jpg';
import civImg4 from '@/assets/civil-construction/img4.jpg';
import civImg5 from '@/assets/civil-construction/img5.jpg';
"""

content = content.replace("import elecImg6 from '@/assets/electrical-works/pic6.jpg';", "import elecImg6 from '@/assets/electrical-works/pic6.jpg';" + new_imports)


# Replace civil block
old_civil = """  {
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
    ],"""

new_civil = """  {
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
      { name: 'Roads, paving & site development', description: 'Complete site grading and asphalt paving solutions.', image: civImg1 },
    ],"""

content = content.replace(old_civil, new_civil)

with open(filepath, "w") as f:
    f.write(content)
