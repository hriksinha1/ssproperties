import React, { useState } from "react";
import { AlertCircle, CheckCircle2, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../../config/site";

export const NewsletterForm: React.FC = () => {
  const newsletterEndpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // If no real newsletter endpoint is provided, render direct WhatsApp updates button
  if (!newsletterEndpoint) {
    return (
      <div className="w-full flex flex-col items-start text-left">
        <span className="text-xs font-semibold text-ink mb-2 block">
          Get new listings directly on WhatsApp
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto h-11 px-6 rounded-full bg-ink hover:bg-black text-white text-xs font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Get new listings on WhatsApp</span>
        </a>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const emailTrimmed = email.trim();
    if (!emailTrimmed) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(newsletterEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailTrimmed }),
      });

      if (response.ok) {
        setSuccess("Thank you for subscribing! You will receive future property updates.");
        setEmail("");
      } else {
        setError("Subscription failed. Please try again or reach out on WhatsApp.");
      }
    } catch {
      setError("Network error while submitting. Please message us on WhatsApp.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-start text-left">
      <label htmlFor="newsletter-email" className="text-xs font-semibold text-ink mb-2 block">
        Get new property updates
      </label>

      <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row items-stretch gap-2" noValidate>
        <div className="relative flex-1">
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Enter your email"
            aria-invalid={!!error}
            aria-describedby={error ? "newsletter-error" : success ? "newsletter-success" : undefined}
            className={`w-full h-11 px-4 rounded-full bg-surface border border-line-strong text-ink placeholder-ink-muted text-xs focus:outline-none focus:ring-2 focus:ring-ink transition-all ${
              error ? "border-rose-600 ring-1 ring-rose-600" : ""
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="h-11 px-6 rounded-full bg-ink hover:bg-black text-white text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer select-none disabled:opacity-50 shrink-0 focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
        >
          {isLoading ? <span>Subscribing...</span> : <span>Subscribe</span>}
        </button>
      </form>

      {error && (
        <div id="newsletter-error" role="alert" className="inline-flex items-center gap-1.5 text-xs text-rose-700 mt-2 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      {success && (
        <div id="newsletter-success" role="status" className="inline-flex items-center gap-1.5 text-xs text-emerald-800 mt-2 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>{success}</span>
        </div>
      )}
    </div>
  );
};
