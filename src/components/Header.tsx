'use client';

import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || mobileMenuOpen
        ? 'bg-[#06080F] border-b border-white/[0.08] shadow-[0_12px_32px_-10px_rgba(0,0,0,0.7)]' 
        : 'bg-[#06080F]/90 backdrop-blur-md border-b border-white/[0.04]'
    }`}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[74px] flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-[38px] h-[38px] flex items-center justify-center">
            <span className="absolute inset-0 rounded-xl bg-indigo-500 blur-[10px] opacity-40 group-hover:opacity-75 transition-opacity"></span>
            <span className="relative z-10 w-[38px] h-[38px] rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-sky-400 flex items-center justify-center font-heading font-extrabold text-[1.05rem] text-white tracking-tight shadow-[0_4px_14px_rgba(99,102,241,0.4)] border border-white/20">
              GS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-[1.18rem] font-extrabold tracking-tight text-white leading-tight flex items-center gap-1.5">
              GS Solutions
            </span>
            <span className="text-[0.66rem] font-bold uppercase tracking-[1.6px] text-indigo-400">
              Enterprise Lead Generation
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-white/[0.03] border border-white/[0.08] rounded-full py-1 px-1.5 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          <a href="#home" className="px-4 py-1.5 text-[0.84rem] font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.08] transition-all">
            Home
          </a>
          <a href="#about" className="px-4 py-1.5 text-[0.84rem] font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.08] transition-all">
            About
          </a>
          <a href="#services" className="px-4 py-1.5 text-[0.84rem] font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.08] transition-all">
            Services
          </a>
          <a href="#why-choose-us" className="px-4 py-1.5 text-[0.84rem] font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.08] transition-all">
            Why Choose Us
          </a>
          <a href="#contact" className="px-4 py-1.5 text-[0.84rem] font-medium text-slate-300 rounded-full hover:text-white hover:bg-white/[0.08] transition-all">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a 
            href="tel:+918453069747" 
            className="flex items-center gap-2 px-4 py-2 bg-white/[0.035] border border-white/[0.08] rounded-full text-[0.82rem] font-semibold text-slate-200 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-sm"
            aria-label="Call Direct Desk"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <Phone size={14} className="text-indigo-400" />
            <span>Direct Desk</span>
          </a>
          
          <a 
            href="#contact" 
            className="shimmer-effect group relative overflow-hidden flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white rounded-full text-[0.84rem] font-semibold shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_28px_rgba(99,102,241,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-white/20"
          >
            <span className="absolute inset-x-0 top-0 h-[1px] bg-white/40"></span>
            <span>Get Started</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors focus:outline-none" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div 
        className={`fixed inset-0 top-[74px] bg-black/80 backdrop-blur-md transition-opacity duration-300 lg:hidden z-40 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile nav drawer */}
      <div className={`fixed top-[74px] right-0 bottom-0 w-full max-w-[320px] bg-[#070A14] border-l border-white/[0.12] p-6 transition-transform duration-300 lg:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.95)] flex flex-col justify-between z-50 overflow-y-auto ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <nav className="flex flex-col gap-1.5">
          <a href="#home" className="px-4 py-3 text-[0.95rem] font-medium text-slate-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#about" className="px-4 py-3 text-[0.95rem] font-medium text-slate-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#services" className="px-4 py-3 text-[0.95rem] font-medium text-slate-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setMobileMenuOpen(false)}>
            Services
          </a>
          <a href="#why-choose-us" className="px-4 py-3 text-[0.95rem] font-medium text-slate-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setMobileMenuOpen(false)}>
            Why Choose Us
          </a>
          <a href="#contact" className="px-4 py-3 text-[0.95rem] font-medium text-slate-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-all" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <div className="space-y-3 pt-6 border-t border-white/[0.08]">
          <a 
            href="tel:+918453069747" 
            className="flex items-center justify-center gap-2 px-5 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white font-semibold text-sm w-full"
          >
            <Phone size={16} className="text-indigo-400" />
            <span>Direct Desk: +91 8453069747</span>
          </a>
          <a 
            href="#contact" 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 text-white rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(99,102,241,0.35)] w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Request Proposal</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
