import React from "react";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  titleLine1: string;
  titleLine2?: string;
  description?: string;
  rightAction?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowIcon,
  titleLine1,
  titleLine2,
  description,
  rightAction,
  align = "left",
  id,
  className = "",
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={`w-full ${
        isCentered
          ? "flex flex-col items-center text-center max-w-3xl mx-auto"
          : "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
      } ${className}`}
    >
      <div className={`flex flex-col ${isCentered ? "items-center" : "items-start"} max-w-2xl text-left`}>
        {eyebrow && (
          <div className="mb-3">
            <Badge variant="outline" icon={eyebrowIcon}>
              {eyebrow}
            </Badge>
          </div>
        )}
        <h2
          id={id}
          className="font-display uppercase text-ink tracking-[0.015em] text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05]"
          style={{ textWrap: "balance" }}
        >
          {titleLine1}
          {titleLine2 && (
            <>
              <br />
              {titleLine2}
            </>
          )}
        </h2>
        {isCentered && description && (
          <p className="mt-3 text-sm md:text-base text-ink-muted max-w-xl leading-relaxed text-center">
            {description}
          </p>
        )}
      </div>

      {!isCentered && (description || rightAction) && (
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 max-w-md lg:text-right shrink-0">
          {description && (
            <p className="text-sm md:text-base text-ink-muted leading-relaxed">
              {description}
            </p>
          )}
          {rightAction && <div className="shrink-0">{rightAction}</div>}
        </div>
      )}
    </div>
  );
};
