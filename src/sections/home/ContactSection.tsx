import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import contactBgImg from '@/assets/images/contact-infrastructure.jpg';

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
      className="w-full bg-[#060e1e] text-white py-24 lg:py-32 relative overflow-hidden border-b border-slate-800"
    >
      {/* Background Infrastructure Project Image with Multi-Layered Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={contactBgImg}
          alt="Universal Spark Contracting Project Operations and Site Engineering in Saudi Arabia"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.12]"
        />
        {/* Horizontal gradient to balance text contrast on the left and form card on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17]/95 via-[#060e1e]/85 to-[#050b17]/75" />
        {/* Vertical gradient to smoothly blend with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1e] via-transparent to-[#060e1e]/90" />
        {/* Subtle CAD Blueprint Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#13223f_1px,transparent_1px),linear-gradient(to_bottom,#13223f_1px,transparent_1px)] bg-[size:32px_32px] opacity-15" />
      </div>

      {/* Anchor for existing tender-console links */}
      <div id="tender-console" className="absolute -top-20" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Simple Text & Scope Guidance */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-sans text-[11px] font-bold tracking-wider text-secondary uppercase">
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
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-secondary block mb-3">
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
                <div className="font-sans text-[11px] text-secondary mt-0.5 font-medium">
                  Universal Spark Contracting • Saudi Arabia
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-secondary hover:text-white font-sans text-[12px] font-bold uppercase tracking-wider transition-colors shrink-0 group"
              >
                <span>Detailed Contacts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Clean, Minimalist Consultation Form */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-montserrat text-white tracking-tight">
                  Request a Project Consultation
                </h3>
                <p className="font-sans text-[13.5px] text-slate-300 mt-1">
                  Provide your requirements and our project estimators will coordinate with you.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 text-secondary mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-white">
                    Message Sent
                  </h3>
                  <p className="font-sans text-[14px] text-slate-300 max-w-sm mx-auto">
                    Thank you. We have received your project details and will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-secondary hover:text-white font-sans text-[12px] font-semibold transition-colors mt-2 cursor-pointer"
                  >
                    <span>Submit another request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* Name */}
                  <div>
                    <label className="block text-[12.5px] font-medium text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-[14px] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12.5px] font-medium text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-[14px] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12.5px] font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Contact number"
                        className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-[14px] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Discipline Selector */}
                  <div>
                    <label className="block text-[12.5px] font-medium text-slate-300 mb-1.5">
                      Discipline
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-slate-950/60 border border-slate-800 text-white text-[14px] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                    >
                      {disciplines.map((d) => (
                        <option key={d} value={d} className="bg-slate-900 text-white">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[12.5px] font-medium text-slate-300 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Scope, location, or requirements..."
                      className="w-full bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 text-[14px] rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-secondary hover:bg-emerald-600 active:scale-[0.99] text-white font-montserrat text-[12.5px] uppercase tracking-wider font-bold py-3.5 px-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-secondary/25 cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 text-center">
                      <Lock className="w-3 h-3 text-secondary" />
                      <span>Commercial confidentiality assured</span>
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
