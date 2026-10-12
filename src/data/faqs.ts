export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I get started?",
    answer:
      "Message us on WhatsApp or use the contact form. Tell us what you're looking for, your budget and your preferred areas, and we'll suggest where to begin.",
    defaultOpen: true,
  },
  {
    id: "faq-2",
    question: "Can you help with a home loan?",
    answer:
      "Loans are approved by banks and lenders, not by us. Message us if you'd like to know what to ask or prepare before you apply.",
    defaultOpen: false,
  },
  {
    id: "faq-3",
    question: "What costs are involved in buying property?",
    answer:
      "Costs vary by property and location and can include registration, taxes and fees. Ask us before you decide, and confirm the figures with a qualified professional.",
    defaultOpen: false,
  },
  {
    id: "faq-4",
    question: "How do I arrange a viewing?",
    answer:
      "Message us the property you're interested in and a few times that suit you. We'll confirm what's possible.",
    defaultOpen: false,
  },
  {
    id: "faq-5",
    question: "Can I sell my current home while buying a new one?",
    answer:
      "Often yes, but the timing needs planning. Message us your situation and we'll talk through the options.",
    defaultOpen: false,
  },
];
