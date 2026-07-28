import { motion } from "framer-motion";
import type { SkillCategory } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/utils/cn";

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

/**
 * One bento-grid cell representing a skill category (e.g. "Frontend").
 * Individual skill chips stagger in on scroll; the whole card glows and
 * lifts on hover.
 */
export default function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className={cn("h-full", category.span)}
    >
      <GlassCard glow hoverLift className="flex h-full flex-col p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          {category.title}
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {category.skills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={item}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-white transition-colors hover:border-accent/40 hover:bg-accent/10"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
}
