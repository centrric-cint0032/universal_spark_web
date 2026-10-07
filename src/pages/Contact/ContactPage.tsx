import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowLeft,
  Send,
  ShieldCheck,
  Building2,
  Clock,
  Sparkles,
} from 'lucide-react';
import contactBgImg from '@/assets/images/contact-infrastructure.jpg';

export const ContactPage: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-surface">
      {/* ─────────────────────────────────────────────────────────────
          HERO BANNER (Seamlessly touches navbar with ZERO top gap)
      ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[#060e1e] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-800">
        {/* Cinematic Background Image with Gradient & Grid Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={contactBgImg}
            alt="Universal Spark Contracting Project Operations"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e1e]/95 via-[#060e1e]/85 to-[#060e1e]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] via-transparent to-[#060e1e]/90" />
          <div className="absolute inset-0 blueprint-grid opacity-20" />
        </div>

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-sans text-xs sm:text-[12.5px] text-slate-400 mb-6">
            <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-secondary-fixed font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-sans text-[11px] font-semibold tracking-wider text-secondary-fixed uppercase">
                DIRECT CONTACT &amp; TENDERS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-montserrat tracking-tight text-white mb-4 leading-tight">
              Let’s Discuss Your Project
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Looking for a reliable contracting partner in Saudi Arabia? Whether you are planning a new construction project, industrial facility, MEP installation, plant modification, maintenance activity, or equipment installation, Universal Spark can support you with integrated contracting and project execution services.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MAIN CONTENT (Minimalist, Clean & Fully Responsive)
      ────────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-extrabold text-lg sm:text-xl text-primary leading-tight">
                    Universal Spark
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant mt-0.5">
                    General Service Contracting &amp; Project Execution
                  </p>
                  <span className="inline-block font-sans text-[11px] text-secondary font-bold uppercase tracking-wider mt-1">
                    Kingdom of Saudi Arabia
                  </span>
                </div>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-4 font-sans">
                {/* Phone */}
                <a
                  href="tel:0534198399"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Telephone
                    </span>
                    <span className="text-sm sm:text-[15px] text-primary font-bold group-hover:text-primary-navy transition-colors">
                      0534198399
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Sunday – Thursday, 8am – 5pm
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/966534198399"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      WhatsApp Direct
                    </span>
                    <span className="text-sm sm:text-[15px] text-secondary font-bold group-hover:underline">
                      0534198399
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Quick chat &amp; file sharing
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@universalsparkksa.com"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Corporate Email
                    </span>
                    <span className="text-sm sm:text-[15px] text-primary font-semibold group-hover:text-secondary transition-colors break-all">
                      info@universalsparkksa.com
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      RFP, BOQ &amp; Tender submissions
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-transparent">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Headquarters
                    </span>
                    <span className="text-sm sm:text-[13px] text-on-surface font-medium block leading-relaxed">
                      Universal Spark Company<br />
                      8617 Eighteenth Street, As Suq District<br />
                      Dammam 32242, Saudi Arabia
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1.5">
                      Short: EDJB8617 • CR-4030281902
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scope of Services Badge Box */}
            <div className="bg-[#f2f3ff] rounded-2xl border border-primary/15 p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-secondary" />
                <h4 className="font-montserrat font-bold text-sm text-primary uppercase tracking-wider">
                  Our Integrated Services
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                Mechanical | Electrical | MEP | Instrumentation | Civil Construction | Maintenance | Project Management
              </p>
              <div className="pt-3 border-t border-primary/10 flex items-center justify-between text-xs font-sans text-on-surface-variant/80">
                <span>Response Time:</span>
                <span className="font-bold text-secondary">Within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Project Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary font-montserrat tracking-tight">
                  Request a Project Consultation
                </h3>
                <p className="font-sans text-xs sm:text-sm text-on-surface-variant mt-1">
                  Send us your project scope, drawings, BOQ, or specifications.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <div className="py-12 sm:py-16 flex flex-col items-center text-center space-y-8">
              <a
                href="mailto:info@universalsparkksa.com"
                className="group flex flex-col items-center gap-5 cursor-pointer"
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:scale-105 group-active:scale-95 shadow-lg group-hover:shadow-secondary/25">
                  <Mail className="w-12 h-12 sm:w-14 sm:h-14 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-2xl font-montserrat font-extrabold text-primary tracking-wider uppercase group-hover:text-secondary transition-colors duration-300">
                    Send us an Email
                  </h4>
                  <p className="font-sans text-base text-on-surface-variant font-medium">
                    info@universalsparkksa.com
                  </p>
                </div>
              </a>

              <p className="font-sans text-[14.5px] text-on-surface-variant max-w-md mx-auto leading-relaxed mt-4">
                Click the icon above to open your default email application. Our project estimators will review your requirements and coordinate with you promptly.
              </p>

              <div className="flex items-center justify-center gap-1.5 font-sans text-[11.5px] text-on-surface-variant/80 mt-6 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                <span>Kingdom of Saudi Arabia Commercial Privacy &amp; Confidentiality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
