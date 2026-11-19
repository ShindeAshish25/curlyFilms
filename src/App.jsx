import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import VideoPlayerModal from './components/VideoPlayerModal';
import LightboxModal from './components/LightboxModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PhotographyPage from './pages/PhotographyPage';
import FilmsPage from './pages/FilmsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import JournalPage from './pages/JournalPage';
import ContactPage from './pages/ContactPage';

// Data & GSAP Setup
import { PORTFOLIO_PHOTOS } from './data/studioData';
import { initSmoothScroll, refreshScrollTriggers } from './utils/gsapSetup';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [activeFilmModal, setActiveFilmModal] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [preselectedService, setPreselectedService] = useState(null);

  // Initialize Lenis smooth scroll once
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  // Scroll to top and refresh ScrollTrigger on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    refreshScrollTriggers();
  }, [activePage]);

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevPhoto = () => {
    setLightboxIndex((prev) => (prev === 0 ? PORTFOLIO_PHOTOS.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setLightboxIndex((prev) => (prev === PORTFOLIO_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="relative min-h-screen bg-[#F8F6F2] text-[#252525] selection:bg-[#B59B78] selection:text-white font-sans antialiased overflow-x-hidden film-grain">
      {/* Signature Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Multi-Page Route Render */}
      <main className="transition-opacity duration-300">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenFilm={(film) => setActiveFilmModal(film)}
            onOpenLightbox={handleOpenLightbox}
            showToast={showToast}
            setPreselectedService={setPreselectedService}
          />
        )}

        {activePage === 'about' && (
          <AboutPage setActivePage={setActivePage} />
        )}

        {activePage === 'photography' && (
          <PhotographyPage onOpenLightbox={handleOpenLightbox} />
        )}

        {activePage === 'films' && (
          <FilmsPage onOpenFilm={(film) => setActiveFilmModal(film)} />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onOpenFilm={(film) => setActiveFilmModal(film)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={setActivePage}
            setPreselectedService={setPreselectedService}
          />
        )}

        {activePage === 'journal' && (
          <JournalPage showToast={showToast} />
        )}

        {activePage === 'contact' && (
          <ContactPage
            preselectedService={preselectedService}
            showToast={showToast}
          />
        )}
      </main>

      {/* 18. PREMIUM FOOTER */}
      <Footer setActivePage={setActivePage} />

      {/* Global Video Player Modal */}
      {activeFilmModal && (
        <VideoPlayerModal
          film={activeFilmModal}
          onClose={() => setActiveFilmModal(null)}
        />
      )}

      {/* Global Photography Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          photos={PORTFOLIO_PHOTOS}
          activeIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
          showToast={showToast}
        />
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
