import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO } from "../../config/site";
import { FOOTER_LINK_GROUPS } from "../../data/footerLinks";
import { NewsletterForm } from "./NewsletterForm";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pb-10 pt-4" aria-label="Site footer">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F5DE] border border-[#DCE8D5] rounded-[36px] p-6 sm:p-10 lg:p-14 shadow-sm">
          {/* Main Grid: Left brand/contact, Right links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-10 border-b border-[#DCE8D5]">
            {/* Left Block (5 columns on desktop) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
              <a
                href="#hero"
                className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] lowercase text-[#0E170E] select-none"
                aria-label={`${BRAND_NAME} home`}
              >
                {BRAND_NAME.toLowerCase()}
              </a>

              <p className="text-xs sm:text-sm text-[#566356] leading-relaxed max-w-sm">
                Subscribe to receive the latest property updates, market insights, and exclusive project announcements.
              </p>

              {/* Contact Information Group */}
              <div className="flex flex-col gap-2.5 text-xs text-[#0E170E]">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#566356] mb-0.5">
                  Contact Information
                </div>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="inline-flex items-center gap-2.5 text-[#0E170E] hover:text-emerald-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#566356]" aria-hidden="true" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2.5 text-[#0E170E] hover:text-emerald-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#566356]" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                <div className="inline-flex items-start gap-2.5 text-[#0E170E]">
                  <MapPin className="w-3.5 h-3.5 text-[#566356] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>

              {/* Newsletter Component placed in left or bottom column */}
              <div className="w-full max-w-sm pt-2">
                <NewsletterForm />
              </div>
            </div>

            {/* Right Block: 4 Link Columns (7 columns on desktop) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 text-left">
              {FOOTER_LINK_GROUPS.map((group) => (
                <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
                  <h3 className="text-xs font-semibold text-[#0E170E] tracking-tight uppercase">
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-2 text-xs text-[#566356]">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="hover:text-[#0E170E] hover:underline transition-colors block py-0.5"
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

          {/* Bottom Row: Social Icons & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#566356]">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Architron on Facebook"
                className="w-8 h-8 rounded-full bg-white/80 border border-[#DCE8D5] flex items-center justify-center text-[#0E170E] hover:bg-[#C8EFAE] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Architron on Instagram"
                className="w-8 h-8 rounded-full bg-white/80 border border-[#DCE8D5] flex items-center justify-center text-[#0E170E] hover:bg-[#C8EFAE] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Architron on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/80 border border-[#DCE8D5] flex items-center justify-center text-[#0E170E] hover:bg-[#C8EFAE] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Architron on TikTok"
                className="w-8 h-8 rounded-full bg-white/80 border border-[#DCE8D5] flex items-center justify-center text-[#0E170E] hover:bg-[#C8EFAE] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.11V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 9.07 5.71 6.34 6.34 0 0 0 3.61-5.71V8.75a8.28 8.28 0 0 0 4.77 1.48V6.78a4.83 4.83 0 0 1-1-.09z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <span>{CONTACT_INFO.companyLegal}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
