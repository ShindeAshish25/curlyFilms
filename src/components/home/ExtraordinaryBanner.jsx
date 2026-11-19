import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ExtraordinaryBanner({ setActivePage }) {
  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#252525] text-white">
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic couple at twilight"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#252525]/90 via-[#252525]/60 to-[#252525]/90" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
          COMMISSION RESERVATIONS
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
          Let's Create <br />
          <span className="italic font-light text-[#F8F6F2]">Something Extraordinary.</span>
        </h2>

        <p className="text-sm md:text-base font-sans text-white/80 font-light max-w-xl mx-auto leading-relaxed">
          We accept a strictly limited calendar of 25 bespoke commissions each year to ensure uncompromising artistic immersion.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.2em] font-semibold rounded-sm transition-all duration-300 hover:bg-white hover:text-[#252525] shadow-xl hover:-translate-y-0.5"
          >
            <span>Commission The Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
