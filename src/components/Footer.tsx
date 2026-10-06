import React from "react";
import { Phone, MessageSquare, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070D] border-t border-white/[0.08] pt-16 pb-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center font-heading font-extrabold text-sm text-white">
                GS
              </div>
              <div className="flex flex-col">
                <span className="text-base font-heading font-extrabold tracking-tight text-white leading-tight">
                  GS Solutions
                </span>
                <span className="text-[0.66rem] font-bold uppercase tracking-[1.4px] text-indigo-400">
                  Lead Generation &amp; BPO
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Comprehensive Lead Generation, Telemarketing, 24/7 Customer Support, and Contact Center services tailored to your business needs.
            </p>
            <div className="text-xs text-slate-500 font-medium">
              100% TCPA Compliant • DNC Scrubbed • Jornaya &amp; TrustedForm Verified
            </div>
          </div>

          {/* Verticals Col */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Our Services
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">ACA (Affordable Care Act)</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Auto Insurance</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Medicare Advantage &amp; Supp</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Final Expense Insurance</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">SSDI Disability Advocacy</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Home Improvement &amp; Solar</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Pest Control Services</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Inbound &amp; Outbound Pods</a></li>
            </ul>
          </div>

          {/* Infrastructure Col */}
          <div className="lg:col-span-2">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Company
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-choose-us" className="text-slate-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact Desk</a></li>
            </ul>
          </div>

          {/* Contact Desk Col */}
          <div className="lg:col-span-3">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-4 font-heading">
              Direct Contact
            </span>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="tel:+918453069747" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                  <Phone size={13} className="text-indigo-400 shrink-0" />
                  <span>+91 8453069747</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/918453069747" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors group">
                  <MessageSquare size={13} className="text-[#25D366] shrink-0" />
                  <span>WhatsApp: +91 8453069747</span>
                </a>
              </li>
              <li>
                <a href="mailto:gssolutionsaca@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-sky-400 transition-colors group">
                  <Mail size={13} className="text-sky-400 shrink-0" />
                  <span className="break-all">gssolutionsaca@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 leading-relaxed pt-1">
                <MapPin size={13} className="text-slate-500 shrink-0 mt-0.5" />
                <span>LBS Marg, Bhandup (W) Mumbai-400078</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06] text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} GS Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <a href="#why-choose-us" className="hover:text-white transition-colors">TCPA Standards</a>
            <a href="#why-choose-us" className="hover:text-white transition-colors">Privacy &amp; Security</a>
            <a href="#contact" className="hover:text-white transition-colors">Get Started</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
