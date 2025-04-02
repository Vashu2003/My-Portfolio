import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard/CertificationCard";

export default function CertificationsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Certifications</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Validated proof of my skills and knowledge
          </p>
        </section>

        {/* Simplified List Layout */}
        <div className="space-y-8 divide-y divide-gray-700 bg-gray-800">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </main>
  );
}