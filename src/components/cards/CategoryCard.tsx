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
    <a
      href="#properties"
      onClick={(e) => {
        if (onExplore) {
          onExplore(category);
        }
      }}
      className="group relative rounded-card overflow-hidden bg-ink min-h-[clamp(360px,52vw,480px)] flex flex-col justify-end p-6 md:p-8 text-left transition-all duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 cursor-pointer block"
      aria-label={`${category.title}: ${category.subtitle}. ${category.ctaText}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <SmartImage
          src={category.image}
          srcSet={category.srcSet}
          alt={category.imageAlt}
          subjectName={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Strengthened dark gradient for 4.5:1 text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
          aria-hidden="true"
        />
      </div>

      {/* Anchored Content at Bottom */}
      <div className="relative z-10 flex flex-col items-start gap-2 max-w-sm">
        <h3 className="font-display uppercase text-3xl md:text-4xl text-white tracking-wide leading-none">
          {category.title}
        </h3>
        <p className="text-sm text-white/90 font-normal leading-relaxed mb-3">
          {category.subtitle}
        </p>

        {/* CTA Pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 text-white transition-all text-xs font-semibold border border-white/25 group-hover:bg-accent group-hover:text-ink group-hover:border-accent">
          <span>{category.ctaText}</span>
          <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </a>
  );
};
