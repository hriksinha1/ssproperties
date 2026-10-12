import React, { useState } from "react";
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { PropertyListing, formatListingPrice } from "../../data/listings";
import { SAMPLE_CONTENT, AREA_UNIT } from "../../config/site";
import { SmartImage } from "../ui/SmartImage";
import { Badge } from "../ui/Badge";

export interface PropertyCardProps {
  property: PropertyListing;
  onSelect?: (property: PropertyListing, triggerEl: HTMLElement | null) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="group relative rounded-card overflow-hidden bg-surface shadow-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-end aspect-[3/4] min-w-[280px]">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden bg-tint">
        <SmartImage
          src={property.image}
          srcSet={property.srcSet}
          alt={property.imageAlt}
          subjectName={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Top Floating Controls */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Badge variant="white" dot>
            {property.status}
          </Badge>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-surface/95 text-ink border border-line shadow-xs">
            {property.bhkConfig}
          </span>
          {SAMPLE_CONTENT && property.isSample && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-tint/90 text-ink border border-line">
              Sample
            </span>
          )}
        </div>

        <button
          type="button"
          aria-label={isSaved ? `Remove ${property.title} from saved` : `Save ${property.title}`}
          aria-pressed={isSaved}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="w-10 h-10 rounded-full bg-surface/95 text-ink shadow-sm flex items-center justify-center hover:bg-tint cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 transition-colors shrink-0"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isSaved ? "fill-rose-500 text-rose-500" : "text-ink"
            }`}
          />
        </button>
      </div>

      {/* Anchored Bottom White Card Panel */}
      <div className="relative z-10 m-3 p-4 rounded-[18px] bg-surface/95 backdrop-blur-md border border-white/80 shadow-sm flex flex-col gap-2.5 text-left">
        {/* Title Row with single focus stop */}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={(e) => onSelect?.(property, e.currentTarget)}
            className="font-display text-2xl text-ink tracking-tight leading-none truncate text-left hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 rounded cursor-pointer"
          >
            {property.title}
          </button>

          <button
            type="button"
            aria-label={`View details for ${property.title}`}
            onClick={(e) => onSelect?.(property, e.currentTarget)}
            className="w-9 h-9 rounded-full border border-line bg-surface text-ink hover:bg-accent hover:border-accent transition-colors flex items-center justify-center shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-xs text-ink-muted truncate">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-ink-muted" aria-hidden="true" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Features Chips (Indian terminology: BHK, Area, Baths) */}
        <div className="flex items-center gap-2 flex-wrap text-xs font-medium text-ink-muted py-1.5 border-y border-line">
          {property.beds > 0 ? (
            <>
              <span className="inline-flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                <span>{property.bhkConfig}</span>
              </span>
              <span className="text-line" aria-hidden="true">•</span>
            </>
          ) : (
            <>
              <span className="text-ink font-semibold">{property.propertyType}</span>
              <span className="text-line" aria-hidden="true">•</span>
            </>
          )}

          {property.baths > 0 && (
            <>
              <span className="inline-flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                <span>{property.baths} Baths</span>
              </span>
              <span className="text-line" aria-hidden="true">•</span>
            </>
          )}

          <span className="inline-flex items-center gap-1">
            <Maximize2 className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
            <span>{property.superBuiltUpSqFt} {AREA_UNIT}</span>
          </span>
        </div>

        {/* Team Monogram & Price Bottom Row */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-2 min-w-0">
            {/* SS Monogram Avatar Circle */}
            <div
              className="w-6 h-6 rounded-full bg-tint border border-line flex items-center justify-center text-ink text-[10px] font-bold select-none shrink-0"
              aria-hidden="true"
            >
              SS
            </div>
            <span className="text-xs text-ink-muted font-medium truncate">SSProperty</span>
          </div>

          <span className="text-sm md:text-base font-bold text-ink tabular-nums whitespace-nowrap">
            {formatListingPrice(property.price, property.status)}
          </span>
        </div>
      </div>
    </article>
  );
};
