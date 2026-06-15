"use client";

import Image from "next/image";
import { CalendarCheck, Star } from "lucide-react";
import type { Doctor } from "@/lib/data";
import { useRef, useState } from "react";

export default function DoctorCard({ doctor, onBook }: { doctor: Doctor; onBook?: (doctor: Doctor) => void }) {
  const cardRef = useRef<HTMLElement>(null);
  const [style, setStyle] = useState({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });

  const onMove = (event: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setStyle({ transform: `rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg) scale(1.03)` });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" })}
      className="rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-900/5 transition-transform duration-150 will-change-transform"
      style={style}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-md bg-[#E8F4FD]">
        <Image src={doctor.image} alt={doctor.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 rounded-md bg-white/92 px-3 py-2 text-xs font-black text-[#0A2463] shadow">
          {doctor.availability}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-[#0A2463]">{doctor.name}</h3>
        <p className="mt-1 text-sm font-bold text-[#3AAFC8]">{doctor.degree}</p>
        <p className="mt-3 text-slate-600">{doctor.specialty} - {doctor.experience} years experience</p>
        <div className="mt-4 flex items-center justify-between border-y border-slate-100 py-4 text-sm">
          <span className="rounded-md bg-[#E8F4FD] px-3 py-1 font-bold text-[#0A2463]">{doctor.language[0]}</span>
          <span className="inline-flex items-center gap-1 font-bold text-[#1A1A2E]">
            <Star size={16} className="fill-amber-400 text-amber-400" /> {doctor.rating}
          </span>
        </div>
        <button
          type="button"
          onClick={() => onBook?.(doctor)}
          className="shimmer mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0A2463] px-5 py-3 font-black text-white transition hover:bg-[#12378a]"
        >
          <CalendarCheck size={18} /> Book Now
        </button>
      </div>
    </article>
  );
}
