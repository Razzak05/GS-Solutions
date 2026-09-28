import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Database, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-[70px] pb-[90px] px-4 sm:px-6 z-10 flex flex-col items-center">
      <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-[0.8rem] font-semibold text-emerald-300 tracking-wide">
            100% TCPA Compliant Lead Generation &amp; Telemarketing Services
          </span>
        </div>

        {/* High-Impact Hero Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6 max-w-[960px]">
          Comprehensive Lead Generation &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
            Dedicated Contact Center Solutions.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-[780px] leading-relaxed mb-10 font-normal">
          We offer a wide range of professional lead generation, warm transfer, customer support, and telemarketing services tailored to fuel your sales pipeline and accelerate business growth.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <a 
            href="#contact" 
            className="w-full sm:w-auto group relative overflow-hidden flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white rounded-full text-[0.95rem] font-bold shadow-[0_4px_28px_rgba(99,102,241,0.45)] hover:shadow-[0_8px_38px_rgba(99,102,241,0.65)] hover:-translate-y-0.5 transition-all border border-white/20"
          >
            <span className="absolute inset-x-0 top-0 h-[1px] bg-white/40"></span>
            <span>Request a Quote</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#services" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.1] rounded-full backdrop-blur-md text-[0.95rem] font-semibold text-slate-200 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Services</span>
            <ChevronRight size={18} className="text-slate-400" />
          </a>
        </div>

        {/* Operational Metrics Bar */}
        <div className="w-full max-w-[900px] p-6 sm:p-7 bg-[#0C1121]/80 border border-white/[0.1] rounded-[22px] backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] grid grid-cols-2 md:grid-cols-4 gap-6 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
          
          <div className="flex flex-col pl-2">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              100%
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mt-1">
              TCPA &amp; DNC Compliance
            </span>
          </div>

          <div className="flex flex-col border-l border-white/[0.08] pl-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              8+
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mt-1">
              Specialized Verticals
            </span>
          </div>

          <div className="flex flex-col border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 pl-2 md:pl-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              24/7
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mt-1">
              Multilingual Support
            </span>
          </div>

          <div className="flex flex-col border-t md:border-t-0 border-l border-white/[0.08] pt-4 md:pt-0 pl-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Real-Time
            </span>
            <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mt-1">
              CRM &amp; Dialer Webhooks
            </span>
          </div>
        </div>

        {/* Enterprise Compliance Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck size={15} className="text-emerald-400" /> Jornaya &amp; TrustedForm Verified
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Zap size={15} className="text-indigo-400" /> High-Conversion Sales Pacing
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Database size={15} className="text-sky-400" /> Instant Lead Posting
          </span>
        </div>

      </div>
    </section>
  );
}
