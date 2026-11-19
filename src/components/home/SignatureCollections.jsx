import React, { useState } from 'react';
import { SIGNATURE_COLLECTIONS } from '../../data/studioData';
import { ArrowRight } from 'lucide-react';

export default function SignatureCollections({ setActivePage }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
          FIVE PILLARS OF MASTERY
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252525] font-normal">
          Signature Collections
        </h2>
        <p className="text-sm font-sans text-[#252525]/70 font-light">
          Explore our dedicated archives across bespoke wedding cinema, high-fashion editorials, fine portraits, and expedition landscapes.
        </p>
      </div>

      {/* Interactive Collection Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Collection Tabs List */}
        <div className="lg:col-span-5 space-y-3">
          {SIGNATURE_COLLECTIONS.map((col, idx) => {
            const isActive = activeTab === idx;
            return (
              <div
                key={col.id}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => {
                  setActivePage('photography');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`p-6 rounded-sm border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF9F6] border-[#B59B78] shadow-md translate-x-2'
                    : 'bg-transparent border-[#252525]/10 hover:border-[#252525]/30'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em]">
                  <span className={isActive ? 'text-[#B59B78] font-bold' : 'text-[#252525]/50'}>
                    0{idx + 1}
                  </span>
                  <span className="text-[#252525]/50 font-mono">
                    {col.count}
                  </span>
                </div>

                <h3 className={`font-serif text-xl sm:text-2xl mt-1.5 transition-colors ${
                  isActive ? 'text-[#252525] font-semibold' : 'text-[#252525]/80'
                }`}>
                  {col.title}
                </h3>

                <p className="text-xs font-sans text-[#252525]/70 font-light mt-1 line-clamp-2">
                  {col.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Active Collection Visual Display */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl bg-[#FAF9F6] border border-[#252525]/10 group cursor-pointer"
            onClick={() => {
              setActivePage('photography');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              key={SIGNATURE_COLLECTIONS[activeTab].id}
              src={SIGNATURE_COLLECTIONS[activeTab].image}
              alt={SIGNATURE_COLLECTIONS[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 animate-fadeIn"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59B78] font-sans font-medium">
                {SIGNATURE_COLLECTIONS[activeTab].subtitle}
              </span>
              <h3 className="font-serif text-3xl font-normal mt-1">
                {SIGNATURE_COLLECTIONS[activeTab].title}
              </h3>
              <div className="pt-3 flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.18em] text-[#B59B78] font-medium">
                <span>View Collection Archive</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
