import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Users, PhoneCall, Webhook } from 'lucide-react';

export default function StandardsSection() {
  return (
    <section id="standards" className="py-[110px] relative w-full overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
            Enterprise Governance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
            Built on Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Compliance &amp; Quality QA.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            We protect your agency reputation and sales floor efficiency through automated TCPA scrubbing, multi-tier auditing, and transparent buffer protection terms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: TCPA Engine (Span 2) */}
          <div className="lg:col-span-2 bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Regulatory Security
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Automated TCPA &amp; DNC Protection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Every record is scrubbed against Federal, State, and Internal Do-Not-Call registries. Consent documentation, TrustedForm tokens, and Jornaya lead certificates are recorded with millisecond-exact timestamps for full audit protection.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Jornaya &amp; TrustedForm
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Litigator Scrubbing
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Full Audit Trail
              </span>
            </div>
          </div>

          {/* Card 2: Dual QA (Span 1) */}
          <div className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Quality Assurance
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Multi-Layer Quality Auditing
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                100% of calls are recorded. Supervisors review recordings daily to ensure qualification scripts and professional standards are rigorously upheld.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                100% Call Recording
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Supervisor QA
              </span>
            </div>
          </div>

          {/* Card 3: Buffer Policy (Span 1) */}
          <div className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Fair Terms
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Transparent Buffer Terms
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Standard buffer windows (90–120 seconds). Early disconnects or unqualified calls are credited automatically under our transparent master service agreement.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                90–120s Windows
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Automated Credits
              </span>
            </div>
          </div>

          {/* Card 4: Dedicated Contact Centers (Span 1) */}
          <div className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Dedicated Pods
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Dedicated Campaign Seats
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Agents trained specifically on your product rebuttal flows, pain points, and target demographics to maximize conversion on the closing floor.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Dedicated Seating
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Continuous Coaching
              </span>
            </div>
          </div>

          {/* Card 5: Carrier Telephony (Span 1) */}
          <div className="bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Infrastructure
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Carrier-Grade SIP Telephony
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                High-fidelity audio routes, redundant carrier gateways, and sub-second 3-way conference bridging for zero drop rate warm transfers.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                HD SIP Audio
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Zero Drop Routing
              </span>
            </div>
          </div>

          {/* Card 6: CRM Webhooks & Integrations (Span 2) */}
          <div className="lg:col-span-2 bg-[#0B0F19]/90 border border-white/[0.08] rounded-[22px] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#11172A] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 group-hover:via-indigo-400/50 to-transparent"></div>
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/[0.12] text-indigo-400 border border-indigo-500/[0.22] flex items-center justify-center">
                  <Webhook className="w-5 h-5" />
                </div>
                <span className="text-[0.72rem] font-bold uppercase tracking-wider text-sky-400">
                  Seamless Connection
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                Turnkey CRM &amp; Telephony Webhooks
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Direct DID phone routing, warm 3-way handoffs, and instant webhook payloads to GoHighLevel, VICIdial, Salesforce, RingCentral, HubSpot, and custom REST APIs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                DID &amp; SIP Routing
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                Instant Webhooks
              </span>
              <span className="text-xs font-semibold px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-slate-300">
                3-Way Warm Handoff
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
