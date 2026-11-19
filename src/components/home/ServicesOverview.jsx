import React from 'react';
import { SERVICES } from '../../data/studioData';
import { ArrowRight } from 'lucide-react';

export default function ServicesOverview({ setActivePage, setPreselectedService }) {
  const handleServiceClick = (serviceTitle) => {
    if (setPreselectedService) {
      setPreselectedService(serviceTitle);
    }
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block mb-2">
            OUR BESPOKE OFFERINGS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            What We Create.
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
            From intimate weddings to bold editorial shoots, we offer end-to-end creative solutions for discerning clients worldwide.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>View All 6 Packages</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* 4 Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.slice(0, 4).map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceClick(service.title)}
            className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group cursor-pointer hover:border-[#B59B78] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#252525] group-hover:text-[#B59B78] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-sans text-[#252525]/70 font-light mt-1 line-clamp-2">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-sans text-[#B59B78] font-medium border-t border-[#252525]/10">
                <span>Explore Inclusions</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
