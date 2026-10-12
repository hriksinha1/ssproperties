import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
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
      <div className="container-page flex flex-col gap-12 sm:gap-16">
        {/* Centered Heading */}
        <SectionHeading
          id="personalized-service-heading"
          align="center"
          titleLine1="Property Is Personal."
          titleLine2="Finding It Should Be Too."
          description="We help you compare localities across Kolkata, review legal checks and schedule site visits, from your first question to your final decision."
        />

        {/* Asymmetrical 2-Column Editorial Layout (5/12 Left, 7/12 Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          {/* Left Column: 3-item Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex flex-col gap-3" aria-label="Services highlights">
              {SERVICES_DATA.map((item: ServiceAccordionItem) => {
                const isOpen = openItemId === item.id;
                const panelId = `service-panel-${item.id}`;
                const buttonId = `service-button-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 border ${
                      isOpen
                        ? "bg-surface border-line shadow-card"
                        : "bg-surface/60 border-line/60 hover:bg-surface"
                    }`}
                  >
                    {/* Faded Large Bebas Numeral (Decorative, aria-hidden) */}
                    {isOpen && (
                      <span
                        aria-hidden="true"
                        className="font-display absolute -top-4 left-3 text-7xl text-accent/50 pointer-events-none select-none"
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
                      className="relative z-10 w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 min-h-[48px]"
                    >
                      <div className="flex flex-col gap-1 pr-4 pl-1">
                        <span className="text-base sm:text-lg font-semibold text-ink">
                          {item.title}
                        </span>
                        <span className="text-xs sm:text-sm text-ink-muted font-normal">
                          {item.summary}
                        </span>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "bg-ink text-white rotate-180" : "bg-tint text-ink"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </button>

                    {/* Expandable Region with inert when collapsed */}
                    <div
                      id={panelId}
                      aria-labelledby={buttonId}
                      inert={!isOpen ? true : undefined}
                      aria-hidden={!isOpen}
                      className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-1 text-sm text-ink-muted leading-relaxed border-t border-line/50 mt-1">
                          <p>{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Photo + How We Help Caption */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-tint shadow-md border border-line">
              <SmartImage
                src={IMAGES.service.src}
                srcSet={IMAGES.service.srcSet}
                alt={IMAGES.service.alt}
                subjectName={IMAGES.service.subject}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 sm:p-6 rounded-2xl bg-surface border border-line">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0 text-ink">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <h3 className="text-sm sm:text-base font-semibold text-ink">How we help</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Ask us anything, from comparing two properties to what to prepare before a viewing. We&apos;ll point you to the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
