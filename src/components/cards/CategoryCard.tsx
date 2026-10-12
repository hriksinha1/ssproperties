import React from "react";
import { ArrowRight } from "lucide-react";
import { LifestyleCategory } from "../../data/categories";
import { SmartImage } from "../ui/SmartImage";

export interface CategoryCardProps {
  category: LifestyleCategory;
  onExplore?: (category: LifestyleCategory) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onExplore }) => {
  return (
    <article
      tabIndex={0}
      className="group relative rounded-[24px] overflow-hidden bg-[#0E170E] min-h-[440px] md:min-h-[460px] flex flex-col justify-end p-6 md:p-8 text-left transition-all duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-4 cursor-pointer"
      onClick={() => onExplore?.(category)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onExplore?.(category);
        }
      }}
      aria-label={`Explore ${category.title}: ${category.subtitle}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <SmartImage
          src={category.image}
          alt={category.imageAlt}
          subjectName={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10"
          aria-hidden="true"
        />
      </div>

      {/* Anchored Content at Bottom */}
      <div className="relative z-10 flex flex-col items-start gap-2 max-w-sm">
        <h3 className="font-display uppercase text-3xl md:text-4xl text-white tracking-wide leading-none">
          {category.title}
        </h3>
        <p className="text-sm text-white/80 font-normal leading-relaxed mb-3">
          {category.subtitle}
        </p>

        {/* Explore Now Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all text-xs font-medium border border-white/20 group-hover:bg-[#C8EFAE] group-hover:text-[#0E170E] group-hover:border-[#C8EFAE]">
          <span>Explore Now</span>
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#0E170E] group-hover:text-white transition-colors">
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  );
};
