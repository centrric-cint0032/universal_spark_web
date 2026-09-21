import React from 'react';
import { HeroSection } from '@/sections/home/HeroSection';
import { AboutSection } from '@/sections/home/AboutSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Phase 1: Hero Section with Live Telemetry & Interactive WebGL Energy Grid */}
      <HeroSection />

      {/* Phase 2: Corporate Overview & Pre-Qualifications */}
      <AboutSection />

      {/* Subsequent phases (Services, Projects, Tender Console) will mount here */}
    </div>
  );
};
