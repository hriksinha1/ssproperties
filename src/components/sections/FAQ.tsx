import React, { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { FAQS_DATA, FAQItem } from "../../data/faqs";
import { SectionHeading } from "../ui/SectionHeading";
import { HelpPanel } from "../cards/HelpPanel";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>("faq-1");
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % FAQS_DATA.length;
      buttonRefs.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + FAQS_DATA.length) % FAQS_DATA.length;
      buttonRefs.current[prevIndex]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      buttonRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      buttonRefs.current[FAQS_DATA.length - 1]?.focus();
    }
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Centered Heading */}
        <SectionHeading
          id="faq-heading"
          align="center"
          titleLine1="Frequently Asked Questions"
          description="We've heard it all. Here's everything you need to know before working with us."
        />

        {/* Two-Column Layout (7/12 Left Accordion, 5/12 Right HelpPanel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left: 5 Accordion Items */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {FAQS_DATA.map((item: FAQItem, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const btnId = `faq-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`rounded-[18px] transition-all duration-200 border ${
                    isOpen
                      ? "bg-[#C8EFAE] border-[#A9E18A] shadow-sm"
                      : "bg-white border-[#DCE8D5]/80 hover:border-[#0E170E]/20"
                  }`}
                >
                  <h3>
                    <button
                      id={btnId}
                      ref={(el) => {
                        buttonRefs.current[idx] = el;
                      }}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFAQ(item.id)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0E170E] rounded-[18px]"
                    >
                      <span className="font-semibold text-sm sm:text-base text-[#0E170E] pr-4">
                        {item.question}
                      </span>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-[#0E170E] text-white" : "bg-[#0E170E] text-white"
                        }`}
                      >
                        {isOpen ? (
                          <X className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Plus className="w-4 h-4" aria-hidden="true" />
                        )}
                      </div>
                    </button>
                  </h3>

                  {/* Accessible Collapsible Container */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#0E170E]/80 leading-relaxed border-t border-[#0E170E]/10">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: HelpPanel */}
          <div className="lg:col-span-5 h-full">
            <HelpPanel />
          </div>
        </div>
      </div>
    </section>
  );
};
