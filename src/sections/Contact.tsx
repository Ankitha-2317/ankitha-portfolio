import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";
import { EMAIL, RESUME_URL, SOCIAL_LINKS } from "@/constants/social";

export default function Contact() {
  const githubLink = SOCIAL_LINKS.find((s) => s.icon === "github")!;
  const linkedinLink = SOCIAL_LINKS.find((s) => s.icon === "linkedin")!;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GlassCard
            glow
            className="relative mx-auto max-w-3xl overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-16"
          >
            {/* Ambient glow accent inside the card */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent-hover">
              Contact
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s Build Something{" "}
              <GradientText variant="accent" as="span">
                Amazing
              </GradientText>{" "}
              Together
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Have a role, project, or idea in mind? I&apos;m always open to
              conversations about full stack development, AI, and building
              things that matter.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={`mailto:${EMAIL}`}
                variant="primary"
                size="lg"
                icon={<FiMail />}
              >
                Email Me
              </Button>
              <Button
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={<FiGithub />}
              >
                GitHub
              </Button>
              <Button
                href={linkedinLink.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={<FiLinkedin />}
              >
                LinkedIn
              </Button>
              <Button
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                icon={<HiOutlineArrowDownTray />}
              >
                Resume
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
