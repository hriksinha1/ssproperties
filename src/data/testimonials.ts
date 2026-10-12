import { IMAGES } from "./images";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  isSample: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testimonial-1",
    name: "A. Banerjee",
    role: "Flat Owner, New Town",
    quote:
      "From shortlisting 3 BHK projects near Action Area II to finalizing the legal paperwork, SSProperty gave us clear guidance without any pressure. Highly dependable team.",
    avatar: IMAGES.avatars.client1,
    isSample: true,
  },
  {
    id: "testimonial-2",
    name: "R. Mukherjee",
    role: "Homebuyer, Rajarhat",
    quote:
      "We needed a ready-to-move 2 BHK flat close to the metro line. The team scheduled site visits promptly and helped us compare pricing per square foot across three complexes.",
    avatar: IMAGES.avatars.client2,
    isSample: true,
  },
  {
    id: "testimonial-3",
    name: "S. Sen & Family",
    role: "Property Investor, South Kolkata",
    quote:
      "Having someone directly on WhatsApp to answer questions regarding mutation, developer track records, and rental yields made our decision simple and stress-free.",
    avatar: IMAGES.avatars.client3,
    isSample: true,
  },
];
