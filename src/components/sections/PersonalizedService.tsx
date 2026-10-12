import React, { useState } from "react";
import { Search, ChevronDown, CheckCircle2 } from "lucide-react";
import { IMAGES } from "../../data/images";
import { SERVICES_DATA, ServiceAccordionItem } from "../../data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { SmartImage } from "../ui/SmartImage";

export const PersonalizedService: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string>("service-1");

  const toggleAccordion = (id: string) => {
    setOpenItemId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="about"
      aria-labelledby="personalized-service-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Centered Heading */}
        <SectionHeading
          id="personalized-service-heading"
          align="center"
          eyebrow="A better way to find property"
          eyebrowIcon={<Search className="w-3.5 h-3.5 text-emerald-800" />}
          titleLine1="Property Is Personal."
          titleLine2="Finding It Should Be Too."
        />

        {/* Asymmetrical 2-Column Editorial Layout (5/12 Left, 7/12 Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          {/* Left Column: Intro text + 3-item Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-sm md:text-base text-[#566356] leading-relaxed max-w-[36ch]">
              We combine local market knowledge with a thoughtful approach to help you find properties that genuinely fit the way you want to live.
            </p>

            {/* Accordion List */}
            <div className="flex flex-col gap-3" role="region" aria-label="Services highlights">
              {SERVICES_DATA.map((item: ServiceAccordionItem) => {
                const isOpen = openItemId === item.id;
                const panelId = `service-panel-${item.id}`;
                const buttonId = `service-button-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 border ${
                      isOpen
                        ? "bg-white border-[#DCE8D5] shadow-[0_8px_24px_rgba(15,30,15,0.06)]"
                        : "bg-white/60 border-transparent hover:bg-white/90"
                    }`}
                  >
                    {/* Faded Large Bebas Numeral (Decorative, aria-hidden) */}
                    {isOpen && (
                      <span
                        aria-hidden="true"
                        className="font-display absolute -top-4 left-3 text-7xl text-[#C8EFAE]/50 pointer-events-none select-none"
                      >
                        {item.numeral}
                      </span>
                    )}

                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleAccordion(item.id)}
                      className="relative z-10 w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0E170E]"
                    >
                      <div className="flex flex-col gap-0.5 pr-4 pl-1">
                        <span className="text-base sm:text-lg font-semibold text-[#0E170E]">
                          {item.title}
                        </span>
                        {isOpen && (
                          <span className="text-xs text-[#566356] font-normal">
                            {item.summary}
                          </span>
                        )}
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-[#0E170E] text-white rotate-180" : "bg-[#E8F5DE] text-[#0E170E]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Expandable Region */}
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="relative z-10 px-5 pb-5 pt-1 text-xs sm:text-sm text-[#566356] leading-relaxed border-t border-[#DCE8D5]/40 mt-1"
                      >
                        <p>{item.detail}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Model Photo + How We Help Caption */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#E8F5DE] shadow-md border border-[#DCE8D5]">
              <SmartImage
                src={IMAGES.service.src}
                alt={IMAGES.service.alt}
                subjectName={IMAGES.service.subject}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white/70 border border-[#DCE8D5]/70">
              <div className="w-10 h-10 rounded-xl bg-[#C8EFAE] flex items-center justify-center shrink-0 text-[#0E170E]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h3 className="text-sm sm:text-base font-semibold text-[#0E170E]">How we help</h3>
                <p className="text-xs sm:text-sm text-[#566356] leading-relaxed">
                  From the first viewing to the final signature, we guide you through the process with clarity, care, and a deep understanding of what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
