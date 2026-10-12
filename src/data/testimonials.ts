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
    name: "Glenn S.",
    role: "Property Owner",
    quote:
      "From the first consultation to receiving the keys, the process was clear and smooth. The team was responsive, helpful, and attentive to what we were looking for.",
    avatar: IMAGES.avatars.clientGlenn,
    isSample: true,
  },
  {
    id: "testimonial-2",
    name: "Marcus V.",
    role: "Property Buyer",
    quote:
      "We received straightforward advice and clear options from day one. Having someone knowledgeable to message whenever a question came up made the whole search simpler.",
    avatar: IMAGES.avatars.client2,
    isSample: true,
  },
  {
    id: "testimonial-3",
    name: "Elena R.",
    role: "Homeowner",
    quote:
      "Finding a property that genuinely suited our family's routine took time, but we felt guided and supported at every stage without any pressure.",
    avatar: IMAGES.avatars.client3,
    isSample: true,
  },
];
