import { IMAGES } from "./images";

/**
 * Note: Names, roles, and testimonials below are simulated sample data
 * for design demonstration purposes only.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  ratingText: string;
  title: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "Glenn Selima",
    role: "Property Owner",
    rating: 5,
    ratingText: "5.0 Ratings",
    title: "Excellent Service & Support",
    quote:
      "From the first consultation to receiving the keys, the entire process was smooth and stress-free. The team was professional, responsive, and genuinely cared about finding the right property for us. Highly recommended!",
    avatar: IMAGES.avatars.clientGlenn,
  },
  {
    id: "testimonial-2",
    name: "Marcus Vance",
    role: "Real Estate Investor",
    rating: 5,
    ratingText: "5.0 Ratings",
    title: "Unmatched Architectural Insight",
    quote:
      "Architron presented opportunities before they ever touched public listings. Their deep market analysis and valuation models allowed us to secure a landmark modernist villa with absolute confidence.",
    avatar: IMAGES.avatars.client2,
  },
  {
    id: "testimonial-3",
    name: "Elena Rostova",
    role: "Private Collector & Homeowner",
    rating: 5,
    ratingText: "5.0 Ratings",
    title: "Flawless Attention To Detail",
    quote:
      "Finding an architect-designed home that aligned with our family's lifestyle felt impossible until we partnered with Architron. Transparent, proactive, and exceptionally refined throughout.",
    avatar: IMAGES.avatars.client3,
  },
];
