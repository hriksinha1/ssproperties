import React from "react";
import { Bed, Bath } from "lucide-react";
import { IMAGES } from "../../data/images";
import { SmartImage } from "../ui/SmartImage";

export const FeaturedPropertyMini: React.FC = () => {
  return (
    <div
      className="hidden md:flex items-center gap-3.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 w-[300px] text-left transition-transform hover:-translate-y-0.5"
      role="complementary"
      aria-label="Featured property highlight"
    >
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-[#E8F5DE]">
        <SmartImage
          src={IMAGES.featuredMini.src}
          alt={IMAGES.featuredMini.alt}
          subjectName={IMAGES.featuredMini.subject}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-800 uppercase tracking-wider mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span>Featured Property</span>
        </div>

        <h3 className="text-xs font-semibold text-[#0E170E] truncate">The Cedar Residence</h3>
        <p className="text-[11px] text-[#566356] truncate mb-1">Los Angeles, California</p>

        <div className="flex items-center justify-between pt-1 border-t border-[#DCE8D5]/60 text-[11px]">
          <div className="flex items-center gap-2 text-[#566356]">
            <span className="inline-flex items-center gap-1">
              <Bed className="w-3 h-3" aria-hidden="true" />
              <span>4</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Bath className="w-3 h-3" aria-hidden="true" />
              <span>3</span>
            </span>
          </div>
          <span className="font-semibold text-[#0E170E]">$2,850,000</span>
        </div>
      </div>
    </div>
  );
};
