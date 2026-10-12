import React, { useState } from "react";
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { PropertyListing } from "../../data/listings";
import { SmartImage } from "../ui/SmartImage";
import { Badge } from "../ui/Badge";
import { CircleIconButton } from "../ui/CircleIconButton";

export interface PropertyCardProps {
  property: PropertyListing;
  onSelect?: (property: PropertyListing) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article
      tabIndex={0}
      className="group relative rounded-[24px] overflow-hidden bg-white shadow-[0_8px_30px_rgba(15,30,15,0.08)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(15,30,15,0.14)] hover:-translate-y-1 flex flex-col justify-end aspect-[3/4] min-w-[280px] focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-4"
      aria-label={`${property.title}, located in ${property.location}, priced at ${property.formattedPrice}`}
    >
      {/* Background Image with slight zoom on hover */}
      <div className="absolute inset-0 overflow-hidden bg-[#E8F5DE]">
        <SmartImage
          src={property.image}
          alt={property.imageAlt}
          subjectName={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* Top Floating Controls */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
        <Badge variant="white" dot>
          {property.status}
        </Badge>

        <CircleIconButton
          size="sm"
          variant="white"
          aria-label={isSaved ? `Remove ${property.title} from saved` : `Save ${property.title}`}
          aria-pressed={isSaved}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved(!isSaved);
          }}
          className="shadow-md"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isSaved ? "fill-rose-500 text-rose-500" : "text-[#0E170E]"
            }`}
          />
        </CircleIconButton>
      </div>

      {/* Anchored Bottom White Card Panel */}
      <div className="relative z-10 m-3 p-4 rounded-[20px] bg-white/95 backdrop-blur-md border border-white/80 shadow-sm flex flex-col gap-2.5 text-left">
        {/* Title Row */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-2xl text-[#0E170E] tracking-tight leading-none truncate">
            {property.title}
          </h3>
          <CircleIconButton
            size="sm"
            variant="outline"
            aria-label={`View details for ${property.title}`}
            onClick={() => onSelect?.(property)}
            className="shrink-0 hover:bg-[#C8EFAE] hover:border-[#C8EFAE] transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </CircleIconButton>
        </div>

        {/* Location Row */}
        <div className="flex items-center gap-1.5 text-xs text-[#566356] truncate">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#566356]" aria-hidden="true" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Features Chips */}
        <div className="flex items-center gap-2 text-[11px] font-medium text-[#566356] py-1 border-y border-[#DCE8D5]/60 overflow-hidden">
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <Bed className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
            <span>{property.beds} Beds</span>
          </span>
          <span className="text-[#DCE8D5]" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <Bath className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
            <span>{property.baths} Baths</span>
          </span>
          <span className="text-[#DCE8D5]" aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1 whitespace-nowrap">
            <Maximize2 className="w-3.5 h-3.5 text-[#0E170E]" aria-hidden="true" />
            <span>{property.areaSqFt} sq. ft.</span>
          </span>
        </div>

        {/* Agent & Price Bottom Row */}
        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={property.agentAvatar}
              alt=""
              aria-hidden="true"
              className="w-6 h-6 rounded-full object-cover ring-1 ring-[#DCE8D5]"
              loading="lazy"
            />
            <span className="text-xs text-[#0E170E] font-medium truncate">{property.agentName}</span>
          </div>
          <span className="text-sm md:text-base font-semibold text-[#0E170E] tabular-nums whitespace-nowrap">
            {property.formattedPrice}
          </span>
        </div>
      </div>
    </article>
  );
};
