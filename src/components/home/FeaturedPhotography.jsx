import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { FEATURED_MOSAIC } from '../../data/studioData';
import { ArrowRight } from 'lucide-react';

export default function FeaturedPhotography({ setActivePage, onOpenLightbox }) {
  const sectionRef = useRef(null);
  const mosaicRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Staggered reveal for mosaic photos
    gsap.fromTo(
      mosaicRef.current?.children || [],
      { opacity: 0, y: 50, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mosaicRef.current,
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
            FEATURED PHOTOGRAPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            A Curated Collection of Moments.
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
            From intimate weddings to bold editorial shoots, explore our photography work across diverse stories and styles.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('photography');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>View All Photography</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Asymmetrical Editorial Mosaic Grid */}
      <div ref={mosaicRef} className="grid grid-cols-12 gap-6 items-stretch">
        {FEATURED_MOSAIC.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => onOpenLightbox(idx)}
            data-cursor="view"
            className={`${item.span} relative rounded-sm overflow-hidden group cursor-pointer shadow-md bg-[#FAF9F6] border border-[#252525]/10`}
          >
            <div className="editorial-image-wrap h-full w-full relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: '340px' }}
              />
              {/* Subtle Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B59B78] font-sans font-medium">
                  {item.category} • {item.location}
                </span>
                <h4 className="font-serif text-xl font-medium mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-white/80 font-sans font-light mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
