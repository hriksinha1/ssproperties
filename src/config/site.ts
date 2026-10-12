export const BRAND_NAME = "SSProperty";

// While true, listings/testimonials/articles are illustrative content and are labelled "Sample".
// Set to false once real live MLS/inventory feed is connected.
export const SAMPLE_CONTENT = true;

export interface SocialLink {
  id: "facebook" | "instagram" | "linkedin" | "whatsapp";
  label: string;
  href: string;
  handle: string;
}

// SSProperty WhatsApp Contact: Kolkata, West Bengal, India (+91 82828 78287)
export const WHATSAPP_URL = "https://wa.me/918282878287";
export const WHATSAPP_DISPLAY = "+91 82828 78287";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/sspropertykol",
    handle: "facebook.com/sspropertykol",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sspropertykol",
    handle: "instagram.com/sspropertykol",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/s-s-property/",
    handle: "linkedin.com/company/s-s-property",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: WHATSAPP_URL,
    handle: WHATSAPP_DISPLAY,
  },
];

// Verified business contact location for SSProperty (Kolkata, WB)
export const CONTACT_INFO: { email?: string; address?: string } = {
  address: "Kolkata, West Bengal, India",
};

// Indian market configuration
export const CURRENCY_CODE = "INR";
export const CURRENCY_LOCALE = "en-IN";
export const AREA_UNIT = "sq. ft.";

export interface PriceBand {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const PRICE_BANDS: PriceBand[] = [
  { id: "any", label: "Any budget", min: 0, max: Infinity },
  { id: "under-50l", label: "Under ₹50 Lakh", min: 0, max: 5000000 },
  { id: "50l-1cr", label: "₹50 L – ₹1 Crore", min: 5000000, max: 10000000 },
  { id: "1cr-2cr", label: "₹1 Cr – ₹2 Crore", min: 10000000, max: 20000000 },
  { id: "2cr-plus", label: "Above ₹2 Crore", min: 20000000, max: Infinity },
];

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Properties", href: "#properties", id: "properties" },
  { label: "Contact", href: "#contact", id: "contact" },
];
