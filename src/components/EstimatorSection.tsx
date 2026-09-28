"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, Shield, Activity, Users, HelpCircle } from "lucide-react";

type Vertical = "aca" | "final-expense" | "medicare" | "ssdi" | "home-improvement" | "bpo";

interface VerticalConfig {
  name: string;
  buffer: number;
  label: string;
}

const VERTICAL_CONFIGS: Record<Vertical, VerticalConfig> = {
  aca: { name: "ACA Health Insurance", buffer: 120, label: "120s Buffer Protection" },
  "final-expense": { name: "Final Expense Life Insurance", buffer: 90, label: "90s Buffer Protection" },
  medicare: { name: "Medicare Advantage & Supp", buffer: 120, label: "120s Buffer Protection" },
  ssdi: { name: "SSDI Disability Claims", buffer: 120, label: "120s Buffer Protection" },
  "home-improvement": { name: "Home Improvement & Solar", buffer: 90, label: "90s Buffer Protection" },
  bpo: { name: "Omnichannel BPO Support", buffer: 120, label: "Custom Pod SLA" }
};

export default function EstimatorSection() {
  const [vertical, setVertical] = useState<Vertical>("aca");
  const [dailyTransfers, setDailyTransfers] = useState(100);
  const [licensedReps, setLicensedReps] = useState(10);

  const monthlyVolume = useMemo(() => dailyTransfers * 22, [dailyTransfers]);
  const dailyPerRep = useMemo(() => Math.max(1, Math.round(dailyTransfers / licensedReps)), [dailyTransfers, licensedReps]);

  const getSliderTrack = (val: number, min: number, max: number) => {
    const percentage = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #6366F1 0%, #818CF8 ${percentage}%, #10172A ${percentage}%, #10172A 100%)`;
  };

  return (
    <section id="estimator" className="py-[110px] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div className="bg-gradient-to-b from-[#0E1424]/95 to-[#090D19]/98 border border-white/[0.1] rounded-[28px] p-8 sm:p-12 lg:p-14 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Section Header */}
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <span className="inline-flex items-center justify-center px-4 py-1.5 mb-5 text-[0.76rem] font-bold uppercase tracking-[1.8px] text-indigo-400 bg-indigo-500/[0.08] border border-indigo-500/25 rounded-full">
              Floor Capacity Tool
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-5 tracking-tight">
              Calculate Your Monthly <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">Lead Flow &amp; Staffing Pacing.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              Model daily transfer volume and rep pacing to determine optimal staffing requirements for your licensed sales floor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
            
            {/* Left Controls */}
            <div className="space-y-8">
              
              {/* Vertical Select */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-200">
                  Campaign Vertical
                </label>
                <div className="relative">
                  <select 
                    value={vertical} 
                    onChange={(e) => setVertical(e.target.value as Vertical)}
                    className="w-full bg-[#10172A] border border-white/[0.1] rounded-2xl p-4 text-sm font-medium text-white appearance-none focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 18px center',
                    }}
                  >
                    {Object.entries(VERTICAL_CONFIGS).map(([key, config]) => (
                      <option key={key} value={key} className="bg-[#0A0E1A] text-white py-2">
                        {config.name} ({config.buffer}s Buffer)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Slider 1: Daily Transfers */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">
                    Desired Daily Transfers
                  </label>
                  <span className="font-heading text-base font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                    {dailyTransfers.toLocaleString()} / day
                  </span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="500" 
                  step="10" 
                  value={dailyTransfers} 
                  onChange={(e) => setDailyTransfers(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: getSliderTrack(dailyTransfers, 20, 500) }}
                  aria-label="Desired Daily Transfers"
                />
                <div className="flex justify-between text-[0.72rem] font-semibold text-slate-500 px-1">
                  <span>20 / day</span>
                  <span>150</span>
                  <span>300</span>
                  <span>400</span>
                  <span>500+ / day</span>
                </div>
              </div>

              {/* Slider 2: Licensed Reps */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-200">
                    Licensed Reps on Floor
                  </label>
                  <span className="font-heading text-base font-bold text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-lg border border-indigo-500/20">
                    {licensedReps} Rep{licensedReps > 1 ? 's' : ''}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="50" 
                  step="1" 
                  value={licensedReps} 
                  onChange={(e) => setLicensedReps(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{ background: getSliderTrack(licensedReps, 2, 50) }}
                  aria-label="Licensed Reps on Floor"
                />
                <div className="flex justify-between text-[0.72rem] font-semibold text-slate-500 px-1">
                  <span>2 Reps</span>
                  <span>12</span>
                  <span>25</span>
                  <span>38</span>
                  <span>50 Reps</span>
                </div>
              </div>

            </div>

            {/* Right Output Card */}
            <div className="bg-gradient-to-b from-[#11182B]/95 to-[#0D1322]/98 border border-white/[0.14] rounded-[24px] p-7 sm:p-9 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"></div>

              <div className="space-y-6">
                
                {/* Metric 1: Monthly Total */}
                <div className="pb-5 border-b border-white/[0.08]">
                  <span className="block text-[0.76rem] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Monthly Qualified Volume
                  </span>
                  <div className="font-heading text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300 tracking-tight">
                    {monthlyVolume.toLocaleString()}
                  </div>
                  <span className="block text-xs text-slate-500 mt-1.5 font-medium">
                    Projected across 22 operational business days
                  </span>
                </div>

                {/* Metric 2: Pacing */}
                <div className="pb-5 border-b border-white/[0.08]">
                  <span className="block text-[0.76rem] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Daily Pacing per Rep
                  </span>
                  <div className="font-heading text-2xl font-bold text-white">
                    ~{dailyPerRep} Live Transfers / Day
                  </div>
                  <span className="block text-xs text-slate-500 mt-1 font-medium">
                    Estimated volume per licensed agent daily
                  </span>
                </div>

                {/* Metric 3: Buffer window */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[0.76rem] font-bold uppercase tracking-wider text-slate-400">
                    Buffer Guarantee
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-bold text-sky-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                    {VERTICAL_CONFIGS[vertical].buffer} Seconds Guaranteed
                  </span>
                </div>

              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <a 
                  href="#contact" 
                  className="group relative overflow-hidden flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-[0_4px_25px_rgba(99,102,241,0.4)] hover:shadow-[0_8px_35px_rgba(99,102,241,0.6)] border border-white/20 text-[0.95rem]"
                >
                  <span className="absolute inset-x-0 top-0 h-[1px] bg-white/40"></span>
                  <span>Inquire for This Volume</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
