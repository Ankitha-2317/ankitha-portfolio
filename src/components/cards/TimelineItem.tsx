import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}

/**
 * One node on the vertical experience timeline: a glowing dot on the
 * spine, connected to a glass card with role/company/points/stack.
 * Alternates side on desktop (odd/even), stacks single-column on mobile.
 */
export default function TimelineItem({ item, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex gap-6 md:gap-0">
      {/* Spine + dot */}
      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 }}
          className="z-10 mt-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-full bg-accent shadow-glow-sm ring-4 ring-background"
        />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
            style={{ transformOrigin: "top" }}
            className="w-px flex-1 bg-gradient-to-b from-accent/60 to-white/10"
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -24 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
        className="flex-1 pb-10"
      >
        <GlassCard hoverLift className="p-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-accent-hover">
              {item.duration}
            </span>
          </div>
          <p className="mb-4 text-sm font-medium text-muted">{item.company}</p>
          <ul className="mb-4 space-y-2">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex gap-2 text-sm leading-relaxed text-muted"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-hover" />
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <Badge key={tech} variant="accent">
                {tech}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
