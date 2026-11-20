// studioData.js — Master Data for Atelier Noir & Light / Lumina Studio (V2.0 Ultra-Luxury Edition)

export const STUDIO_INFO = {
  name: "Lumina Studio",
  tagline: "Atelier Noir & Light",
  subheading: "PHOTOGRAPHY & FILMS",
  headline: "Every Frame Tells a Story.",
  secondaryHeadline: "Cinematic Stories of Love.",
  heroDescription: "Timeless photography. Cinematic films. Stories worth remembering.",
  phone: "+91 9860623500",
  email: "hello@luminastudio.co",
  address: "303, Pride Purple Accord, Baner, Pune - 411045, Maharashtra, India",
  googleMapsUrl: "https://maps.google.com/?q=Pride+Purple+Accord+Baner+Pune+Maharashtra+411045",
  whatsappUrl: "https://wa.me/919860623500?text=Hello%20Lumina%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20cinematic%20shoot.",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST",
  socials: {
    instagram: "https://instagram.com",
    vimeo: "https://vimeo.com",
    youtube: "https://youtube.com",
    behance: "https://behance.net",
    pinterest: "https://pinterest.com"
  }
};

export const STATS = [
  { label: "Projects Completed", value: "250+", icon: "camera" },
  { label: "Years of Experience", value: "10+", icon: "award" },
  { label: "Happy Clients", value: "180+", icon: "users" },
  { label: "Cinematic Films", value: "50+", icon: "film" },
];

export const HERO_MEDIA = {
  type: "image",
  imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
  fallbackUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
  alt: "Cinematic Wedding Portrait — Lumina Studio Atelier Noir & Light",
  videoPreviewUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-field-at-sunset-41662-large.mp4"
};

// Section 3: Cinematic Pinned Storytelling (4 Scenes)
export const PINNED_SCENES = [
  {
    id: "scene-1",
    sceneNumber: "01",
    tagline: "THE SACRED VOW",
    title: "Quiet Truths in Sacred Light",
    description: "Before the music swells and crowds gather, there exists a sacred stillness. We listen to the breath before 'I do', recording the quiet intimacy that defines true love.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85",
    location: "Lake Pichola, Udaipur",
    camera: "Leica M11 • 50mm f/0.95"
  },
  {
    id: "scene-2",
    sceneNumber: "02",
    tagline: "ARCHITECTURAL HARMONY",
    title: "Grandeur Framing Intimate Grace",
    description: "Centuries-old stone arches and hand-carved marble domes become silent witnesses. We compose couples within grand architecture to emphasize the scale and timeless permanence of their bond.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=85",
    location: "Mehrangarh Fort, Jodhpur",
    camera: "Sony FX6 Cinema • Cooke Anamorphic"
  },
  {
    id: "scene-3",
    sceneNumber: "03",
    tagline: "THE UNSCRIPTED EMOTION",
    title: "Tears, Laughter, and Raw Humanity",
    description: "We reject choreographed artifice. The true essence of wedding cinema lies in the unprompted glance of a proud father, the trembling hand of an embrace, and spontaneous joy under starry skies.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
    location: "Villa Balbiano, Lake Como",
    camera: "Hasselblad X2D 100C"
  },
  {
    id: "scene-4",
    sceneNumber: "04",
    tagline: "ENDURING LEGACY",
    title: "Heirloom Cinema for Generations",
    description: "Graded for decades rather than algorithmic trends. When your grandchildren view these films and fine-art prints fifty years from now, the emotional resonance remains as potent as day one.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85",
    location: "Amalfi Coast, Italy",
    camera: "ARRI Alexa Mini LF"
  }
];

export const FEATURED_MOSAIC = [
  {
    id: "mosaic-1",
    title: "The Royal Rajputana Union",
    category: "Weddings",
    location: "Udaipur, India",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-4 row-span-2",
    aspect: "aspect-[3/4]",
    caption: "Heritage couture and sacred vows amidst ancient marble palaces."
  },
  {
    id: "mosaic-2",
    title: "Alpine Reverie",
    category: "Travel & Editorial",
    location: "Dolomites, Italy",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    span: "col-span-12 md:col-span-5 row-span-1",
    aspect: "aspect-[16/9]",
    caption: "First light striking jagged granite peaks at 2,800 meters."
  },
  {
    id: "mosaic-3",
    title: "Golden Hour Solitude",
    category: "Portraits",
    location: "Jaipur, India",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-3 row-span-2",
    aspect: "aspect-[3/4]",
    caption: "Luminous portraiture captured through vintage Cooke anamorphic glass."
  },
  {
    id: "mosaic-4",
    title: "Palace Courtyard Archway",
    category: "Architecture & Wedding",
    location: "Jodhpur, India",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    span: "col-span-12 md:col-span-5 row-span-1",
    aspect: "aspect-[16/9]",
    caption: "Framing timeless love through sandstone arches bathed in sun."
  }
];

