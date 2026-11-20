import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'photography', label: 'Photography' },
    { id: 'films', label: 'Films' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#F8F6F2]/95 backdrop-blur-md py-4 border-b border-[#252525]/10 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Studio Branding & Aperture Glyph */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 text-left group transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Geometric Aperture / Viewfinder Glyph */}
          <div className="relative w-8 h-8 flex items-center justify-center border border-[#B59B78] rounded-sm transition-colors duration-300 group-hover:border-[#252525]">
            <div className="w-2.5 h-2.5 rounded-full border border-[#B59B78] transition-all duration-300 group-hover:scale-125" />
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#252525]" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#252525]" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#252525]" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#252525]" />
          </div>

          <div>
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-[#252525] block leading-none">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#B59B78] font-sans font-medium mt-1 block">
              {STUDIO_INFO.subheading}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs uppercase tracking-[0.18em] font-sans transition-all duration-300 relative py-1.5 group ${
                  isActive
                    ? 'text-[#252525] font-semibold'
                    : 'text-[#252525]/70 hover:text-[#252525]'
                }`}
              >
                <span>{link.label}</span>
                {/* Active Gold Line Indicator */}
                {isActive ? (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#B59B78] rounded-full" />
                ) : (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#B59B78]/60 rounded-full transition-all duration-300 group-hover:w-4" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Action & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative inline-flex items-center space-x-2 px-5 py-2.5 bg-[#B59B78] text-[#F8F6F2] text-xs font-sans uppercase tracking-[0.15em] font-medium rounded-sm transition-all duration-300 hover:bg-[#9A805E] shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Book a Shoot</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#252525] hover:text-[#B59B78] transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 bg-[#F8F6F2] z-40 lg:hidden px-6 py-8 flex flex-col justify-between border-t border-[#252525]/10 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="space-y-4">
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#B59B78] font-medium mb-3">
            Menu Navigation
          </div>
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left font-serif text-2xl py-2 transition-all ${
                  isActive ? 'text-[#B59B78] pl-2 font-semibold' : 'text-[#252525] hover:text-[#B59B78]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Mobile Drawer Bottom Info */}
        <div className="pt-6 border-t border-[#252525]/10 space-y-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full py-3.5 bg-[#B59B78] text-white text-xs uppercase tracking-[0.18em] font-medium text-center rounded-sm transition-all hover:bg-[#9A805E]"
          >
            Book a Shoot →
          </button>
          <div className="flex items-center justify-between text-xs text-[#252525]/70 pt-2 font-sans">
            <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-[#B59B78]">
              <Phone className="w-3.5 h-3.5 text-[#B59B78]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <a href={`mailto:${STUDIO_INFO.email}`} className="flex items-center space-x-1.5 hover:text-[#B59B78]">
              <Mail className="w-3.5 h-3.5 text-[#B59B78]" />
              <span>Email Studio</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
