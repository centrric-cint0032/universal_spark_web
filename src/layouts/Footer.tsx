import React from 'react';
import logoImg from '@/assets/images/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-primary/15 py-14">
      <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-primary/10">
          {/* Identity Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={logoImg}
                alt="Universal Spark Company Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-extrabold text-primary text-[17px] tracking-tight">
                UNIVERSAL SPARK
              </span>
            </div>
            <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed max-w-sm mb-4">
              Universal Spark Infrastructure &amp; Contracting Co. Ltd. — A Tier-1 general engineering contractor committed to Kingdom Vision 2030 industrial resilience.
            </p>
            <div className="font-sans text-[11px] text-on-surface-variant/80 space-y-1">
              <p>CR NO. 4030281902 • CHAMBER OF COMMERCE KSA</p>
              <p>EASTERN PROVINCE / RIYADH METROPOLITAN BRANCHES</p>
            </div>
          </div>

          {/* Quick Navigation / Disciplines */}
          <div className="md:col-span-3">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-wider block mb-4">
              DISCIPLINES
            </span>
            <div className="flex flex-col gap-2 font-sans text-[12px] text-on-surface-variant">
              <a className="hover:text-secondary transition-colors" href="#services-matrix">
                Civil &amp; Foundation EPC
              </a>
              <a className="hover:text-secondary transition-colors" href="#services-matrix">
                Plant Shutdown &amp; Turnaround
              </a>
              <a className="hover:text-secondary transition-colors" href="#services-matrix">
                MEP &amp; Substation Infrastructure
              </a>
              <a className="hover:text-secondary transition-colors" href="#services-matrix">
                ASME Vessel &amp; Skid Fabrication
              </a>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div className="md:col-span-4">
            <span className="font-sans text-[11px] font-bold text-primary uppercase tracking-wider block mb-4">
              COMPLIANCE &amp; ACCREDITATION
            </span>
            <div className="flex flex-col gap-2 font-sans text-[12px] text-on-surface-variant">
              <span>Aramco Approved Vendor System</span>
              <span>SABIC Registered Contractor Code</span>
              <span>Saudi Council of Engineers Certified</span>
              <span>ISO 9001:2015 / ISO 45001:2018 Standards</span>
            </div>
          </div>
        </div>

        {/* Legal Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-sans text-[11.5px] text-on-surface-variant/70 gap-4">
          <div>
            © 2025 Universal Spark Contracting &amp; Maintenance Co. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-primary transition-colors" href="#">
              Safety Code Manual
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              IKTVA Status
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Tender Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
