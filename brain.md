# ATELIER NOIR & LIGHT — PROJECT BRAIN
*Permanent Knowledge Base & Single Source of Truth*
*Last Updated: 2026-11-20 | Version 2.0 (Ultra-Luxury Cinematic Edition)*

---

## 1. Project Overview
- **Project Name:** Atelier Noir & Light (Brand display: *Lumina Studio — Atelier Noir & Light*)
- **Website Purpose:** Ultra-luxury cinematic photography and filmmaking studio portfolio and client acquisition platform.
- **Business Objectives:**
  - Establish an international luxury presence on par with premier cinematic studios.
  - Showcase high-fashion wedding cinema, haute couture editorials, architectural landscapes, and commercial luxury films.
  - Generate qualified client inquiries through an intuitive, validated booking inquiry experience and direct WhatsApp concierge.
- **Target Audience:** Discerning luxury couples, creative directors, haute-couture fashion houses, and luxury brand executives worldwide.
- **Approved Design Direction:** High-contrast editorial minimalism, generous whitespace, asymmetrical photography compositions, subtle gold detailing, fluid GSAP animations, and Lenis smooth scrolling.

---

## 2. Design System
- **Approved 3-Color Palette (Strict Rule — No dark website themes):**
  - **Warm Ivory:** `#F8F6F2` (Primary ambient background, clean canvas)
  - **Charcoal / Noir:** `#252525` (Headings, primary body typography, editorial contrast, dark video frames)
  - **Champagne Gold:** `#B59B78` (Buttons, active indicator pills, delicate divider hairlines, camera icons, progress lines)
  - *Secondary ambient tints:* `#FAF9F6` (soft card surface), `#1E1E1E` (modal/footer backdrop), `#9A805E` (gold hover state).
- **Typography:**
  - **Editorial Headings & Quotes:** *Playfair Display* & *Cormorant Garamond* (Google Fonts)
  - **Body Content & UI:** *Inter* & *Manrope* (Google Fonts)
  - **Styling Rules:** Selective italic emphasis for emotive words, wide letter-tracking (`tracking-[0.25em]`) on uppercase subtitles and camera metadata.
- **Layout Principles:** Generous whitespace, asymmetric photography mosaics, varied aspect ratios (`3/4`, `4/5`, `16/9`, `21/9`), thin champagne-gold divider lines, zero generic template cards.
- **Buttons:** Champagne Gold `#B59B78` with charcoal text, subtle magnetic hover attraction, fine borders, smooth color inversion.
- **Navigation:** Minimal sticky header with geometric aperture glyph, wordmark, uppercase tracked links, active underline pill, and mobile slide-out drawer.
- **Imagery:** High-resolution, color-graded photography with authentic 35mm film grain overlay.
- **Responsive Rules:** Fluid desktop, tablet, and mobile layouts with `gsap.matchMedia()` and accessible reduced-motion fallbacks.

---

## 3. Website Structure
- **All Pages (Client-Side Multi-Page Routing via `App.jsx`):**
  1. `Home` (`HomePage.jsx`) — The master 18+ section cinematic journey.
  2. `About Studio` (`AboutPage.jsx`) — Studio history, philosophy, leadership, 4-step process, equipment manifest.
  3. `Photography Portfolio` (`PhotographyPage.jsx`) — Full-width masonry gallery with category filters & EXIF lightbox.
  4. `Cinematic Films` (`FilmsPage.jsx`) — 16:9 featured showreel, 4K film project grid, and custom video player modal.
  5. `Selected Projects` (`ProjectsPage.jsx`) — Editorial project catalog & dedicated in-depth case study template.
  6. `Services` (`ServicesPage.jsx`) — 6 bespoke packages, inclusions, turnaround times, and direct inquiry link.
  7. `Journal` (`JournalPage.jsx`) — Editorial articles, technical guides, behind-the-scenes essays, and interactive reader modal.
  8. `Contact & Booking` (`ContactPage.jsx`) — Working booking form, direct WhatsApp concierge, real studio coordinates, responsive Google Maps.
- **Navigation Flow:** Sticky global navbar at top, persistent luxury footer at bottom, smooth page scroll restoration.

---

## 4. Features & Functionality
- **Interactive Lightbox Modal:** Full-screen photography preview with zoom toggle (1x / 1.5x), EXIF metadata display, keyboard arrow navigation (`←`, `→`, `Esc`), and link sharing.
- **Cinematic Video Player Modal:** Custom controls (play/pause, time scrubber, volume/mute, fullscreen), project credits, keyboard control (`Space`, `Esc`), and auto-pause on modal close.
- **Interactive Custom Cursor:** Circular lag cursor with context-aware states:
  - Default: Fine gold ring + precise center dot.
  - Image hover: Expanded gold badge with `"VIEW"`.
  - Video hover: Expanded charcoal badge with `"PLAY"` + icon.
  - Project/Case study hover: Expanded badge with `"EXPLORE"`.
  - Slider controls hover: Directional arrows (`←` / `→`).
  - Button hover: Magnetic pull with scale-up.
