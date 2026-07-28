import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GradientTextProps {
  children: ReactNode;
  variant?: "white" | "accent";
  className?: string;
  as?: "span" | "h1" | "h2";
}

/**
 * Gradient-filled text used for the hero name and key emphasis words
 * throughout the site. "white" fades white -> slate -> purple (used for
 * large headings); "accent" is a pure purple gradient (used for highlighted
 * inline words).
 */
export default function GradientText({
  children,
  variant = "white",
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag
      className={cn(
        variant === "white" ? "text-gradient" : "text-gradient-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
