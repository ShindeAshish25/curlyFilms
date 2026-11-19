import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { FILMS } from '../../data/studioData';
import { Play, Clock, ArrowRight } from 'lucide-react';

export default function FilmShowcase({ setActivePage, onOpenFilm }) {
  const sectionRef = useRef(null);
  const featuredFilm = FILMS.find((f) => f.featured) || FILMS[0];
  const gridFilms = FILMS.slice(1, 4);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block mb-2">
            CINEMATIC FILMS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            Stories in Motion.
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
            A showcase of our film work—from heartfelt wedding films to brand stories and travel cinematics.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('films');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>Watch All Films</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Featured 16:9 Hero Video Card */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-0 cinematic-vignette opacity-70" />

        {/* Center Play Button */}
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
            <h3 className="font-serif text-2xl md:text-4xl font-normal">
              {featuredFilm.title}
            </h3>
            <p className="text-sm font-sans text-white/80 font-light max-w-xl">
              {featuredFilm.subtitle}
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.2em] font-sans text-white/70">
            Duration: <span className="text-[#B59B78] font-semibold">{featuredFilm.duration}</span>
          </div>
        </div>
      </div>

      {/* 3 Secondary Film Thumbnails */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {gridFilms.map((film) => (
          <div
            key={film.id}
            onClick={() => onOpenFilm(film)}
            data-cursor="play"
            className="bg-[#FAF9F6] rounded-sm overflow-hidden border border-[#252525]/10 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-video relative overflow-hidden bg-black">
              <img
                src={film.coverUrl}
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 backdrop-blur-sm rounded text-[10px] font-mono text-white flex items-center space-x-1">
                <Clock className="w-2.5 h-2.5 text-[#B59B78]" />
                <span>{film.duration}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#B59B78] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-115">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-5 space-y-2">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#B59B78] font-medium">
                {film.category} • {film.year}
              </div>
              <h4 className="font-serif text-lg font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors">
                {film.title}
              </h4>
              <p className="text-xs font-sans text-[#252525]/70 line-clamp-2 font-light">
                {film.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
