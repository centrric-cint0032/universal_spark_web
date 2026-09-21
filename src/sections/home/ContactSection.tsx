import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Lock,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'Mechanical Works',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const disciplines = [
    'Mechanical Works',
    'Electrical Works',
    'MEP & Instrumentation',
    'Civil Construction',
    'Plant Maintenance',
    'Project Management',
    'Comprehensive Turnkey EPC',
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#080E16] text-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-800"
    >
      {/* Anchor for existing tender-console links */}
      <div id="tender-console" className="absolute -top-20" />

      {/* Ambient Radial Lights & Grid */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Simple Text & Scope Guidance */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-[11px] font-bold tracking-widest text-secondary uppercase">
                  LET’S DISCUSS YOUR PROJECT
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight font-montserrat leading-tight text-white mb-4">
                Looking for a Reliable Contracting Partner in Saudi Arabia?
              </h2>

              {/* Narrative */}
              <div className="space-y-4 text-slate-300 font-sans text-[15.5px] leading-relaxed">
                <p>
                  Whether you are planning a new construction project, industrial facility, MEP
                  installation, plant modification, maintenance activity, or equipment installation,
                  Universal Spark can support you with integrated contracting and project execution services.
                </p>
                <p>
                  Send us your project scope, drawings, BOQ, specifications, or project requirements.
                  Our team will review your requirements and coordinate with you regarding the
                  appropriate technical and commercial solution.
                </p>
              </div>

              {/* Services Line */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-secondary block mb-3">
                  INTEGRATED DISCIPLINES
                </span>
                <p className="font-sans text-[13.5px] text-slate-300 font-medium leading-relaxed">
                  Mechanical <span className="text-secondary font-bold">|</span> Electrical{' '}
                  <span className="text-secondary font-bold">|</span> MEP{' '}
                  <span className="text-secondary font-bold">|</span> Instrumentation{' '}
                  <span className="text-secondary font-bold">|</span> Civil Construction{' '}
                  <span className="text-secondary font-bold">|</span> Maintenance{' '}
                  <span className="text-secondary font-bold">|</span> Project Management
                </p>
              </div>
            </div>

            {/* Slogan & Detailed Page Link */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="font-montserrat font-extrabold text-[15px] text-white tracking-wider uppercase">
                  Build. Install. Maintain. Deliver.
                </div>
                <div className="font-mono text-[11px] text-secondary mt-0.5">
                  Universal Spark Contracting • Saudi Arabia
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-mono text-[12px] font-bold uppercase tracking-wider transition-colors shrink-0 group"
              >
                <span>Detailed Contacts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, High-End Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 border border-white/15 rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
              {/* Form Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  <span className="font-mono text-[11px] text-slate-300 uppercase tracking-widest font-semibold">
                    PROJECT INQUIRY &amp; CONSULTATION
                  </span>
                </div>
                <span className="font-mono text-[10.5px] text-secondary bg-secondary/10 px-2.5 py-0.5 rounded border border-secondary/20 font-bold">
                  DIRECT RESPONSE
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 text-secondary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-white">
                    Project Requirements Received
                  </h3>
                  <p className="font-sans text-[14px] text-slate-300 max-w-sm mx-auto">
                    Thank you. Our engineering estimating team will review your specifications and
                    coordinate with you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-secondary hover:text-white font-mono text-[12px] font-semibold transition-colors mt-4"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-[10.5px] uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                      Full Name / Representative
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eng. Fahad Al-Otaibi"
                      className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-sans"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10.5px] uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.sa"
                        className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-sans"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10.5px] uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Discipline Selector */}
                  <div>
                    <label className="block font-mono text-[10.5px] uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                      Project Discipline
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-700 text-white text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-sans cursor-pointer"
                    >
                      {disciplines.map((d) => (
                        <option key={d} value={d} className="bg-slate-900 text-white">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Scope / Location Brief */}
                  <div>
                    <label className="block font-mono text-[10.5px] uppercase text-slate-400 tracking-wider mb-1.5 font-semibold">
                      Scope Brief / Drawings / BOQ / Location
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe project requirements, drawings, location (e.g. Eastern Province, Riyadh, Jubail), and schedule..."
                      className="w-full bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-emerald-600 active:scale-[0.99] text-white font-montserrat text-[13px] uppercase tracking-wider font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 hover:shadow-secondary/35 cursor-pointer group"
                    >
                      <span>Send Project Requirements</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 font-mono text-[10.5px] text-slate-400 mt-3 text-center">
                      <Lock className="w-3 h-3 text-secondary" />
                      <span>Confidentiality Protected Under Saudi Commercial Law</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
