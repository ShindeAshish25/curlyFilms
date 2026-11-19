import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ChevronRight, ArrowLeft } from 'lucide-react';
import { CASE_STUDIES } from '../data/studioData';

export default function ProjectsPage({ onOpenFilm, onOpenLightbox }) {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);

  const activeProject = CASE_STUDIES.find((cs) => cs.id === selectedCaseStudyId) || CASE_STUDIES[0];

  const handleNextProject = () => {
    const currentIndex = CASE_STUDIES.findIndex((cs) => cs.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % CASE_STUDIES.length;
    setSelectedCaseStudyId(CASE_STUDIES[nextIndex].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] pt-28 pb-24">
      {/* If looking at all projects overview or detailed case study */}
      {selectedCaseStudyId === null ? (
        // 1. ALL PROJECTS EDITORIAL GALLERY OVERVIEW
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B59B78] font-sans font-semibold block">
              CURATED COMMISSIONS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#252525] font-normal">
              Selected Projects
            </h1>
            <p className="text-sm sm:text-base font-sans text-[#252525]/70 font-light max-w-xl mx-auto leading-relaxed">
              In-depth case studies documenting the creative concept, cinematography, and fine-art still photography of our signature assignments.
            </p>
          </div>

          <div className="space-y-16">
            {CASE_STUDIES.map((cs, idx) => (
              <div
                key={cs.id}
                onClick={() => {
                  setSelectedCaseStudyId(cs.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group bg-[#FAF9F6] border border-[#252525]/10 rounded-sm p-6 sm:p-8 hover:border-[#B59B78] transition-all duration-300 hover:shadow-xl ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Thumbnail */}
                <div className={`lg:col-span-7 aspect-[16/10] overflow-hidden rounded-sm relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={cs.heroImage}
                    alt={cs.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs font-mono text-[#F8F6F2] bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
                      {cs.location}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 space-y-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-sans font-semibold">
                      {cs.category} • {cs.year}
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#252525] group-hover:text-[#B59B78] transition-colors">
                      {cs.title}
                    </h2>
                    <p className="font-serif text-sm italic text-[#252525]/70">
                      "{cs.quote}"
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#252525]/75 font-light leading-relaxed line-clamp-3">
                    {cs.story}
                  </p>

                  <div className="pt-2">
                    <button className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#252525] group-hover:text-[#B59B78] transition-colors">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 2. INDIVIDUAL CASE STUDY TEMPLATE (e.g. The Wedding Tale)
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 animate-fadeIn">
          {/* Back Button */}
          <div>
            <button
              onClick={() => setSelectedCaseStudyId(null)}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans text-[#252525]/70 hover:text-[#B59B78] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Projects</span>
            </button>
          </div>

          {/* Project Hero Header (Exact to Reference Board) */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold">
              <span>{activeProject.category}</span>
              <span>•</span>
              <span>{activeProject.year}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#252525] font-normal leading-tight">
              {activeProject.title}
            </h1>

            <p className="font-serif text-lg sm:text-xl italic text-[#252525]/80 max-w-2xl">
              "{activeProject.quote}"
            </p>

            {/* Project Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#252525]/10 text-xs font-sans">
              <div>
                <span className="text-[#252525]/50 block uppercase tracking-wider text-[10px]">Client</span>
                <span className="font-medium text-[#252525] mt-0.5 block">{activeProject.client}</span>
              </div>
              <div>
                <span className="text-[#252525]/50 block uppercase tracking-wider text-[10px]">Location</span>
                <span className="font-medium text-[#252525] mt-0.5 block">{activeProject.location}</span>
              </div>
              <div>
                <span className="text-[#252525]/50 block uppercase tracking-wider text-[10px]">Deliverables</span>
                <span className="font-medium text-[#252525] mt-0.5 block">Film & Editorial Stills</span>
              </div>
              <div>
                <span className="text-[#252525]/50 block uppercase tracking-wider text-[10px]">Format</span>
                <span className="font-medium text-[#B59B78] mt-0.5 block">4K Anamorphic</span>
              </div>
            </div>
          </div>

          {/* Large Cinematic Hero Image */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border border-[#252525]/10">
            <img
              src={activeProject.heroImage}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Story & Creative Approach */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-6">
            <div className="md:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
                THE NARRATIVE
              </span>
              <h3 className="font-serif text-2xl text-[#252525]">
                The Vision & Emotion
              </h3>
              <p className="text-sm font-sans text-[#252525]/75 font-light leading-relaxed">
                {activeProject.story}
              </p>
            </div>

            <div className="md:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
                THE EXECUTION
              </span>
              <h3 className="font-serif text-2xl text-[#252525]">
                Our Creative Approach
              </h3>
              <p className="text-sm font-sans text-[#252525]/75 font-light leading-relaxed">
                {activeProject.approach}
              </p>
            </div>
          </div>

          {/* Embedded Film Section */}
          <div className="space-y-4 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-[#252525]">
                The Cinematic Film
              </h3>
              <span className="text-xs font-mono text-[#B59B78]">
                Runtime: {activeProject.videoDuration}
              </span>
            </div>

            <div
              onClick={() => onOpenFilm({
                title: activeProject.title,
                subtitle: activeProject.subtitle,
                category: activeProject.category,
                duration: activeProject.videoDuration,
                videoUrl: activeProject.filmUrl,
                coverUrl: activeProject.heroImage,
                location: activeProject.location
              })}
              data-cursor="play"
              className="relative aspect-video rounded-sm overflow-hidden bg-black cursor-pointer group shadow-2xl border border-[#252525]/15"
            >
              <img
                src={activeProject.heroImage}
                alt={activeProject.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#B59B78] text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-115">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Curated Photo Gallery Grid */}
          <div className="space-y-6 pt-8">
            <h3 className="font-serif text-2xl text-[#252525]">
              Curated Editorial Stills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeProject.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => onOpenLightbox(0)}
                  data-cursor="view"
                  className="aspect-[3/4] rounded-sm overflow-hidden group cursor-pointer border border-[#252525]/10 bg-[#FAF9F6]"
                >
                  <img
                    src={imgUrl}
                    alt={`${activeProject.title} frame ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications & Gear */}
          <div className="bg-[#FAF9F6] border border-[#252525]/10 p-8 rounded-sm space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B59B78] font-semibold block">
              PRODUCTION SPECIFICATIONS
            </span>
            <h4 className="font-serif text-xl text-[#252525]">
              Hardware & Optical Manifest
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-sans text-[#252525]/80">
              {activeProject.gearList.map((gear, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B59B78] shrink-0" />
                  <span>{gear}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Project Navigation */}
          <div className="pt-12 border-t border-[#252525]/10 flex items-center justify-between">
            <button
              onClick={() => setSelectedCaseStudyId(null)}
              className="text-xs uppercase tracking-[0.18em] font-sans text-[#252525]/70 hover:text-[#B59B78]"
            >
              ← All Case Studies
            </button>

            <button
              onClick={handleNextProject}
              className="group inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#252525] hover:text-[#B59B78] transition-colors"
            >
              <span>Next Project</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
