import React from 'react';
import { HeroSection } from '@/sections/home/HeroSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Phase 1: Hero Section with Live Telemetry & Interactive WebGL Energy Grid */}
      <HeroSection />

      {/* Subsequent phases (About, Services, Projects, Tender Console) will mount here */}
    </div>
  );
};
