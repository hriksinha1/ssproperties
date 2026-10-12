import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  children: React.ReactNode;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  titleId,
  children,
  triggerRef,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button or first element in dialog
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={() => {
        onClose();
        triggerRef?.current?.focus();
      }}
    >
      <div
        ref={dialogRef}
        className="w-full max-w-lg bg-surface rounded-[28px] overflow-hidden shadow-2xl border border-line text-left relative focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => {
            onClose();
            triggerRef?.current?.focus();
          }}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface/90 shadow-md flex items-center justify-center text-ink hover:bg-tint cursor-pointer focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {children}
      </div>
    </div>
  );
};
