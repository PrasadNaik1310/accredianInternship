import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  tone?: "default" | "muted" | "strong";
  size?: "sm" | "md" | "lg";
}

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-surface text-foreground",
  strong: "bg-surface-strong text-background",
};

const sizes = {
  sm: "py-14 sm:py-16",
  md: "py-20 sm:py-24",
  lg: "py-24 sm:py-32",
};

export const SectionWrapper = ({
  as: Tag = "section",
  tone = "default",
  size = "md",
  className,
  ...props
}: SectionWrapperProps) => (
  <Tag className={cn(tones[tone], sizes[size], className)} {...props} />
);
