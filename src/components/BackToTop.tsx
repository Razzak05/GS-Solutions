"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-[#0F1527]/90 border border-white/10 text-slate-300 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-md group
        ${isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-3 pointer-events-none"}
        hover:bg-indigo-600 hover:text-white hover:border-indigo-500/50 hover:shadow-[0_0_24px_rgba(99,102,241,0.55)] hover:-translate-y-1 active:translate-y-0 focus:outline-none`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  );
}
