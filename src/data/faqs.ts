export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I get started with buying a flat or property in Kolkata?",
    answer:
      "Message us on WhatsApp or use the contact form. Tell us your preferred localities (such as New Town, Rajarhat, EM Bypass, or South Kolkata), budget range, and preferred BHK configuration. We will prepare a curated shortlist of verified properties to inspect.",
    defaultOpen: true,
  },
  {
    id: "faq-2",
    question: "Do you help with home loans from leading banks?",
    answer:
      "Yes. While loan sanctioning is governed by financial institutions, we connect you with senior retail lending managers at major banks (including SBI, HDFC Bank, and ICICI) to facilitate property valuation, legal search, and speedy pre-approvals.",
    defaultOpen: false,
  },
  {
    id: "faq-3",
    question: "What legal checks and documents should I verify before buying?",
    answer:
      "Key checks include verifying the project's West Bengal Housing Industry Regulatory Authority (WB RERA) registration, sanctioned building plans from KMC/NKDA/local municipality, chain of title deeds (minimum 30 years), encumbrance certificate, and Completion / Occupancy Certificate (CC/OC) for ready units.",
    defaultOpen: false,
  },
  {
    id: "faq-4",
    question: "How do I arrange a site visit for any listing?",
    answer:
      "Simply click 'Ask about this property' or message us on WhatsApp with the property name and your preferred day and time. We will coordinate with the owner or site representative and accompany you for the viewing.",
    defaultOpen: false,
  },
  {
    id: "faq-5",
    question: "Can SSProperty help me sell or rent out my residential or commercial space?",
    answer:
      "Yes. If you own an apartment, bungalow, commercial office, or plot in Kolkata, switch to our 'Sell' tab or message us directly on WhatsApp with your property details. We assist in market valuation, professional photography, and connecting with pre-screened buyers and corporate tenants.",
    defaultOpen: false,
  },
];
