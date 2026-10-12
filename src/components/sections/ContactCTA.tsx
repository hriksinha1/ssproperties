import React, { useState, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { BRAND_NAME, CONTACT_INFO } from "../../config/site";
import { IMAGES } from "../../data/images";
import { Input, Textarea } from "../ui/Input";

/**
 * Production-ready contact form.
 * In a production deployment, replace simulated submission with an actual API call:
 * e.g., const endpoint = import.meta.env.VITE_FORM_ENDPOINT || '/api/contact';
 * const res = await fetch(endpoint, { method: 'POST', body: JSON.stringify(formData) });
 */

export const ContactCTA: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = "Please enter your name.";
    }

    const emailTrimmed = email.trim();
    if (!emailTrimmed) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      errs.email = "Please enter a valid email address.";
    }

    const phoneTrimmed = phone.trim();
    if (phoneTrimmed && !/^[+0-9\s\-()]{7,20}$/.test(phoneTrimmed)) {
      errs.phone = "Please enter a valid phone number or leave blank.";
    }

    if (!message.trim()) {
      errs.message = "Please tell us about your vision.";
    } else if (message.trim().length < 10) {
      errs.message = "Please write at least 10 characters so we can assist you better.";
    }

    setErrors(errs);

    // Focus first invalid field
    if (errs.name) {
      nameInputRef.current?.focus();
    } else if (errs.email) {
      emailInputRef.current?.focus();
    } else if (errs.phone) {
      phoneInputRef.current?.focus();
    } else if (errs.message) {
      messageInputRef.current?.focus();
    }

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate ~900ms async API response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(name);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }, 900);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contained, Rounded Photographic Panel */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#0E170E] min-h-[580px] p-6 sm:p-10 lg:p-14 border border-[#DCE8D5]/30 shadow-2xl flex flex-col justify-center">
          {/* Background Dusk Photograph */}
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.contactCta.src}
              alt={IMAGES.contactCta.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Dark Scrim and Left-to-Right Contrast Gradient */}
            <div
              className="absolute inset-0 bg-black/65 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/75 sm:to-black/60 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* 2-Column Responsive Layout (Text Left, Translucent Form Right) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start justify-between h-full gap-8">
              <div className="flex flex-col items-start gap-4 max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8EFAE]">
                  Completed Homes Thoughtfully Crafted
                </span>

                <h2
                  id="contact-heading"
                  className="font-display uppercase text-white tracking-[0.015em] text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02]"
                  style={{ textWrap: "balance" }}
                >
                  Whether You&apos;re Interested In Our Properties Or Upcoming Projects We&apos;d Be Happy To Assist.
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md">
                  Ready to discover your next exceptional experience with property?
                </p>
              </div>

              {/* Agent Credit Bottom Left */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/20 w-full max-w-md">
                <img
                  src={IMAGES.avatars.agent}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C8EFAE]"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {CONTACT_INFO.agentName}
                  </span>
                  <span className="text-xs text-white/70">
                    {CONTACT_INFO.agentRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Translucent Form Panel */}
            <div className="lg:col-span-5 bg-black/55 backdrop-blur-md rounded-[24px] p-6 sm:p-8 border border-white/20 shadow-xl">
              <div className="mb-6">
                <h3 className="font-display uppercase text-2xl sm:text-3xl text-white tracking-wide leading-none">
                  Let&apos;s Create Something Extraordinary
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  Connect with a dedicated luxury property advisor.
                </p>
              </div>

              {submittedName ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-2xl bg-[#E8F5DE] border border-[#C8EFAE] text-[#0E170E] flex flex-col items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C8EFAE] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">Inquiry Received</h4>
                    <p className="text-xs text-[#566356] mt-1 leading-relaxed">
                      Thanks, <strong>{submittedName}</strong>. This is a demo form, so no message was actually sent. In a live production deployment, our advisory team would respond within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmittedName(null)}
                    className="mt-2 text-xs font-semibold text-[#0E170E] underline hover:text-emerald-800"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <Input
                    ref={nameInputRef}
                    id="contact-name"
                    label="Your Name"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    error={errors.name}
                    placeholder="Jane Doe"
                  />

                  <Input
                    ref={emailInputRef}
                    id="contact-email"
                    type="email"
                    label="Email Address"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                    }}
                    error={errors.email}
                    placeholder="jane@example.com"
                  />

                  <Input
                    ref={phoneInputRef}
                    id="contact-phone"
                    type="tel"
                    label="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    error={errors.phone}
                    placeholder="+1 (555) 012-3456"
                  />

                  <Textarea
                    ref={messageInputRef}
                    id="contact-message"
                    label="Tell Us About Your Vision"
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                    }}
                    error={errors.message}
                    placeholder="Desired architectural style, neighborhood preferences, or timeline..."
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#C8EFAE] hover:bg-[#A9E18A] text-[#0E170E] font-semibold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <span>Start The Conversation</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
