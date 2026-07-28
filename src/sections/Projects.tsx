import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="From AI-driven fraud detection to full stack web applications — a selection of projects I've shipped."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
