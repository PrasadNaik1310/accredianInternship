import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: ReactNode;
}

export const Card = ({
  className,
  interactive = false,
  children,
  ...props
}: CardProps) => (
  <div
    className={cn(
      "rounded-xl border border-border bg-card p-6 sm:p-7 shadow-sm",
      interactive &&
        "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-primary/30",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
