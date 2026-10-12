import React from "react";
import { IMAGES } from "../../data/images";
import { LIFESTYLE_CATEGORIES, LifestyleCategory } from "../../data/categories";
import { SectionHeading } from "../ui/SectionHeading";
import { SmartImage } from "../ui/SmartImage";
import { CategoryCard } from "../cards/CategoryCard";

export interface LifestyleCategoriesProps {
  onExploreCategory?: (category: LifestyleCategory) => void;
}

export const LifestyleCategories: React.FC<LifestyleCategoriesProps> = ({
  onExploreCategory,
}) => {
  return (
    <section
      id="lifestyle"
      aria-labelledby="lifestyle-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page flex flex-col gap-12 sm:gap-16">
        {/* Centered Heading */}
        <SectionHeading
          id="lifestyle-heading"
          align="center"
          eyebrow="Explore by property type"
          titleLine1="Find Somewhere That"
          titleLine2="Fits Your Life."
        />

        {/* Intro Row: Left Image + Right Statement Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left small rounded image */}
          <div className="w-full md:w-56 lg:w-72 aspect-[4/3] rounded-[20px] overflow-hidden bg-tint shrink-0 border border-line shadow-xs">
            <SmartImage
              src={IMAGES.lifestyleIntro.src}
              srcSet={IMAGES.lifestyleIntro.srcSet}
              alt={IMAGES.lifestyleIntro.alt}
              subjectName={IMAGES.lifestyleIntro.subject}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text & Plain Statement */}
          <div className="flex flex-col md:items-end text-left md:text-right max-w-2xl gap-3">
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Browse by the kind of space you need.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-medium text-ink leading-snug">
              From apartments and family houses to land and office space, tell us what you need and we&apos;ll point you to the right options.
            </p>
          </div>
        </div>

        {/* Three Category Cards: 1 col on mobile, 2 col on tablet (3rd spans both), 3 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.25fr] gap-6 lg:gap-8 items-stretch">
          {LIFESTYLE_CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <CategoryCard
                category={cat}
                onExplore={onExploreCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
