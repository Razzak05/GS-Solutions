import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Users, PhoneCall, Webhook } from 'lucide-react';
import Reveal from '@/components/Reveal';

const benefits = [
  {
    num: '01',
    title: 'Experienced Team',
    tag: 'Industry Expertise',
    desc: 'Our skilled professionals bring years of industry expertise across healthcare, insurance, legal advocacy, and customer acquisition.',
    badges: ['Seasoned Leaders', 'Vertical Specialists', 'Continuous Training'],
    Icon: Award,
  },
  {
    num: '02',
    title: 'Quality Assurance',
    tag: 'Service Excellence',
    desc: 'Rigorous quality checks ensure top-notch service delivery. 100% of calls are recorded, audited, and scored by dedicated supervisor QA desks.',
    badges: ['100% Call Audits', 'Script Adherence', 'Daily QA Scoring'],
    Icon: CheckCircle2,
  },
  {
    num: '03',
    title: '100% TCPA Compliance',
    tag: 'Regulatory Security',
    desc: 'Every consumer lead is scrubbed against Federal, State, and Internal DNC registries with Jornaya and TrustedForm proof-of-opt-in tokens.',
    badges: ['Jornaya & TrustedForm', 'Litigator Scrubbing', 'Full Audit Trail'],
    Icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Dedicated Agent Pods',
    tag: 'Brand Alignment',
    desc: 'Dedicated offshore seating and trained agents dedicated specifically to your brand guidelines, objection handling, and custom workflows.',
    badges: ['Dedicated Seating', 'Custom Workflows', 'Performance Pacing'],
    Icon: Users,
  },
  {
    num: '05',
    title: 'Carrier-Grade Telephony',
    tag: 'Infrastructure',
    desc: 'High-fidelity audio routes, redundant carrier gateways, and sub-second 3-way conference bridging for zero-drop warm live transfers.',
    badges: ['HD SIP Audio', 'Sub-Second Handoff', 'Zero Drop Routing'],
    Icon: PhoneCall,
  },
  {
    num: '06',
    title: 'Turnkey CRM Integration',
    tag: 'Seamless Connection',
    desc: 'Instant data payloads delivered straight into GoHighLevel, VICIdial, Salesforce, RingCentral, HubSpot, or custom REST APIs as the call transfers.',
    badges: ['DID & SIP Routing', 'Instant Webhooks', 'Real-Time Sync'],
    Icon: Webhook,
  }
];

export default function StandardsSection() {
  return (
    <section id="why-choose-us" className="py-[110px] relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro */}
        <Reveal delay={100} duration={600} direction="up">
          <div className="text-center max-w-[760px] mx-auto mb-16">
            <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
              Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Working With Us</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              We deliver excellence through dedicated service and professional expertise
            </p>
          </div>
        </Reveal>

        {/* Benefits Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <Reveal 
              key={idx} 
              delay={(idx % 3) * 100} 
              duration={600} 
              direction="up" 
              distance={20}
              className={idx === 0 || idx === 5 ? 'lg:col-span-2' : 'lg:col-span-1'}
            >
              <div 
                className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7),0_0_20px_-5px_rgba(99,102,241,0.15)] relative overflow-hidden group flex flex-col justify-between h-full"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent transition-colors duration-300"></div>
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
                      <benefit.Icon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-xs font-bold text-indigo-400/60">
                        {benefit.num}
                      </span>
                      <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                        {benefit.tag}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors duration-200">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {benefit.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                  {benefit.badges.map((badge, bIdx) => (
                    <span 
                      key={bIdx} 
                      className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300 hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white transition-all duration-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

