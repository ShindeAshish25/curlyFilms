import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Footer({ setActivePage }) {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1E1E] text-[#F8F6F2] pt-20 pb-12 border-t border-[#B59B78]/20 relative overflow-hidden">
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B59B78] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Studio Identity (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 flex items-center justify-center border border-[#B59B78] rounded-sm">
                <div className="w-2.5 h-2.5 rounded-full border border-[#B59B78]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-tight text-white block">
                  {STUDIO_INFO.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B59B78] font-sans font-medium block">
                  {STUDIO_INFO.subheading} • {STUDIO_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm font-sans text-[#F8F6F2]/70 leading-relaxed max-w-md font-light">
              Crafting cinematic stories of love, haute-couture editorials, and fine-art imagery across the globe. Preserving life's transcendent moments with editorial grace and emotional depth.
            </p>

            {/* Direct Connect Chips */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs hover:border-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#B59B78]/10 border border-[#B59B78]/30 text-[#B59B78] text-xs hover:border-[#B59B78] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B59B78]" />
                <span>Locate Studio</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B59B78]">
              Portfolio
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#F8F6F2]/75">
              <li>
                <button onClick={() => navigateTo('photography')} className="hover:text-[#B59B78] transition-colors">
                  Photography
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('films')} className="hover:text-[#B59B78] transition-colors">
                  Cinematic Films
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('projects')} className="hover:text-[#B59B78] transition-colors">
                  Selected Projects
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-[#B59B78] transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('journal')} className="hover:text-[#B59B78] transition-colors">
                  The Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B59B78]">
              Studio
            </h4>
            <ul className="space-y-2.5 text-sm font-sans text-[#F8F6F2]/75">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#B59B78] transition-colors">
                  About Atelier
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-[#B59B78] transition-colors">
                  Creative Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#B59B78] transition-colors">
                  Book a Shoot
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#B59B78] transition-colors">
                  Press & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Coordinates & Real Address (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B59B78]">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs font-sans text-[#F8F6F2]/80 leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#B59B78] shrink-0 mt-0.5" />
                <span>
                  303, Pride Purple Accord,<br />
                  Baner, Pune - 411045,<br />
                  Maharashtra, India.
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#B59B78] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-[#B59B78] transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#B59B78] shrink-0" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#B59B78] transition-colors">
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#F8F6F2]/50 block">
                Hours: {STUDIO_INFO.hours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F8F6F2]/50 font-sans space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span>© {currentYear} {STUDIO_INFO.name}. All rights reserved.</span>
            <span className="hidden sm:inline text-[#B59B78]">•</span>
            <span className="hidden sm:inline">Atelier Noir & Light Collection</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#B59B78] transition-colors">
              Instagram
            </a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-[#B59B78] transition-colors">
              Vimeo
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#B59B78] transition-colors">
              YouTube
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-[#B59B78] hover:text-white transition-colors ml-4 pl-4 border-l border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
