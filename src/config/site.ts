export const BRAND_NAME = "SSProperty";

// While true, listings/testimonials/articles are placeholder content and are labelled "Sample".
// Set to false once real content is supplied (see "Content honesty" below).
export const SAMPLE_CONTENT = true;

export interface SocialLink {
  id: "facebook" | "instagram" | "linkedin" | "whatsapp";
  label: string;
  href: string;
  handle: string;
}

// NOTE FOR OWNER: wa.me expects the full international number (country code, no "+", no leading zeros).
// The number below was supplied without a country code. Open this link on a phone and confirm it
// reaches the right chat. If the number is Indian, the working link would be https://wa.me/918282878287.
// Keep the URL exactly as supplied until the owner confirms.
export const WHATSAPP_URL = "https://wa.me/8282878287";
export const WHATSAPP_DISPLAY = "8282878287";

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

// Unverified. Leave undefined. Components render these ONLY when defined.
export const CONTACT_INFO: { email?: string; address?: string } = {};

// NOTE FOR OWNER: Set currency code, locale, and area unit for your actual local market (e.g. INR / en-IN / sq. ft.).
export const CURRENCY_CODE = "USD";
export const CURRENCY_LOCALE = "en-US";
export const AREA_UNIT = "sq. ft.";

export interface PriceBand {
  id: string;
  label: string;
  min: number;
  max: number;
}

export const PRICE_BANDS: PriceBand[] = [
  { id: "any", label: "Any price", min: 0, max: Infinity },
  { id: "under-1m", label: "Under $1M", min: 0, max: 1000000 },
  { id: "1m-2m", label: "$1M - $2M", min: 1000000, max: 2000000 },
  { id: "2m-5m", label: "$2M - $5M", min: 2000000, max: 5000000 },
  { id: "5m-plus", label: "$5M+", min: 5000000, max: Infinity },
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
