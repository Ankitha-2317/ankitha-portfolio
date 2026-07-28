import { motion } from "framer-motion";

interface BlurCircle {
  size: number;
  top: string;
  left: string;
  color: string;
  duration: number;
  delay: number;
}

const BLUR_CIRCLES: BlurCircle[] = [
  {
    size: 500,
    top: "-10%",
    left: "10%",
    color: "rgba(124, 58, 237, 0.18)",
    duration: 9,
    delay: 0,
  },
  {
    size: 400,
    top: "30%",
    left: "70%",
    color: "rgba(139, 92, 246, 0.14)",
    duration: 11,
    delay: 1.2,
  },
  {
    size: 450,
    top: "65%",
    left: "5%",
    color: "rgba(124, 58, 237, 0.12)",
    duration: 10,
    delay: 0.6,
  },
  {
    size: 350,
    top: "80%",
    left: "60%",
    color: "rgba(192, 132, 252, 0.1)",
    duration: 8,
    delay: 2,
  },
];

// Fixed count of tiny ambient particles — deterministic positions so
// there's no hydration/layout flicker on mount.
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  top: (i * 37) % 100,
  left: (i * 53) % 100,
  size: (i % 3) + 1,
  duration: 4 + (i % 5),
  delay: (i % 6) * 0.5,
}));

/**
 * Fixed, full-viewport ambient background: base gradient wash, a few large
 * soft blurred glow circles that drift slowly, and tiny twinkling particles.
 * Sits at z-0 behind every section. Purely decorative — aria-hidden.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(124,58,237,0.08),transparent)]" />

      {/* Floating blur circles */}
      {BLUR_CIRCLES.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            backgroundColor: circle.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tiny particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0.1, 0.6, 0.1] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle vignette so content edges stay readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,#050816_100%)]" />
    </div>
  );
}
