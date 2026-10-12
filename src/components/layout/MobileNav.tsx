import React, { useEffect, useRef } from "react";
import { X, MessageSquare, Bell, User } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, NavLink } from "../../config/site";
import { CircleIconButton } from "../ui/CircleIconButton";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (href: string) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  triggerRef,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          triggerRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="w-full max-w-sm h-full bg-[#0E170E] text-white p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-semibold text-xl tracking-tight lowercase">
              {BRAND_NAME.toLowerCase()}
            </span>
            <CircleIconButton
              variant="translucent-dark"
              size="sm"
              aria-label="Close navigation menu"
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
            >
              <X className="w-5 h-5 text-white" />
            </CircleIconButton>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile menu links">
            {NAV_LINKS.map((link: NavLink, idx) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(link.href);
                    onClose();
                    triggerRef.current?.focus();
                  }}
                  className={`flex items-center px-4 py-3 min-h-[48px] rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#C8EFAE] text-[#0E170E] font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Utility bottom row */}
        <div className="pt-6 border-t border-white/10">
          <div className="text-xs text-white/50 mb-3">Quick Actions</div>
          <div className="flex items-center gap-3">
            <CircleIconButton
              variant="translucent-dark"
              size="md"
              aria-label="Messages"
              onClick={() => {
                onClose();
                onNavigate("#contact");
              }}
            >
              <MessageSquare className="w-4 h-4" />
            </CircleIconButton>

            <CircleIconButton
              variant="translucent-dark"
              size="md"
              aria-label="Notifications"
              onClick={() => {
                onClose();
                onNavigate("#properties");
              }}
            >
              <Bell className="w-4 h-4" />
            </CircleIconButton>

            <CircleIconButton
              variant="translucent-dark"
              size="md"
              aria-label="User Profile"
              onClick={() => {
                onClose();
                onNavigate("#contact");
              }}
            >
              <User className="w-4 h-4" />
            </CircleIconButton>
          </div>
          <div className="mt-4 text-xs text-white/40">
            {BRAND_NAME} Luxury Real Estate Advisory
          </div>
        </div>
      </div>
    </div>
  );
};
