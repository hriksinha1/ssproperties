export interface ImageMeta {
  src: string;
  alt: string;
  subject: string;
  aspectRatio?: string;
  objectPosition?: string;
  srcSet?: string;
}

export function buildUnsplashSrcSet(baseUrl: string, widths = [640, 960, 1280, 1600, 2000]): string {
  try {
    const url = new URL(baseUrl);
    return widths
      .map((w) => {
        const u = new URL(baseUrl);
        u.searchParams.set("w", String(w));
        u.searchParams.set("auto", "format");
        u.searchParams.set("fit", "crop");
        u.searchParams.set("q", "80");
        return `${u.toString()} ${w}w`;
      })
      .join(", ");
  } catch {
    return "";
  }
}

export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80",
    alt: "Contemporary multi-story residential apartment complex with modern balconies and landscaped surroundings",
    subject: "Modern Residential Complex",
    aspectRatio: "16/9",
    objectPosition: "50% 50%",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"),
  },
  featuredMini: {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
    alt: "Residential apartment exterior with balconies",
    subject: "Featured Apartment",
    aspectRatio: "1/1",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", [300, 400, 600]),
  },
  listings: {
    greenTerraces: {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      alt: "Multi-story residential apartment building with balconies under sunny sky in New Town",
      subject: "Apartment Building with Balconies",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    skyview: {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern mid-rise residential towers in Rajarhat with contemporary glass and stone exterior",
      subject: "Residential Towers",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    vistaEnclave: {
      src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
      alt: "High-rise luxury residential condominium towers along the EM Bypass corridor",
      subject: "High-Rise Condominium",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    greenfieldPlot: {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      alt: "Open green demarcated residential land plot ready for bungalow construction",
      subject: "Residential Land Plot",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    southBungalow: {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
      alt: "Standalone independent family house with private gate and driveway in South Kolkata",
      subject: "Independent Family House",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    techSuite: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern fully furnished commercial office workspace in Salt Lake Sector V",
      subject: "Furnished Commercial Office",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    vedicGreens: {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80",
      alt: "Private luxury villa with landscaped lawn and warm evening lighting",
      subject: "Gated Community Villa",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    ballygungeSuites: {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      alt: "Contemporary furnished apartment living room with modern wooden accents and natural light",
      subject: "Furnished Executive Flat Interior",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
  },
  service: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Property consultants discussing floor plans and neighborhood choices with clients",
    subject: "Property Consultation",
    aspectRatio: "4/3",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", [640, 960, 1200]),
  },
  lifestyleIntro: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior facade of contemporary residential apartment complex with landscaped trees",
    subject: "Residential Community Exterior",
    aspectRatio: "4/3",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80", [400, 600, 800]),
  },
  categories: {
    familyHouses: {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80",
      alt: "Two-story detached family house with private compound and terrace",
      subject: "Independent Family House",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    apartmentsOffices: {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      alt: "Contemporary residential apartment building with sunny balconies in an urban hub",
      subject: "Apartments & Flats",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    commercialLand: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      alt: "Commercial glass IT high-rise building reflecting blue sky in Sector V",
      subject: "Commercial Office Tower & Plots",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
  },
  testimonials: {
    mansion: {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      alt: "Well-appointed residential residence with landscaped pathway at dusk",
      subject: "Residential Home at Dusk",
      aspectRatio: "4/3",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", [640, 960, 1200]),
    },
  },
  articles: [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
      alt: "Residential apartment complex in Kolkata showing balconies and greenery",
      subject: "Kolkata Apartment Guide",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
      alt: "Advisor reviewing property paperwork, deed, and legal checklists",
      subject: "Property Documentation & Loans",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
    {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80",
      alt: "New Town and Rajarhat urban residential corridor",
      subject: "Neighborhood Selection",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
  ],
  contactCta: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80",
    alt: "Warmly lit contemporary home exterior in the evening with illuminated windows",
    subject: "Evening Residential Exterior",
    aspectRatio: "16/9",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80", [640, 1024, 1440, 1800]),
  },
  avatars: {
    client1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    client2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    client3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
};
