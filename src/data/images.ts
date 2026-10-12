export interface ImageMeta {
  src: string;
  alt: string;
  subject: string;
  aspectRatio?: string;
  objectPosition?: string;
}

export const IMAGES = {
  hero: {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80",
    alt: "Curved white contemporary architectural villa with swimming pool and landscaped gardens",
    subject: "Hero Villa",
    aspectRatio: "16/9",
    objectPosition: "50% 55%",
  },
  featuredMini: {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    alt: "The Cedar Residence exterior view",
    subject: "Cedar Residence Mini",
    aspectRatio: "1/1",
  },
  listings: {
    casaVerde: {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      alt: "Casa Verde modern residential architectural apartment tower in Los Angeles",
      subject: "Casa Verde",
      aspectRatio: "3/4",
    },
    glassHouse: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      alt: "The Glass House contemporary illuminated residence with floor-to-ceiling glass",
      subject: "The Glass House",
      aspectRatio: "3/4",
    },
    cedarResidence: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      alt: "The Cedar Residence classic luxury estate illuminated at dusk",
      subject: "The Cedar Residence",
      aspectRatio: "3/4",
    },
    villaSerenita: {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      alt: "Villa Serenita Mediterranean modern luxury home with infinity pool",
      subject: "Villa Serenita",
      aspectRatio: "3/4",
    },
    horizonPeak: {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
      alt: "Horizon Peak hillside modern architectural compound with panoramic view",
      subject: "Horizon Peak",
      aspectRatio: "3/4",
    },
    nordicPine: {
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      alt: "Nordic Pine minimalist Scandinavian cedar pavilion estate",
      subject: "Nordic Pine",
      aspectRatio: "3/4",
    },
  },
  service: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Real estate advisor presenting architectural models and plans to home buyers",
    subject: "Personalized Consultation",
    aspectRatio: "4/3",
  },
  lifestyleIntro: {
    src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    alt: "Contemporary multi-story residential building with balconies",
    subject: "Lifestyle Architecture Intro",
    aspectRatio: "4/3",
  },
  categories: {
    familyHouses: {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80",
      alt: "Spacious modern family house with lawn and garden",
      subject: "Family Houses",
      aspectRatio: "3/4",
    },
    apartmentsOffices: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      alt: "Tall modern geometric apartment high-rise against clear blue sky",
      subject: "Apartments & Offices",
      aspectRatio: "3/4",
    },
    officeBuildings: {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      alt: "Bold contemporary architectural office pavilion with angular concrete and glass facade",
      subject: "Office Buildings",
      aspectRatio: "3/4",
    },
  },
  testimonials: {
    mansion: {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      alt: "Pristine white mansion with paved driveway and manicured lawns at dusk",
      subject: "Testimonial Residence",
      aspectRatio: "4/3",
    },
  },
  articles: [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      alt: "Luxury residence exterior softly illuminated in the evening",
      subject: "Ultimate Guide",
      aspectRatio: "16/10",
    },
    {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
      alt: "Modern villa with pool reflecting clear blue sky",
      subject: "5 Things to Know",
      aspectRatio: "16/10",
    },
    {
      src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      alt: "Contemporary pavilion surrounded by lush private garden terrace",
      subject: "Choosing Neighborhood",
      aspectRatio: "16/10",
    },
  ],
  contactCta: {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80",
    alt: "Spectacular contemporary glass villa at twilight with warm interior lighting",
    subject: "Evening Villa",
    aspectRatio: "16/9",
  },
  avatars: {
    agent: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    clientGlenn: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    client2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    client3: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    stack1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    stack2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    stack3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    stack4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
  },
};
