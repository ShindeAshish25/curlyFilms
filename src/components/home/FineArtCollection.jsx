import React from 'react';
import { FINE_ART_COLLECTION } from '../../data/studioData';
import { Camera, Sparkles } from 'lucide-react';

export default function FineArtCollection({ onOpenLightbox }) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B59B78] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MUSEUM-GRADE ARCHIVE</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252525] font-normal">
          The Fine Art Collection
        </h2>
        <p className="text-sm font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
          A rarefied selection of signature medium-format stills printed on archival cotton rag, honoring the physical tactile permanence of photographic craft.
        </p>
      </div>

      {/* Museum-Inspired Grid with Generous Whitespace */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {FINE_ART_COLLECTION.map((art, idx) => (
          <div
            key={art.id}
            onClick={() => onOpenLightbox(idx)}
            data-cursor="view"
            className="group cursor-pointer space-y-4"
          >
            {/* Museum Passe-Partout Frame */}
            <div className="p-4 sm:p-6 bg-white border border-[#252525]/10 rounded-sm shadow-md group-hover:shadow-2xl transition-all duration-500 group-hover:border-[#B59B78]/60">
              <div className={`overflow-hidden rounded-sm relative ${art.aspect}`}>
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Museum Exhibition Placard */}
            <div className="pt-2 px-2 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-t border-[#252525]/10">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B59B78]">
                  ARCHIVE NO. 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#252525] group-hover:text-[#B59B78] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs font-sans text-[#252525]/70 font-light">
                  {art.medium}
                </p>
              </div>

              <div className="text-right text-[11px] font-mono text-[#252525]/60 space-y-0.5">
                <div className="flex items-center sm:justify-end space-x-1">
                  <Camera className="w-3 h-3 text-[#B59B78]" />
                  <span>{art.camera}</span>
                </div>
                <div className="text-[#B59B78]">{art.dimensions}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
