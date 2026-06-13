import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import Services from "@/components/Services/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive hospital services at Apex — diagnostics, surgery, maternity, oncology, emergency care and preventive health programmes.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Offer"
        title="Our"
        titleAccent="Services"
        subtitle="From advanced diagnostics to complex surgery, maternity care to cancer treatment — explore the full spectrum of healthcare we deliver every day."
        breadcrumb="Services"
      />
      <Services />
    </main>
  );
}
