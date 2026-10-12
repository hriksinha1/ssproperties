export interface ServiceAccordionItem {
  id: string;
  numeral: string;
  title: string;
  summary: string;
  detail: string;
}

export const SERVICES_DATA: ServiceAccordionItem[] = [
  {
    id: "service-1",
    numeral: "01",
    title: "Local Expertise",
    summary: "Know the neighborhoods, understand the market",
    detail:
      "Deep-rooted intelligence across prime coastal, hillside, and urban enclaves ensures you make moves grounded in genuine micro-market trends and off-market foresight.",
  },
  {
    id: "service-2",
    numeral: "02",
    title: "Curated Selection",
    summary: "Architectural distinction and uncompromising quality",
    detail:
      "We filter out the ordinary. Every property presented is rigorously evaluated for spatial proportion, construction pedigree, and long-term asset resilience.",
  },
  {
    id: "service-3",
    numeral: "03",
    title: "Personal Guidance",
    summary: "Bespoke representation from first tour to final closing",
    detail:
      "Experience discretion, dedicated advisory, and seamless transaction management tailored around your timeline, lifestyle goals, and investment preferences.",
  },
];
