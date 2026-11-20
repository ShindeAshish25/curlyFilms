import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { Play, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, HERO_MEDIA } from '../../data/studioData';

export default function CinematicHero({ setActivePage, onOpenShowreel }) {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const contentWrapRef = useRef(null);
  const badgeRef = useRef(null);
  const wordsLine1Ref = useRef([]);
  const wordsLine2Ref = useRef([]);
  const subtextRef = useRef(null);
  const ctaGroupRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  const line1Words = ["Every", "Frame"];
  const line2Words = ["Tells", "a", "Story."];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Initial slow scale-down entrance for hero visual
    tl.fromTo(
      bgImageRef.current,
      { scale: 1.16, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 2.2, ease: 'power2.out' },
      0
    );

    // 2. Pill badge reveal
    tl.fromTo(
      badgeRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.3
    );

    // 3. Word-by-word masked slide-up reveal
    const allWords = [...wordsLine1Ref.current, ...wordsLine2Ref.current];
    tl.fromTo(
      allWords,
      { yPercent: 120, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power4.out' },
      0.5
    );

    // 4. Supporting copy fade upward
    tl.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1.0
    );

    // 5. Booking & showreel buttons sequential reveal
    tl.fromTo(
      ctaGroupRef.current?.children || [],
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.15 },
      1.2
    );

    // 6. Scroll indicator reveal
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8 },
      1.5
    );

    // ScrollTrigger scrub: zoom background image & apply subtle parallax to content
    gsap.to(bgImageRef.current, {
      scale: 1.14,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(contentWrapRef.current, {
      y: 60,
      opacity: 0.65,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-[#252525]"
    >
      {/* Background Visual Layer with Vignette & Film Grain */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImageRef}
          src={HERO_MEDIA.imageUrl}
          alt={HERO_MEDIA.alt}
          className="w-full h-full object-cover object-center will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/90 via-[#252525]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252525]/75 via-transparent to-black/40" />
        <div className="absolute inset-0 cinematic-vignette opacity-80" />
      </div>

      {/* Hero Content Stage with Parallax Scrub */}
      <div
        ref={contentWrapRef}
        className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left flex flex-col items-center md:items-start justify-center text-white space-y-6 pt-12 will-change-transform"
      >
        {/* Studio Subheading Pill */}
        <div
          ref={badgeRef}
          className="inline-flex items-center space-x-3 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#B59B78]/40"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B59B78] animate-ping" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-sans text-[#F8F6F2]/90 font-medium">
            PHOTOGRAPHY & FILMMAKING STUDIO
          </span>
        </div>

        {/* Primary Editorial Headline: Word-by-Word Clipped Mask Reveal */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] max-w-4xl">
          {/* Line 1 */}
          <span className="block overflow-hidden py-1">
            {line1Words.map((word, wIdx) => (
              <span
                key={wIdx}
                ref={(el) => (wordsLine1Ref.current[wIdx] = el)}
                className="inline-block mr-3 sm:mr-5 will-change-transform"
              >
                {word}
              </span>
            ))}
          </span>

          {/* Line 2 (Italic Emotive Emphasis) */}
          <span className="block overflow-hidden py-1 italic font-light text-[#F8F6F2]/95">
            {line2Words.map((word, wIdx) => (
              <span
                key={wIdx}
                ref={(el) => (wordsLine2Ref.current[wIdx] = el)}
                className="inline-block mr-3 sm:mr-5 will-change-transform"
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          ref={subtextRef}
          className="text-sm sm:text-base md:text-lg font-sans text-white/80 max-w-xl font-light tracking-wide leading-relaxed will-change-transform"
        >
          {STUDIO_INFO.heroDescription} We capture transcendent emotions and timeless luxury across wedding films, haute-couture editorials, and visual narratives worldwide.
        </p>

        {/* Action CTAs */}
        <div
          ref={ctaGroupRef}
          className="pt-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => {
              setActivePage('photography');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.2em] font-semibold rounded-sm transition-all duration-300 hover:bg-[#FAF9F6] hover:text-[#252525] shadow-xl hover:-translate-y-0.5"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA — Watch Showreel */}
          <button
            onClick={onOpenShowreel}
            data-cursor="play"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-7 py-4 bg-black/40 hover:bg-black/70 backdrop-blur-md text-white text-xs font-sans uppercase tracking-[0.18em] font-medium rounded-sm border border-white/25 hover:border-[#B59B78] transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full bg-[#B59B78] text-white flex items-center justify-center">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            <span>Watch Showreel</span>
          </button>
        </div>

        {/* Animated Scroll Indicator with Delicate Pulse */}
        <div
          ref={scrollIndicatorRef}
          className="pt-12 hidden md:flex items-center space-x-3 text-white/60 text-xs font-sans uppercase tracking-[0.2em]"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-[#B59B78] rounded-full animate-bounce" />
          </div>
          <span>Scroll to Explore</span>
        </div>
      </div>
    </section>
  );
}
