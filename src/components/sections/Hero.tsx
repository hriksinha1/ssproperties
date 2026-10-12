import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { IMAGES } from "../../data/images";
import { Header } from "../layout/Header";
import { FeaturedPropertyMini } from "../cards/FeaturedPropertyMini";
import { PropertySearch, SearchDraftState } from "./PropertySearch";
import { SmartImage } from "../ui/SmartImage";
import { WHATSAPP_URL } from "../../config/site";

export interface HeroProps {
  activeSection: string;
  onCommitSearch: (filters: SearchDraftState) => void;
  resultMessage?: string | null;
  onClearFilters?: () => void;
  hasActiveFilters?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  activeSection,
  onCommitSearch,
  resultMessage,
  onClearFilters,
  hasActiveFilters,
}) => {
  const handleBrowseClick = () => {
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
      <div
        className="relative w-full min-h-[clamp(560px,62vw,860px)] max-h-[85svh] sm:max-h-none flex flex-col justify-between overflow-hidden bg-[#0A160A]"
        style={{ paddingBottom: "calc(var(--search-overlap) + 28px)" }}
      >
        {/* Full-bleed Architectural Image */}
        <div className="absolute inset-0 z-0 bg-[#0A160A]">
          <SmartImage
            src={IMAGES.hero.src}
            srcSet={IMAGES.hero.srcSet}
            sizes="100vw"
            alt={IMAGES.hero.alt}
            isHero
            subjectName="Featured Architecture"
            objectPosition={IMAGES.hero.objectPosition || "50% 55%"}
            className="w-full h-full object-cover select-none"
          />

          {/* Measured Gradient Scrim for Contrast & Legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Absolute Header */}
        <Header activeSection={activeSection} />

        {/* Hero Core Content (Top row under header) */}
        <div className="relative z-10 w-full container-page pt-28 sm:pt-36 md:pt-40 flex flex-col md:flex-row md:items-start justify-between gap-8 text-left">
          {/* Headline & CTAs */}
          <div className="max-w-xl flex flex-col items-start gap-4 sm:gap-5">
            <h1
              className="font-display uppercase text-white tracking-[0.015em] text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.98]"
              style={{ textWrap: "balance" }}
            >
              Find A Place That
              <br />
              Feels Like Yours.
            </h1>

            <p className="text-white/90 text-sm sm:text-base font-normal max-w-[42ch] leading-relaxed">
              Browse residential flats, independent houses, land plots and offices across Kolkata, then message SSProperty to ask questions or arrange a viewing.
            </p>

            <div className="flex items-center gap-3 flex-wrap pt-1">
              <button
                type="button"
                onClick={handleBrowseClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-strong text-ink text-sm font-semibold tracking-wide transition-all shadow-md group cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 min-h-[46px]"
              >
                <span>Browse properties</span>
                <span className="w-6 h-6 rounded-full bg-ink text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-semibold tracking-wide transition-all border border-white/25 min-h-[46px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Top-Right Floating Featured Property Highlight */}
          <div className="shrink-0 pt-2">
            <FeaturedPropertyMini />
          </div>
        </div>

        {/* Bottom Hero Anchor: Chat on WhatsApp pill */}
        <div className="relative z-10 w-full container-page pt-6 text-left">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 text-white text-xs font-medium border border-white/20 transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 backdrop-blur-md"
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Overlapping Floating Search Panel */}
      <div
        className="relative z-20"
        style={{ marginTop: "calc(-1 * var(--search-overlap))" }}
      >
        <PropertySearch
          onCommitSearch={onCommitSearch}
          resultCountMessage={resultMessage}
          onClearFilters={onClearFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>
    </section>
  );
};
