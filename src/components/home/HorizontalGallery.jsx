import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { HORIZONTAL_PROJECTS } from '../../data/studioData';
import { ArrowRight, MapPin } from 'lucide-react';

export default function HorizontalGallery({ setActivePage }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // Desktop: Pin & translate track horizontally
    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 400}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF9F6] border-y border-[#252525]/10 py-20 lg:py-0 overflow-hidden"
    >
      {/* Header Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 lg:pt-16 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block mb-1">
            CURATED EXHIBITION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            Selected Projects & Case Studies
          </h2>
        </div>

        <button
          onClick={() => {
            setActivePage('projects');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>All 250+ Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full lg:h-[80vh] flex items-center overflow-x-auto lg:overflow-x-visible no-scrollbar px-6 md:px-12 pb-12 lg:pb-0">
        <div
          ref={trackRef}
          className="flex space-x-8 items-stretch will-change-transform shrink-0"
        >
          {HORIZONTAL_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              data-cursor="view"
              className="w-[85vw] sm:w-[500px] lg:w-[600px] shrink-0 bg-white border border-[#252525]/10 rounded-sm overflow-hidden group cursor-pointer shadow-md hover:border-[#B59B78] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="aspect-[16/10] overflow-hidden relative bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans uppercase tracking-[0.2em] text-[#B59B78] border border-white/10">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#B59B78] text-[#1E1E1E] px-2.5 py-0.5 rounded text-[10px] font-mono font-bold">
                  {project.resolution}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#252525]/60 font-sans">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B59B78]" />
                      <span>{project.location}</span>
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#252525] group-hover:text-[#B59B78] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-sans text-[#252525]/70 font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#252525]/10 flex items-center justify-between text-xs font-sans text-[#B59B78] font-semibold">
                  <span>View Project Case Study</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
