import SectionHeading from "@/components/ui/SectionHeading";
import CertificationCard from "@/components/cards/CertificationCard";
import { CERTIFICATIONS } from "@/constants/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning"
          description="Programs and simulations I've completed to sharpen both technical and business skills."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={cert.id} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
