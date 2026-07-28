import { motion } from "framer-motion";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-glow-sm hover:bg-accent-hover hover:shadow-glow border border-transparent",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:border-accent/50 hover:bg-white/[0.08]",
  ghost:
    "bg-transparent text-muted border border-transparent hover:text-white hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2.5",
};

/**
 * Universal CTA button. Renders as <a> when `href` is provided, otherwise <button>.
 * Used for: Hero CTAs, nav "Resume" link, Contact links, Project card buttons.
 */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "left",
    children,
    className,
  } = props;

  const sharedClassName = cn(
    "relative inline-flex items-center justify-center rounded-full font-medium",
    "transition-colors duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-hover focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="text-base leading-none">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="text-base leading-none">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={sharedClassName}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={sharedClassName}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
