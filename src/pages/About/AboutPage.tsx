import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  Award,
  Users,
  Compass,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import aboutHqImg from '@/assets/images/about-hq.jpg';
import aboutReelVideo from '@/assets/videos/about-reel.webm';
import { OptimizedVideo } from '@/components/common/OptimizedVideo';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-surface min-h-screen pt-20">
      {/* Hero Header Banner */}
      <section className="relative bg-obsidian text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[12px] font-mono text-slate-400 mb-6">
            <Link to="/" className="hover:text-secondary flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-secondary-fixed font-semibold">ABOUT UNIVERSAL SPARK</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary-fixed text-[11px] font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Corporate Profile &amp; Governance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat tracking-tight text-white mb-6 leading-tight">
              Your Trusted Contracting Partner in Saudi Arabia
            </h1>
            <p className="font-sans text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              Universal Spark is a Saudi Arabia–based general service contracting and project execution
              company providing integrated Mechanical, Electrical, MEP, Instrumentation, Civil Construction,
              Maintenance, and Project Management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview Content */}
      <section className="py-20 lg:py-24 border-b border-slate-200 bg-white">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Mission, Strategic Approach & Pillars */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-widest">
                  OUR EXECUTION PHILOSOPHY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-montserrat tracking-tight mb-6">
                Built on Engineering Rigor, Safety &amp; Unconditional Reliability
              </h2>
              <p className="font-sans text-[16px] text-on-surface-variant leading-relaxed mb-6">
                We support clients throughout the project lifecycle—from planning and engineering to
                procurement, installation, testing, commissioning, and maintenance—with a steadfast focus
                on quality, safety, reliability, and timely execution.
              </p>
              <p className="font-sans text-[15px] text-on-surface-variant leading-relaxed mb-8 p-5 bg-surface-container-low rounded-xl border border-primary/15 border-l-4 border-l-primary">
                Our approach is built around understanding our client’s technical requirements,
                developing practical execution plans, managing resources effectively, and completing
                projects safely and professionally across all regions of Saudi Arabia.
              </p>

              {/* Core Corporate Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-lowest flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[14px] text-primary mb-1">
                      Technical Precision
                    </h4>
                    <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                      Rigorous adherence to Saudi Aramco, SEC, SABIC, and Royal Commission engineering benchmarks.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-lowest flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[14px] text-primary mb-1">
                      Zero LTI Safety Protocol
                    </h4>
                    <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                      Zero-compromise QHSE culture enforced at every operational site and fabrication facility.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-lowest flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[14px] text-primary mb-1">
                      IKTVA 84.2% Rating
                    </h4>
                    <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                      Committed to local workforce empowerment, supply chain development, and Saudi Vision 2030.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-surface-container-lowest flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[14px] text-primary mb-1">
                      Turnkey Site Governance
                    </h4>
                    <p className="font-sans text-[12px] text-on-surface-variant leading-relaxed">
                      Experienced project directors, QA/QC auditors, and certified site supervisors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Video Showcase & Details */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20 bg-slate-950">
                <OptimizedVideo
                  src={aboutReelVideo}
                  poster={aboutHqImg}
                  alt="Universal Spark executive operations and industrial sites in Saudi Arabia"
                  aspectRatio="aspect-[4/3]"
                  title="Universal Spark Operational Reel"
                />
              </div>

              {/* Registration & Pre-Qualification Badges */}
              <div className="mt-6 p-6 rounded-2xl bg-surface-container-low border border-primary/15">
                <h4 className="font-mono text-[11px] font-bold text-primary uppercase tracking-wider mb-4">
                  OFFICIAL COMMERCIAL REGISTRATION &amp; ACCREDITATIONS
                </h4>
                <div className="space-y-3 font-mono text-[12px]">
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-on-surface-variant">Commercial Registration (CR):</span>
                    <span className="font-bold text-primary">4030281902</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-on-surface-variant">Vendor Registration:</span>
                    <span className="font-bold text-primary">Saudi Aramco &amp; SABIC Approved</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200">
                    <span className="text-on-surface-variant">Contractor Classification:</span>
                    <span className="font-bold text-secondary">Class-A General Contracting</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-on-surface-variant">Headquarters:</span>
                    <span className="font-bold text-primary">Eastern Province &amp; Riyadh, KSA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tender CTA Section */}
      <section className="py-16 bg-obsidian text-white">
        <div className="w-full max-w-[1536px] mx-auto px-6 lg:px-12 xl:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold font-montserrat text-white mb-2">
              Ready to Partner with Universal Spark?
            </h3>
            <p className="font-sans text-[14px] text-slate-300">
              Submit your project specifications or request our full corporate pre-qualification dossier.
            </p>
          </div>
          <Link
            to="/#tender-console"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-emerald-600 text-white font-montserrat font-bold text-[12px] tracking-wider uppercase px-7 py-3.5 rounded-lg shadow-lg hover:shadow-secondary/25 transition-all"
          >
            <span>Initiate Tender Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
