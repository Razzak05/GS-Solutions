import React from 'react';
import { Search, Sliders, PlayCircle, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    label: 'Discovery & Scripting',
    title: 'Qualification Calibration',
    desc: 'We review your licensed states, target demographics, buffer thresholds, and custom rebuttal workflows to align with your sales scripts.',
    Icon: Search
  },
  {
    num: '02',
    label: 'Telephony Integration',
    title: 'Routing & CRM Setup',
    desc: 'We configure dedicated DID phone numbers, test 3-way conference audio quality, and connect automated webhooks to your CRM or dialer.',
    Icon: Sliders
  },
  {
    num: '03',
    label: 'Introductory Pilot',
    title: 'Pacing Calibration',
    desc: 'We run an introductory batch of transfers to verify connect speed, audio clarity, and ensure transfer pacing matches your floor capacity.',
    Icon: PlayCircle
  },
  {
    num: '04',
    label: 'Full Deployment',
    title: 'Ongoing QA & Scaling',
    desc: 'We systematically scale daily transfer volume with dedicated agent pods, regular supervisor QA reviews, and continuous script optimization.',
    Icon: TrendingUp
  }
];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-[110px] relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
            Structured Execution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
            A Structured Process from <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Pilot to Predictable Scale.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            A battle-tested 4-stage onboarding roadmap designed for seamless technical integration and alignment with your sales floor capacity.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Laser Top Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl sm:text-4xl font-black text-indigo-500/30 group-hover:text-indigo-400/60 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <step.Icon className="w-4 h-4" />
                  </div>
                </div>

                <span className="block text-[0.72rem] font-bold uppercase tracking-wider text-sky-400 mb-2">
                  {step.label}
                </span>

                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
