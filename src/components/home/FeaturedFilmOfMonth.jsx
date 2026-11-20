import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { FEATURED_FILM_OF_MONTH } from '../../data/studioData';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FeaturedFilmOfMonth({ onOpenFilm }) {
  const containerRef = useRef(null);
  const film = FEATURED_FILM_OF_MONTH;

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-y border-[#252525]/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#B59B78] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B59B78]" />
              <span>{film.edition}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#252525] font-normal leading-tight">
              Featured Film of the Month
            </h2>
            <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
              Each month, our creative director highlights one masterwork representing exceptional emotional depth, optics, and sound design.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] font-sans text-[#252525]/50">
            {film.resolution}
          </div>
        </div>

        {/* Cinematic Widescreen Presentation */}
        <div
          onClick={() =>
            onOpenFilm({
              title: film.title,
              subtitle: film.subtitle,
              category: "Masterwork Feature",
              duration: film.duration,
              videoUrl: film.videoUrl,
              coverUrl: film.coverImage,
              location: film.location,
              resolution: film.resolution,
            })
          }
          data-cursor="play"
          className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden group cursor-pointer shadow-2xl bg-black border border-[#252525]/15"
        >
          <img
            src={film.coverImage}
            alt={film.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
          <div className="absolute inset-0 cinematic-vignette opacity-70" />

          {/* Large Center Animated Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[#B59B78]/90 group-hover:bg-[#B59B78] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-115">
              <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-1" />
            </div>
          </div>

          {/* Bottom Title & Specs Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78]">
                {film.location} • {film.year}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal">
                {film.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-white/80 font-light max-w-xl">
                {film.subtitle}
              </p>
            </div>

            <div className="text-xs font-mono text-[#B59B78] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded border border-white/10">
              Runtime: {film.duration}
            </div>
          </div>
        </div>

        {/* Project Story & Director Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 items-start">
          <div className="md:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
              DIRECTOR'S STATEMENT
            </span>
            <blockquote className="font-serif text-xl sm:text-2xl text-[#252525] font-light italic leading-relaxed">
              "{film.directorStatement}"
            </blockquote>
            <p className="text-xs font-sans text-[#252525]/60 uppercase tracking-widest">
              — Devansh Rao, Director of Photography
            </p>
          </div>

          <div className="md:col-span-6 bg-white border border-[#252525]/10 p-6 sm:p-8 rounded-sm space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
              OPTICAL & SOUND MANIFEST
            </span>
            <div className="space-y-2.5 pt-1 text-xs font-sans text-[#252525]/80">
              {film.technicalHighlights.map((tech, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B59B78] shrink-0 mt-0.5" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
