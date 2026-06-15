"use client";

import Link from "next/link";
import {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Bot,
  Brain,
  Eye,
  HeartHandshake,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  Wind,
} from "lucide-react";
import { slugify, type Department } from "@/lib/data";
import { useState } from "react";

const icons = {
  Activity,
  Ambulance,
  Baby,
  Bone,
  Bot,
  Brain,
  Eye,
  HeartHandshake,
  HeartPulse,
  Lungs: Wind,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
};

export default function DepartmentCard({ department, expandable = false }: { department: Department; expandable?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = icons[department.icon as keyof typeof icons] ?? Activity;

  return (
    <article className="group perspective-card">
      <div className="flip-card relative min-h-72 rounded-md">
        <div className="flip-face absolute inset-0 rounded-md border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 transition group-hover:-translate-y-1 group-hover:border-[#3DD6F5] group-hover:shadow-[#3DD6F5]/20">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-[#E8F4FD] text-[#0A2463] shadow-inner">
            <Icon size={28} />
          </div>
          <p className="font-mono-label mt-5 text-xs text-[#3DD6F5]">{department.category}</p>
          <h3 className="font-display mt-2 text-2xl font-bold text-[#0A2463]">{department.name}</h3>
          <p className="mt-4 line-clamp-3 leading-7 text-slate-600">{department.summary}</p>
          {expandable ? (
            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              className="mt-5 rounded-md bg-[#0A2463] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#12378a]"
            >
              Learn More
            </button>
          ) : (
            <Link
              href={`/departments/${slugify(department.name)}`}
              className="mt-5 inline-flex rounded-md bg-[#0A2463] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#12378a]"
            >
              View Details
            </Link>
          )}
        </div>
        <div className="flip-face flip-back absolute inset-0 rounded-md border border-[#3DD6F5]/60 bg-[#0A2463] p-6 text-white shadow-2xl shadow-[#3DD6F5]/20">
          <p className="font-mono-label text-xs text-[#3DD6F5]">Department Stats</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-md bg-white/10 p-4">
              <p className="font-display text-3xl font-bold">{department.doctors}</p>
              <p className="text-sm text-white/65">Doctors</p>
            </div>
            <div className="rounded-md bg-white/10 p-4">
              <p className="font-display text-3xl font-bold">{department.beds}</p>
              <p className="text-sm text-white/65">Beds</p>
            </div>
          </div>
          <ul className="mt-5 grid gap-2 text-sm text-white/78">
            {department.equipment.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
      {expandable && expanded ? (
        <div className="mt-4 rounded-md border border-[#3DD6F5]/30 bg-[#E8F4FD] p-5 leading-7 text-[#1A1A2E]">
          <strong className="text-[#0A2463]">Full department detail:</strong> {department.summary} The unit coordinates diagnostics,
          inpatient care, surgery, rehabilitation, and second opinions through a dedicated care navigator.
          <Link href={`/departments/${slugify(department.name)}`} className="mt-4 inline-flex rounded-md bg-[#0A2463] px-4 py-2 text-sm font-bold text-white">
            Open full page
          </Link>
        </div>
      ) : null}
    </article>
  );
}
