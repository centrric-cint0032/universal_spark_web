import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Globe,
  ArrowLeft,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Clock,
  Compass,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Tender Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-surface min-h-screen pt-24 pb-28">
      {/* Hero Header */}
      <section className="w-full bg-[#080E16] text-white py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-sans text-[12.5px] text-slate-400 mb-6">
            <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-secondary font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-sans text-[11px] font-bold tracking-wider text-secondary uppercase">
                DIRECT CONTACT &amp; TENDERS
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-montserrat tracking-tight leading-tight text-white mb-4">
              Let’s Discuss Your Project
            </h1>

            <p className="font-sans text-[16.5px] text-slate-300 leading-relaxed font-normal">
              For quotations, project enquiries, subcontracting opportunities, maintenance
              requirements, and technical consultations, contact our team across Saudi Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Comprehensive Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Corporate Profile Card */}
            <div className="bg-white rounded-2xl border border-primary/15 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-montserrat font-extrabold text-xl text-primary">
                    Universal Spark
                  </h3>
                  <p className="font-sans text-[13px] text-on-surface-variant">
                    General Service Contracting Company
                  </p>
                  <span className="font-sans text-[11.5px] text-secondary font-semibold">
                    Saudi Arabia
                  </span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-5 font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase text-slate-400">
                      Official Address
                    </div>
                    <div className="text-[14px] text-on-surface font-medium mt-0.5">
                      Eastern Province &amp; Central Region Operational Depots
                    </div>
                    <div className="text-[12.5px] text-on-surface-variant">
                      Kingdom of Saudi Arabia
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase text-slate-400">
                      Telephone
                    </div>
                    <a
                      href="tel:+966138900000"
                      className="text-[14px] text-primary font-bold hover:text-secondary transition-colors"
                    >
                      +966 13 890 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase text-slate-400">
                      WhatsApp Direct
                    </div>
                    <a
                      href="https://wa.me/966500000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-secondary font-bold hover:underline"
                    >
                      +966 50 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase text-slate-400">
                      Email Address
                    </div>
                    <a
                      href="mailto:info@universalspark.sa"
                      className="text-[14px] text-primary font-medium hover:text-secondary transition-colors"
                    >
                      info@universalspark.sa
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-low text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] font-bold uppercase text-slate-400">
                      Website
                    </div>
                    <a
                      href="https://www.universalspark.sa"
                      className="text-[14px] text-primary font-medium hover:text-secondary transition-colors"
                    >
                      www.universalspark.sa
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Enquiries & Service Areas Card */}
            <div className="bg-white rounded-2xl border border-primary/15 shadow-sm p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-primary font-montserrat font-bold text-[16px] mb-2">
                  <Compass className="w-4 h-4 text-secondary" />
                  <h4>Our Service Areas</h4>
                </div>
                <p className="font-sans text-[13.5px] text-on-surface-variant leading-relaxed">
                  We support project requirements across the Kingdom of Saudi Arabia, depending on
                  project scope, location, and mobilization requirements.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-montserrat font-extrabold text-[15px] text-primary tracking-wider uppercase">
                  Build. Install. Maintain. Deliver.
                </div>
                <div className="font-sans text-[11px] text-secondary font-bold mt-1">
                  Universal Spark
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Project Consultation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-primary/15 shadow-md p-8 sm:p-10">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-primary/10">
              <div>
                <h3 className="text-2xl font-extrabold text-primary font-montserrat">
                  Request a Project Consultation
                </h3>
                <p className="font-sans text-[13.5px] text-on-surface-variant mt-1">
                  Connect directly with our technical estimators and project directors.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 text-secondary mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat text-primary">
                  Consultation Request Sent
                </h3>
                <p className="font-sans text-[15px] text-on-surface-variant max-w-md mx-auto">
                  Thank you for reaching out. A Senior Technical Coordinator will review your message
                  and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-navy text-white font-montserrat text-[12px] font-bold tracking-wider uppercase px-6 py-3 rounded-lg transition-all mt-4"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-[11.5px] uppercase text-primary tracking-wider mb-1.5 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Eng. Khalid Al-Mansoor"
                      className="w-full bg-surface-container-low border border-slate-200 text-on-surface text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[11.5px] uppercase text-primary tracking-wider mb-1.5 font-bold">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="khalid@company.sa"
                      className="w-full bg-surface-container-low border border-slate-200 text-on-surface text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-[11.5px] uppercase text-primary tracking-wider mb-1.5 font-bold">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+966 5X XXX XXXX"
                      className="w-full bg-surface-container-low border border-slate-200 text-on-surface text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[11.5px] uppercase text-primary tracking-wider mb-1.5 font-bold">
                      Enquiry Purpose
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-surface-container-low border border-slate-200 text-on-surface text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                    >
                      <option value="Quotation & Tender">Quotation &amp; Tender</option>
                      <option value="Project Enquiry">Project Enquiry</option>
                      <option value="Subcontracting Opportunity">Subcontracting Opportunity</option>
                      <option value="Maintenance Requirements">Maintenance Requirements</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[11.5px] uppercase text-primary tracking-wider mb-1.5 font-bold">
                    Project Scope Details &amp; Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding project location, scope (Mechanical, Electrical, MEP, Civil, Maintenance), drawings, or target completion schedule..."
                    className="w-full bg-surface-container-low border border-slate-200 text-on-surface text-[14px] rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-navy text-white font-montserrat text-[13px] uppercase tracking-wider font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer group"
                  >
                    <span>Send Project Consultation Request</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 font-sans text-[11.5px] text-on-surface-variant/80 mt-3 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                    <span>Kingdom of Saudi Arabia Commercial Privacy Assured</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
