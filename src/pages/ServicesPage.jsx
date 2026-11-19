import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { SERVICES } from '../data/studioData';

export default function ServicesPage({ setActivePage, setPreselectedService }) {
  const handleInquireService = (serviceTitle) => {
    if (setPreselectedService) {
      setPreselectedService(serviceTitle);
    }
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            OUR BESPOKE OFFERINGS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal">
            Our Services
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
            From initial concept to final graded frame, we offer end-to-end creative solutions for luxury photography and cinematic filmmaking.
          </p>
        </div>

        {/* Alternating Editorial Service Cards */}
        <div className="space-y-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#FAF9F6] border border-[#252525]/10 rounded-sm p-6 sm:p-10 shadow-sm hover:border-[#B59B78] transition-all duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Service Imagery */}
              <div className={`lg:col-span-5 aspect-[4/3] rounded-sm overflow-hidden relative shadow-md ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans uppercase tracking-[0.2em] text-[#B59B78]">
                  {service.category}
                </div>
              </div>

              {/* Service Details */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold">
                    0{idx + 1} • BESPOKE PACKAGE
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#252525]">
                    {service.title}
                  </h2>
                  <p className="text-sm font-sans text-[#252525]/80 font-light leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Inclusions Grid */}
                <div className="space-y-3 pt-2 border-t border-[#252525]/10">
                  <span className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#252525]">
                    Key Deliverables & Inclusions:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.inclusions.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start space-x-2 text-xs font-sans text-[#252525]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B59B78] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Turnaround & Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#252525]/60 pt-2">
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B59B78]" />
                    <span>Turnaround: {service.turnaround}</span>
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="pt-2">
                  <button
                    onClick={() => handleInquireService(service.title)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B59B78] text-[#1E1E1E] text-xs font-sans uppercase tracking-[0.18em] font-semibold rounded-sm hover:bg-[#252525] hover:text-white transition-all shadow-md hover:-translate-y-0.5"
                  >
                    <span>Inquire for This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
