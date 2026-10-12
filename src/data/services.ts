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
    summary: "Know the area before you visit.",
    detail:
      "Tell us the areas, budget and timeline you have in mind. We'll help you see what's available and what's realistic.",
  },
  {
    id: "service-2",
    numeral: "02",
    title: "Curated Selection",
    summary: "A shortlist, not a flood of listings.",
    detail:
      "Share what matters to you and we'll suggest properties that fit, so you spend time on the ones worth visiting.",
  },
  {
    id: "service-3",
    numeral: "03",
    title: "Personal Guidance",
    summary: "Someone to ask at every step.",
    detail:
      "Message us any time about a property, a viewing or the process, and we'll explain what comes next.",
  },
];