// Section 5: Horizontal Featured Projects (5 Panels)
export const HORIZONTAL_PROJECTS = [
  {
    id: "hp-1",
    title: "The Udaipur Royal Union",
    category: "Wedding Cinema & Stills",
    client: "Ananya & Rohan",
    location: "The Oberoi Udaivilas, Udaipur",
    year: "2024",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85",
    tagline: "A three-day royal synthesis of Rajasthani majesty and haute-couture intimacy.",
    duration: "04:32",
    resolution: "4K Cinema"
  },
  {
    id: "hp-2",
    title: "Maison de L'Ombre",
    category: "Haute Couture Editorial",
    client: "Vogue Italia & Atelier Noir",
    location: "Palais Galliera, Paris",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85",
    tagline: "Sculptural pleats in morning light, captured with medium-format analog depth.",
    duration: "02:45",
    resolution: "4K UHD"
  },
  {
    id: "hp-3",
    title: "Beyond the Peaks",
    category: "Expedition Documentary",
    client: "National Geographic Traveller",
    location: "Zanskar Valley, 4,500m",
    year: "2024",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    tagline: "A twenty-day pack-in expedition documenting remote Himalayan monastic life.",
    duration: "06:15",
    resolution: "8K Cinema"
  },
  {
    id: "hp-4",
    title: "Aura Botanical Parfumerie",
    category: "Commercial Luxury Stills",
    client: "Aura Parfums Grasse",
    location: "Lumina Studio Pune",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    tagline: "Tactile still-life compositions celebrating rare botanicals and crystal flacons.",
    duration: "Stills & Reel",
    resolution: "100 MP Stills"
  },
  {
    id: "hp-5",
    title: "Amalfi Coastline Serenade",
    category: "Destination Wedding Film",
    client: "Meera & Siddharth",
    location: "Villa Cimbrone, Ravello",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    tagline: "Sun-drenched cliffs, classic wooden boats, and vows overlooking the Tyrrhenian Sea.",
    duration: "05:20",
    resolution: "4K UHD"
  }
];

export const FILMS = [
  {
    id: "film-1",
    title: "The Wedding Tale",
    subtitle: "A celebration of love, family and unforgettable moments",
    category: "Wedding Film",
    year: "2024",
    duration: "04:32",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-field-at-sunset-41662-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: true,
    client: "Ananya & Rohan",
    location: "The Oberoi Udaivilas, Udaipur",
    director: "Devansh Rao",
    camera: "Sony FX6 & FX3 Cinema Line",
    lenses: "Cooke Anamorphic /i Full Frame Plus",
    description: "An intimate royal celebration set against the tranquil waters of Lake Pichola. Captured in native 4K with custom cinematic film emulation LUTs."
  },
  {
    id: "film-2",
    title: "Beyond the Peaks",
    subtitle: "A visual ode to silent heights and endless horizons",
    category: "Travel & Documentary",
    year: "2024",
    duration: "06:15",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-mountain-range-covered-in-snow-42861-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: false,
    client: "National Geographic Traveller",
    location: "Ladakh & Spiti Valley",
    director: "Aditya Verma",
    camera: "RED V-Raptor 8K VV",
    lenses: "Zeiss Supreme Primes",
    description: "A meditative travel documentary traversing high-altitude mountain passes, ancient monasteries, and starry glacial nights."
  },
  {
    id: "film-3",
    title: "Elegance in Motion",
    subtitle: "High fashion editorial campaign for Maison de L'Ombre",
    category: "Fashion Film",
    year: "2024",
    duration: "02:45",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-an-avant-garde-dress-41315-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: false,
    client: "Vogue India & Atelier Noir",
    location: "Paris, France",
    director: "Tara Sen",
    camera: "ARRI Alexa Mini LF",
    lenses: "Angénieux Optimo Primes",
    description: "Dynamic haute-couture movement piece exploring the interplay between structured luxury textiles and fleeting Parisian shadows."
  },
  {
    id: "film-4",
    title: "Heritage & Modernity",
    subtitle: "Brand origin film for artisanal fragrance house",
    category: "Commercial Film",
    year: "2023",
    duration: "03:10",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-craftsman-sculpting-a-clay-vase-41126-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: false,
    client: "Aura Botanical Parfumerie",
    location: "Grasse, France & Mysore, India",
    director: "Devansh Rao",
    camera: "Sony FX9",
    lenses: "Leica Summicron-C",
    description: "Centuries of perfumery craft distilled into a sensory visual journey of rare botanicals and master distillation."
  },
  {
    id: "film-5",
    title: "Golden Hour Symphony",
    subtitle: "Destination pre-wedding film on the Amalfi Coast",
    category: "Wedding Film",
    year: "2024",
    duration: "05:20",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-couple-walking-hand-in-hand-on-a-beach-at-sunset-41663-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: false,
    client: "Meera & Siddharth",
    location: "Positano & Ravello, Italy",
    director: "Aditya Verma",
    camera: "Sony FX3",
    lenses: "Canon K35 Vintage Primes",
    description: "Sun-drenched cliffs, vintage Riva wooden boats, and heartfelt handwritten vows overlooking the Tyrrhenian Sea."
  },
  {
    id: "film-6",
    title: "Whispers of the Dunes",
    subtitle: "Desert fashion editorial at twilight",
    category: "Fashion Film",
    year: "2023",
    duration: "02:18",
    resolution: "4K UHD",
    coverUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-in-a-desert-with-a-flowing-dress-41316-large.mp4",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    featured: false,
    client: "Harper's Bazaar Arabia",
    location: "Jaisalmer Thar Desert",
    director: "Tara Sen",
    camera: "RED Komodo 6K",
    lenses: "Atlas Orion Anamorphic",
    description: "Sculptural garments dancing with wind and shifting sands under a violet twilight sky."
  }
];

