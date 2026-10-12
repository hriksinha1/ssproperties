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
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 min-h-[38px] select-none focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-2 ${
        active
          ? "bg-[#0E170E] text-white shadow-xs"
          : "bg-white/80 border border-[#DCE8D5] text-[#0E170E] hover:bg-white hover:border-[#0E170E]/30"
      } ${className}`}
      aria-pressed={active}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};
