export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export function getFooterLinkGroups(includeGuides: boolean): FooterLinkGroup[] {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Properties", href: "#properties" },
    ...(includeGuides ? [{ label: "Guides", href: "#blog" }] : []),
    { label: "Contact", href: "#contact" },
  ];

  return [
    {
      title: "Quick links",
      links: quickLinks,
    },
    {
      title: "How we help",
      links: [
        { label: "Finding a home", href: "#properties" },
        { label: "Comparing options", href: "#about" },
        { label: "Arranging viewings", href: "#contact" },
        { label: "Questions & answers", href: "#faq" },
      ],
    },
  ];
}
