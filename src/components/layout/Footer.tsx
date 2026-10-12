import React from "react";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO, WHATSAPP_URL, WHATSAPP_DISPLAY, SAMPLE_CONTENT } from "../../config/site";
import { getFooterLinkGroups } from "../../data/footerLinks";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "../ui/SocialLinks";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const linkGroups = getFooterLinkGroups(SAMPLE_CONTENT);

  return (
    <footer className="w-full pb-10 pt-4" aria-label="Site footer">
      <div className="container-page">
        <div className="bg-tint border border-line rounded-footer p-6 sm:p-10 lg:p-14 shadow-sm">
          {/* Main Grid: Left brand/contact, Right links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-line">
            {/* Left Block (5 columns on desktop) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
              <a
                href="#hero"
                className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-ink select-none focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 rounded"
                aria-label={`${BRAND_NAME} home`}
              >
                {BRAND_NAME}
              </a>

              <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
                Find properties, ask questions and arrange viewings with {BRAND_NAME}.
              </p>

              {/* Verified Contact Details Group */}
              <div className="flex flex-col gap-2.5 text-xs text-ink">
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-0.5">
                  Contact
                </div>

                {/* WhatsApp is verified */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink hover:text-accent-strong transition-colors min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
                  <span className="font-semibold">{WHATSAPP_DISPLAY} (WhatsApp)</span>
                </a>

                {/* Email rendered only if defined */}
                {CONTACT_INFO.email && (
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="inline-flex items-center gap-2.5 text-ink hover:text-accent-strong transition-colors min-h-[40px]"
                  >
                    <Mail className="w-4 h-4 text-ink-muted shrink-0" aria-hidden="true" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                )}

                {/* Address rendered only if defined */}
                {CONTACT_INFO.address && (
                  <div className="inline-flex items-start gap-2.5 text-ink min-h-[40px]">
                    <MapPin className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>
                )}
              </div>

              {/* Newsletter Component / WhatsApp Update Action */}
              <div className="w-full max-w-sm pt-2">
                <NewsletterForm />
              </div>
            </div>

            {/* Right Block: Link Columns (7 columns on desktop) */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-8 text-left">
              {linkGroups.map((group) => (
                <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
                  <h3 className="text-xs font-semibold text-ink tracking-tight uppercase">
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-sm text-ink-muted">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="hover:text-ink hover:underline transition-colors block py-1"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>

          {/* Bottom Row: 4 Social Icons & Honest Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
            <SocialLinks />

            <div className="text-center sm:text-right">
              <span>© {currentYear} {BRAND_NAME}. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
