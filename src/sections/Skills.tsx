import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/cards/SkillCard";
import { SKILL_CATEGORIES } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          description="A snapshot of the languages, frameworks, and tools I use to ship full stack and AI-powered products."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[140px]">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
