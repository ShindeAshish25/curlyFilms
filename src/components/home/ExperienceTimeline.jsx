import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { CLIENT_JOURNEY_STEPS } from '../../data/studioData';
import { Compass, Lightbulb, Camera, Palette, PackageCheck } from 'lucide-react';

export default function ExperienceTimeline() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const stepsRef = useRef([]);

  const icons = [Compass, Lightbulb, Camera, Palette, PackageCheck];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate the thin champagne-gold line from 0 to 100% width on scroll
    gsap.fromTo(
      progressLineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 1,
        },
      }
    );

    // Stagger step cards reveal
    stepsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FAF9F6] border-y border-[#252525]/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            THE CLIENT JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252525] font-normal">
            The Experience
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 font-light">
            Every commission flows through five seamless stages designed to provide complete tranquility, creative collaboration, and museum-grade results.
          </p>
        </div>

        {/* Desktop Progress Line Track */}
        <div className="hidden lg:block relative py-6">
          <div className="w-full h-[2px] bg-[#252525]/10 absolute top-12 left-0 right-0" />
          <div
            ref={progressLineRef}
            className="w-full h-[2px] bg-[#B59B78] absolute top-12 left-0 right-0 origin-left will-change-transform"
          />
        </div>

        {/* 5-Step Grid / Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {CLIENT_JOURNEY_STEPS.map((step, idx) => {
            const IconComponent = icons[idx] || Compass;

            return (
              <div
                key={step.step}
                ref={(el) => (stepsRef.current[idx] = el)}
                className="bg-white border border-[#252525]/10 rounded-sm p-6 space-y-4 hover:border-[#B59B78] transition-all hover:shadow-lg flex flex-col justify-between relative group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#B59B78]/10 text-[#B59B78] flex items-center justify-center transition-transform group-hover:scale-110">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#B59B78]">
                      STEP {step.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#252525]">
                      {step.name}
                    </h3>
                    <p className="text-[11px] font-sans uppercase tracking-wider text-[#B59B78] font-medium mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs font-sans text-[#252525]/75 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#252525]/10 text-[11px] font-mono text-[#252525]/60">
                  <span className="block text-[9px] uppercase tracking-wider text-[#B59B78]">Deliverable:</span>
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
