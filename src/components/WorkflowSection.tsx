import React from 'react';
import { Search, Sliders, PlayCircle, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';

const steps = [
  {
    num: '01',
    label: 'Discovery & Consultation',
    title: 'Campaign Calibration',
    desc: 'We analyze your target demographics, licensing, qualification questions, and custom scripts to tailor the ideal lead acquisition strategy.',
    Icon: Search
  },
  {
    num: '02',
    label: 'System & CRM Setup',
    title: 'Routing Integration',
    desc: 'We set up dedicated DID phone numbers, 3-way warm transfer lines, and real-time CRM webhooks (GoHighLevel, VICIdial, Salesforce, HubSpot).',
    Icon: Sliders
  },
  {
    num: '03',
    label: 'Introductory Pilot',
    title: 'Pacing & QA Testing',
    desc: 'We launch a controlled pilot batch to test connect rates, transfer timing, and script adherence, ensuring seamless alignment with your sales floor.',
    Icon: PlayCircle
  },
  {
    num: '04',
    label: 'Full Deployment',
    title: 'Ongoing QA & Scale',
    desc: 'We scale your daily lead flow with dedicated agent pods, continuous supervisor QA audits, and weekly performance reviews.',
    Icon: TrendingUp
  }
];

export default function WorkflowSection() {
  return (
    <section id="about" className="py-[110px] relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro */}
        <Reveal delay={100} duration={600} direction="up">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
              A Proven Process from <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Pilot to Predictable Scale.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              A structured 4-stage onboarding roadmap designed to integrate seamlessly with your technology stack and accelerate revenue growth.
            </p>
          </div>
        </Reveal>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 100} duration={600} direction="up" distance={20}>
              <div 
                className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7),0_0_20px_-5px_rgba(99,102,241,0.15)] relative overflow-hidden group flex flex-col justify-between h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent transition-colors duration-300"></div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-indigo-500/30 group-hover:text-indigo-400/80 group-hover:scale-105 transition-all duration-300">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                      <step.Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="block text-[0.72rem] font-bold uppercase tracking-wider text-sky-400 mb-2">
                    {step.label}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-200">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

