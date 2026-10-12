import React, { useState, useMemo } from "react";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { PropertyListing } from "../../data/listings";
import { SectionHeading } from "../ui/SectionHeading";
import { Chip } from "../ui/Chip";
import { CircleIconButton } from "../ui/CircleIconButton";
import { PropertyCard } from "../cards/PropertyCard";

export interface FeaturedListingsProps {
  listings: PropertyListing[];
  onSelectProperty?: (property: PropertyListing) => void;
}

const FILTER_CATEGORIES = ["All", "Apartment", "Villa", "House", "Office"];

export const FeaturedListings: React.FC<FeaturedListingsProps> = ({
  listings,
  onSelectProperty,
}) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Filter listings
  const filteredListings = useMemo(() => {
    if (selectedFilter === "All") return listings;
    return listings.filter(
      (item) => item.propertyType.toLowerCase() === selectedFilter.toLowerCase()
    );
  }, [listings, selectedFilter]);

  // Pagination for carousel (3 items per page on desktop)
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, filteredListings.length - itemsPerPage);

  const canPrev = carouselIndex > 0;
  const canNext = carouselIndex < maxIndex;

  const handlePrev = () => {
    if (canPrev) setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (canNext) setCarouselIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleListings = useMemo(() => {
    return filteredListings.slice(carouselIndex, carouselIndex + itemsPerPage);
  }, [filteredListings, carouselIndex, itemsPerPage]);

  return (
    <section
      id="properties"
      aria-labelledby="properties-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
        {/* Section Heading Row */}
        <SectionHeading
          id="properties-heading"
          eyebrow="Property Listings"
          eyebrowIcon={<Home className="w-3.5 h-3.5 text-emerald-800" />}
          titleLine1="Places Worth Taking A"
          titleLine2="Closer Look At."
          description="A curated selection of properties currently available through our network."
          rightAction={
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs font-semibold tracking-wide transition-colors group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0E170E]"
            >
              <span>Explore Property</span>
              <span className="w-5 h-5 rounded-full bg-[#0E170E] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          }
        />

        {/* Filter Chips & Carousel Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DCE8D5]/60 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {FILTER_CATEGORIES.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                active={selectedFilter === cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setCarouselIndex(0);
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0" aria-label="Listing pagination">
            <CircleIconButton
              variant="outline"
              size="md"
              aria-label="Previous listings"
              disabled={!canPrev}
              onClick={handlePrev}
            >
              <ArrowLeft className="w-4 h-4" />
            </CircleIconButton>

            <CircleIconButton
              variant="dark"
              size="md"
              aria-label="Next listings"
              disabled={!canNext}
              onClick={handleNext}
            >
              <ArrowRight className="w-4 h-4" />
            </CircleIconButton>
          </div>
        </div>

        {/* Property Cards Grid (Desktop 3 columns, Mobile snap-scroll) */}
        {filteredListings.length === 0 ? (
          <div className="py-16 text-center text-[#566356] bg-white rounded-3xl border border-[#DCE8D5]">
            <p className="text-sm font-medium">No properties match this category currently.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* In desktop carousel view, render visibleListings. On mobile, all or visible */}
            {visibleListings.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
