import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/images";
import { TESTIMONIALS_DATA } from "../../data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { SmartImage } from "../ui/SmartImage";
import { SAMPLE_CONTENT } from "../../config/site";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If SAMPLE_CONTENT is false and there are no verified testimonials, do not render section
  if (!SAMPLE_CONTENT && TESTIMONIALS_DATA.every((t) => t.isSample)) {
    return null;
  }

  const canPrev = currentIndex > 0;
  const canNext = currentIndex < TESTIMONIALS_DATA.length - 1;

  const handlePrev = () => {
    if (canPrev) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canNext) setCurrentIndex((prev) => prev + 1);
  };

  const current = TESTIMONIALS_DATA[currentIndex];
  if (!current) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page flex flex-col gap-10 sm:gap-14">
        {/* Section Heading Row */}
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Client feedback"
          titleLine1="What Our Clients"
          titleLine2="Say About Us"
        />

        {/* Two-Column Layout (5/12 Left, 7/12 Right on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
          {/* Left Testimonial Card */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-card bg-surface border border-line shadow-card min-h-[360px]">
            <div
              className="flex flex-col gap-5 transition-opacity duration-300"
              aria-live="polite"
              aria-atomic="true"
            >
              {/* Client Info + Sample Tag */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatar}
                    alt=""
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-line"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-base text-ink">
                      {current.name}
                    </span>
                    <span className="text-xs text-ink-muted">{current.role}</span>
                  </div>
                </div>

                {SAMPLE_CONTENT && current.isSample && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-tint text-ink border border-line">
                    Sample testimonial
                  </span>
                )}
              </div>

              {/* Quote Text */}
              <div className="pt-2 border-t border-line">
                <blockquote className="text-sm text-ink-muted leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Prev / Next Carousel Arrow Controls (only when > 1 item) */}
            {TESTIMONIALS_DATA.length > 1 && (
              <div className="flex items-center gap-3 pt-6 border-t border-line mt-4">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  disabled={!canPrev}
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-full border border-line bg-surface text-ink hover:bg-tint flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  disabled={!canNext}
                  onClick={handleNext}
                  className="w-11 h-11 rounded-full bg-ink text-white hover:bg-black flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
                >
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <span className="text-xs text-ink-muted ml-2">
                  {currentIndex + 1} of {TESTIMONIALS_DATA.length}
                </span>
              </div>
            )}
          </div>

          {/* Right Mansion Photograph */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative aspect-[4/3] rounded-card overflow-hidden bg-tint shadow-md border border-line">
            <SmartImage
              src={IMAGES.testimonials.mansion.src}
              srcSet={IMAGES.testimonials.mansion.srcSet}
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
