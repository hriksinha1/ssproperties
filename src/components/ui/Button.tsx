import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "outline" | "subtle" | "ghost" | "translucent-dark";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full select-none transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-[#0E170E] focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs min-h-[40px]",
    md: "px-6 py-2.5 text-sm min-h-[46px]",
    lg: "px-8 py-3.5 text-base min-h-[52px]",
  };

  const variantStyles = {
    primary: "bg-[#C8EFAE] text-[#0E170E] hover:bg-[#A9E18A] active:scale-[0.98] shadow-sm",
    dark: "bg-[#0E170E] text-white hover:bg-[#1f2e1f] active:scale-[0.98]",
    outline: "border border-[#DCE8D5] bg-white text-[#0E170E] hover:bg-[#F3F9EE] active:scale-[0.98]",
    subtle: "bg-[#E8F5DE] text-[#0E170E] hover:bg-[#C8EFAE] active:scale-[0.98]",
    ghost: "bg-transparent text-[#0E170E] hover:bg-[#E8F5DE]",
    "translucent-dark": "bg-black/50 text-white hover:bg-black/70 backdrop-blur-md active:scale-[0.98]",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2 inline-flex items-center">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 inline-flex items-center">{icon}</span>}
    </button>
  );
};
