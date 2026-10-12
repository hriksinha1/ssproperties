import React, { useState } from "react";
import { Building2 } from "lucide-react";

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  subjectName?: string;
  aspectRatio?: string;
  objectPosition?: string;
  isHero?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  subjectName = "Architecture",
  aspectRatio,
  objectPosition = "center",
  isHero = false,
  className = "",
  style,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`w-full h-full bg-[#E8F5DE] border border-[#DCE8D5] flex flex-col items-center justify-center p-4 text-[#566356] select-none ${className}`}
        style={{
          aspectRatio: aspectRatio || undefined,
          ...style,
        }}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 text-[#566356]/60 mb-2" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide uppercase">{subjectName}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={isHero ? undefined : "lazy"}
      decoding="async"
      fetchPriority={isHero ? "high" : "auto"}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover transition-transform duration-500 ${className}`}
      style={{
        aspectRatio: aspectRatio || undefined,
        objectPosition,
        ...style,
      }}
      {...props}
    />
  );
};
