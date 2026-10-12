import React from "react";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  label: string;
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  active = false,
  label,
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 min-h-[40px] select-none focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2 ${
        active
          ? "bg-ink text-white shadow-xs"
          : "bg-surface border border-line text-ink hover:bg-tint hover:border-line-strong"
      } ${className}`}
      aria-pressed={active}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};
