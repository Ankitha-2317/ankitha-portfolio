import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { RESUME_URL, SOCIAL_LINKS } from "@/constants/social";
import { scrollToSection } from "@/utils/scrollTo";

// Three.js is a heavy dependency (~300KB) — load it only when the hero
// mounts, off the critical initial-paint path, instead of bundling it
// into the main chunk.
const HeroCanvas = lazy(() => import("@/components/three/HeroCanvas"));

function HeroCanvasFallback() {
  return (
    <div className="flex h-[320px] w-full items-center justify-center sm:h-[420px] lg:h-[560px]">
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="h-40 w-40 rounded-full bg-accent/20 blur-2xl"
      />
    </div>
  );
}

const ROLES = ["Full Stack Developer", "AI Enthusiast", "Business Systems Student"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 md:pt-20"
    >
      <div className="section-container grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 lg:order-1"
        >
          <motion.p variants={fadeUp} className="mb-3 text-lg text-muted sm:text-xl">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <GradientText as="h1" className="block">
              ANKITHA R
            </GradientText>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-semibold text-white/90 sm:text-2xl"
          >
            Computer Science &amp; Business Systems Student
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2.5">
            {ROLES.map((role) => (
              <span
                key={role}
                className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-hover"
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            I build modern web applications, business systems and AI-powered
            solutions that solve real-world problems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<HiOutlineArrowDownTray />}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {SOCIAL_LINKS.filter((s) => s.icon !== "email").map((link) => {
              const Icon = link.icon === "github" ? FiGithub : FiLinkedin;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-all hover:border-accent/50 hover:bg-accent/10 hover:shadow-glow-sm"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right: 3D object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <Suspense fallback={<HeroCanvasFallback />}>
            <HeroCanvas />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-white sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
