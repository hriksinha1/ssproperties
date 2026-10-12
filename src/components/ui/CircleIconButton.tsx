import React, { forwardRef } from "react";

export interface CircleIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: "dark" | "outline" | "white" | "accent" | "translucent-dark";
  size?: "sm" | "md" | "lg";
}

export const CircleIconButton = forwardRef<HTMLButtonElement, CircleIconButtonProps>(
  (
    {
      children,
      variant = "outline",
      size = "md",
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full select-none transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";

    const sizeStyles = {
      sm: "w-9 h-9 min-w-[36px]",
      md: "w-11 h-11 min-w-[44px]",
      lg: "w-12 h-12 min-w-[48px]",
    };

    const variantStyles = {
      dark: "bg-[#0E170E] text-white hover:bg-[#1f2e1f] active:scale-95 shadow-sm",
      outline: "border border-[#DCE8D5] bg-white text-[#0E170E] hover:bg-[#F3F9EE] active:scale-95",
      white: "bg-white text-[#0E170E] shadow-sm hover:bg-[#F3F9EE] active:scale-95",
      accent: "bg-[#C8EFAE] text-[#0E170E] hover:bg-[#A9E18A] active:scale-95",
      "translucent-dark": "bg-black/50 text-white hover:bg-black/75 backdrop-blur-md active:scale-95",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CircleIconButton.displayName = "CircleIconButton";
