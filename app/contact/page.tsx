import type { Metadata } from "next";
import PageHero from "@/components/PageHero/PageHero";
import Contact  from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book an appointment at Apex Hospital, Noida. Fill in your details and confirm via WhatsApp in under 60 seconds. Available 24/7.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Book an"
        titleAccent="Appointment"
        subtitle="Fill in the form below and our team will confirm your appointment via WhatsApp within minutes. Emergency line available 24/7."
        breadcrumb="Contact"
      />
      <Contact />
    </main>
  );
}
