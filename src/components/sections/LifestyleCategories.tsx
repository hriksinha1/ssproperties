import React from "react";
import { Compass } from "lucide-react";
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        {/* Centered Heading */}
        <SectionHeading
          id="lifestyle-heading"
          align="center"
          eyebrow="Explore by lifestyle"
          eyebrowIcon={<Compass className="w-3.5 h-3.5 text-emerald-800" />}
          titleLine1="Find Somewhere That"
          titleLine2="Fits Your Life."
        />

        {/* Intro Row: Left Image + Right Quote Block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left small rounded image */}
          <div className="w-full md:w-56 lg:w-72 aspect-[4/3] rounded-[20px] overflow-hidden bg-[#E8F5DE] shrink-0 border border-[#DCE8D5] shadow-xs">
            <SmartImage
              src={IMAGES.lifestyleIntro.src}
              alt={IMAGES.lifestyleIntro.alt}
              subjectName={IMAGES.lifestyleIntro.subject}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text & Pull-Quote */}
          <div className="flex flex-col md:items-end text-left md:text-right max-w-2xl gap-3">
            <p className="text-xs sm:text-sm text-[#566356] leading-relaxed">
              Explore apartments, houses, land, and office spaces in locations chosen for living, working, and growing.
            </p>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-[#0E170E] leading-snug">
              &ldquo;We Bring You The Right Properties For Every Need – From Modern Apartments And Family Houses To Premium Land And Professional Office Spaces.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Three Category Cards in Unequal Columns (1.25fr 1fr 1.25fr on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.25fr] gap-6 lg:gap-8 items-stretch">
          {LIFESTYLE_CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              onExplore={onExploreCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
