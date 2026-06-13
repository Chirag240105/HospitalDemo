import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import Gallery  from "@/components/Gallery/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a virtual tour of Apex Hospital's world-class facilities — operation theatres, ICU wards, patient suites and diagnostic labs.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Facility"
        title="Inside"
        titleAccent="Apex"
        subtitle="A visual tour of our world-class infrastructure — designed to heal, comfort and inspire confidence in every patient."
        breadcrumb="Gallery"
      />
      <Gallery />
    </main>
  );
}
