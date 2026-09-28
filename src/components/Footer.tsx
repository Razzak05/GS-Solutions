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
                  Comprehensive Solutions
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Comprehensive lead generation, telemarketing services, customer support, and dedicated contact center operations tailored to your business needs.
            </p>
          </div>

          {/* Services Col */}
          <div>
            <span className="block font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Our Services
            </span>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">ACA (Healthcare)</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Final Expense Insurance</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Medicare Support</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">SSDI Advocacy</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Home Improvement &amp; Solar</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">24/7 Customer Support</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Lead Generation &amp; Telemarketing</a></li>
            </ul>
          </div>

          {/* Company & Why Choose Us Col */}
          <div>
            <span className="block font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
              Why Choose Us
            </span>
            <ul className="space-y-3">
              <li><a href="#why-choose-us" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Experienced Team</a></li>
              <li><a href="#why-choose-us" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Quality Assurance</a></li>
              <li><a href="#why-choose-us" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">100% TCPA Compliance</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Execution Process</a></li>
              <li><a href="#estimator" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Capacity Calculator</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-indigo-300 text-sm transition-colors">Frequently Asked Questions</a></li>
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
            <a href="#why-choose-us" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Compliance &amp; Quality</a>
            <a href="#why-choose-us" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Service Standards</a>
            <a href="#contact" className="text-slate-500 hover:text-slate-300 text-xs sm:text-sm transition-colors">Pilot Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
