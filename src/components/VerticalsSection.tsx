'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  CircleDollarSign, 
  ShieldCheck, 
  Scale, 
  Home, 
  Headset, 
  Users, 
  PhoneCall,
  Check
} from 'lucide-react';

const servicesData = [
  {
    id: 'aca',
    category: 'insurance',
    colorTheme: 'indigo',
    Icon: Building2,
    pill: 'Healthcare',
    title: 'ACA',
    desc: 'Affordable Care Act enrollment and support services with expert guidance and compliance.',
    features: [
      'Subsidy-eligible consumer qualification',
      'Zero-dollar plan verification',
      'TCPA-compliant warm transfers'
    ]
  },
  {
    id: 'final-expense',
    category: 'insurance',
    colorTheme: 'amber',
    Icon: CircleDollarSign,
    pill: 'Life Insurance',
    title: 'Final Expense',
    desc: 'Comprehensive final expense insurance lead generation and conversion services.',
    features: [
      'Ages 50–80 targeted demographic',
      'Payment capability & checking account verified',
      'Clear intent to purchase'
    ]
  },
  {
    id: 'medicare',
    category: 'insurance',
    colorTheme: 'cyan',
    Icon: ShieldCheck,
    pill: 'Senior Health',
    title: 'Medicare',
    desc: 'Medicare enrollment assistance and beneficiary support with expert knowledge.',
    features: [
      'Part A & B red-white-blue card check',
      'AEP, OEP, and Dual-Eligible (D-SNP) targeting',
      'CMS compliant scripting protocols'
    ]
  },
  {
    id: 'ssdi',
    category: 'services',
    colorTheme: 'rose',
    Icon: Scale,
    pill: 'Legal Advocacy',
    title: 'SSDI',
    desc: 'Social Security Disability Insurance support and advocacy services.',
    features: [
      'Out of work 12+ months verified',
      'Unrepresented disability claimants',
      'Structured legal intake payloads'
    ]
  },
  {
    id: 'home-improvement',
    category: 'services',
    colorTheme: 'emerald',
    Icon: Home,
    pill: 'Home Services',
    title: 'Home Improvement',
    desc: 'Lead generation and customer acquisition for home improvement businesses.',
    features: [
      'Single-family homeowner pre-screening',
      'Solar, Roofing, HVAC, Windows & Remodel',
      'Monthly utility spend & credit check'
    ]
  },
  {
    id: 'customer-support',
    category: 'bpo',
    colorTheme: 'indigo',
    Icon: Headset,
    pill: '24/7 Operations',
    title: 'Customer Support',
    desc: '24/7 customer support services with multilingual capabilities.',
    features: [
      'Inbound call handling & live chat',
      'Multichannel email ticketing',
      'Dedicated supervisor QA monitoring'
    ]
  },
  {
    id: 'lead-generation',
    category: 'bpo',
    colorTheme: 'emerald',
    Icon: Users,
    pill: 'High Intent',
    title: 'Lead Generation',
    desc: 'High-quality lead generation services to fuel your sales pipeline.',
    features: [
      'Targeted B2B & B2C acquisition',
      'Jornaya & TrustedForm certified consent',
      'Real-time lead delivery'
    ]
  },
  {
    id: 'telemarketing',
    category: 'bpo',
    colorTheme: 'amber',
    Icon: PhoneCall,
    pill: 'Outbound Pods',
    title: 'Telemarketing',
    desc: 'Professional telemarketing services with trained agents and scripts.',
    features: [
      'Custom rebuttal & objection handling',
      'Dedicated agent seating & coaching',
      'Performance KPI dashboard tracking'
    ]
  }
];

const filters = [
  { label: 'All Services', value: 'all' },
  { label: 'Insurance & Health', value: 'insurance' },
  { label: 'Home & Advocacy', value: 'services' },
  { label: 'BPO & Telemarketing', value: 'bpo' }
];

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case 'indigo':
      return {
        iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25',
        pill: 'text-indigo-300 border-indigo-500/20 bg-indigo-500/10'
      };
    case 'amber':
      return {
        iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
        pill: 'text-amber-300 border-amber-500/20 bg-amber-500/10'
      };
    case 'cyan':
      return {
        iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
        pill: 'text-sky-300 border-sky-500/20 bg-sky-500/10'
      };
    case 'rose':
      return {
        iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
        pill: 'text-rose-300 border-rose-500/20 bg-rose-500/10'
      };
    case 'emerald':
      return {
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
        pill: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/10'
      };
    default:
      return {
        iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25',
        pill: 'text-indigo-300 border-indigo-500/20 bg-indigo-500/10'
      };
  }
};

export default function VerticalsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = servicesData.filter(service => 
    activeFilter === 'all' ? true : service.category === activeFilter
  );

  return (
    <section id="services" className="py-[110px] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Intro matching reference image */}
        <div className="max-w-[760px] mx-auto text-center mb-14">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
            Comprehensive Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Generation Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We offer a wide range of professional Lead Generation services tailored to your business needs
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-white shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                    : 'bg-white/[0.03] border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-white/15'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((card) => {
            const theme = getThemeStyles(card.colorTheme);
            return (
              <div
                key={card.id}
                className="group relative bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:bg-[#11172A] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(99,102,241,0.15)] flex flex-col justify-between"
              >
                {/* Laser Top Highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent rounded-t-[22px] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${theme.iconBg} shadow-inner`}>
                      <card.Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${theme.pill}`}>
                      {card.pill}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[60px]">
                    {card.desc}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {card.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[0.8rem] text-slate-300 leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
