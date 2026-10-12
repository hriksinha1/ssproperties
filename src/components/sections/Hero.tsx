import React from "react";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/images";
import { Header } from "../layout/Header";
import { FeaturedPropertyMini } from "../cards/FeaturedPropertyMini";
import { AvatarStack } from "../ui/AvatarStack";
import { PropertySearch, SearchFilterState } from "./PropertySearch";

export interface HeroProps {
  activeSection: string;
  onSearch: (filters: SearchFilterState) => void;
  resultMessage?: string | null;
}

export const Hero: React.FC<HeroProps> = ({
  activeSection,
  onSearch,
  resultMessage,
}) => {
  const handleExploreClick = () => {
    const el = document.getElementById("properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Welcome and Property Search"
      className="relative w-full overflow-visible"
    >
      {/* Hero Visual Container */}
      <div className="relative w-full min-h-[clamp(620px,62vw,860px)] flex flex-col justify-between overflow-hidden">
        {/* Full-bleed Architectural Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover select-none"
            style={{ objectPosition: IMAGES.hero.objectPosition || "50% 55%" }}
          />

          {/* Measured Gradient Scrim for Contrast & Legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/60 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Absolute Header */}
        <Header activeSection={activeSection} />

        {/* Hero Core Content (Top row under header) */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-40 flex flex-col md:flex-row md:items-start justify-between gap-8 text-left">
          {/* Headline & CTA */}
          <div className="max-w-xl flex flex-col items-start gap-4 sm:gap-5">
            <h1
              className="font-display uppercase text-white tracking-[0.015em] text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.98]"
              style={{ textWrap: "balance" }}
            >
              Find A Place That
              <br />
              Feels Like Yours.
            </h1>

            <p className="text-white/90 text-sm sm:text-base font-normal max-w-[34ch] leading-relaxed">
              Discover extraordinary homes in the most desirable locations. Your next chapter starts with the right place.
            </p>

            <button
              type="button"
              onClick={handleExploreClick}
              className="mt-1 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md group cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 min-h-[46px]"
            >
              <span>Explore Property</span>
              <span className="w-6 h-6 rounded-full bg-[#0E170E] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Top-Right Floating Featured Property Highlight */}
          <div className="shrink-0 pt-2">
            <FeaturedPropertyMini />
          </div>
        </div>

        {/* Bottom Hero Anchor: Avatar Stack */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 text-left">
          <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 inline-flex">
            <AvatarStack theme="light" />
          </div>
        </div>
      </div>

      {/* Overlapping Floating Search Panel */}
      {/* Positioned with -mt so it is 50% overlapping the hero bottom edge */}
      <div className="-mt-14 sm:-mt-16 md:-mt-20 relative z-20">
        <PropertySearch onSearch={onSearch} resultCountMessage={resultMessage} />
      </div>
    </section>
  );
};