// V2.0 NEW: Featured Film of the Month (Section G)
export const FEATURED_FILM_OF_MONTH = {
  id: "fotm-1",
  title: "The Royal Rajputana Union",
  edition: "CURATOR'S MASTERWORK — NOVEMBER 2026",
  subtitle: "An extended 4K cinematic wedding narrative exploring sacred ritual and modern romance.",
  client: "Princess Gayatri & Thakur Veerendra",
  location: "City Palace & Jagmandir Island, Udaipur",
  year: "2026",
  duration: "18:40 Extended Cut",
  resolution: "DCI 4K RAW • 2.39:1 CinemaScope",
  coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-field-at-sunset-41662-large.mp4",
  directorStatement: "Our aim was to capture not merely a regal event, but the silent, gravitational intimacy between two human beings whose families have held custody of history for half a millennium.",
  technicalHighlights: [
    "Shot exclusively on dual Sony FX6 cinema bodies with vintage Cooke Anamorphic primes",
    "Analog film print emulation via custom 3D LUT modeled on Kodak 5207 Vision3 stock",
    "Hand-scored original orchestral motifs recorded with European string ensemble",
    "32-bit float audio capturing quiet whispered vows amidst fountain courtyard acoustics"
  ]
};

// V2.0 NEW: The Fine Art Collection (Section H) — Museum-Inspired Curated Gallery
export const FINE_ART_COLLECTION = [
  {
    id: "fa-1",
    title: "Veil in Amber Dawn",
    medium: "Archival Pigment Print on Hahnemühle Photo Rag",
    camera: "Hasselblad X2D 100C • XCD 80mm f/1.9",
    dimensions: "36 × 48 in • Edition of 5",
    year: "2024",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[3/4]"
  },
  {
    id: "fa-2",
    title: "Granite Sentinel at 2,800m",
    medium: "Platinum Palladium Print on Cotton Rag",
    camera: "Phase One IQ4 150MP • 110mm LS",
    dimensions: "40 × 60 in • Edition of 3",
    year: "2024",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    aspect: "aspect-[16/10]"
  },
  {
    id: "fa-3",
    title: "The Sandstone Colonnade",
    medium: "Silver Gelatin Fiber-Based Print",
    camera: "Leica M11-P • Noctilux 50mm",
    dimensions: "24 × 36 in • Edition of 8",
    year: "2023",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/5]"
  },
  {
    id: "fa-4",
    title: "Sculpted Silk in Parisian Gray",
    medium: "Fine-Art Giclée on Canson Infinity Rag",
    camera: "Fuji GFX 100 II • GF 110mm f/2",
    dimensions: "30 × 40 in • Edition of 5",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[3/4]"
  }
];

// Section 8: Signature Collections (5 Collections)
export const SIGNATURE_COLLECTIONS = [
  {
    id: "col-weddings",
    title: "Weddings & Elopements",
    subtitle: "Intimate Vows & Royal Celebrations",
    description: "Multi-day destination weddings, palace unions, and romantic seaside vows documented with documentary discretion and couture elegance.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85",
    count: "120+ Celebrations"
  },
  {
    id: "col-fashion",
    title: "Fashion & Haute Couture",
    subtitle: "Editorial Lookbooks & Campaigns",
    description: "Avant-garde visual storytelling that bridges high architectural design and sculptural textiles for global luxury houses.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85",
    count: "45+ Campaigns"
  },
  {
    id: "col-portraits",
    title: "Character Portraiture",
    subtitle: "Artists, Visionaries & Families",
    description: "Intimate, stripped-back portraits emphasizing natural light, painterly contrast, and deep individuality.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    count: "80+ Sittings"
  },
  {
    id: "col-commercial",
    title: "Commercial & Product",
    subtitle: "Still Life & Fragrance Luxury",
    description: "Tactile micro-contrast photography that articulates fine horology, bespoke jewelry, and artisanal perfumes into visual desire.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    count: "60+ Commissions"
  },
  {
    id: "col-destinations",
    title: "Destination Expeditions",
    subtitle: "Global Landscapes & Heritage",
    description: "Epic travel expeditions across the Dolomites, high Himalayas, Amalfi Coast, and Scandinavian fjords.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    count: "24 Countries"
  }
];

// Section 9: Behind the Lens
export const BEHIND_THE_LENS = [
  {
    id: "bts-1",
    title: "Anamorphic Optical Framing",
    caption: "Director Devansh Rao calibrating Cooke 50mm Anamorphic glass for sunset ceremony coverage.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "bts-2",
    title: "On-Location Sound Design",
    caption: "Deploying 32-bit float digital wireless transmitters to capture heartfelt whispers without distortion.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "bts-3",
    title: "DaVinci Color Suite",
    caption: "Colorist Tara Sen mastering 10-bit S-Log3 footage with bespoke Kodak 2383 film print emulation.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80"
  }
];

