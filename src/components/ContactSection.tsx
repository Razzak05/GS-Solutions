"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullName") as string;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setUserName(name || "Partner");
      (e.target as HTMLFormElement).reset();
      
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-[110px] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Info Panel */}
          <div className="flex flex-col justify-center">
            <Reveal delay={100} duration={600} direction="up">
              <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full w-fit">
                Get In Touch
              </span>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
                Discuss Your Campaign <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Requirements.</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-md leading-relaxed font-normal">
                Connect with our team to discuss lead generation services, custom telemarketing pods, or omnichannel customer support solutions.
              </p>

              {/* Operational Status Pill */}
              <div className="inline-flex items-center gap-2.5 bg-emerald-500/[0.08] border border-emerald-500/25 px-4 py-2 rounded-full w-fit mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-300 tracking-wide">
                  Direct Desk Active • Mon–Sat Operations
                </span>
              </div>
            </Reveal>

            {/* Channels Stack */}
            <div className="space-y-4">
              
              {/* Channel 1: Phone */}
              <Reveal delay={200} duration={500} direction="left" distance={16}>
                <a 
                  href="tel:+918453069747" 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B0F19]/90 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#11172A] hover:translate-x-1.5 transition-all duration-300 group backdrop-blur-xl shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Direct Phone Desk
                    </span>
                    <span className="font-heading text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      +91 8453069747
                    </span>
                    <span className="text-xs text-indigo-400 mt-1 font-medium">
                      Click to Call Directly
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Channel 2: WhatsApp */}
              <Reveal delay={280} duration={500} direction="left" distance={16}>
                <a 
                  href="https://wa.me/918453069747" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B0F19]/90 border border-white/[0.08] hover:border-[#25D366]/40 hover:bg-[#11172A] hover:translate-x-1.5 transition-all duration-300 group backdrop-blur-xl shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Instant WhatsApp
                    </span>
                    <span className="font-heading text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +91 8453069747
                    </span>
                    <span className="text-xs text-[#25D366] mt-1 font-medium">
                      Direct Executive Chat
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Channel 3: Email */}
              <Reveal delay={360} duration={500} direction="left" distance={16}>
                <a 
                  href="mailto:gssolutionsaca@gmail.com" 
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B0F19]/90 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#11172A] hover:translate-x-1.5 transition-all duration-300 group backdrop-blur-xl shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Email Desk
                    </span>
                    <span className="font-heading text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors break-all">
                      gssolutionsaca@gmail.com
                    </span>
                    <span className="text-xs text-sky-400 mt-1 font-medium">
                      Send Us an Email
                    </span>
                  </div>
                </a>
              </Reveal>

              {/* Channel 4: HQ Location */}
              <Reveal delay={440} duration={500} direction="left" distance={16}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#0B0F19]/60 border border-white/[0.05] backdrop-blur-xl">
                  <div className="w-11 h-11 rounded-xl bg-slate-800/60 border border-white/[0.08] flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                      Operations Headquarters
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed font-medium">
                      LBS Marg, Bhandup (W) Mumbai-400078
                    </span>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

          {/* Right Form Panel */}
          <Reveal delay={200} duration={700} direction="up" distance={24} className="w-full">
            <div className="bg-gradient-to-b from-[#0F1628]/95 to-[#0A0E1C]/98 border border-white/[0.1] rounded-[28px] p-7 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"></div>
              
              <div className="mb-7">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  Service Inquiry Form
                </h3>
                <p className="text-slate-400 text-sm">
                  Submit your campaign parameters to receive our service specifications and a tailored proposal.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-5 flex items-start gap-3.5 animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-base font-bold text-emerald-300 mb-1">
                      Inquiry Received Successfully
                    </h4>
                    <p className="text-emerald-400/90 text-sm leading-relaxed">
                      Thank you, {userName}. Our campaign desk has received your specifications and will reach out within 15 minutes.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Full Name *
                    </label>
                    <input 
                      required 
                      name="fullName" 
                      type="text" 
                      className="w-full bg-[#10172A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600" 
                      placeholder="Your Name" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Work Email *
                    </label>
                    <input 
                      required 
                      name="email" 
                      type="email" 
                      className="w-full bg-[#10172A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600" 
                      placeholder="name@company.com" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Phone Number *
                    </label>
                    <input 
                      required 
                      name="phone" 
                      type="tel" 
                      className="w-full bg-[#10172A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600" 
                      placeholder="+1 (555) 000-0000" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">
                      Primary Service *
                    </label>
                    <div className="relative">
                      <select 
                        required 
                        name="vertical" 
                        defaultValue=""
                        className="w-full bg-[#10172A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                      >
                        <option value="" disabled className="bg-[#0A0E1A] text-slate-500">Select a Service</option>
                        <option value="ACA" className="bg-[#0A0E1A]">ACA (Affordable Care Act)</option>
                        <option value="Final Expense" className="bg-[#0A0E1A]">Final Expense Life Insurance</option>
                        <option value="Medicare" className="bg-[#0A0E1A]">Medicare Advantage &amp; Supp</option>
                        <option value="Auto Insurance" className="bg-[#0A0E1A]">Auto Insurance</option>
                        <option value="SSDI" className="bg-[#0A0E1A]">SSDI Disability Advocacy</option>
                        <option value="Home Improvement" className="bg-[#0A0E1A]">Home Improvement &amp; Solar</option>
                        <option value="Pest Control" className="bg-[#0A0E1A]">Pest Control Services</option>
                        <option value="Inbound" className="bg-[#0A0E1A]">Inbound Services &amp; Call Center</option>
                        <option value="Outbound" className="bg-[#0A0E1A]">Outbound Telemarketing &amp; Pods</option>
                        <option value="Customer Support" className="bg-[#0A0E1A]">24/7 Customer Support</option>
                        <option value="Lead Generation" className="bg-[#0A0E1A]">High-Quality Lead Generation</option>
                        <option value="Telemarketing" className="bg-[#0A0E1A]">Professional Telemarketing</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Target Demographics &amp; Campaign Notes
                  </label>
                  <textarea 
                    name="notes" 
                    rows={4} 
                    className="w-full bg-[#10172A] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all placeholder:text-slate-600 resize-y" 
                    placeholder="Target states, campaign goals, specific qualification needs..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="shimmer-effect group relative overflow-hidden w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-[0_4px_25px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_35px_rgba(99,102,241,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-0 h-[1px] bg-white/40"></span>
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Service Inquiry</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

