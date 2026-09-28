"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "How does the warm live transfer process work?",
    answer: "Our dedicated agent pre-screens the consumer according to your specific vertical criteria. Once verified, the agent places the consumer on a brief hold, initiates a 3-way conference to your direct broker DID line, introduces the prospect, and hands off once your licensed rep confirms receipt.",
  },
  {
    question: "How do you handle TCPA & DNC compliance?",
    answer: "All leads are scrubbed against national and state Do-Not-Call registries. Every call recording and opt-in timestamp is archived and accessible for full audit transparency with Jornaya and TrustedForm lead certificates.",
  },
  {
    question: "What is your buffer time policy?",
    answer: "We provide standard buffer times (typically 90 to 120 seconds depending on vertical). If a consumer disconnects prior to the buffer expiration or fails clear qualifying criteria, the transfer is credited automatically according to our master service agreement.",
  },
  {
    question: "Can leads be pushed directly to our CRM or dialer?",
    answer: "Yes. We integrate directly with major platforms including GoHighLevel, HubSpot, Salesforce, VICIdial, RingCentral, and custom webhooks for instant data delivery.",
  },
  {
    question: "How quickly can a pilot campaign be launched?",
    answer: "Following initial script alignment and routing verification, most pilot campaigns can go live within 24 to 48 hours. Custom dedicated pod setups typically take 3 to 5 business days for dedicated training.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-[110px] relative z-10">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Questions.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Clear information regarding our lead qualification, transfers, buffer terms, and technical integrations.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="flex flex-col gap-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-[#0B0F19]/90 border rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                  isActive 
                    ? 'border-indigo-500/40 bg-[#11172A] shadow-[0_10px_30px_-10px_rgba(99,102,241,0.15)]' 
                    : 'border-white/[0.08] hover:border-white/20 hover:bg-[#0E1424]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 font-heading text-base sm:text-lg font-bold text-white text-left focus:outline-none cursor-pointer"
                  aria-expanded={isActive}
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isActive 
                      ? 'rotate-180 bg-indigo-500/20 text-indigo-300' 
                      : 'bg-white/[0.04] text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <div 
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{ maxHeight: isActive ? '250px' : '0px', opacity: isActive ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-slate-400 text-sm sm:text-[0.95rem] leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