// Section 10: Signature Destinations
export const SIGNATURE_DESTINATIONS = [
  {
    id: "dest-1",
    city: "Udaipur & Jodhpur",
    country: "India",
    coordinates: "24.5854° N, 73.7125° E",
    vibe: "Palace Grandeur & Heritage Romance",
    season: "October – March",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85",
    projectsCount: "42 Weddings Documented"
  },
  {
    id: "dest-2",
    city: "Lake Como & Bellagio",
    country: "Italy",
    coordinates: "45.9872° N, 9.2625° E",
    vibe: "Villa Elegance & Alpine Reflections",
    season: "May – October",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    projectsCount: "18 Destination Shoots"
  },
  {
    id: "dest-3",
    city: "Paris & Provence",
    country: "France",
    coordinates: "48.8566° N, 2.3522° E",
    vibe: "Haute Couture & Neoclassical Light",
    season: "April – November",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80",
    projectsCount: "25 Editorial Campaigns"
  },
  {
    id: "dest-4",
    city: "Dolomites & Swiss Alps",
    country: "Europe",
    coordinates: "46.5405° N, 11.8565° E",
    vibe: "Jagged Horizons & Glacial Solitude",
    season: "Year-Round",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    projectsCount: "14 Cinematic Expeditions"
  }
];

// Section 12: The Experience — 5-Step Client Journey
export const CLIENT_JOURNEY_STEPS = [
  {
    step: "01",
    name: "DISCOVER",
    subtitle: "Aesthetic Alignment & Chemistry",
    description: "An unhurried consultation over tea or video where we immerse ourselves in your relationship, cultural heritage, wardrobe styling, and visual preferences.",
    deliverable: "Private Moodboard & Light Analysis"
  },
  {
    step: "02",
    name: "CONCEPT",
    subtitle: "Storyboard & Optical Planning",
    description: "We prepare sun-path satellite angle maps, location blueprints, and musical score inspirations to ensure every hour of your event captures optimal light.",
    deliverable: "Production Timeline & Shot Manifest"
  },
  {
    step: "03",
    name: "CAPTURE",
    subtitle: "Cinematic Discretion on Site",
    description: "Operating with poised discretion, our dual-unit camera team blends seamlessly with your guests, utilizing prime cinema lenses and organic natural light.",
    deliverable: "Raw 4K/8K Masters & 32-bit Float Audio"
  },
  {
    step: "04",
    name: "REFINE",
    subtitle: "Bespoke Grade & Sound Design",
    description: "Over 80 hours per commission dedicated to custom 3D LUT color grading, subtle frequency separation, and licensed orchestral music scoring.",
    deliverable: "Teaser Delivery Within 7 Days"
  },
  {
    step: "05",
    name: "DELIVER",
    subtitle: "Heirloom Archive & Italian Leather",
    description: "Handcrafted Italian leather-bound foil wedding albums and an encrypted private 4K digital streaming gallery preserved indefinitely.",
    deliverable: "Master 4K Feature & Archival Heirloom"
  }
];

