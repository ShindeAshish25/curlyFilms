import React from 'react';
import { BEHIND_THE_LENS } from '../../data/studioData';
import { Sparkles } from 'lucide-react';

export default function BehindTheLens() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-y border-[#252525]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B59B78] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PRODUCTION CRAFT</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
              Behind the Lens
            </h2>
            <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
              A transparent glimpse into the optical engineering, field sound capture, and color grading suites that elevate each commission.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] font-sans text-[#252525]/50">
            Discretion • Precision • Artistry
          </div>
        </div>

        {/* 3 BTS Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BEHIND_THE_LENS.map((bts, idx) => (
            <div
              key={bts.id}
              className="bg-white border border-[#252525]/10 rounded-sm overflow-hidden group shadow-sm hover:shadow-xl hover:border-[#B59B78] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={bts.image}
                  alt={bts.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono text-[#B59B78]">
                  CRAFT 0{idx + 1}
                </div>
              </div>

              <div className="p-6 space-y-2 flex-1">
                <h3 className="font-serif text-xl font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors">
                  {bts.title}
                </h3>
                <p className="text-xs font-sans text-[#252525]/70 font-light leading-relaxed">
                  {bts.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
