'use client';

import React, { useState } from 'react';
import { Check, Building2, CircleDollarSign, ShieldCheck, Scale, SunMedium, Headphones } from 'lucide-react';

const verticalsData = [
  {
    id: 'aca',
    category: 'insurance',
    colorTheme: 'indigo',
    Icon: Building2,
    pill: 'Health Insurance',
    title: 'ACA (Affordable Care Act)',
    desc: 'Warm live transfers of subsidy-eligible individuals and working families seeking zero-dollar or low-deductible health coverage.',
    metrics: [
      { value: '120 Seconds', label: 'Buffer Window' },
      { value: 'Income & State', label: 'Screening Focus' }
    ],
    checklist: [
      'Household income & family size qualification',
      'Zero-dollar subsidy plan eligibility check',
      'Warm 3-way broker handoff with buffer protection'
    ]
  },
  {
    id: 'final-expense',
    category: 'insurance',
    colorTheme: 'amber',
    Icon: CircleDollarSign,
    pill: 'Life Insurance',
    title: 'Final Expense Life Insurance',
    desc: 'Connecting motivated seniors looking for guaranteed whole life coverage to protect loved ones from funeral and medical expenses.',
    metrics: [
      { value: '90 Seconds', label: 'Buffer Window' },
      { value: 'Ages 50–80', label: 'Target Demographic' }
    ],
    checklist: [
      'Strict age (50–80) & residency verification',
      'Active checking/savings account payment verification',
      'Clear intent to purchase before transferring'
    ]
  },
  {
    id: 'medicare',
    category: 'insurance',
    colorTheme: 'cyan',
    Icon: ShieldCheck,
    pill: 'Senior Health',
    title: 'Medicare Advantage & Supp',
    desc: 'Compliant beneficiary transfers for AEP, OEP, and year-round Dual-Eligible (D-SNP) Medicare enrollments.',
    metrics: [
      { value: 'Part A & B', label: 'Active Card Check' },
      { value: 'CMS Compliant', label: 'Script Protocols' }
    ],
    checklist: [
      'Medicare Part A & B red-white-blue card check',
      'Zero misleading benefit marketing claims',
      'Special Enrollment Period (SEP / D-SNP) targeting'
    ]
  },
  {
    id: 'ssdi',
    category: 'services',
    colorTheme: 'rose',
    Icon: Scale,
    pill: 'Legal Advocacy',
    title: 'SSDI Disability Advocacy',
    desc: 'Connecting disabled claimants unable to work with national advocacy networks and accredited Social Security disability law firms.',
    metrics: [
      { value: '12+ Months', label: 'Out of Work' },
      { value: 'Unrepresented', label: 'Status Verified' }
    ],
    checklist: [
      'Medical treatment and disability duration intake',
      'Strict verification that claimant is not represented',
      'Structured intake payload delivered directly to legal desks'
    ]
  },
  {
    id: 'home-improvement',
    category: 'services',
    colorTheme: 'emerald',
    Icon: SunMedium,
    pill: 'Home Services',
    title: 'Home Improvement & Solar',
    desc: 'Warm homeowner live transfers and confirmed appointments for Solar, Roofing, Windows, HVAC, and Remodeling contractors.',
    metrics: [
      { value: 'Homeowner', label: 'Single-Family Only' },
      { value: 'Utility Check', label: 'Monthly Minimums' }
    ],
    checklist: [
      'Deed and single-family homeowner pre-verification',
      'Monthly electric utility spend & credit check',
      'Live line transfer or confirmed calendar booking'
    ]
  },
  {
    id: 'bpo',
    category: 'bpo',
    colorTheme: 'indigo',
    Icon: Headphones,
    pill: 'Dedicated Staff',
    title: 'Omnichannel BPO & Support',
    desc: 'Dedicated inbound customer service, helpdesk support, and outbound campaign pods tailored directly to your brand guidelines.',
    metrics: [
      { value: 'Flexible Shifts', label: 'Custom Schedule' },
      { value: 'Trained Pods', label: 'Dedicated Agents' }
    ],
    checklist: [
      'Inbound call handling, email ticketing & live chat',
      'Custom script calibration & supervisor QA reviews',
      'Transparent daily reporting and KPI tracking'
    ]
  }
];

const filters = [
  { label: 'All Verticals', value: 'all' },
  { label: 'Insurance & Health', value: 'insurance' },
  { label: 'Home & Advocacy', value: 'services' },
  { label: 'Enterprise BPO', value: 'bpo' }
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

  const filteredVerticals = verticalsData.filter(v => 
    activeFilter === 'all' ? true : v.category === activeFilter
  );

  return (
    <section id="verticals" className="py-[110px] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Intro */}
        <div className="max-w-[740px] mx-auto text-center mb-14">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
            Campaign Verticals
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
            Specialized Live Transfers Tailored to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
              High-Value Industries.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Every transfer is screened by dedicated agents trained in vertical-specific rebuttals, state licensing criteria, and strict TCPA verification protocols.
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
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
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

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredVerticals.map((card) => {
            const theme = getThemeStyles(card.colorTheme);
            return (
              <div
                key={card.id}
                className="group relative bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:bg-[#11172A] hover:border-indigo-500/40 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(99,102,241,0.15)] flex flex-col justify-between"
              >
                {/* Laser Top Highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent rounded-t-[22px] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${theme.iconBg} shadow-inner`}>
                      <card.Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${theme.pill}`}>
                      {card.pill}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-2.5">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 min-h-[44px]">
                    {card.desc}
                  </p>

                  {/* Key Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-white/[0.025] border border-white/[0.06] mb-6">
                    {card.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-heading text-sm font-bold text-white">
                          {metric.value}
                        </span>
                        <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {card.checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[0.83rem] text-slate-300 leading-snug">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