export const SERVICES = [
  {
    id: "weddings",
    title: "Wedding Photography & Films",
    category: "Signature Offering",
    shortDesc: "End-to-end luxury wedding documentation with documentary discretion and high-fashion editorial aesthetics.",
    fullDesc: "We approach weddings as cinematic tapestries woven with genuine emotion, familial heritage, and sublime beauty. Our team operates with refined discretion, anticipating spontaneous laughter, stolen glances, and grand celebrations without interrupting the authentic rhythm of your day.",
    inclusions: [
      "Principal Photographer & Lead Cinematographer on site",
      "Full 4K Cinema Film (15-25 min extended narrative feature)",
      "High-energy Cinematic Teaser (60-90 sec 4K reel)",
      "Curated Fine-Art Online Gallery (800+ graded high-res frames)",
      "Handmade Italian Leather Heirloom Wedding Album (12x16 inch)",
      "Licensed cinematic soundtrack scoring & custom sound design",
      "Drone aerial cinematography (where permitted)",
      "Pre-wedding editorial creative consultation & moodboarding"
    ],
    idealFor: "Multi-day luxury destination weddings, palace celebrations, intimate heritage vows.",
    turnaround: "Teaser within 7 days; Complete film & gallery within 6-8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "fashion",
    title: "Fashion & Editorial",
    category: "Couture & Campaigns",
    shortDesc: "Avant-garde editorial campaigns, high-fashion lookbooks, and luxury magazine spreads.",
    fullDesc: "Combining dramatic lighting, architectural compositions, and evocative styling, we craft bold imagery that defines luxury brands. From runway to international campaign shoots, our visual language elevates fashion into enduring art.",
    inclusions: [
      "Art Direction & Concept Development",
      "Medium-format digital capture (Hasselblad / Fuji GFX 100 II)",
      "Professional high-end beauty & skin retouching",
      "High-fashion video vignettes & vertical motion portraits",
      "Full digital rights for print, OOH billboard, and digital distribution",
      "On-set tethered preview with calibrated high-gamut displays",
      "Full crew coordination (lighting gaffer, digital tech)"
    ],
    idealFor: "Fashion houses, luxury jewelers, editorial publications, designer lookbooks.",
    turnaround: "Contact sheets within 48 hours; final master retouches within 10 days",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "commercial",
    title: "Commercial & Product",
    category: "Brand Imagery",
    shortDesc: "Sensory still-life photography and brand storytelling designed for luxury goods.",
    fullDesc: "Precision lighting and tactile materiality for luxury goods—fragrances, haute horlogerie, artisanal leather, hospitality retreats, and architectural estates. We translate tactile luxury into visual desire.",
    inclusions: [
      "Studio tabletop macro and architectural on-location photography",
      "Custom prop sourcing, marble plinths, and bespoke set design",
      "Micro-contrast lighting for reflective metals, crystals, and glass",
      "Multi-focus stacking for razor-sharp edge-to-edge clarity",
      "E-commerce packshots + editorial hero campaign compositions",
      "Color-accurate Pantone matching for product fidelity"
    ],
    idealFor: "Luxury watches, high jewelry, perfumery, boutique hotels, premium spirits.",
    turnaround: "Final deliverable batch within 7-10 business days",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "brand-films",
    title: "Brand Film Production",
    category: "Commercial Cinema",
    shortDesc: "Emotionally compelling cinematic brand manifestos, founder origin stories, and commercials.",
    fullDesc: "Move beyond standard corporate video. We craft cinematic brand documentaries that articulate your heritage, master craft, and brand ethos with the emotional resonance of festival-grade cinema.",
    inclusions: [
      "Full scriptwriting, storyboard, and creative treatments",
      "Cinema camera package (ARRI Alexa / RED / Sony FX Cine)",
      "Cinema anamorphic lenses with rich optical character",
      "Professional voiceover casting and custom score composition",
      "Master Dolby-calibrated sound mixing and atmospheric Foley",
      "DaVinci Resolve HDR color grade (DCI-P3 / Rec.709 deliverable)",
      "Multiple format cutdowns for broadcast, cinema, and social"
    ],
    idealFor: "Heritage brands, disruptive luxury startups, corporate manifestos, artisan profiles.",
    turnaround: "Concept to final master delivery: 3 to 5 weeks",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "portraits",
    title: "Portraits & Executive Profiling",
    category: "Artistic Portraiture",
    shortDesc: "Intimate, character-driven portraiture for visionary leaders, artists, and families.",
    fullDesc: "Stripping away artifice to capture raw gravitas, warmth, and individuality. We create painterly portraits that feel timeless, authoritative, and deeply personal.",
    inclusions: [
      "In-studio or environmental location session (2-4 hours)",
      "Wardrobe and styling guidance consultation",
      "Master black & white and warm editorial color treatments",
      "Museum-grade archival fine-art prints on cotton rag",
      "Private VIP confidentiality and NDA handling"
    ],
    idealFor: "Founders, creative directors, celebrities, private family archives.",
    turnaround: "Gallery within 5 days; archival prints shipped within 2 weeks",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "post-production",
    title: "Post-Production & Color Grading",
    category: "Finishing Suite",
    shortDesc: "World-class color grading, film emulation, dynamic sound design, and master finishing.",
    fullDesc: "Color is the soul of cinema. Operating in a calibrated mastering environment, our colorists craft bespoke 3D LUTs and analog film stock emulations (Kodak 5207, Fuji Eterna) to imbue footage with richness, depth, and unmistakable cinematic texture.",
    inclusions: [
      "DaVinci Resolve Studio color grading on Flanders Scientific OLEDs",
      "35mm / 16mm authentic photochemical film grain scans",
      "Beauty cleanup, subtle frequency separation, and object removal",
      "Audio sweetening, dialogue cleanup, dialogue isolation, and 5.1 mix",
      "Archival mastering in Apple ProRes 4444 XQ and DCP cinema packages"
    ],
    idealFor: "Independent filmmakers, agency productions, high-end wedding studios.",
    turnaround: "48-hour rush available; standard project turnaround 5-7 days",
    imageUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PORTFOLIO_PHOTOS = [
  {
    id: "p-1",
    title: "Gilded Vows at Lake Palace",
    category: "Weddings",
    location: "Udaipur, India",
    year: "2024",
    client: "Ananya & Rohan",
    camera: "Hasselblad X2D 100C",
    lens: "XCD 80mm f/1.9",
    exif: "1/500s • f/2.0 • ISO 64",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p-2",
    title: "The Golden Hour Veil",
    category: "Weddings",
    location: "Jaipur, India",
    year: "2024",
    client: "Pooja & Kabir",
    camera: "Leica M11-P",
    lens: "Noctilux-M 50mm f/0.95 ASPH",
    exif: "1/2000s • f/1.2 • ISO 100",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "p-3",
    title: "Dolomite Ridge Silhouette",
    category: "Travel",
    location: "Seceda, Italy",
    year: "2024",
    client: "Solo Expedition",
    camera: "Sony A1",
    lens: "Sony FE 24-70mm f/2.8 GM II",
    exif: "1/320s • f/8.0 • ISO 100",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: "p-4",
    title: "Silk & Shadow Editorial",
    category: "Fashion",
    location: "Milan, Italy",
    year: "2024",
    client: "Vogue Italia",
    camera: "Phase One IQ4 150MP",
    lens: "Schneider Kreuznach 110mm LS f/2.8",
    exif: "1/250s • f/5.6 • ISO 50",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p-5",
    title: "The Archway Sanctuary",
    category: "Weddings",
    location: "Jodhpur, India",
    year: "2023",
    client: "Zara & Vikram",
    camera: "Fujifilm GFX 100 II",
    lens: "GF 110mm f/2 R LM WR",
    exif: "1/800s • f/2.0 • ISO 100",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "p-6",
    title: "Sunlit Soul",
    category: "Portraits",
    location: "Mumbai, India",
    year: "2024",
    client: "Avantika Mehta",
    camera: "Leica SL3",
    lens: "Summilux-SL 50mm f/1.4 ASPH",
    exif: "1/1000s • f/1.4 • ISO 50",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p-7",
    title: "Essence of Neroli & Oud",
    category: "Commercial",
    location: "Lumina Studio Pune",
    year: "2024",
    client: "Aura Botanical Parfums",
    camera: "Hasselblad 907X",
    lens: "XCD 120mm f/3.5 Macro",
    exif: "1/160s • f/11 • ISO 64",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "p-8",
    title: "Emerald Lake Solitude",
    category: "Travel",
    location: "Banff, Canada",
    year: "2023",
    client: "Conde Nast Traveler",
    camera: "Sony A7R V",
    lens: "Sony FE 16-35mm f/2.8 GM",
    exif: "1/200s • f/11 • ISO 100",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: "p-9",
    title: "Gala at Villa Balbiano",
    category: "Events",
    location: "Lake Como, Italy",
    year: "2024",
    client: "Private Soirée",
    camera: "Sony FX3 Stills Mode",
    lens: "Sony FE 50mm f/1.2 GM",
    exif: "1/400s • f/1.4 • ISO 400",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p-10",
    title: "The Sculptural Gown",
    category: "Fashion",
    location: "Paris, France",
    year: "2024",
    client: "Atelier Noir",
    camera: "Phase One XF",
    lens: "80mm LS f/2.8",
    exif: "1/400s • f/4.0 • ISO 100",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p-11",
    title: "Nocturne at Amber Fort",
    category: "Events",
    location: "Jaipur, India",
    year: "2023",
    client: "Heritage Gala",
    camera: "Sony A1",
    lens: "Sony FE 35mm f/1.4 GM",
    exif: "1/125s • f/1.4 • ISO 800",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "p-12",
    title: "The Quiet Moment Before",
    category: "Portraits",
    location: "Udaipur, India",
    year: "2024",
    client: "Ananya",
    camera: "Leica M11",
    lens: "Summicron-M 35mm f/2 ASPH",
    exif: "1/500s • f/2.8 • ISO 200",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1400&q=80",
    aspectRatio: "aspect-[3/4]"
  }
];

export const CASE_STUDIES = [
  {
    id: "wedding-tale",
    title: "The Wedding Tale",
    subtitle: "A Royal Celebration of Heritage & Intimacy",
    category: "Wedding Film & Editorial Stills",
    year: "2024",
    client: "Ananya & Rohan",
    location: "The Oberoi Udaivilas, Lake Pichola, Udaipur",
    heroImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=85",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-a-field-at-sunset-41662-large.mp4",
    videoDuration: "04:32",
    quote: "A celebration of love, family and unforgettable moments.",
    story: "Set over three days in the royal city of Udaipur, Ananya and Rohan's wedding was an intimate synthesis of centuries-old Rajasthani regal traditions and contemporary haute couture. Our objective was to capture this grand grandeur without allowing the scale of the venue to overpower the tender, quiet moments between the two lovers.",
    approach: "We deployed a dual-crew methodology: while our prime cinema unit framed sweeping anamorphic tableaus of the lake and marble domes at dawn and dusk, a dedicated photojournalist with silent shutter Leica M11 bodies embedded seamlessly into the family chambers, recording unscripted tears, whispered inside jokes, and joyful laughter.",
    palette: ["#F8F6F2", "#B59B78", "#8B4513", "#252525"],
    gearList: [
      "Sony FX6 & Sony FX3 Cinema Line (4K 10-bit 4:2:2)",
      "Cooke Anamorphic /i Full Frame Plus Cine Primes (35mm, 50mm, 75mm)",
      "Hasselblad X2D 100C for principal fine-art portraits",
      "DJI Inspire 3 with Zenmuse X9-8K Air for aerial architectural scans",
      "Sennheiser MKH 416 & Sound Devices 833 32-bit float audio recorders"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80"
    ],
    btsImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
    ],
    deliverables: "1x 22-min Cinematic Extended Narrative Film, 1x 90-sec 4K Instagram Film, 840 Hand-graded Fine-art Photographs, Custom Bespoke 16x12 Leather-bound Foil Book."
  },
  {
    id: "elegance-in-motion",
    title: "Elegance in Motion",
    subtitle: "Sculptural Haute Couture in Parisian Light",
    category: "Fashion Film & Lookbook",
    year: "2024",
    client: "Maison de L'Ombre & Vogue",
    location: "Place Vendôme & Palais Galliera, Paris",
    heroImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-model-posing-in-an-avant-garde-dress-41315-large.mp4",
    videoDuration: "02:45",
    quote: "Where architecture meets fabric, motion becomes timeless poetry.",
    story: "Commissioned for the Autumn/Winter Couture collection, this project explored the physical kinetic resonance of hand-pleated silk crepe against the stoic limestone colonnades of neoclassical Paris. Shot during dawn hours to capture unadulterated cold morning light.",
    approach: "Utilizing 120fps high-speed capture on an ARRI Alexa Mini LF combined with mechanical handheld stabilization, each movement of the model was translated into an almost zero-gravity wave of fabric and luminescence.",
    palette: ["#252525", "#F8F6F2", "#B59B78", "#C0C0C0"],
    gearList: [
      "ARRI Alexa Mini LF (Open Gate 4.5K RAW)",
      "Angénieux Optimo Ultra 12x Cine Zoom",
      "Phase One IQ4 150MP for campaign billboards",
      "Astera Titan LED Tubes for fill illumination"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
    ],
    btsImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    ],
    deliverables: "Cinema Commercial 60s, Social Cuts 15s/30s, 30 Editorial Retouched Campaign Frames."
  },
  {
    id: "beyond-the-peaks",
    title: "Beyond the Peaks",
    subtitle: "A High-Altitude Odyssey of Silence",
    category: "Documentary Film",
    year: "2024",
    client: "National Geographic Traveller",
    location: "Zanskar & Ladakh Valley, 4,500m Elevation",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
    filmUrl: "https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-mountain-range-covered-in-snow-42861-large.mp4",
    videoDuration: "06:15",
    quote: "Above the tree line, time is measured only by the shadows of mountains.",
    story: "A twenty-day pack-in expedition documenting the remote Buddhist monasteries perched on perpendicular cliffs in the Zanskar range. Surviving sub-zero temperatures, thin oxygen, and erratic winds, our team documented lives lived in sublime contemplation.",
    approach: "Minimal footprint, battery management in minus 18°C, and reliance on natural golden-hour and moonlit exposures. We let nature pace the film with long takes and environmental soundscapes.",
    palette: ["#1B263B", "#F8F6F2", "#B59B78", "#778DA9"],
    gearList: [
      "RED V-Raptor 8K VV Carbon Body",
      "Zeiss Supreme Prime Lenses",
      "Custom solar recharging bank",
      "Sound Devices MixPre-6 II 32-bit float audio"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
    ],
    btsImages: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
    ],
    deliverables: "1x 6:15 min 4K Festival Short Film, Photo Essay for Print Magazine."
  }
];

