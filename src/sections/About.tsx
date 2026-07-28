import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineSparkles } from "react-icons/hi";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { EDUCATION } from "@/constants/education";
import { LOCATION } from "@/constants/social";

const INTERESTS = ["Artificial Intelligence", "Full Stack Development", "Fintech", "Business Systems"];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the code"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <GlassCard hoverLift className="flex h-full flex-col items-center p-8 text-center">
              <div className="mb-5 flex h-32 w-32 items-center justify-center rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/20 to-transparent text-4xl font-bold text-white shadow-glow-sm">
                AR
              </div>
              <h3 className="text-xl font-bold text-white">Ankitha R</h3>
              <p className="mt-1 text-sm text-muted">
                Full Stack Developer &amp; AI Enthusiast
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted">
                <HiOutlineLocationMarker className="text-accent-hover" />
                {LOCATION}
              </div>

              <div className="mt-6 w-full border-t border-white/10 pt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <HiOutlineSparkles className="text-accent-hover" /> Interests
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {INTERESTS.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Bio + education */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-3"
          >
            <GlassCard hoverLift className="flex h-full flex-col p-8">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m a Computer Science &amp; Business Systems student who
                enjoys turning ambiguous problems into working software. My
                focus sits at the intersection of full stack web development
                and applied AI — from building fraud-detection logic for
                digital payments to computer-vision systems that automate
                everyday processes. I care about writing clean, maintainable
                code and about the business context that code exists to
                serve, which is what drew me to a Business Systems
                specialization alongside core CS.
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                  <HiOutlineAcademicCap className="text-accent-hover" /> Education
                </div>
                <ul className="space-y-4">
                  {EDUCATION.map((edu) => (
                    <li
                      key={edu.id}
                      className="flex flex-col justify-between gap-1 border-l-2 border-accent/30 pl-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{edu.level}</p>
                        <p className="text-xs text-muted">{edu.institution}</p>
                      </div>
                      <span className="text-sm font-semibold text-accent-hover">
                        {edu.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
