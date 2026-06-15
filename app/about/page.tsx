"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, HeartHandshake, Info, UsersRound } from "lucide-react";
import { leaders, timeline } from "@/lib/data";
import { useRef } from "react";

export default function AboutPage() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28">
      <section ref={ref} className="relative min-h-[72vh] overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-8">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1800&q=80" alt="NovaCrest hospital campus" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#061847]/94 via-[#0A2463]/78 to-[#0A2463]/28" />
        <div className="container-xl relative">
          <p className="font-mono-label text-sm text-[#3DD6F5]">Mission & Vision</p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">
            To make the most advanced medicine feel personal.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
            NovaCrest Medical Center was built for high-acuity care at scale: a 1000-bed campus where technology, teaching, and compassion work as one system.
          </p>
        </div>
      </section>

      <section className="container-xl py-20">
        <p className="font-mono-label text-sm text-[#3AAFC8]">Timeline</p>
        <h2 className="font-display mt-3 text-4xl font-bold text-[#0A2463]">Milestones in clinical ambition</h2>
        <div className="mt-10 flex gap-5 overflow-x-auto pb-5">
          {timeline.map((item) => (
            <article key={item.year} className="min-w-[280px] rounded-md border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
              <p className="font-display text-5xl font-bold text-[#3DD6F5]">{item.year}</p>
              <h3 className="mt-4 text-xl font-bold text-[#0A2463]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-xl">
          <p className="font-mono-label text-center text-sm text-[#3AAFC8]">Leadership</p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-center text-4xl font-bold text-[#0A2463]">Leaders accountable for outcomes and experience.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.name} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-xl shadow-slate-900/6">
                <div className="relative aspect-[4/3]">
                  <Image src={leader.image} alt={leader.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-[#0A2463]">{leader.name}</h3>
                  <p className="mt-1 font-bold text-[#3AAFC8]">{leader.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-mono-label text-sm text-[#3AAFC8]">Accreditations</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-[#0A2463]">Standards visible in daily care.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["NABH", "JCI", "ISO"].map((badge) => (
              <div key={badge} className="group relative rounded-md border border-slate-200 bg-white p-6 text-center shadow-sm">
                <Award className="mx-auto text-[#3DD6F5]" size={36} />
                <p className="mt-4 text-2xl font-black text-[#0A2463]">{badge}</p>
                <span className="absolute left-1/2 top-full z-10 mt-2 hidden w-56 -translate-x-1/2 rounded-md bg-[#0A2463] p-3 text-sm text-white shadow-xl group-hover:block">
                  <Info className="mr-1 inline" size={14} /> Independently audited clinical quality systems.
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl rounded-md bg-[#0A2463] p-8 text-white lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="font-mono-label text-sm text-[#3DD6F5]">CSR</p>
            <h2 className="font-display mt-3 text-4xl font-bold">Care beyond the campus.</h2>
            <p className="mt-4 leading-8 text-white/72">Health camps, rural outreach vans, screening drives, and free surgical days extend hospital-grade care to underserved communities.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: HeartHandshake, value: "240+", label: "Health camps" },
              { icon: UsersRound, value: "1.8M", label: "People screened" },
              { icon: Award, value: "32", label: "Rural partners" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md bg-white/10 p-5">
                  <Icon className="text-[#3DD6F5]" />
                  <p className="font-display mt-5 text-4xl font-bold">{item.value}</p>
                  <p className="mt-1 text-white/68">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