export const JOURNAL_ARTICLES = [
  {
    id: "behind-the-scenes-wedding-film",
    title: "Behind the Scenes of a Luxury Wedding Film",
    subtitle: "Balancing documentary discretion with high-fashion cinema across a royal three-day celebration.",
    date: "Sep 28, 2024",
    category: "Filmmaking",
    readTime: "6 min read",
    author: "Devansh Rao",
    role: "Director of Photography",
    featured: true,
    coverUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80",
    summary: "When filming a palace wedding in Udaipur or Lake Como, the cinematographer's greatest tool isn't a gimbal or an expensive camera sensor—it's discretion, timing, and an instinctive understanding of human emotion.",
    content: [
      "At Atelier Noir & Light, we believe luxury in wedding cinematography is defined by what you choose not to show as much as what you illuminate. The modern bride and groom do not desire choreographed pantomimes or invasive camera lenses thrust into their sacred vows.",
      "Instead, we approach the wedding day with the sensibilities of French New Wave cinema: observe from an honorable distance, anticipate the kinetic energy of the room, and use natural architectural light to sculpt three-dimensional depth.",
      "During our recent production at The Oberoi Udaivilas, we utilized vintage anamorphic glass which inherently yields warm oval bokeh, subtle horizontal flares, and an organic roll-off that softens digital harshness.",
      "Sound design accounts for 60% of emotional resonance in film. By deploying miniature, radio-shielded 32-bit float lavalier microphones on the groom and officiant, we captured the trembling timbre of spoken vows that standard cameras completely miss."
    ]
  },
  {
    id: "art-of-cinematic-storytelling",
    title: "The Art of Cinematic Storytelling",
    subtitle: "Why non-linear editing and intentional pacing create timeless wedding and brand cinema.",
    date: "Oct 12, 2024",
    category: "Storytelling",
    readTime: "5 min read",
    author: "Tara Sen",
    role: "Lead Editor & Story Director",
    featured: false,
    coverUrl: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    summary: "Chronology is easy; emotional architecture requires intention. How we weave fragments of dialogue, vows, and visual motifs into an unforgettable narrative.",
    content: [
      "Most wedding videos simply follow a clock: getting ready at 10 AM, ceremony at 2 PM, dinner at 8 PM. But human memory does not store feelings chronologically.",
      "You remember the way your father looked at you when he first saw your dress. You remember the sound of your partner's laughter as the rain suddenly began during outdoor cocktails.",
      "By juxtaposing speeches with visual memories from earlier in the weekend, we construct emotional counterpoint that stays timeless decades later."
    ]
  },
  {
    id: "choosing-perfect-golden-hour",
    title: "Choosing the Perfect Golden Hour Location for Your Shoot",
    subtitle: "How geographic orientation, topography, and seasonal sun angles determine magical light.",
    date: "Oct 05, 2024",
    category: "Photography",
    readTime: "4 min read",
    author: "Aditya Verma",
    role: "Principal Photographer",
    featured: false,
    coverUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    summary: "A practical guide for couples and creative directors to scout, map, and time the golden 45 minutes of magic light.",
    content: [
      "Golden hour is not just sunset; it is the 30 minutes before the sun dips below the horizon and the 20 minutes of 'blue hour' immediately following.",
      "When scouting a venue, always verify the western horizon. If tall buildings or trees obstruct the low-angle sun, your golden hour might vanish 40 minutes earlier than predicted by phone weather apps.",
      "We rely on sun-path satellite 3D modeling tools to calculate exact shadows cast by palace walls and mountain ridges down to the minute."
    ]
  },
  {
    id: "creative-process-concept-to-film",
    title: "Our Creative Process: From Concept to Film",
    subtitle: "A transparent look inside the four distinct stages that turn ideas into museum-grade cinema.",
    date: "Sep 20, 2024",
    category: "Philosophy",
    readTime: "7 min read",
    author: "Devansh Rao",
    role: "Founder & Creative Director",
    featured: false,
    coverUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    summary: "From initial discovery consultations to bespoke DaVinci Resolve color grading and archival leather album binding.",
    content: [
      "Every masterpiece begins with disciplined listening. Before we pick up a camera, we meet with you over tea or video to understand your aesthetic lineage and the nuances of your relationship.",
      "We prepare a customized moodboard with lighting references, musical inspirations, and wardrobe harmonies.",
      "During production, our footprint is calm, precise, and unobtrusive. In post-production, we spend up to 100 hours per project fine-tuning color grades and hand-scoring musical crescendos."
    ]
  }
];

