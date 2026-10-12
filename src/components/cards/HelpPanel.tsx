import React from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../config/site";

export const HelpPanel: React.FC = () => {
  return (
    <div
      className="relative rounded-card bg-tint border border-line p-6 md:p-8 flex flex-col justify-between overflow-hidden min-h-[360px] text-left"
      role="complementary"
      aria-label="Direct support inquiry"
    >
      {/* Faint Architectural Tower Line Art (Decorative SVG) */}
      <div
        className="absolute top-0 right-4 sm:right-8 w-44 md:w-56 h-72 opacity-25 pointer-events-none select-none text-ink-muted"
        aria-hidden="true"
      >
        <svg viewBox="0 0 160 320" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <line x1="80" y1="20" x2="30" y2="300" strokeWidth="1.2" />
          <line x1="80" y1="20" x2="130" y2="300" strokeWidth="1.2" />
          <line x1="80" y1="20" x2="80" y2="300" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="45" y1="100" x2="115" y2="100" strokeWidth="0.8" />
          <line x1="40" y1="140" x2="120" y2="140" strokeWidth="0.8" />
          <line x1="36" y1="180" x2="124" y2="180" strokeWidth="0.8" />
          <line x1="32" y1="220" x2="128" y2="220" strokeWidth="0.8" />
          <line x1="30" y1="260" x2="130" y2="260" strokeWidth="0.8" />
          <line x1="45" y1="100" x2="120" y2="140" strokeWidth="0.5" />
          <line x1="115" y1="100" x2="40" y2="140" strokeWidth="0.5" />
          <line x1="40" y1="140" x2="124" y2="180" strokeWidth="0.5" />
          <line x1="120" y1="140" x2="36" y2="180" strokeWidth="0.5" />
          <line x1="36" y1="180" x2="128" y2="220" strokeWidth="0.5" />
          <line x1="124" y1="180" x2="32" y2="220" strokeWidth="0.5" />
          <line x1="80" y1="5" x2="80" y2="20" strokeWidth="1.5" />
          <circle cx="80" cy="5" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Decorative Top Space */}
      <div className="h-16" aria-hidden="true" />

      {/* Content anchored at bottom */}
      <div className="relative z-10 flex flex-col items-start gap-2 max-w-sm">
        <h3 className="font-display uppercase text-3xl md:text-4xl text-ink leading-none">
          Still Need <span className="text-ink">Help?</span>
        </h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-3">
          Message us on WhatsApp and we&apos;ll get back to you.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-strong text-ink text-xs font-semibold tracking-wide shadow-xs transition-colors focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
