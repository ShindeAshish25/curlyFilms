import React, { useState, useMemo } from 'react';
import { Play, Clock, Sparkles } from 'lucide-react';
import { FILMS } from '../data/studioData';

export default function FilmsPage({ onOpenFilm }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Wedding Film', 'Fashion Film', 'Commercial Film', 'Travel & Documentary'];

  const filteredFilms = useMemo(() => {
    if (activeCategory === 'All') return FILMS;
    return FILMS.filter((f) => f.category.toLowerCase().includes(activeCategory.toLowerCase().replace(' film', '')));
  }, [activeCategory]);

  const featuredFilm = FILMS.find((f) => f.featured) || FILMS[0];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            CINEMATOGRAPHY SUITE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal">
            Cinematic Films <br className="hidden sm:inline" />
            <span className="italic font-light">That Tell Real Stories.</span>
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
            Every film is conceived as an immersive sensory experience—masterfully graded, thoughtfully paced, and scored to evoke true goosebumps.
          </p>
        </div>

        {/* 1. FEATURED HERO SHOWREEL CARD (16:9) */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B59B78]" />
            <span>FEATURED MASTERPIECE</span>
          </div>

          <div
            onClick={() => onOpenFilm(featuredFilm)}
            data-cursor="play"
            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden group cursor-pointer shadow-2xl border border-[#252525]/15 bg-black"
          >
            <img
              src={featuredFilm.coverUrl}
              alt={featuredFilm.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="absolute inset-0 cinematic-vignette opacity-70" />

            {/* Center Play Button with Golden Pulse */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#B59B78]/90 group-hover:bg-[#B59B78] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115">
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
              </div>
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#B59B78]">
                  <span>{featuredFilm.category}</span>
                  <span>•</span>
                  <span>{featuredFilm.year}</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 border border-white/20 text-white text-[10px]">
                    {featuredFilm.resolution || '4K UHD'}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-normal">
                  {featuredFilm.title}
                </h2>
                <p className="text-sm font-sans text-white/80 font-light max-w-xl">
                  {featuredFilm.subtitle}
                </p>
              </div>

              <div className="text-xs uppercase tracking-[0.2em] font-sans text-white/70">
                Duration: <span className="text-[#B59B78] font-semibold">{featuredFilm.duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6 border-t border-[#252525]/10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans tracking-[0.15em] uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#B59B78] text-[#1A1A1A] font-semibold shadow-md scale-105'
                    : 'bg-[#FAF9F6] text-[#252525]/70 hover:text-[#252525] border border-[#252525]/10 hover:border-[#B59B78]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3. EDITORIAL GRID OF FILMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => onOpenFilm(film)}
              data-cursor="play"
              className="bg-[#FAF9F6] rounded-sm overflow-hidden border border-[#252525]/10 shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between"
            >
              {/* Cover Image & Play Hover */}
              <div className="aspect-video relative overflow-hidden bg-black">
                <img
                  src={film.coverUrl}
                  alt={film.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-[10px] font-mono text-white/90 flex items-center space-x-1 border border-white/10">
                  <Clock className="w-2.5 h-2.5 text-[#B59B78]" />
                  <span>{film.duration}</span>
                </div>

                {/* 4K Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#B59B78]/90 text-[#1E1E1E] rounded text-[9px] font-mono font-bold tracking-wider">
                  {film.resolution}
                </div>

                {/* Small Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#B59B78] text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-120">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Film Information */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.18em] text-[#B59B78]">
                    <span>{film.category}</span>
                    <span className="text-[#252525]/50">{film.year}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors mt-1">
                    {film.title}
                  </h3>

                  <p className="text-xs font-sans text-[#252525]/70 font-light mt-1.5 line-clamp-2">
                    {film.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#252525]/10 flex items-center justify-between text-[11px] font-sans text-[#252525]/60">
                  <span>Location: {film.location}</span>
                  <span className="text-[#B59B78] font-medium group-hover:underline">
                    Watch Film →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
