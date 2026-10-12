import React from "react";
import { Bed, Bath } from "lucide-react";
import { LISTINGS_DATA, formatListingPrice } from "../../data/listings";
import { SAMPLE_CONTENT } from "../../config/site";
import { SmartImage } from "../ui/SmartImage";

export const FeaturedPropertyMini: React.FC = () => {
  const featured = LISTINGS_DATA[0];
  if (!featured) return null;

  return (
    <div
      className="hidden md:flex items-center gap-3.5 p-3 rounded-2xl bg-surface/95 shadow-card border border-white/60 w-[310px] text-left transition-transform hover:-translate-y-0.5"
      role="complementary"
      aria-label="Featured property highlight"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-tint">
        <SmartImage
          src={featured.image}
          alt={featured.imageAlt}
          srcSet={featured.srcSet}
          subjectName={featured.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted uppercase tracking-wider mb-0.5">
          <span>Featured Property</span>
          {SAMPLE_CONTENT && (
            <span className="text-[11px] px-1.5 py-0.2 rounded bg-tint text-ink border border-line">
              Sample
            </span>
          )}
        </div>

        <h3 className="text-xs font-semibold text-ink truncate">{featured.title}</h3>
        <p className="text-xs text-ink-muted truncate mb-1">{featured.location}</p>

        <div className="flex items-center justify-between pt-1 border-t border-line text-xs">
          <div className="flex items-center gap-2 text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{featured.beds}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{featured.baths}</span>
            </span>
          </div>
          <span className="font-semibold text-ink">{formatListingPrice(featured.price)}</span>
        </div>
      </div>
    </div>
  );
};
