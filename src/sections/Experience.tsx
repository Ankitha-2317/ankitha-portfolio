import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/cards/TimelineItem";
import { EXPERIENCE } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Internships where I got to build real features in real codebases."
        />

        <div className="mx-auto max-w-3xl">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
