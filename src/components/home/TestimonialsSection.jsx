import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/studioData';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#252525] text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B59B78] to-transparent opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        <div className="flex items-center justify-center space-x-1 text-[#B59B78]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Large Quote */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F8F6F2] font-light leading-relaxed max-w-3xl mx-auto italic animate-fadeIn">
          "{current.quote}"
        </p>

        {/* Client Details */}
        <div className="space-y-1">
          <h4 className="font-serif text-lg text-[#B59B78] font-medium">
            {current.author}
          </h4>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/50">
            {current.role} • {current.year}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="pt-6 flex items-center justify-center space-x-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-[#B59B78] hover:text-[#B59B78] flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="text-xs font-mono text-white/40">
            0{currentIndex + 1} / 0{TESTIMONIALS.length}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-[#B59B78] hover:text-[#B59B78] flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
