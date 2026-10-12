import React, { useState, useRef } from "react";
import { MessageCircle, Menu } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, NavLink, WHATSAPP_URL } from "../../config/site";
import { MobileNav } from "./MobileNav";

export interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Map active section id to navigation link id
  const getActiveNavId = (sec: string) => {
    if (sec === "about") return "about";
    if (sec === "properties" || sec === "lifestyle") return "properties";
    if (["contact", "faq", "blog", "testimonials"].includes(sec)) return "contact";
    return "hero";
  };

  const activeNavId = getActiveNavId(activeSection);

  return (
    <header className="absolute top-0 inset-x-0 z-30 pt-6 md:pt-8">
      <div className="container-page flex items-center justify-between">
        {/* Left: wordmark rendered exactly as Inter 600 with no lowercase transform */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll("#hero");
          }}
          className="text-white text-xl md:text-2xl font-semibold tracking-[-0.02em] select-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-md"
          aria-label={`${BRAND_NAME} Home`}
        >
          {BRAND_NAME}
        </a>

        {/* Center: pill-shaped navigation group */}
        <nav
          className="hidden md:flex items-center gap-1 bg-black/45 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 shadow-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link: NavLink) => {
            const isActive = activeNavId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(link.href);
                }}
                className={`px-4 py-2 min-h-[40px] text-sm font-medium rounded-full transition-all duration-200 select-none inline-flex items-center justify-center ${
                  isActive
                    ? "bg-accent text-ink font-semibold shadow-xs"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Desktop pill button "Chat on WhatsApp" */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with SSProperty on WhatsApp (opens in a new tab)"
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-accent hover:bg-accent-strong text-ink text-xs font-semibold tracking-wide transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex md:hidden">
          <button
            ref={triggerRef}
            type="button"
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
            className="w-11 h-11 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:bg-black/70 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <Menu className="w-5 h-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeNavId}
        onNavigate={handleSmoothScroll}
        triggerRef={triggerRef}
      />
    </header>
  );
};
