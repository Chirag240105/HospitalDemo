"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Activity, Bot, Dumbbell, Flag, HeartHandshake, Languages, Microscope, Plane, ScanLine, ShieldCheck } from "lucide-react";
import { services } from "@/lib/data";

const icons = { Activity, Bot, Dumbbell, HeartHandshake, Microscope, ScanLine };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 64, scale: 0.96, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28">
      <section className="relative min-h-[58vh] overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1800&q=80" alt="Advanced hospital services" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061847]/95 via-[#0A2463]/78 to-[#0A2463]/25" />
        <div className="container-xl relative">
          <p className="font-mono-label text-sm text-[#3DD6F5]">Services</p>
          <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl">Advanced care platforms for every critical moment.</h1>
        </div>
      </section>

      <section className="container-xl grid gap-10 py-20">
        {services.map((service, index) => {
          const Icon = icons[service.icon as keyof typeof icons] ?? Activity;
          return (
            <motion.article
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28, margin: "0px 0px -80px 0px" }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className={`grid gap-8 rounded-md bg-white p-5 shadow-xl shadow-slate-900/6 will-change-transform lg:grid-cols-2 lg:items-center ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
              style={{ transformPerspective: 1200 }}
            >
              <div className="group relative min-h-[330px] overflow-hidden rounded-md">
                <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2463]/88 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 translate-y-5 p-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid gap-2 sm:grid-cols-3">
                    {service.stats.map((stat) => <span key={stat} className="rounded-md bg-white/90 px-3 py-2 text-sm font-black text-[#0A2463]">{stat}</span>)}
                  </div>
                </div>
              </div>
              <div className="p-2 lg:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-md bg-[#E8F4FD] text-[#0A2463]"><Icon size={28} /></span>
                <h2 className="font-display mt-5 text-4xl font-bold text-[#0A2463]">{service.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">{service.copy}</p>
              </div>
            </motion.article>
          );
        })}
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="container-xl">
          <p className="font-mono-label text-center text-sm text-[#3AAFC8]">International Patients</p>
          <h2 className="font-display mx-auto mt-3 max-w-3xl text-center text-4xl font-bold text-[#0A2463]">Care that travels well across borders.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: Flag, title: "Flag desk", copy: "Dedicated country coordinators and pre-arrival medical opinions." },
              { icon: Languages, title: "Language support", copy: "Arabic, French, Russian, Bengali, Hindi, and English interpreters." },
              { icon: Plane, title: "Visa assistance", copy: "Medical visa letters, airport transfers, and guest-house coordination." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  whileHover={{ y: -6, borderColor: "#3DD6F5" }}
                  className="rounded-md border border-slate-200 bg-[#F7FBFF] p-6 shadow-sm will-change-transform"
                >
                  <Icon className="text-[#3AAFC8]" size={32} />
                  <h3 className="mt-5 text-xl font-bold text-[#0A2463]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-xl overflow-hidden py-16">
        <p className="font-mono-label mb-6 text-center text-sm text-[#3AAFC8]">Insurance Partners</p>
        <div className="flex w-max gap-4 marquee-track">
          {[...["Aetna", "Bupa", "Cigna", "HDFC Ergo", "ICICI Lombard", "Star Health"], ...["Aetna", "Bupa", "Cigna", "HDFC Ergo", "ICICI Lombard", "Star Health"]].map((name, index) => (
            <div key={`${name}-${index}`} className="flex h-24 w-48 items-center justify-center rounded-md border border-slate-200 bg-white text-lg font-black text-[#0A2463] shadow-sm">
              <ShieldCheck className="mr-2 text-[#3DD6F5]" size={22} /> {name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
