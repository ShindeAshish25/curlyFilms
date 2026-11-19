import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, STATS, TEAM_MEMBERS, PRODUCTION_STEPS } from '../data/studioData';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-24 pb-20">
      {/* 1. EDITORIAL HEADER & HERO */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-12 py-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            ABOUT {STUDIO_INFO.name.toUpperCase()}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal leading-[1.15]">
            We Don't Just Capture Moments. <br />
            <span className="italic font-light">We Create Memories.</span>
          </h1>
          <p className="text-base sm:text-lg font-sans text-[#252525]/75 font-light leading-relaxed pt-2">
            Atelier Noir & Light was established with a singular conviction: that the most extraordinary imagery exists at the intersection of haute-couture elegance and unvarnished, vulnerable humanity.
          </p>
        </div>

        {/* Large Hero Photographer Stills (Alternating Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 rounded-sm overflow-hidden shadow-2xl relative aspect-[16/10] bg-[#FAF9F6] border border-[#252525]/10">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80"
              alt="Cinematographer with cinema camera on location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
              <span className="text-xs font-sans text-white/80 font-light italic">
                On location in Udaipur, framing dawn light across the waters of Lake Pichola.
              </span>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div className="bg-[#FAF9F6] p-8 border border-[#252525]/10 rounded-sm space-y-4 shadow-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
                OUR CORE CREED
              </span>
              <h3 className="font-serif text-2xl text-[#252525]">
                Timeless Over Trendy.
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#252525]/70 font-light leading-relaxed">
                Color grading trends come and go with social media algorithms. We grade for decades. Our aesthetic draws upon the organic warmth of Kodak 35mm motion picture negative, painterly shadow roll-off, and honest skin tones.
              </p>
            </div>

            <div className="bg-[#252525] text-white p-8 rounded-sm space-y-2 border border-[#B59B78]/30">
              <div className="text-xs uppercase tracking-[0.2em] text-[#B59B78]">
                GLOBAL COMMISSIONS
              </div>
              <p className="text-xs font-sans text-white/70 font-light leading-relaxed">
                Based out of our flagship Pune studio, our cinematographers and photographers travel worldwide across Europe, the Middle East, Southeast Asia, and the Americas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[#FAF9F6] border-y border-[#252525]/10 py-12 px-6 md:px-12 my-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="font-serif text-4xl text-[#B59B78] font-semibold">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#252525]/70 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE 4-STEP PRODUCTION PROCESS */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            HOW WE WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525]">
            Our Production Architecture
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 font-light">
            Every bespoke project flows through four meticulously disciplined creative phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {PRODUCTION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] p-6 border border-[#252525]/10 rounded-sm space-y-4 hover:border-[#B59B78] transition-all hover:shadow-md"
            >
              <div className="font-serif text-4xl text-[#B59B78]/40 font-bold">
                {step.number}
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#252525]">
                {step.title}
              </h3>
              <p className="text-xs font-sans text-[#252525]/70 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE CREATIVE DIRECTORS & TEAM */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 space-y-12 border-t border-[#252525]/10">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            THE ARTISTS BEHIND THE LENS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525]">
            Meet Our Creative Leadership
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 font-light">
            A cohesive collective of directors, cinematographers, and fine-art photographers with decades of combined international mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#252525]">
                  {member.name}
                </h3>
                <div className="text-xs uppercase tracking-[0.18em] text-[#B59B78] font-sans font-medium">
                  {member.role}
                </div>
                <p className="text-xs font-sans text-[#252525]/75 font-light leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BEHIND-THE-SCENES GALLERY & GEAR MANIFESTO */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 space-y-12 border-t border-[#252525]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
              CINEMA CRAFT & HARDWARE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#252525]">
              The Optical Alchemy.
            </h2>
            <p className="text-sm font-sans text-[#252525]/75 font-light leading-relaxed">
              We shoot on museum-tier optical tools chosen not for technical sterility, but for organic character. From full-frame Sony FX6 cinema cameras to legendary Cooke anamorphic lenses and medium-format Hasselblad bodies, our gear renders light with breathtaking physical texture.
            </p>

            <ul className="space-y-3 pt-2 text-xs font-sans text-[#252525]/80">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B59B78] shrink-0" />
                <span>Full-frame Sony FX6, FX3 & ARRI cinema camera packages</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B59B78] shrink-0" />
                <span>Cooke Anamorphic /i & Leica Summicron-M prime lenses</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B59B78] shrink-0" />
                <span>Hasselblad X2D 100C for 100-megapixel fine-art stills</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B59B78] shrink-0" />
                <span>32-bit float audio capture ensuring distortion-free whispers & vows</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-sm overflow-hidden aspect-[4/5] shadow-md border border-[#252525]/10">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                alt="Behind the scenes camera monitor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden aspect-[4/5] shadow-md border border-[#252525]/10 mt-8">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                alt="BTS director with camera rig"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto text-center py-12 space-y-6">
        <h3 className="font-serif text-3xl text-[#252525]">
          Ready to tell your story?
        </h3>
        <p className="text-sm font-sans text-[#252525]/70 max-w-md mx-auto font-light">
          We accept a limited number of destination wedding and commercial commissions each year to ensure uncompromising artistic focus.
        </p>
        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-3 px-8 py-3.5 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.2em] font-semibold rounded-sm hover:bg-[#252525] hover:text-white transition-all shadow-lg"
        >
          <span>Commission the Atelier</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
