export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
      { label: "Properties", href: "#properties" },
      { label: "Blog", href: "#blog" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Property Sales", href: "#properties" },
      { label: "Property Management", href: "#about" },
      { label: "Real Estate Consultation", href: "#contact" },
      { label: "Investment Guidance", href: "#about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy & Security", href: "#" },
      { label: "Help & Support", href: "#faq" },
      { label: "Information", href: "#about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Accessibility Statement", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
