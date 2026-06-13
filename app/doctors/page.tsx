import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import Doctors  from "@/components/Doctors/Doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet Apex Hospital's 200+ specialist doctors — each a leader in their field with decades of clinical experience and thousands of successful treatments.",
};

export default function DoctorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Specialists"
        title="Meet Our"
        titleAccent="Doctors"
        subtitle="200+ highly qualified specialists across every field of medicine. Each doctor brings decades of expertise and a patient-first philosophy."
        breadcrumb="Doctors"
      />
      <Doctors />
    </main>
  );
}
