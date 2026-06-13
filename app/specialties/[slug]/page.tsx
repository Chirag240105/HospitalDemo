import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SPECIALTIES, getSpecialtyBySlug } from "@/lib/specialtyData";
import PageHero from "@/components/PageHero/PageHero";
import SpecialtyDetailClient from "./SpecialtyDetailClient";

// ── Static params – pre-render all specialty pages at build time ──
export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

// ── Per-page metadata ─────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialtyBySlug(slug);
  if (!spec) return { title: "Not Found" };
  return {
    title: spec.name,
    description: `${spec.tagline} — Apex Multispecialty Hospital, Noida. Expert ${spec.name} specialists, advanced technology and compassionate care.`,
  };
}

// ── Page component ────────────────────────────────────────────────
export default async function SpecialtyPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const spec = getSpecialtyBySlug(slug);
  if (!spec) notFound();

  return (
    <main>
      <PageHero
        eyebrow={spec.eyebrow}
        title={spec.name}
        titleAccent="— Apex Hospital"
        subtitle={spec.tagline}
        breadcrumb={spec.name}
      />
      <SpecialtyDetailClient spec={spec} />
    </main>
  );
}
