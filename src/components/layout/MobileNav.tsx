import React, { useEffect, useRef } from "react";
import { X, MessageCircle } from "lucide-react";
import { BRAND_NAME, NAV_LINKS, NavLink, WHATSAPP_URL } from "../../config/site";
import { SocialLinks } from "../ui/SocialLinks";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Mark main content inert while drawer is open
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.setAttribute("inert", "");
    }

    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (mainContent) {
        mainContent.removeAttribute("inert");
      }
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      onClick={() => {
        onClose();
        triggerRef.current?.focus();
      }}
    >
      <div
        ref={panelRef}
        className="w-full max-w-sm h-full bg-ink text-white p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header row with exact brand */}
          <div className="flex items-center justify-between pb-6 border-b border-white/15">
            <span className="font-semibold text-xl tracking-tight text-white">
              {BRAND_NAME}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation menu"
              onClick={() => {
                onClose();
                triggerRef.current?.focus();
              }}
              className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 cursor-pointer focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
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
                      ? "bg-accent text-ink font-semibold"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* WhatsApp Button and Social Links */}
        <div className="pt-6 border-t border-white/15 flex flex-col gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-accent hover:bg-accent-strong text-ink font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors min-h-[48px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="flex flex-col items-start gap-2">
            <span className="text-xs text-white/60">Follow SSProperty</span>
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
