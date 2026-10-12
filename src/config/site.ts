export const BRAND_NAME = "Architron";

export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Properties", href: "#properties", id: "properties" },
  { label: "Sell", href: "#contact", id: "contact" },
];

export const CONTACT_INFO = {
  phone: "+000-1234 5678 90",
  phoneFormatted: "+000-1234 5678 90",
  email: "mail@example.com",
  address: "104 Ocean Boulevard, Los Angeles, CA 90024",
  agentName: `${BRAND_NAME} Property Agency`,
  agentRole: "Property Agent",
  companyLegal: "© 2026 Architron Realty Group Inc. All Rights Reserved.",
};
