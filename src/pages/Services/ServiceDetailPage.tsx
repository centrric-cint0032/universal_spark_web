import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Building2, Cpu, Wrench } from 'lucide-react';
import { SERVICES_DATA } from '@/sections/home/ServicesSection';
import companyLogo from '@/assets/images/logo.png';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = SERVICES_DATA.find(s => s.id === serviceId);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use intersection observer for simple scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#060e1e] flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold font-montserrat mb-4">Service Not Found</h1>
        <button onClick={() => navigate('/')} className="px-6 py-2 bg-secondary rounded-lg font-bold uppercase tracking-wider text-xs">Return Home</button>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-[#060e1e] text-white selection:bg-secondary/30 selection:text-secondary-fixed overflow-hidden">
      {/* Blueprint background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] blueprint-grid z-0" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a1936] via-[#060e1e] to-[#060e1e] z-0" />

      {/* Nav */}
      <nav className="relative z-50 px-6 lg:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-secondary transition-colors" />
          <span className="font-sans text-xs font-semibold tracking-widest text-slate-300 uppercase group-hover:text-white transition-colors">Back to Services</span>
        </Link>
        <img src={companyLogo} alt="Universal Spark" className="h-10 object-contain drop-shadow-md" style={{ clipPath: 'inset(0 3px 0 0)' }} />
      </nav>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 lg:py-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-start mb-16 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container border border-primary/30 mb-6 shadow-lg shadow-primary/20">
            <ServiceIcon className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-secondary-fixed">
              Division Detail
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-montserrat tracking-tight mb-6">
            {service.title}
          </h1>
          
          <p className="text-xl sm:text-2xl font-montserrat text-secondary font-semibold max-w-3xl mb-8 leading-snug">
            {service.subtitle}
          </p>
          
          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed border-l-2 border-secondary/50 pl-6 py-1">
            {service.description}
          </p>
        </div>

        {/* Visual Representation & Tag */}
        <div className="mb-24 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200 ease-out relative group">
          <div className="absolute inset-0 bg-secondary/10 rounded-3xl blur-2xl group-hover:bg-secondary/20 transition-all duration-700" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black h-[400px] sm:h-[500px]">
             {service.image ? (
                <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000" />
             ) : (
                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                  <ServiceIcon className="w-24 h-24 text-slate-800" />
                </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] via-transparent to-transparent" />
             
             {/* Tag Badge */}
             <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
               <ShieldCheck className="w-5 h-5 text-emerald-400" />
               <span className="font-sans text-sm font-bold text-white tracking-wider uppercase">
                 {service.tag}
               </span>
             </div>
          </div>
        </div>

        {/* Detailed Capabilities Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold font-montserrat text-white mb-10 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            Execution Capabilities
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div 
                key={idx} 
                className="reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-secondary/30 group flex flex-col"
                style={{ transitionDelay: `${Math.min(idx * 100, 500)}ms` }}
              >
                {/* Capability Image */}
                <div className="h-40 w-full overflow-hidden relative">
                  <img src={cap.image} alt={cap.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] to-transparent opacity-80" />
                </div>
                
                {/* Capability Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-slate-100 mb-3 leading-tight">
                    {cap.name}
                  </h3>
                  <p className="font-sans text-sm text-slate-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center pb-20 reveal-on-scroll opacity-0 translate-y-8 transition-all duration-1000 ease-out border-t border-white/10 pt-16 mt-12">
          <h3 className="text-3xl font-extrabold font-montserrat mb-6">Ready to initiate your project?</h3>
          <p className="text-slate-400 font-sans mb-8 max-w-xl mx-auto">
            Contact our engineering division to discuss your requirements and request a detailed technical proposal.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary hover:bg-emerald-500 text-white font-montserrat font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-1">
            Request Proposal
          </Link>
        </div>

      </main>
    </div>
  );
};
