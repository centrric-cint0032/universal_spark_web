import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Award, 
  Wrench,
  ClipboardCheck,
  HardHat,
  Thermometer,
  Layers,
  Settings
} from 'lucide-react';

import heroImg from '@/assets/images/universal_spark_site_ops_1790058022563.jpg';
import hseImg from '@/assets/images/about_industrial_execution_1790580549206.jpg';
import qaImg from '@/assets/images/about_corporate_operations_1790580595301.jpg';
import maintImg from '@/assets/images/about_mechanical_works_1790580562383.jpg';

export const HSEQPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('hse');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]); // Scroll to top when tab changes

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['hse', 'quality', 'maintenance'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  useEffect(() => {
    // Small timeout to allow DOM to render before observing
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#060e1e] text-white selection:bg-secondary/30 selection:text-secondary-fixed">
      {/* Background Gradients & Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] blueprint-grid z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a1936] via-[#060e1e] to-[#060e1e] z-0" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Universal Spark Safety" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1e]/80 via-[#060e1e]/95 to-[#060e1e]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 shadow-lg shadow-secondary/10 animate-fade-in-up">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-secondary">
              Commitment to Excellence
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-montserrat tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            HSE, Quality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400">Maintenance</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Delivering absolute precision, uncompromising safety, and 24/7 reliability across every industrial and infrastructure project we undertake.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="sticky top-20 z-40 bg-[#060e1e]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center min-w-max">
            <button 
              onClick={() => handleTabChange('hse')}
              className={`px-6 py-5 font-montserrat font-bold text-sm tracking-wider uppercase transition-all border-b-2 ${activeTab === 'hse' ? 'border-secondary text-secondary' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Health & Safety
            </button>
            <button 
              onClick={() => handleTabChange('quality')}
              className={`px-6 py-5 font-montserrat font-bold text-sm tracking-wider uppercase transition-all border-b-2 ${activeTab === 'quality' ? 'border-blue-400 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Quality Assurance
            </button>
            <button 
              onClick={() => handleTabChange('maintenance')}
              className={`px-6 py-5 font-montserrat font-bold text-sm tracking-wider uppercase transition-all border-b-2 ${activeTab === 'maintenance' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
            >
              Plant Maintenance
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="relative z-10 w-full max-w-[1536px] mx-auto px-6 lg:px-12 py-20 min-h-[60vh]">
        
        {/* Pillar 1: HSE */}
        {activeTab === 'hse' && (
          <section className="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/20 transition-colors duration-700" />
                <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={hseImg} alt="HSE Protocol" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
                    <div className="text-3xl font-black font-montserrat text-white mb-1">ZERO</div>
                    <div className="text-xs font-sans font-bold text-secondary uppercase tracking-wider">Lost Time Injuries (LTI) Target</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary border border-secondary/20">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-white">Health, Safety & Environment</h2>
                </div>
                <p className="text-slate-300 font-sans leading-relaxed mb-8 text-lg">
                  Safety is not a guideline; it is our operational foundation. Our HSE management system complies strictly with Saudi Aramco, SABIC, and international OHSAS standards to protect our workforce, clients, and the environment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Daily Toolbox Safety Talks',
                    'Task Risk Assessment (TRA)',
                    'Permit to Work (PTW) Compliance',
                    'Environmental Waste Management',
                    'Emergency Response Readiness',
                    'Continuous HSE Training Programs'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-sm font-sans text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pillar 2: QA/QC */}
        {activeTab === 'quality' && (
          <section className="reveal opacity-0 scale-95 transition-all duration-700 ease-out">
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-colors duration-700" />
                <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={qaImg} alt="Quality Assurance" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] to-transparent" />
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="font-sans text-sm font-bold text-white tracking-wider uppercase">ISO 9001 Certified Quality</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-white">Quality Assurance & Control</h2>
                </div>
                <p className="text-slate-300 font-sans leading-relaxed mb-8 text-lg">
                  We deliver engineering precision through a rigorous Quality Management System (QMS). From material receipt to final handover, every project phase passes through stringent quality gates and third-party verifications.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: 'Inspection & Test Plans (ITP)', desc: 'Pre-approved sequential hold points and witness testing.' },
                    { title: 'Non-Destructive Testing (NDT)', desc: 'Radiographic, ultrasonic, and penetrant testing of welds and structures.' },
                    { title: 'Material Traceability', desc: 'Strict tracking of mill certificates and material approvals.' },
                    { title: 'Pre-Commissioning (FAT/SAT)', desc: 'Comprehensive loop checks, hydro-testing, and functional verification.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-bold text-white mb-1">{item.title}</h4>
                        <p className="font-sans text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Pillar 3: Plant Maintenance */}
        {activeTab === 'maintenance' && (
          <section className="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-2xl group-hover:bg-amber-500/20 transition-colors duration-700" />
                <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={maintImg} alt="Plant Maintenance" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] to-transparent" />
                  <div className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                    <Activity className="w-5 h-5 text-amber-400 animate-pulse" />
                    <span className="font-sans text-sm font-bold text-white tracking-wider uppercase">24/7 Asset Reliability</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 border border-amber-500/20">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-montserrat text-white">Facility & Plant Maintenance</h2>
                </div>
                <p className="text-slate-300 font-sans leading-relaxed mb-8 text-lg">
                  To maximize uptime and extend asset lifecycles, our specialized maintenance division provides predictive, preventative, and reactive maintenance for industrial plants, commercial facilities, and critical infrastructure.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Preventative Maintenance', icon: Wrench },
                    { title: 'Predictive Monitoring', icon: Activity },
                    { title: 'Emergency Shutdowns', icon: Thermometer },
                    { title: 'HVAC & MEP Servicing', icon: Settings },
                    { title: 'Static Equipment Overhauls', icon: Layers },
                    { title: 'Facility Upgrades', icon: HardHat }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                          <Icon className="w-4 h-4 text-amber-400" />
                        </div>
                        <span className="text-sm font-sans font-medium text-slate-200">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

      </main>
    </div>
  );
};
