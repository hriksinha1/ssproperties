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
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    alt: "White curved contemporary home with swimming pool, garden lawn and blue sky",
    subject: "Contemporary Home with Pool",
    aspectRatio: "16/9",
    objectPosition: "50% 55%",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"),
  },
  featuredMini: {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    alt: "Illuminated house exterior with driveway at twilight",
    subject: "Residential Exterior",
    aspectRatio: "1/1",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", [300, 400, 600]),
  },
  listings: {
    casaVerde: {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      alt: "Multi-story residential apartment building with balconies under sunny sky",
      subject: "Apartment Building",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    glassHouse: {
      src: "https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      alt: "Multi-level house featuring large glass windows and warm interior lighting",
      subject: "Glass Facade House",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    cedarResidence: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      alt: "Warmly lit house with front porch and landscaped driveway at dusk",
      subject: "Suburban Home at Dusk",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    villaSerenita: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern house patio and outdoor seating beside an infinity pool",
      subject: "Poolside Patio",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    horizonPeak: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
      alt: "Hillside contemporary residence overlooking scenic landscape",
      subject: "Hillside Residence",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    nordicPine: {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern timber and glass house surrounded by trees and green lawn",
      subject: "Wood and Glass Home",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
  },
  service: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Consultants reviewing architectural building models and floorplans on a table",
    subject: "Architectural Consultation",
    aspectRatio: "4/3",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", [640, 960, 1200]),
  },
  lifestyleIntro: {
    src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    alt: "Exterior facade of contemporary apartment building with recessed balconies",
    subject: "Urban Apartment Exterior",
    aspectRatio: "4/3",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80", [400, 600, 800]),
  },
  categories: {
    familyHouses: {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
      alt: "Two-story detached house with green front yard and trees",
      subject: "Detached House",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    apartmentsOffices: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      alt: "Tall glass commercial tower reflecting clear blue sky",
      subject: "High-Rise Glass Building",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
    officeBuildings: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      alt: "Modern commercial building interior with glass partitions and desks",
      subject: "Commercial Work Environment",
      aspectRatio: "3/4",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", [480, 800, 1000]),
    },
  },
  testimonials: {
    mansion: {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      alt: "Large white house with driveway and outdoor pathway lighting at dusk",
      subject: "Estate House at Dusk",
      aspectRatio: "4/3",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80", [640, 960, 1200]),
    },
  },
  articles: [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      alt: "House exterior warmly illuminated through glass windows in evening",
      subject: "House at Night",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      alt: "Outdoor swimming pool beside clean paved courtyard and building exterior",
      subject: "Pool and Patio",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      alt: "Covered outdoor patio with sofa and potted greenery",
      subject: "Garden Terrace Patio",
      aspectRatio: "16/10",
      srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80", [480, 720, 900]),
    },
  ],
  contactCta: {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
    alt: "Contemporary home with warm interior lights glowing at twilight",
    subject: "Twilight Home Exterior",
    aspectRatio: "16/9",
    srcSet: buildUnsplashSrcSet("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80", [640, 1024, 1440, 1800]),
  },
  avatars: {
    clientGlenn: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    client2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    client3: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
};
