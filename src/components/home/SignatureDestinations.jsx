import React from 'react';
import { SIGNATURE_DESTINATIONS } from '../../data/studioData';
import { Compass, Calendar } from 'lucide-react';

export default function SignatureDestinations({ setActivePage }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
          GLOBAL COMMISSION FOOTPRINT
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252525] font-normal">
          Signature Destinations
        </h2>
        <p className="text-sm font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
          While rooted in our flagship studio in Pune, our team routinely documents celebrations across timeless landscapes and royal estates around the world.
        </p>
      </div>

      {/* 4 Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SIGNATURE_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            data-cursor="view"
            className="group relative rounded-sm overflow-hidden bg-black shadow-lg border border-[#252525]/10 aspect-[16/10] cursor-pointer"
          >
            <img
              src={dest.image}
              alt={`${dest.city}, ${dest.country}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            {/* Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            {/* Top Coordinates Tag */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/80">
              <span className="flex items-center space-x-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                <Compass className="w-3 h-3 text-[#B59B78]" />
                <span>{dest.coordinates}</span>
              </span>
              <span className="text-[#B59B78] font-sans uppercase tracking-wider text-[10px]">
                {dest.projectsCount}
              </span>
            </div>

            {/* Bottom Destination Details */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-medium">
                {dest.country}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                {dest.city}
              </h3>
              <p className="text-xs font-sans text-white/80 font-light italic">
                {dest.vibe}
              </p>

              <div className="pt-2 flex items-center justify-between text-[11px] font-sans text-white/60 border-t border-white/15">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-[#B59B78]" />
                  <span>Optimal Season: {dest.season}</span>
                </span>
                <span className="text-[#B59B78] font-medium group-hover:underline">
                  Inquire Destination →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
