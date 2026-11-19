import React, { useState } from 'react';
import { Camera, MapPin } from 'lucide-react';
import { PORTFOLIO_PHOTOS } from '../data/studioData';

export default function PhotographyPage({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Fashion', 'Portraits', 'Commercial', 'Events', 'Travel'];

  const filteredPhotos =
    activeCategory === 'All'
      ? PORTFOLIO_PHOTOS
      : PORTFOLIO_PHOTOS.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            FINE-ART & EDITORIAL ARCHIVE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal">
            Photography Portfolio
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
            A curated anthology of unscripted moments, editorial grandeur, and luminous natural light captured across six continents.
          </p>
        </div>

        {/* Category Filter Pills (Champagne Gold Highlights) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? PORTFOLIO_PHOTOS.length
                : PORTFOLIO_PHOTOS.filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                  isActive
                    ? 'bg-[#B59B78] text-[#1A1A1A] font-semibold shadow-md scale-105'
                    : 'bg-[#FAF9F6] text-[#252525]/70 hover:text-[#252525] border border-[#252525]/10 hover:border-[#B59B78]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] opacity-75 ${isActive ? 'text-[#1A1A1A]' : 'text-[#B59B78]'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredPhotos.map((photo) => {
            // Find global index in master array for lightbox
            const globalIndex = PORTFOLIO_PHOTOS.findIndex((p) => p.id === photo.id);

            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(globalIndex)}
                data-cursor="view"
                className="group relative bg-[#FAF9F6] rounded-sm overflow-hidden border border-[#252525]/10 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Photo Aspect Wrap */}
                <div className={`w-full overflow-hidden relative ${photo.aspectRatio || 'aspect-[3/4]'}`}>
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    {/* Top Tag & Year */}
                    <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em] text-[#B59B78]">
                      <span>{photo.category}</span>
                      <span>{photo.year}</span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-serif text-xl font-medium">
                        {photo.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-white/80 font-sans font-light">
                        <MapPin className="w-3.5 h-3.5 text-[#B59B78]" />
                        <span>{photo.location}</span>
                        {photo.client && (
                          <>
                            <span>•</span>
                            <span className="text-[#B59B78]">{photo.client}</span>
                          </>
                        )}
                      </div>

                      {/* Camera Note */}
                      {photo.camera && (
                        <div className="pt-2 flex items-center space-x-2 text-[10px] text-white/60 font-mono">
                          <Camera className="w-3 h-3 text-[#B59B78]" />
                          <span>{photo.camera} • {photo.lens}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Sub-Card Label (always visible subtly) */}
                <div className="p-4 flex items-center justify-between text-xs bg-[#FAF9F6]">
                  <div>
                    <h4 className="font-serif font-medium text-[#252525] truncate">
                      {photo.title}
                    </h4>
                    <span className="text-[10px] text-[#252525]/60 uppercase tracking-widest font-sans">
                      {photo.location}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono text-[#B59B78] font-medium">
                    {photo.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State fallback */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-24 space-y-4">
            <p className="font-serif text-xl text-[#252525]/60">
              No photographs found in this category.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs uppercase tracking-[0.18em] text-[#B59B78] font-semibold underline"
            >
              Reset to All Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