- **Working Booking Inquiry Form:** Client-side validation for Name, Email, Phone, Service, Date, Location, Budget, Message. Simulated submission with reference ID (`LUM-2026-XXXX`), champagne confetti via `canvas-confetti`, and reset option.
- **Direct WhatsApp Concierge:** Pre-filled instant chat link (`https://wa.me/919860623500`).
- **Interactive Google Maps Embed:** Responsive iframe pointing to `303, Pride Purple Accord, Baner, Pune - 411045, Maharashtra, India` + *"Open in Google Maps"* direct link.
- **SEO & Structured Data:** OpenGraph tags, meta description, and Schema.org `PhotographyBusiness` JSON-LD in `index.html`.

---

## 5. GSAP Animation System
- **Animation Architecture:**
  - GSAP v3 + `ScrollTrigger` + `@gsap/react` (`useGSAP()`).
  - `Lenis` smooth scroll integration synchronized via `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker`.
  - Scoped selectors with automatic lifecycle cleanup.
  - `gsap.matchMedia()` for desktop (`min-width: 1024px`), tablet, and mobile.
  - Reduced-motion accessibility check (`window.matchMedia('(prefers-reduced-motion: reduce)')`).
- **Hero Animation (`CinematicHero.jsx`):**
  - Hero image scales from `1.12` to `1.0` on load.
  - Staggered line-by-line reveal of headline.
  - Supporting copy fades upward.
  - Booking and showreel buttons appear sequentially.
  - ScrollTrigger scrub zooms background from `1.0` to `1.12` during scrolling.
- **Pinned Storytelling (`PinnedStory.jsx`):**
  - Section pins for `PINNED_SCENES.length * 100%` scroll distance.
  - Smooth opacity and scale cross-fade across 4 scenes.
  - Dynamic scene indicator (`SCENE 01 / 04`).
- **Horizontal Gallery (`HorizontalGallery.jsx`):**
  - Desktop: Vertical scroll moves gallery horizontally (`x: getScrollAmount`, `pin: true`, `scrub: 1`).
  - Mobile: Native smooth horizontal swipe with snap.
- **Experience Timeline (`ExperienceTimeline.jsx`):**
  - ScrollTrigger scrub scales the thin champagne-gold progress line from 0 to 1 across the 5 steps.
  - Staggered step card fade-up on viewport entry.

---

## 6. Components
- **Global:**
  - `Navbar.jsx`: Minimal sticky header with aperture glyph, navigation links, and mobile drawer.
  - `Footer.jsx`: Studio details, phone, email, address, links, copyright.
  - `CustomCursor.jsx`: Context-aware circular cursor with physics.
  - `VideoPlayerModal.jsx`: Custom 4K video player modal.
  - `LightboxModal.jsx`: Fullscreen photography lightbox with EXIF data.
  - `Toast.jsx`: Sliding notification toast pill.
- **Home Sections (in `src/components/home/`):**
  - `CinematicHero.jsx`: Full-screen film hero with scrub zoom and headline reveal.
  - `StudioIntro.jsx`: 2-column studio intro and stat counter row.
  - `PinnedStory.jsx`: 4-scene pinned scroll storytelling.
  - `FeaturedPhotography.jsx`: Asymmetrical curated photography mosaic.
  - `HorizontalGallery.jsx`: Scroll-driven horizontal exhibition of 5 projects.
  - `FilmShowcase.jsx`: 16:9 featured showreel and 4K film cards.
  - `ArtOfStorytelling.jsx`: Editorial typography and panoramic landscape.
  - `SignatureCollections.jsx`: 5 genre collections with interactive previews.
  - `BehindTheLens.jsx`: 3 BTS craft stories (anamorphic, sound, color).
  - `SignatureDestinations.jsx`: 4 global destination cards with coordinates.
  - `ServicesOverview.jsx`: 4 core services with inquiry pre-selection.
  - `ExperienceTimeline.jsx`: 5-step animated client journey with gold progress line.
  - `StudioTeam.jsx`: Founder and creative leadership profiles.
  - `TestimonialsSection.jsx`: Verified client review slider.
  - `LatestJournal.jsx`: Curated editorial articles.
  - `ExtraordinaryBanner.jsx`: Full-width cinematic booking callout.
  - `ContactSection.jsx`: Inquiry form, WhatsApp link, and Google Maps.
  - `FeaturedFilmOfMonth.jsx`: Prominently featured film with deep narrative (V2.0).
  - `FineArtCollection.jsx`: Museum-inspired fine art gallery (V2.0).

---