// Section 14: Words That Stay With Us — Client Testimonials
export const TESTIMONIALS = [
  {
    id: "t-1",
    quote: "The team at Lumina captured our wedding so beautifully. The photos and film felt like us — honest, emotional, and cinematic. Watching our film brings tears of joy every single time.",
    author: "Ananya & Rohan",
    role: "Wedding Clients • Udaipur Palace",
    year: "2024"
  },
  {
    id: "t-2",
    quote: "Their understanding of natural light and architectural space is peerless. Lumina's editorial eye transformed our high-fashion couture campaign into pure cinema. Truly an international standard.",
    author: "Claire Laurent",
    role: "Creative Director • Maison de L'Ombre, Paris",
    year: "2024"
  },
  {
    id: "t-3",
    quote: "Not only is their technical craft flawless, but their presence at our celebration was so calming and gracious. They felt like cherished friends who happened to hold cinema cameras.",
    author: "Meera & Siddharth",
    role: "Destination Wedding • Amalfi Coast",
    year: "2023"
  },
  {
    id: "t-4",
    quote: "In a world of fast reels, Lumina crafts enduring art. Our brand documentary elevated our heritage beyond our wildest expectations. Worth every single investment.",
    author: "Antoine Moreau",
    role: "Founder • Aura Parfumerie, Grasse",
    year: "2024"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "devansh",
    name: "Devansh Rao",
    role: "Founder & Director of Photography",
    bio: "With over 12 years behind cinema cameras, Devansh has directed international commercials and high-profile destination weddings across four continents. Passionate about anamorphic glass and raw human truth.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tara",
    name: "Tara Sen",
    role: "Creative Director & Lead Colorist",
    bio: "Alumna of the National Institute of Design. Tara oversees the studio's visual identity, moodboard development, and calibrated DaVinci color grading suite.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "aditya",
    name: "Aditya Verma",
    role: "Principal Stills Photographer",
    bio: "Specializing in medium-format portraiture and street photojournalism. His documentary wedding work has been featured in Vogue, Harper's Bazaar, and Architectural Digest.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  }
];

export const PRODUCTION_STEPS = [
  {
    number: "01",
    title: "Discovery & Vision",
    desc: "We begin with an in-depth conversation exploring your story, aesthetic preferences, wardrobe, and emotional intentions for the project."
  },
  {
    number: "02",
    title: "Moodboard & Pre-Production",
    desc: "Our creative directors assemble customized visual treatments, light maps, timeline schedules, and musical mood palettes."
  },
  {
    number: "03",
    title: "Cinematic Production",
    desc: "On location, our dual-unit camera and still teams operate with quiet poise, utilizing prime cinema lenses and organic natural light."
  },
  {
    number: "04",
    title: "Editorial Grade & Delivery",
    desc: "Rigorous bespoke color grading, licensed scoring, audio mastering, and the delivery of your private digital gallery and heirloom physical albums."
  }
];
