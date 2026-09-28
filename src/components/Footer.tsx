import React from "react";
import { Phone, MessageSquare, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04060B] border-t border-white/[0.08] pt-[72px] pb-[36px] px-4 sm:px-6 relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="relative w-[34px] h-[34px] flex items-center justify-center">
                <span className="absolute inset-0 rounded-lg bg-indigo-500 blur-[8px] opacity-40 group-hover:opacity-70 transition-opacity"></span>
                <span className="relative z-10 w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center font-heading font-extrabold text-[0.95rem] text-white tracking-tight border border-white/20">
                  GS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-extrabold tracking-tight text-white leading-tight">
                  GS Solutions
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[1.4px] text-indigo-400">
                  Enterprise BPO
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Precision B2B lead generation, verified warm live transfers, and dedicated contact center pods engineered for high-performance sales floors.
            </p>
          </div>

          {/* Verticals Col */}
          <div>
            <span className="block font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Campaign Verticals
            </span>
            <ul className="space-y-3">
              <li><a href="#verticals" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">ACA Health Insurance</a></li>
              <li><a href="#verticals" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Final Expense Life</a></li>
              <li><a href="#verticals" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Medicare Advantage</a></li>
              <li><a href="#verticals" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">SSDI Disability Claims</a></li>
              <li><a href="#verticals" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Home Improvement &amp; Solar</a></li>
            </ul>
          </div>

          {/* Standards Col */}
          <div>
            <span className="block font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Standards &amp; Process
            </span>
            <ul className="space-y-3">
              <li><a href="#standards" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">TCPA &amp; DNC Compliance</a></li>
              <li><a href="#standards" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Quality Auditing Protocols</a></li>
              <li><a href="#standards" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Buffer &amp; Credit Terms</a></li>
              <li><a href="#workflow" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Onboarding Roadmap</a></li>
              <li><a href="#estimator" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Capacity Calculator</a></li>
            </ul>
          </div>

          {/* Contact Desk Col */}
          <div>
            <span className="block font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact Desk
            </span>
            <ul className="space-y-3.5">
              <li>
                <a href="tel:+916289553194" className="flex items-center gap-2.5 text-slate-300 hover:text-indigo-300 text-sm transition-colors group">
                  <Phone size={15} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>+91 6289553194</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/916289553194" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-[#25D366] text-sm transition-colors group">
                  <MessageSquare size={15} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Direct Desk</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                <MapPin size={15} className="text-slate-500 shrink-0 mt-0.5" />
                <span>Sector V, Salt Lake, Kolkata 700091</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-7 border-t border-white/[0.08]">
          <p className="text-slate-500 text-xs sm:text-sm">
            &copy; 2026 GS Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-7">
            <a href="#standards" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Compliance &amp; Quality</a>
            <a href="#standards" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Buffer Policy Terms</a>
            <a href="#contact" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Pilot Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
