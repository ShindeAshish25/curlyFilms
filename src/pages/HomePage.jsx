import React from 'react';
import CinematicHero from '../components/home/CinematicHero';
import StudioIntro from '../components/home/StudioIntro';
import PinnedStory from '../components/home/PinnedStory';
import FeaturedPhotography from '../components/home/FeaturedPhotography';
import HorizontalGallery from '../components/home/HorizontalGallery';
import FilmShowcase from '../components/home/FilmShowcase';
import FeaturedFilmOfMonth from '../components/home/FeaturedFilmOfMonth';
import ArtOfStorytelling from '../components/home/ArtOfStorytelling';
import SignatureCollections from '../components/home/SignatureCollections';
import FineArtCollection from '../components/home/FineArtCollection';
import BehindTheLens from '../components/home/BehindTheLens';
import SignatureDestinations from '../components/home/SignatureDestinations';
import ServicesOverview from '../components/home/ServicesOverview';
import ExperienceTimeline from '../components/home/ExperienceTimeline';
import StudioTeam from '../components/home/StudioTeam';
import TestimonialsSection from '../components/home/TestimonialsSection';
import LatestJournal from '../components/home/LatestJournal';
import ExtraordinaryBanner from '../components/home/ExtraordinaryBanner';
import ContactSection from '../components/home/ContactSection';
import { FILMS } from '../data/studioData';

export default function HomePage({ setActivePage, onOpenFilm, onOpenLightbox, showToast, setPreselectedService }) {
  const featuredFilm = FILMS.find((f) => f.featured) || FILMS[0];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#252525] overflow-x-hidden selection:bg-[#B59B78] selection:text-white">
      {/* 1. LUXURY CINEMATIC HERO */}
      <CinematicHero
        setActivePage={setActivePage}
        onOpenShowreel={() => onOpenFilm(featuredFilm)}
      />

      {/* 2. STUDIO INTRODUCTION */}
      <StudioIntro setActivePage={setActivePage} />

      {/* 3. CINEMATIC SCROLL STORYTELLING (PINNED SCENES) */}
      <PinnedStory />

      {/* 4. FEATURED PHOTOGRAPHY */}
      <FeaturedPhotography
        setActivePage={setActivePage}
        onOpenLightbox={onOpenLightbox}
      />

      {/* 5. HORIZONTAL FEATURED PROJECTS */}
      <HorizontalGallery setActivePage={setActivePage} />

      {/* 6. CINEMATIC FILM SHOWCASE */}
      <FilmShowcase
        setActivePage={setActivePage}
        onOpenFilm={onOpenFilm}
      />

      {/* 6B. FEATURED FILM OF THE MONTH */}
      <FeaturedFilmOfMonth onOpenFilm={onOpenFilm} />

      {/* 7. THE ART OF STORYTELLING */}
      <ArtOfStorytelling />

      {/* 8. SIGNATURE COLLECTIONS */}
      <SignatureCollections setActivePage={setActivePage} />

      {/* 8B. FINE ART COLLECTION (MUSEUM-GRADE ARCHIVE) */}
      <FineArtCollection onOpenLightbox={onOpenLightbox} />

      {/* 9. BEHIND THE LENS */}
      <BehindTheLens />

      {/* 10. SIGNATURE DESTINATIONS */}
      <SignatureDestinations setActivePage={setActivePage} />

      {/* 11. OUR SERVICES */}
      <ServicesOverview
        setActivePage={setActivePage}
        setPreselectedService={setPreselectedService}
      />

      {/* 12. THE EXPERIENCE (5-STAGE CLIENT JOURNEY) */}
      <ExperienceTimeline />

      {/* 13. STUDIO STORY & TEAM */}
      <StudioTeam setActivePage={setActivePage} />

      {/* 14. CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* 15. LATEST JOURNAL */}
      <LatestJournal setActivePage={setActivePage} />

      {/* 16. LET'S CREATE SOMETHING EXTRAORDINARY */}
      <ExtraordinaryBanner setActivePage={setActivePage} />

      {/* 17. CONTACT & STUDIO LOCATION */}
      <ContactSection showToast={showToast} />
    </div>
  );
}
