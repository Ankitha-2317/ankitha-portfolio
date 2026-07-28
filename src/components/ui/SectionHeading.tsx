import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Standardized section header: small purple eyebrow label + large bold
 * title + optional supporting copy. Used at the top of every section so
 * the typographic hierarchy stays consistent site-wide.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      <motion.span
        variants={fadeUp}
        className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-accent-hover"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        transition={{ delay: 0.05 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className={cn(
            "mt-4 max-w-2xl text-base text-muted sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
