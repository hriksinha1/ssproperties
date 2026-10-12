import React, { useState, useRef } from "react";
import { MessageCircle, ArrowRight, AlertCircle } from "lucide-react";
import { BRAND_NAME, WHATSAPP_URL } from "../../config/site";
import { IMAGES } from "../../data/images";
import { SmartImage } from "../ui/SmartImage";

export const ContactCTA: React.FC = () => {
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "whatsapp" | "api-success" | "api-error";
    text: string;
    waText?: string;
  } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!name.trim()) {
      errs.name = "Please enter your name.";
    }

    const phoneTrimmed = phone.trim();
    if (phoneTrimmed && !/^[+0-9\s\-()]{7,20}$/.test(phoneTrimmed)) {
      errs.phone = "Please enter a valid phone number or leave blank.";
    }

    const emailTrimmed = email.trim();
    if (emailTrimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      errs.email = "Please enter a valid email address or leave blank.";
    }

    if (!message.trim()) {
      errs.message = "Please tell us what you are looking for.";
    } else if (message.trim().length < 10) {
      errs.message = "Please write at least 10 characters so we can understand what you need.";
    }

    setErrors(errs);

    // Focus first invalid field
    if (errs.name) {
      nameInputRef.current?.focus();
    } else if (errs.phone) {
      phoneInputRef.current?.focus();
    } else if (errs.email) {
      emailInputRef.current?.focus();
    } else if (errs.message) {
      messageInputRef.current?.focus();
    }

    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Construct WhatsApp message text
    let waMessage = `Hi ${BRAND_NAME}, I'm ${name.trim()}. ${message.trim()}`;
    if (phone.trim()) waMessage += ` (Phone: ${phone.trim()})`;
    if (email.trim()) waMessage += ` (Email: ${email.trim()})`;

    if (formEndpoint) {
      // POST to real endpoint if configured
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            phone: phone.trim(),
            email: email.trim(),
            message: message.trim(),
          }),
        });

        if (res.ok) {
          setSubmitStatus({
            type: "api-success",
            text: `Thank you, ${name}. Your message has been received by our team.`,
          });
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        } else {
          setSubmitStatus({
            type: "api-error",
            text: "There was an issue sending your message. Please message us directly on WhatsApp.",
            waText: waMessage,
          });
        }
      } catch {
        setSubmitStatus({
          type: "api-error",
          text: "Network error. Please message us directly on WhatsApp.",
          waText: waMessage,
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Direct WhatsApp handoff
      setIsSubmitting(false);
      const url = `${WHATSAPP_URL}?text=${encodeURIComponent(waMessage)}`;
      window.open(url, "_blank", "noopener,noreferrer");

      setSubmitStatus({
        type: "whatsapp",
        text: "WhatsApp is opening in a new tab. Your message is not sent until you press Send there.",
        waText: waMessage,
      });
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full py-16 sm:py-20 lg:py-24"
    >
      <div className="container-page">
        {/* Contained, Rounded Photographic Panel */}
        <div className="relative rounded-cta overflow-hidden bg-ink min-h-[560px] p-6 sm:p-10 lg:p-14 border border-line/30 shadow-2xl flex flex-col justify-center">
          {/* Background Dusk Photograph with SmartImage */}
          <div className="absolute inset-0 z-0">
            <SmartImage
              src={IMAGES.contactCta.src}
              srcSet={IMAGES.contactCta.srcSet}
              alt={IMAGES.contactCta.alt}
              subjectName={IMAGES.contactCta.subject}
              className="w-full h-full object-cover object-center select-none"
            />
            {/* Dark Scrim and Gradient for Text Legibility */}
            <div
              className="absolute inset-0 bg-black/70 sm:bg-gradient-to-r sm:from-black/95 sm:via-black/80 sm:to-black/65 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* 2-Column Responsive Layout (Text Left, Translucent Form Right) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start justify-between h-full gap-8">
              <div className="flex flex-col items-start gap-4 max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  GET IN TOUCH
                </span>

                <h2
                  id="contact-heading"
                  className="font-display uppercase text-white tracking-[0.015em] text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.02]"
                  style={{ textWrap: "balance" }}
                >
                  Looking For A Property, Or Have A Question? Tell Us What You Need.
                </h2>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-md">
                  Send us a message and we&apos;ll help you take the next step.
                </p>
              </div>

              {/* Monogram Team Credit */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/20 w-full max-w-md">
                <div
                  className="w-11 h-11 rounded-full bg-accent text-ink flex items-center justify-center font-semibold text-sm select-none shrink-0"
                  aria-hidden="true"
                >
                  SS
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{BRAND_NAME}</span>
                  <span className="text-xs text-white/70">Property team</span>
                </div>
              </div>
            </div>

            {/* Right Translucent Form Panel */}
            <div className="lg:col-span-5 bg-black/60 backdrop-blur-md rounded-card p-6 sm:p-8 border border-white/20 shadow-xl text-left">
              <div className="mb-6">
                <h3 className="font-display uppercase text-2xl sm:text-3xl text-white tracking-wide leading-none">
                  Tell us what you&apos;re looking for
                </h3>
              </div>

              {submitStatus && submitStatus.type === "whatsapp" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-5 rounded-2xl bg-tint border border-line text-ink flex flex-col gap-3"
                >
                  <p className="text-sm text-ink leading-relaxed">
                    {submitStatus.text}
                  </p>
                  {submitStatus.waText && (
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent(submitStatus.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink underline hover:text-accent-strong"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open WhatsApp again</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-xs text-ink-muted underline text-left mt-1 cursor-pointer"
                  >
                    Edit details
                  </button>
                </div>
              ) : submitStatus && submitStatus.type === "api-success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-5 rounded-2xl bg-tint border border-line text-ink flex flex-col gap-2"
                >
                  <p className="text-sm font-medium text-ink">{submitStatus.text}</p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus(null)}
                    className="text-xs text-ink-muted underline text-left cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  {submitStatus && submitStatus.type === "api-error" && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>{submitStatus.text}</span>
                      </div>
                      {submitStatus.waText && (
                        <a
                          href={`${WHATSAPP_URL}?text=${encodeURIComponent(submitStatus.waText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline text-white"
                        >
                          Message on WhatsApp instead
                        </a>
                      )}
                    </div>
                  )}

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium text-white">
                      Your name <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                      }}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={`w-full min-h-[48px] px-4 py-2.5 rounded-[14px] bg-white/10 border text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                        errors.name ? "border-rose-400 ring-1 ring-rose-400" : "border-white/20"
                      }`}
                    />
                    {errors.name && (
                      <span id="contact-name-error" role="alert" className="text-xs text-rose-300 inline-flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.name}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="text-sm font-medium text-white">
                      Phone number <span className="text-white/60 font-normal text-xs">(optional)</span>
                    </label>
                    <input
                      ref={phoneInputRef}
                      id="contact-phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                      }}
                      placeholder="+91 98300 12345"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={`w-full min-h-[48px] px-4 py-2.5 rounded-[14px] bg-white/10 border text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                        errors.phone ? "border-rose-400 ring-1 ring-rose-400" : "border-white/20"
                      }`}
                    />
                    {errors.phone && (
                      <span id="contact-phone-error" role="alert" className="text-xs text-rose-300 inline-flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-sm font-medium text-white">
                      Email address <span className="text-white/60 font-normal text-xs">(optional)</span>
                    </label>
                    <input
                      ref={emailInputRef}
                      id="contact-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      placeholder="name@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={`w-full min-h-[48px] px-4 py-2.5 rounded-[14px] bg-white/10 border text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                        errors.email ? "border-rose-400 ring-1 ring-rose-400" : "border-white/20"
                      }`}
                    />
                    {errors.email && (
                      <span id="contact-email-error" role="alert" className="text-xs text-rose-300 inline-flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-white">
                      What are you looking for? <span className="text-accent" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      ref={messageInputRef}
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                      }}
                      placeholder="e.g. 3 BHK flat in New Town or Rajarhat, budget ₹80L - ₹1Cr, looking to move in within 6 months..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={`w-full p-4 rounded-[14px] bg-white/10 border text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                        errors.message ? "border-rose-400 ring-1 ring-rose-400" : "border-white/20"
                      }`}
                    />
                    {errors.message && (
                      <span id="contact-message-error" role="alert" className="text-xs text-rose-300 inline-flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-accent hover:bg-accent-strong text-ink font-semibold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer disabled:opacity-50 min-h-[48px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : formEndpoint ? (
                      <>
                        <span>Send message</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        <span>Continue on WhatsApp</span>
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
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
