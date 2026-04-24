import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  inverse?: boolean;
}

const sizes = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
  xl: "text-4xl sm:text-5xl lg:text-6xl",
};

export const Heading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
  size = "lg",
  className,
  inverse = false,
}: HeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = inverse ? "text-background" : "text-foreground";
  const subColor = inverse ? "text-background/70" : "text-muted-foreground";
  const eyebrowColor = inverse
    ? "text-background/80 bg-background/10"
    : "text-primary bg-accent";
  return (
    <div className={cn(alignment, "max-w-2xl", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "font-semibold tracking-tight leading-[1.1]",
          sizes[size],
          titleColor,
          eyebrow && "mt-4"
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", subColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
