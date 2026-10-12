import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "white" | "accent" | "dark" | "outline" | "tint";
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = "white",
  dot = false,
  className = "",
}) => {
  const variantStyles = {
    white: "bg-white/95 text-[#0E170E] shadow-xs backdrop-blur-xs",
    accent: "bg-[#C8EFAE] text-[#0E170E]",
    dark: "bg-[#0E170E] text-white",
    outline: "border border-[#DCE8D5] bg-white/80 text-[#0E170E]",
    tint: "bg-[#E8F5DE] text-[#0E170E] border border-[#DCE8D5]/60",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium select-none tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block shrink-0" aria-hidden="true" />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
