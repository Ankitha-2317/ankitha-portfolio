import { motion } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import type { Certification } from "@/types";
import GlassCard from "@/components/ui/GlassCard";

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

export default function CertificationCard({
  certification,
  index,
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="h-full"
    >
      <GlassCard glow hoverLift className="flex h-full items-start gap-4 p-6">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-hover">
          <HiOutlineBadgeCheck size={22} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">
            {certification.title}
          </h3>
          <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
