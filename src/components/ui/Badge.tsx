import { cn } from "@/utils/cn";

interface BadgeProps {
  children: string;
  variant?: "default" | "accent";
  className?: string;
}

/**
 * Small pill tag. Used for technology stacks on project cards, experience
 * entries, and the hero role tags ("Full Stack Developer", "AI Enthusiast").
 */
export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "border-white/10 bg-white/5 text-muted",
        variant === "accent" &&
          "border-accent/30 bg-accent/10 text-accent-hover",
        className
      )}
    >
      {children}
    </span>
  );
}
