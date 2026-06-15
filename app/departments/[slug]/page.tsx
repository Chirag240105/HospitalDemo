import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, Mail, Phone, Star, Stethoscope } from "lucide-react";
import { departments, doctors, getDepartmentBySlug, slugify } from "@/lib/data";

type DepartmentPageProps = {
  params: Promise<{ slug: string }>;
};

const relatedDoctorMap: Record<string, string[]> = {
  "ivf-and-fertility": ["Pediatrics"],
  "emergency-medicine": ["Cardiology", "Neurology", "Pediatrics"],
  radiology: ["Oncology", "Neurology", "Cardiology"],
  pathology: ["Oncology", "Pediatrics", "Cardiology"],
  nephrology: ["Cardiology", "Robotic Surgery"],
  gastroenterology: ["Oncology", "Robotic Surgery"],
  pulmonology: ["Pediatrics", "Cardiology"],
  ophthalmology: ["Pediatrics", "Neurology"],
  maternity: ["Pediatrics"],
  urology: ["Robotic Surgery"],
};

function getDoctorsForDepartment(slug: string, departmentName: string) {
  const exact = doctors.filter((doctor) => doctor.specialty === departmentName);
  if (exact.length) return exact;

  const relatedSpecialties = relatedDoctorMap[slug] ?? [];
  const related = doctors.filter((doctor) => relatedSpecialties.includes(doctor.specialty));
  return related.length ? related : doctors.slice(0, 3);
}

function doctorEmail(name: string) {
  return `${name.replace(/^Dr\.\s*/i, "").toLowerCase().replace(/[^a-z]+/g, ".").replace(/\.$/, "")}@novacrestmed.in`;
}

export function generateStaticParams() {
  return departments.map((department) => ({
    slug: slugify(department.name),
  }));
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) {
    return {
      title: "Department",
    };
  }

  return {
    title: department.name,
    description: `${department.summary} Meet doctors, equipment, contact details, and booking options at NovaCrest Medical Center.`,
  };
}

export default async function DepartmentDetailPage({ params }: DepartmentPageProps) {
  const { slug } = await params;
  const department = getDepartmentBySlug(slug);

  if (!department) notFound();

  const availableDoctors = getDoctorsForDepartment(slug, department.name);
  const needs = [
    `You need focused ${department.name.toLowerCase()} evaluation or a second opinion.`,
    "Your physician has advised advanced diagnostics, inpatient care, or specialist-led treatment.",
    "You want coordinated care with consultants, nurses, diagnostics, and follow-up in one plan.",
  ];

  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28 text-[#1A1A2E]">
      <section className="relative overflow-hidden bg-[#071A49] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(61,214,245,0.28),transparent_28%),linear-gradient(135deg,#071A49,#0A2463)]" />
        <div className="container-xl relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono-label text-sm text-[#3DD6F5]">{department.category} Department</p>
            <h1 className="font-display mt-4 text-5xl font-bold leading-tight sm:text-6xl">{department.name}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">{department.summary}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-md bg-white/10 p-5">
              <p className="font-display text-4xl font-bold">{department.doctors}</p>
              <p className="text-sm text-white/65">Specialist doctors</p>
            </div>
            <div className="rounded-md bg-white/10 p-5">
              <p className="font-display text-4xl font-bold">{department.beds}</p>
              <p className="text-sm text-white/65">Dedicated beds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xl grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-md border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/6">
          <Stethoscope className="text-[#3AAFC8]" size={34} />
          <h2 className="font-display mt-5 text-3xl font-bold text-[#0A2463]">What is this department?</h2>
          <p className="mt-4 leading-8 text-slate-600">
            The {department.name} department at NovaCrest Medical Center provides specialist-led consultation, diagnostics,
            treatment planning, inpatient care, and long-term follow-up for patients who need precise, coordinated medical support.
          </p>
          <h3 className="mt-8 text-xl font-bold text-[#0A2463]">When you may need it</h3>
          <ul className="mt-4 grid gap-3 text-slate-600">
            {needs.map((item) => (
              <li key={item} className="rounded-md bg-[#E8F4FD] px-4 py-3">{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-md border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/6">
          <h2 className="font-display text-3xl font-bold text-[#0A2463]">Facilities and equipment</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {department.equipment.map((item) => (
              <div key={item} className="rounded-md border border-[#3DD6F5]/30 bg-[#F7FBFF] p-4 font-bold text-[#0A2463]">
                {item}
              </div>
            ))}
          </div>
          <div className="relative mt-6 min-h-64 overflow-hidden rounded-md bg-[#071A49]">
            <Image src="/hospital1.jpg" alt={`${department.name} care facility`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover opacity-82" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A49]/78 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-6 text-white">
              <p className="font-mono-label text-xs text-[#3DD6F5]">NovaCrest Care Desk</p>
              <p className="mt-2 text-2xl font-bold">Consultation, diagnostics, admission, and follow-up in one coordinated plan.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="container-xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono-label text-sm text-[#3AAFC8]">Doctors Available</p>
              <h2 className="font-display mt-3 text-4xl font-bold text-[#0A2463]">Specialists for {department.name}</h2>
            </div>
            <Link href="/contact" className="shimmer inline-flex items-center justify-center gap-2 rounded-md bg-[#3DD6F5] px-5 py-3 font-black text-[#0A2463]">
              <CalendarCheck size={18} /> Book appointment
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {availableDoctors.map((doctor, index) => (
              <article key={`${department.name}-${doctor.name}`} className="overflow-hidden rounded-md border border-slate-200 bg-[#F7FBFF] shadow-lg shadow-slate-900/5">
                <div className="relative aspect-[4/3]">
                  <Image src={doctor.image} alt={doctor.name} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl font-bold text-[#0A2463]">{doctor.name}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#1A1A2E]">
                      <Star size={15} className="fill-[#3DD6F5] text-[#3DD6F5]" /> {doctor.rating}
                    </span>
                  </div>
                  <p className="mt-1 font-bold text-[#3AAFC8]">{doctor.degree}</p>
                  <p className="mt-3 leading-7 text-slate-600">{doctor.bio}</p>
                  <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
                    <a href={`tel:+91114567${8900 + index}`} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 hover:text-[#0A2463]">
                      <Phone size={16} className="text-[#3AAFC8]" /> +91 11 4567 {8900 + index}
                    </a>
                    <a href={`mailto:${doctorEmail(doctor.name)}`} className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 hover:text-[#0A2463]">
                      <Mail size={16} className="text-[#3AAFC8]" /> {doctorEmail(doctor.name)}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl pt-16">
        <div className="grid gap-5 rounded-md bg-[#0A2463] p-6 text-white shadow-2xl shadow-[#0A2463]/18 lg:grid-cols-[1fr_auto_auto] lg:items-center lg:p-8">
          <div>
            <p className="font-mono-label text-sm text-[#3DD6F5]">Need help choosing?</p>
            <h2 className="font-display mt-2 text-3xl font-bold">Talk to the {department.name} care coordinator.</h2>
          </div>
          <a href="tel:+911145678900" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 font-bold">
            <Phone size={18} /> +91 11 4567 8900
          </a>
          <Link href="/contact" className="shimmer inline-flex items-center justify-center gap-2 rounded-md bg-[#3DD6F5] px-5 py-3 font-black text-[#0A2463]">
            <CalendarCheck size={18} /> Request callback
          </Link>
        </div>
      </section>
    </main>
  );
}
