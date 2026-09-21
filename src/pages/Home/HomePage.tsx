import React from 'react';
import { HeroSection } from '@/sections/home/HeroSection';
import { AboutSection } from '@/sections/home/AboutSection';
import { ServicesSection } from '@/sections/home/ServicesSection';
import { ProjectsSection } from '@/sections/home/ProjectsSection';
import { HseQualitySection } from '@/sections/home/HseQualitySection';
import { ContactSection } from '@/sections/home/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Phase 1: Hero Section with Live Telemetry & Interactive WebGL Energy Grid */}
      <HeroSection />

      {/* Phase 2: Corporate Overview & Pre-Qualifications */}
      <AboutSection />

      {/* Phase 3: Engineering & Contracting Services Matrix */}
      <ServicesSection />

      {/* Phase 4: Projects & Project Management (From Planning to Completion) */}
      <ProjectsSection />

      {/* Phase 5: Quality & HSE + Maintenance Services (Safety, Quality & Responsibility) */}
      <HseQualitySection />

      {/* Phase 6: Contact & Project Consultation Section */}
      <ContactSection />
    </div>
  );
};
