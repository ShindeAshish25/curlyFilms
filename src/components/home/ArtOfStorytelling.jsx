import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';

export default function ArtOfStorytelling() {
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-28 px-6 md:px-12 bg-[#FAF9F6] border-y border-[#252525]/10">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
          THE ART OF STORYTELLING
        </span>

        {/* Oversized Editorial Quote */}
        <blockquote
          ref={quoteRef}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#252525] font-light leading-[1.2] italic max-w-4xl mx-auto"
        >
          “Where others rush to assemble fleeting clips, we spend weeks sculpting light, silence, and truth into cinema that outlives us all.”
        </blockquote>

        <div className="w-16 h-[2px] bg-[#B59B78] mx-auto" />

        <div ref={textRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto pt-6 text-sm font-sans text-[#252525]/75 font-light leading-relaxed">
          <p>
            Cinema is not defined by camera resolution alone; it is defined by intentionality. In every commission, our directors analyze acoustic reflections, seasonal sun elevations, and ancestral architecture before a single frame is committed to digital sensor or analog emulsion.
          </p>
          <p>
            Our master color grade honors human complexion and organic textures, refusing harsh electronic sharpening. The result is imagery that feels as timeless and dignified fifty years from now as it did on the afternoon it transpired.
          </p>
        </div>

        {/* Large Panoramic Still */}
        <div className="pt-8 rounded-sm overflow-hidden shadow-2xl border border-[#252525]/10 aspect-[21/9] relative">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Alpine horizon in golden hour light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 text-left">
            <span className="text-xs font-mono text-[#F8F6F2]">
              Dolomites Expedition • Natural Morning Backlight • 35mm Equivalent
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
