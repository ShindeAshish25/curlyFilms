import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../../utils/gsapSetup';
import { PINNED_SCENES } from '../../data/studioData';
import { MapPin, Camera } from 'lucide-react';

export default function PinnedStory() {
  const containerRef = useRef(null);
  const scenesRef = useRef([]);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const totalScenes = PINNED_SCENES.length;

    // Pin timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${totalScenes * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const index = Math.min(
            Math.floor(self.progress * totalScenes),
            totalScenes - 1
          );
          setActiveSceneIndex(index);
        },
      },
    });

    // Cross-fade scenes
    scenesRef.current.forEach((sceneEl, i) => {
      if (i > 0) {
        // Fade in current scene and scale slightly
        tl.fromTo(
          sceneEl,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#252525] text-white"
    >
      {/* Background Scenes Stack */}
      {PINNED_SCENES.map((scene, idx) => (
        <div
          key={scene.id}
          ref={(el) => (scenesRef.current[idx] = el)}
          className={`absolute inset-0 w-full h-full will-change-transform ${
            idx === 0 ? 'opacity-100 z-10' : 'opacity-0 z-20'
          }`}
          style={{ transition: 'opacity 0.2s' }}
        >
          {/* Background Image with Dark Cinematic Vignette */}
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#252525]/95 via-[#252525]/50 to-black/30" />
          <div className="absolute inset-0 cinematic-vignette opacity-80" />

          {/* Scene Content Overlay */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between py-24 pointer-events-none">
            {/* Top Indicator & Tagline */}
            <div className="flex items-center justify-between text-xs font-sans tracking-[0.25em] text-[#B59B78]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#B59B78] animate-pulse" />
                <span className="uppercase">{scene.tagline}</span>
              </div>
              <div className="font-mono text-sm">
                SCENE {scene.sceneNumber} / 0{PINNED_SCENES.length}
              </div>
            </div>

            {/* Center Editorial Narrative */}
            <div className="max-w-3xl space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight">
                {scene.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-sans text-white/85 font-light leading-relaxed max-w-2xl">
                {scene.description}
              </p>
            </div>

            {/* Bottom Meta & Scene Stepper */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/15 pt-6 text-xs font-sans text-white/70">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1 text-[#B59B78]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{scene.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Camera className="w-3.5 h-3.5 text-white/60" />
                  <span>{scene.camera}</span>
                </span>
              </div>

              {/* Step indicator pills */}
              <div className="flex items-center space-x-2">
                {PINNED_SCENES.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSceneIndex === dotIdx
                        ? 'w-8 bg-[#B59B78]'
                        : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
