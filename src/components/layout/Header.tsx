import React, { useState, useRef } from "react";
import { MessageSquare, Bell, User, Menu } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, NavLink } from "../../config/site";
import { CircleIconButton } from "../ui/CircleIconButton";
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

  return (
    <header className="absolute top-0 inset-x-0 z-30 pt-6 md:pt-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: lowercase wordmark */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll("#hero");
          }}
          className="text-white text-xl md:text-2xl font-semibold tracking-[-0.03em] lowercase select-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 rounded-md"
          aria-label={`${BRAND_NAME} Home`}
        >
          {BRAND_NAME.toLowerCase()}
        </a>

        {/* Center: pill-shaped navigation group */}
        <nav
          className="hidden md:flex items-center gap-1 bg-black/40 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-white/15 shadow-sm"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link: NavLink) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(link.href);
                }}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none ${
                  isActive
                    ? "bg-[#C8EFAE] text-[#0E170E] font-semibold shadow-xs"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: three circular utility icon buttons */}
        <div className="hidden md:flex items-center gap-2">
          <CircleIconButton
            variant="translucent-dark"
            size="sm"
            aria-label="Contact messages"
            onClick={() => handleSmoothScroll("#contact")}
            title="Messages"
          >
            <MessageSquare className="w-4 h-4" />
          </CircleIconButton>

          <CircleIconButton
            variant="translucent-dark"
            size="sm"
            aria-label="Property alerts and notifications"
            onClick={() => handleSmoothScroll("#properties")}
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
          </CircleIconButton>

          <CircleIconButton
            variant="translucent-dark"
            size="sm"
            aria-label="Agent consultation profile"
            onClick={() => handleSmoothScroll("#contact")}
            title="Profile"
          >
            <User className="w-4 h-4" />
          </CircleIconButton>
        </div>

        {/* Mobile Hamburger button */}
        <div className="flex md:hidden">
          <CircleIconButton
            ref={triggerRef}
            variant="translucent-dark"
            size="sm"
            aria-label="Open mobile navigation menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="w-5 h-5 text-white" />
          </CircleIconButton>
        </div>
      </div>

      {/* Accessible Mobile Nav Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
        onNavigate={handleSmoothScroll}
        triggerRef={triggerRef}
      />
    </header>
  );
};
