import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { STUDIO_INFO, STATS } from '../../data/studioData';
import { Camera, Award, Users, Film } from 'lucide-react';

export default function StudioIntro({ setActivePage }) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const statsRef = useRef(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      leftColRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      rightColRef.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightColRef.current,
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo(
      statsRef.current?.children || [],
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 90%',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* 2-Column Luxury Editorial Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Studio Manifesto */}
        <div ref={leftColRef} className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            ATELIER PHILOSOPHY & MANIFESTO
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252525] font-normal leading-[1.15]">
            We believe in the quiet power of honest emotion, <br />
            <span className="italic font-light">bathed in unforgettable light.</span>
          </h2>

          <div className="w-16 h-[2px] bg-[#B59B78]" />

          <p className="text-sm md:text-base font-sans text-[#252525]/75 leading-relaxed font-light">
            Founded with an uncompromising commitment to timeless elegance, {STUDIO_INFO.name} operates at the nexus of high-fashion portraiture and documentary cinema. We reject ephemeral filter trends, choosing instead the deep tonality of analog 35mm motion picture stock, architectural geometry, and unhurried human connection.
          </p>

          <p className="text-sm font-sans text-[#252525]/70 leading-relaxed font-light">
            Whether filming a three-day royal wedding at Lake Pichola, an haute-couture lookbook in Paris, or a meditative documentary in the Himalayas, our principal artists record life's most poetic chapters.
          </p>

          <div className="pt-2">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#252525] hover:text-[#B59B78] transition-colors"
            >
              <span>Explore The Studio Story</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Luxury Photographic Still Composition */}
        <div ref={rightColRef} className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl bg-[#FAF9F6] border border-[#252525]/10">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
              alt="Cinematographer with cinema camera on location"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Subtle Gradient & Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B59B78] font-sans">
                BEHIND THE CRAFT
              </span>
              <h4 className="font-serif text-xl font-normal mt-1">
                Preserving Transcendent Moments
              </h4>
              <p className="text-xs text-white/70 font-sans font-light mt-1">
                Equipped with custom anamorphic primes and calibrated DaVinci color mastering.
              </p>
            </div>
          </div>

          {/* Floating Gold Border Accent */}
          <div className="hidden sm:block absolute -bottom-5 -right-5 w-40 h-40 border border-[#B59B78]/40 rounded-sm -z-10" />
        </div>
      </div>

      {/* Stats Counter Row */}
      <div
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-[#252525]/10 bg-[#FAF9F6] p-6 rounded-sm"
      >
        {STATS.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
            <div className="w-10 h-10 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center transition-transform group-hover:scale-110">
              {stat.icon === 'camera' && <Camera className="w-5 h-5" />}
              {stat.icon === 'award' && <Award className="w-5 h-5" />}
              {stat.icon === 'users' && <Users className="w-5 h-5" />}
              {stat.icon === 'film' && <Film className="w-5 h-5" />}
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs font-sans uppercase tracking-[0.18em] text-[#252525]/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
