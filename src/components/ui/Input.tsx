import React, { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      className = "",
      type = "text",
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label htmlFor={inputId} className="text-xs font-medium text-white/90">
          {label}
          {required && (
            <span className="text-rose-400 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          type={type}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full min-h-[48px] px-4 py-2.5 rounded-[14px] bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C8EFAE] focus:ring-1 focus:ring-[#C8EFAE] transition-all backdrop-blur-xs ${
            error ? "border-rose-400/80 ring-1 ring-rose-400/80" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <span
            id={errorId}
            role="alert"
            className="inline-flex items-center gap-1 text-xs text-rose-300 mt-0.5"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="text-xs text-white/60 mt-0.5">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      className = "",
      rows = 3,
      required,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        <label htmlFor={textareaId} className="text-xs font-medium text-white/90">
          {label}
          {required && (
            <span className="text-rose-400 ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`w-full p-4 rounded-[14px] bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#C8EFAE] focus:ring-1 focus:ring-[#C8EFAE] transition-all backdrop-blur-xs resize-none ${
            error ? "border-rose-400/80 ring-1 ring-rose-400/80" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <span
            id={errorId}
            role="alert"
            className="inline-flex items-center gap-1 text-xs text-rose-300 mt-0.5"
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="text-xs text-white/60 mt-0.5">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
