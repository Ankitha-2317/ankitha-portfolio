import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";
import type { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Premium project card: gradient placeholder "screenshot" area (swap for a
 * real image via `project.image` once available), title, description, tech
 * badges, and GitHub/Live actions. Falls back to a "Private repo" note when
 * links aren't public yet (e.g. TrustUPI, AI Attendance).
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <GlassCard hoverLift tilt className="group flex h-full flex-col">
        {/* Screenshot / placeholder area */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E1147] via-[#0F172A] to-[#111827] transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: project.image ? `url(${project.image})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!project.image && (
              <span className="select-none text-4xl font-black tracking-tight text-white/10">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>
          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-white shadow-glow-sm">
              Featured
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-bold text-white">{project.title}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white transition-colors hover:border-accent/50 hover:bg-white/5"
              >
                <FiGithub size={14} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
            {!project.githubUrl && !project.liveUrl && (
              <span className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-muted">
                <FiLock size={12} /> Private project
              </span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
