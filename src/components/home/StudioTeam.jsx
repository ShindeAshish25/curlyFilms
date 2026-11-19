import React from 'react';
import { TEAM_MEMBERS } from '../../data/studioData';
import { ArrowRight } from 'lucide-react';

export default function StudioTeam({ setActivePage }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block mb-2">
            CREATIVE LEADERSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            Studio Story & Team
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
            A cohesive collective of directors, cinematographers, and colorists dedicated to preserving memories with reverence and high aesthetic standards.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>About Studio</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group shadow-sm hover:shadow-xl transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-xl font-semibold text-[#252525]">
                {member.name}
              </h3>
              <div className="text-xs uppercase tracking-[0.18em] text-[#B59B78] font-sans font-medium">
                {member.role}
              </div>
              <p className="text-xs font-sans text-[#252525]/75 font-light leading-relaxed pt-2">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
