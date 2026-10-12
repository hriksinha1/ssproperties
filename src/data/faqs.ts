export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I get started with buying a property?",
    answer:
      "Schedule a free consultation on our site, and our team will guide you through listings, financing, and the buying process.",
    defaultOpen: true,
  },
  {
    id: "faq-2",
    question: "Do you help with mortgage pre-approval?",
    answer:
      "Yes, we collaborate closely with premier lending partners and private wealth mortgage advisors to ensure you obtain pre-approval with competitive terms before touring properties.",
    defaultOpen: false,
  },
  {
    id: "faq-3",
    question: "What fees are involved in closing a deal?",
    answer:
      "Standard closing costs typically encompass title insurance, escrow fees, transfer taxes, attorney representation, and recording charges. We provide an itemized financial roadmap before every transaction.",
    defaultOpen: false,
  },
  {
    id: "faq-4",
    question: "How do I schedule a property viewing or open house?",
    answer:
      "Simply reach out through our contact form or click on any listing's direct inquiry button. We coordinate private, escorted architectural walk-throughs aligned with your schedule.",
    defaultOpen: false,
  },
  {
    id: "faq-5",
    question: "Can I sell my current home while buying a new one?",
    answer:
      "Yes. Our portfolio advisors structure bridge solutions, leaseback contingencies, and synchronized escrow timelines so you never face unnecessary displacement or carrying costs.",
    defaultOpen: false,
  },
];
