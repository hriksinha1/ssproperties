import React from "react";
import { Mail } from "lucide-react";
import { CONTACT_INFO } from "../../config/site";

export const HelpPanel: React.FC = () => {
  return (
    <div
      className="relative rounded-[24px] bg-[#E8F5DE] border border-[#DCE8D5] p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[360px] text-left"
      role="complementary"
      aria-label="Direct support inquiry"
    >
      {/* Faint Architectural Tower Line Art (Decorative SVG) */}
      <div
        className="absolute top-0 right-4 sm:right-8 w-44 md:w-56 h-72 opacity-35 pointer-events-none select-none text-[#566356]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 320" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          {/* Main Tower Perspective */}
          <line x1="80" y1="20" x2="30" y2="300" strokeWidth="1.2" />
          <line x1="80" y1="20" x2="130" y2="300" strokeWidth="1.2" />
          <line x1="80" y1="20" x2="80" y2="300" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="45" y1="100" x2="115" y2="100" strokeWidth="0.8" />
          <line x1="40" y1="140" x2="120" y2="140" strokeWidth="0.8" />
          <line x1="36" y1="180" x2="124" y2="180" strokeWidth="0.8" />
          <line x1="32" y1="220" x2="128" y2="220" strokeWidth="0.8" />
          <line x1="30" y1="260" x2="130" y2="260" strokeWidth="0.8" />
          {/* Diagonal Bracing */}
          <line x1="45" y1="100" x2="120" y2="140" strokeWidth="0.5" />
          <line x1="115" y1="100" x2="40" y2="140" strokeWidth="0.5" />
          <line x1="40" y1="140" x2="124" y2="180" strokeWidth="0.5" />
          <line x1="120" y1="140" x2="36" y2="180" strokeWidth="0.5" />
          <line x1="36" y1="180" x2="128" y2="220" strokeWidth="0.5" />
          <line x1="124" y1="180" x2="32" y2="220" strokeWidth="0.5" />
          {/* Spire */}
          <line x1="80" y1="5" x2="80" y2="20" strokeWidth="1.5" />
          <circle cx="80" cy="5" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Decorative Top Space */}
      <div className="h-16" aria-hidden="true" />

      {/* Content anchored at bottom */}
      <div className="relative z-10 flex flex-col items-start gap-2 max-w-sm">
        <h3 className="font-display uppercase text-3xl md:text-4xl text-[#0E170E] leading-none">
          Still Need <span className="text-[#0E170E]">Help?</span>
        </h3>
        <p className="text-xs md:text-sm text-[#566356] leading-relaxed mb-3">
          Can't find your answer? Email us, and we'll respond as soon as possible!
        </p>

        <a
          href={`mailto:${CONTACT_INFO.email}?subject=Property%20Inquiry%20from%20Architron`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] text-xs font-semibold tracking-wide shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-2 min-h-[44px]"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          <span>Send Email</span>
        </a>
      </div>
    </div>
  );
};
