import type { Metadata } from "next";
import PageHero   from "@/components/PageHero/PageHero";
import Departments from "@/components/Departments/Departments";

export const metadata: Metadata = {
  title: "Departments",
  description:
    "Explore Apex Hospital's 15+ specialised departments — from Cardiology to Oncology — staffed by India's leading consultants.",
};

export default function DepartmentsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Specialised Care"
        title="Our"
        titleAccent="Departments"
        subtitle="15+ specialised departments powered by cutting-edge technology and India's foremost specialists — all under one roof."
        breadcrumb="Departments"
      />
      <Departments />
    </main>
  );
}
