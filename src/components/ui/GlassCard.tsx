import { motion } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Adds a mouse-tracked purple glow that follows the cursor within the card */
  glow?: boolean;
  /** Adds a subtle lift + border brighten on hover */
  hoverLift?: boolean;
  /** Adds a gentle 3D tilt following the cursor (used sparingly — skill/project cards) */
  tilt?: boolean;
  as?: "div" | "article";
}

/**
 * Base glassmorphism surface. Every card in the app (About, Skills, Projects,
 * Certifications, Contact) composes this rather than redefining its own
 * background/blur/border, so the visual language stays consistent.
 */
export default function GlassCard({
  children,
  className,
  glow = false,
  hoverLift = false,
  tilt = false,
  as = "div",
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || (!glow && !tilt)) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    if (glow) setMousePos({ x, y });

    if (tilt) {
      const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      setTiltStyle({ rotateX, rotateY });
    }
  }

  function handleMouseLeave() {
    if (tilt) setTiltStyle({ rotateX: 0, rotateY: 0 });
  }

  const Component = motion[as];

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        tilt
          ? {
              transformStyle: "preserve-3d",
              rotateX: tiltStyle.rotateX,
              rotateY: tiltStyle.rotateY,
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileHover={
        hoverLift ? { y: -6, borderColor: "rgba(139, 92, 246, 0.4)" } : undefined
      }
      className={cn(
        "glass-surface relative overflow-hidden rounded-2xl",
        glow && "group",
        hoverLift && "transition-shadow duration-300 hover:shadow-glow-sm",
        className
      )}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(124, 58, 237, 0.15), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
