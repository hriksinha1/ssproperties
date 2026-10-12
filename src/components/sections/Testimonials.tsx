import React, { useState } from "react";
import { MessageSquareQuote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/images";
import { TESTIMONIALS_DATA } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { AvatarStack } from "../ui/AvatarStack";
import { CircleIconButton } from "../ui/CircleIconButton";
import { SmartImage } from "../ui/SmartImage";

/**
 * Fictional sample endorsements for interface demonstration purposes.
 */

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < TESTIMONIALS_DATA.length - 1;

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => prev + 1);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 sm:gap-14">
        {/* Section Heading Row with AvatarStack */}
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonial"
          eyebrowIcon={<MessageSquareQuote className="w-3.5 h-3.5 text-emerald-800" />}
          titleLine1="Loved By Property Owners"
          titleLine2="& Investors"
          rightAction={
            <div className="flex flex-col sm:items-end text-left sm:text-right gap-1.5">
              <AvatarStack theme="dark" />
              <p className="text-xs text-[#566356] max-w-xs">
                Hear from the people who found their perfect property, made confident decisions
              </p>
            </div>
          }
        />

        {/* Two-Column Layout (5/12 Left, 7/12 Right on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          {/* Left Testimonial Card */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-white border border-[#DCE8D5] shadow-[0_8px_30px_rgba(15,30,15,0.06)] min-h-[380px]">
            <div
              className="flex flex-col gap-5 transition-opacity duration-300"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Client Info & 5.0 Star Rating */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt=""
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8EFAE]"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm sm:text-base text-[#0E170E]">
                      {current.name}
                    </span>
                    <span className="text-xs text-[#566356]">{current.role}</span>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#0E170E] mt-0.5">
                    {current.ratingText}
                  </span>
                </div>
              </div>

              {/* Quote Title & Text */}
              <div className="flex flex-col gap-2 pt-2 border-t border-[#DCE8D5]/60">
                <h3 className="text-base sm:text-lg font-semibold text-[#0E170E]">
                  &lsquo;{current.title}&rsquo;
                </h3>
                <blockquote className="text-xs sm:text-sm text-[#566356] leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Prev / Next Carousel Arrow Controls */}
            <div className="flex items-center gap-3 pt-6 border-t border-[#DCE8D5]/60 mt-4">
              <CircleIconButton
                variant="outline"
                size="md"
                aria-label="Previous testimonial"
                disabled={!canPrev}
                onClick={handlePrev}
              >
                <ArrowLeft className="w-4 h-4" />
              </CircleIconButton>

              <CircleIconButton
                variant="dark"
                size="md"
                aria-label="Next testimonial"
                disabled={!canNext}
                onClick={handleNext}
              >
                <ArrowRight className="w-4 h-4" />
              </CircleIconButton>

              <span className="text-xs text-[#566356] ml-2">
                {currentIndex + 1} of {TESTIMONIALS_DATA.length}
              </span>
            </div>
          </div>

          {/* Right Mansion Photograph */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#E8F5DE] shadow-md border border-[#DCE8D5]">
            <SmartImage
              src={IMAGES.testimonials.mansion.src}
              alt={IMAGES.testimonials.mansion.alt}
              subjectName={IMAGES.testimonials.mansion.subject}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
