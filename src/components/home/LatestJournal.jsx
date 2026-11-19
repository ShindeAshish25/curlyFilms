import React from 'react';
import { JOURNAL_ARTICLES } from '../../data/studioData';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function LatestJournal({ setActivePage }) {
  const featured = JOURNAL_ARTICLES[0];
  const recents = JOURNAL_ARTICLES.slice(1, 3);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#252525]/10 pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block mb-2">
            EDITORIAL DISPATCHES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] font-normal">
            The Latest Journal
          </h2>
          <p className="text-sm font-sans text-[#252525]/70 mt-2 max-w-xl font-light">
            Insights on natural lighting, non-linear film editing, and destination location scouting.
          </p>
        </div>

        <button
          onClick={() => {
            setActivePage('journal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] hover:text-[#B59B78] transition-colors"
        >
          <span>Read All Stories</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid: 1 Featured Large + 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Large Featured Article (7 cols) */}
        <div
          onClick={() => {
            setActivePage('journal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          data-cursor="view"
          className="lg:col-span-7 bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:border-[#B59B78] transition-all hover:shadow-xl flex flex-col justify-between"
        >
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={featured.coverUrl}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans uppercase tracking-[0.2em] text-[#B59B78]">
              Featured Dispatches
            </div>
          </div>

          <div className="p-8 space-y-4">
            <div className="flex items-center space-x-3 text-xs text-[#252525]/60 font-sans">
              <span className="text-[#B59B78] font-semibold uppercase">{featured.category}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-[#B59B78]" />
                <span>{featured.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#B59B78]" />
                <span>{featured.readTime}</span>
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#252525] group-hover:text-[#B59B78] transition-colors">
              {featured.title}
            </h3>

            <p className="text-sm font-sans text-[#252525]/75 font-light leading-relaxed line-clamp-2">
              {featured.summary}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.18em] text-[#B59B78] font-semibold">
              <span>Read Full Article</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>

        {/* 2 Smaller Recent Articles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {recents.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActivePage('journal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              data-cursor="view"
              className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden p-6 space-y-3 group cursor-pointer hover:border-[#B59B78] transition-all hover:shadow-md flex-1 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[11px] text-[#252525]/50 font-sans">
                  <span className="text-[#B59B78] font-medium uppercase">{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h4 className="font-serif text-xl font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors line-clamp-2">
                  {item.title}
                </h4>

                <p className="text-xs font-sans text-[#252525]/70 font-light line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 text-xs font-sans uppercase tracking-[0.18em] text-[#B59B78] font-medium flex items-center justify-between border-t border-[#252525]/10">
                <span>Read Story</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
