import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/constants/social";
import { scrollToSection } from "@/utils/scrollTo";

const ICONS: Record<string, typeof FiGithub> = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08]">
      <div className="section-container flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} Ankitha R. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => {
            const Icon = ICONS[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-accent/50 hover:text-white hover:shadow-glow-sm"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <motion.button
          onClick={() => scrollToSection("home", 0)}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-white"
          aria-label="Back to top"
        >
          Back to top <FiArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
}
