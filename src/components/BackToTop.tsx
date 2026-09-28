"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[28px] right-[28px] z-40 w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[#0F172A]/90 backdrop-blur-xl border border-white/20 text-slate-300 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] cursor-pointer
        ${isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3 pointer-events-none"}
        hover:bg-indigo-600 hover:text-white hover:border-indigo-400 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(99,102,241,0.5)] focus:outline-none`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-4 h-4" />
    </button>
  );
}
