import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, User, X, Share2 } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/studioData';

export default function JournalPage({ showToast }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featuredArticle = JOURNAL_ARTICLES.find((a) => a.featured) || JOURNAL_ARTICLES[0];
  const regularArticles = JOURNAL_ARTICLES.filter((a) => a.id !== featuredArticle.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    if (showToast) showToast('Article link copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
            EDITORIAL DISPATCHES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal">
            The Journal
          </h1>
          <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
            Stories, technical insights, and behind-the-scenes reflections from our global photography and filmmaking commissions.
          </p>
        </div>

        {/* 1. FEATURED ARTICLE HERO (Exact to Design Reference) */}
        <div
          onClick={() => setSelectedArticle(featuredArticle)}
          data-cursor="view"
          className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group cursor-pointer shadow-md hover:border-[#B59B78] transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Thumbnail */}
            <div className="lg:col-span-7 aspect-[16/10] overflow-hidden relative">
              <img
                src={featuredArticle.coverUrl}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans uppercase tracking-[0.2em] text-[#B59B78]">
                Featured Story
              </div>
            </div>

            {/* Article Meta & Excerpt */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
              <div className="flex items-center space-x-3 text-xs text-[#252525]/60 font-sans">
                <span className="text-[#B59B78] font-semibold uppercase tracking-wider">{featuredArticle.category}</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-[#B59B78]" />
                  <span>{featuredArticle.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-[#B59B78]" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252525] group-hover:text-[#B59B78] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-sm font-sans text-[#252525]/75 font-light leading-relaxed">
                {featuredArticle.summary}
              </p>

              <div className="pt-2 flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.18em] font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. RECENT STORIES GRID */}
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-[#252525]">
            Recent Publications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                data-cursor="view"
                className="bg-[#FAF9F6] border border-[#252525]/10 rounded-sm overflow-hidden group cursor-pointer shadow-sm hover:border-[#B59B78] transition-all hover:shadow-xl flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={article.coverUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-0.5 rounded text-[9px] font-sans uppercase tracking-[0.2em] text-[#B59B78]">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-[11px] text-[#252525]/50 font-sans">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h4 className="font-serif text-xl font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors line-clamp-2">
                      {article.title}
                    </h4>

                    <p className="text-xs font-sans text-[#252525]/70 font-light line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#252525]/10 flex items-center justify-between text-xs font-sans text-[#B59B78] font-medium">
                    <span>Read Article</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. FULL ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#FAF9F6] w-full max-w-4xl max-h-[90vh] rounded-lg overflow-y-auto border border-[#B59B78]/40 shadow-2xl relative">
            {/* Modal Header Bar */}
            <div className="sticky top-0 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#252525]/10 px-6 py-4 flex items-center justify-between z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-sans font-semibold">
                {selectedArticle.category}
              </span>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleShare}
                  className="p-2 text-[#252525]/60 hover:text-[#252525] rounded-full hover:bg-black/5"
                  title="Share Article"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 text-[#252525]/60 hover:text-[#252525] rounded-full hover:bg-black/5"
                  title="Close Article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Article Content Body */}
            <div className="p-6 sm:p-12 space-y-8">
              <div className="space-y-4">
                <h1 className="font-serif text-3xl sm:text-5xl text-[#252525] leading-tight">
                  {selectedArticle.title}
                </h1>
                <p className="text-base font-serif italic text-[#252525]/75">
                  {selectedArticle.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-[#252525]/60 pt-2 border-y border-[#252525]/10 py-3">
                  <span className="font-medium text-[#252525]">By {selectedArticle.author} ({selectedArticle.role})</span>
                  <span>•</span>
                  <span>Published {selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Cover Photo */}
              <div className="aspect-[16/9] rounded-sm overflow-hidden shadow-lg border border-[#252525]/10">
                <img
                  src={selectedArticle.coverUrl}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base font-sans text-[#252525]/85 font-light leading-relaxed">
                {selectedArticle.content?.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="bg-[#F8F6F2] p-6 rounded-sm border border-[#B59B78]/30 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#B59B78]/20 flex items-center justify-center text-[#B59B78]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#252525]">{selectedArticle.author}</h4>
                  <p className="text-xs font-sans text-[#252525]/60">{selectedArticle.role} • Lumina Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
