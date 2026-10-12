import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import { PropertyListing } from "../../data/listings";
import { SectionHeading } from "../ui/SectionHeading";
import { PropertyCard } from "../cards/PropertyCard";
import { SAMPLE_CONTENT, WHATSAPP_URL } from "../../config/site";

export interface FeaturedListingsProps {
  listings: PropertyListing[];
  totalListingsCount: number;
  selectedTypeChip: string;
  onSelectTypeChip: (chip: string) => void;
  onSelectProperty?: (property: PropertyListing, triggerEl: HTMLElement | null) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  activeCategoryLabel?: string | null;
}

const FILTER_CHIPS = ["All", "Apartment", "Villa", "House", "Office", "Land"];

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  listings,
  totalListingsCount,
  selectedTypeChip,
  onSelectTypeChip,
  onSelectProperty,
  onClearFilters,
  hasActiveFilters,
  activeCategoryLabel,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [listings]);

  const scrollByCard = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cardWidth = el.querySelector("article")?.getBoundingClientRect().width || 320;
    const delta = direction === "left" ? -(cardWidth + 24) : cardWidth + 24;

    el.scrollBy({
      left: delta,
      behavior: isReducedMotion ? "instant" : "smooth",
    });
  };

  const sampleWord = SAMPLE_CONTENT ? "sample " : "";

  return (
    <section
      id="properties"
      aria-labelledby="properties-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page flex flex-col gap-8 md:gap-10">
        {/* Section Heading Row */}
        <SectionHeading
          id="properties-heading"
          eyebrow="Properties"
          titleLine1="Places Worth Taking A"
          titleLine2="Closer Look At."
          description="A selection of properties from SSProperty. Message us about any listing to ask for details or arrange a viewing."
          rightAction={
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs font-semibold tracking-wide transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Ask about a property</span>
            </a>
          }
        />

        {/* Filter Chips & Scroller Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-4">
          <div
            className="flex items-center gap-2 flex-wrap py-1"
            role="toolbar"
            aria-label="Filter properties by type"
          >
            {FILTER_CHIPS.map((chip) => {
              const isActive = selectedTypeChip.toLowerCase() === chip.toLowerCase();
              return (
                <button
                  key={chip}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onSelectTypeChip(chip)}
                  className={`px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 min-h-[40px] focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 select-none ${
                    isActive
                      ? "bg-ink text-white shadow-xs"
                      : "bg-surface border border-line text-ink hover:bg-tint"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0" aria-label="Listing navigation">
            <button
              type="button"
              aria-label="Previous property listings"
              disabled={!canScrollLeft}
              onClick={() => scrollByCard("left")}
              className="w-11 h-11 rounded-full border border-line bg-surface text-ink hover:bg-tint flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next property listings"
              disabled={!canScrollRight}
              onClick={() => scrollByCard("right")}
              className="w-11 h-11 rounded-full bg-ink text-white hover:bg-black flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
            >
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Live Filter Result Status */}
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-ink-muted -mt-2"
        >
          <div>
            {activeCategoryLabel ? (
              <span className="font-medium text-ink">
                Showing {listings.length} {sampleWord}listings for {activeCategoryLabel}.
              </span>
            ) : (
              <span>
                Showing {listings.length} of {totalListingsCount} {sampleWord}listings.
              </span>
            )}
            {SAMPLE_CONTENT && (
              <span className="block sm:inline sm:ml-2 text-ink-muted/80">
                (Listings shown are sample content until real inventory is added.)
              </span>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="inline-flex items-center gap-1.5 text-ink hover:underline font-semibold cursor-pointer min-h-[36px]"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Clear filters</span>
            </button>
          )}
        </div>

        {/* Empty State or CSS Scroll-Snap Row */}
        {listings.length === 0 ? (
          <div className="py-16 px-6 text-center text-ink-muted bg-surface rounded-card border border-line flex flex-col items-center gap-4">
            <p className="text-sm font-medium text-ink">
              No {sampleWord}listings match these filters.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <button
                type="button"
                onClick={onClearFilters}
                className="px-5 py-2.5 rounded-full border border-line bg-tint text-ink text-xs font-semibold hover:bg-surface transition-colors cursor-pointer min-h-[44px]"
              >
                Clear filters
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div
            ref={scrollerRef}
            tabIndex={0}
            role="region"
            aria-label="Property listings, scrollable"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            {listings.map((property) => (
              <div
                key={property.id}
                className="basis-[85%] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] shrink-0 snap-start"
              >
                <PropertyCard
                  property={property}
                  onSelect={onSelectProperty}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
