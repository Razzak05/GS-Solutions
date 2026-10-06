import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision Grid with Radial Mask */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, #000 40%, transparent 90%)',
        }}
      />

      {/* Top Primary Aura */}
      <div 
        className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[850px] h-[650px] rounded-full blur-[140px] opacity-40 pointer-events-none animate-pulse-aura"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 75%)'
        }}
      />

      {/* Right Accent Glow */}
      <div 
        className="absolute top-[35%] right-[-180px] w-[580px] h-[580px] rounded-full blur-[150px] opacity-25 pointer-events-none animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(129, 140, 248, 0.1) 50%, transparent 70%)'
        }}
      />

      {/* Bottom Accent Glow */}
      <div 
        className="absolute bottom-[-160px] left-[-160px] w-[620px] h-[620px] rounded-full blur-[160px] opacity-20 pointer-events-none animate-float-reverse"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)'
        }}
      />
    </div>
  );
}