## 7. Technical Architecture
- **Framework:** React 19 + Vite 8 (Ultra-fast HMR and ~1.2s production build).
- **Styling:** Tailwind CSS v4 with custom CSS variables (`--color-ivory`, `--color-charcoal`, `--color-gold`).
- **Icons:** `lucide-react`.
- **Animation:** `gsap`, `@gsap/react`, `lenis`.
- **Feedback Effects:** `canvas-confetti`.
- **Linter:** `oxlint` (Zero warnings, zero errors).

---

## 8. Assets & Content
- High-resolution, royalty-free photography curated from Unsplash representing royal heritage weddings, Milan/Paris haute couture, Dolomites alpine landscapes, luxury perfumery, and cinema production gear.
- High-quality video preview streams hosted on Mixkit CDN.
- Real studio coordinates: `303, Pride Purple Accord, Baner, Pune - 411045, Maharashtra, India`.
- Real contact telephone: `+91 9860623500`.

---

## 9. Completed Work
- [x] Global luxury design system established with exact 3-color palette.
- [x] All 8 primary pages built and fully navigable.
- [x] 18 enhanced homepage sections built in sequential order.
- [x] Full GSAP ScrollTrigger animation suite with Lenis smooth scrolling.
- [x] Working booking inquiry form with validation, confetti, and reference generation.
- [x] Responsive Google Maps embed and WhatsApp concierge.
- [x] Fullscreen photo lightbox with EXIF metadata.
- [x] Custom 4K video player modal with scrubber and sound controls.
- [x] 0 warnings and 0 errors across linter (`oxlint`) and production build (`vite build`).
- [x] V2.0: `FeaturedFilmOfMonth.jsx` (Section G) widescreen masterwork with optical & sound manifest.
- [x] V2.0: `FineArtCollection.jsx` (Section H) museum-inspired gallery with passe-partout framing.
- [x] V2.0: `CustomCursor.jsx` with context states ("EXPLORE", directional arrows, "VIEW", "PLAY", magnetic attraction).
- [x] V2.0: `CinematicHero.jsx` with word-by-word staggered headline reveal, entry scale `1.16 → 1.0`, and scrub zoom.
- [x] V2.0: Wired all new sections into `HomePage.jsx` preserving complete 18+ sequential section narrative.

---

## 10. In Progress (V2.0 Enhancements)
- [x] Create and maintain `brain.md` and `AGENTS.md`.
- [x] Add `FeaturedFilmOfMonth.jsx` (Section G).
- [x] Add `FineArtCollection.jsx` (Section H).
- [x] Add contextual cursor states ("EXPLORE", directional arrows, magnetic attraction).
- [x] Add word-by-word staggered typography reveals in Hero and Editorial sections.
- [x] Ensure seamless route transitions and complete parity across all 8 pages.
- [x] Wire all components into `HomePage.jsx` and verify 200 OK on Vite dev server.

---

## 11. Planned Enhancements
- Interactive soundscape toggle (subtle ambient luxury tone).
- Client portal login preview mockup for private wedding galleries.
- Multi-currency booking estimator (INR / USD / EUR).

---

## 12. Bugs & Known Issues
- *None currently.* All lint and build checks pass cleanly with 0 errors.

---

## 13. Decisions & Change Log
- **2026-11-19:** Initial website scaffolded with React + Vite + Tailwind CSS.
- **2026-11-19:** Built all 8 initial pages following design board reference.
- **2026-11-19:** Integrated GSAP ScrollTrigger, Lenis smooth scrolling, and 18-section homepage flow.
- **2026-11-20:** Established `brain.md` and `AGENTS.md` as permanent single source of truth.
- **2026-11-20:** Enhanced `CustomCursor.jsx` with context badges ("VIEW", "PLAY", "EXPLORE", "←", "→") and reduced motion check.
- **2026-11-20:** Upgraded `CinematicHero.jsx` with word-by-word staggered masked entrance and scrub zoom.
- **2026-11-20:** Created and integrated `FeaturedFilmOfMonth.jsx` and `FineArtCollection.jsx` into `HomePage.jsx`.
- **2026-11-20:** Verified 0 lint warnings via `oxlint` and 100% clean production build via `vite build`. Dev server live on `http://localhost:5173/`.

---

## 14. Next Development Steps
1. Maintain continuous synchronization between code changes and `brain.md` in accordance with `AGENTS.md`.
2. Ready for user feedback, client-specific media updates, or bespoke extensions.

---

## 15. Quality Assurance Checklist
- [x] Warm Ivory `#F8F6F2`, Charcoal `#252525`, Champagne Gold `#B59B78` strictly respected.
- [x] No dark website theme introduced.
- [x] Desktop pinned sections smoothly transition without trapping user.
- [x] Mobile fallback for horizontal gallery active.
- [x] Keyboard navigation (`Esc`, `←`, `→`, `Space`) operational in modals.
- [x] Form validation active and tested.
- [x] Zero lint warnings (`oxlint`).
- [x] Clean production build (`npm run build`).
