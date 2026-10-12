import React, { useState } from "react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
    // Simulate brief network submission
    setTimeout(() => {
      setIsLoading(false);
      setSuccess("Thanks for subscribing! (Demo preview: no email was sent)");
      setEmail("");
    }, 600);
  };

  return (
    <div className="w-full flex flex-col items-start text-left">
      <label htmlFor="newsletter-email" className="text-xs font-semibold text-[#0E170E] mb-2 block">
        Sign up for the best property experience
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
            className={`w-full h-11 px-4 rounded-full bg-white border border-[#DCE8D5] text-[#0E170E] placeholder-[#566356]/60 text-xs focus:outline-none focus:border-[#0E170E] focus:ring-1 focus:ring-[#0E170E] transition-all ${
              error ? "border-rose-500 ring-1 ring-rose-500" : ""
            }`}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="h-11 px-6 rounded-full bg-[#0E170E] hover:bg-[#1f2e1f] text-white text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer select-none disabled:opacity-50 shrink-0"
        >
          {isLoading ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Submit</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </>
          )}
        </button>
      </form>

      {error && (
        <div id="newsletter-error" role="alert" className="inline-flex items-center gap-1.5 text-xs text-rose-700 mt-2">
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
