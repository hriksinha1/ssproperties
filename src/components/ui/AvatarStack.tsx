import React from "react";
import { IMAGES } from "../../data/images";

export interface AvatarStackProps {
  count?: string;
  label?: string;
  theme?: "light" | "dark";
  className?: string;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({
  count = "10k+",
  label = "Happy Clients",
  theme = "light",
  className = "",
}) => {
  const avatars = [
    IMAGES.avatars.stack1,
    IMAGES.avatars.stack2,
    IMAGES.avatars.stack3,
    IMAGES.avatars.stack4,
  ];

  const textColor = theme === "light" ? "text-white" : "text-[#0E170E]";
  const subtextColor = theme === "light" ? "text-white/80" : "text-[#566356]";
  const ringColor = theme === "light" ? "ring-black/30" : "ring-white";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="flex -space-x-2.5 overflow-hidden">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            className={`inline-block h-8 w-8 rounded-full object-cover ring-2 ${ringColor} bg-[#E8F5DE]`}
            loading="lazy"
            width={32}
            height={32}
          />
        ))}
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className={`text-xs font-semibold ${textColor}`}>{count}</span>
        <span className={`text-[11px] ${subtextColor}`}>{label}</span>
      </div>
    </div>
  );
};
