"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DNAHelix from "./DNAHelix";
import { hospitalStats } from "@/lib/data";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1700, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(value % 1 ? latest.toFixed(1) : Math.round(latest).toLocaleString("en-IN"));
    });
  }, [spring, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#061847] pt-24 text-white sm:pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_36%,rgba(61,214,245,0.26),transparent_30%),linear-gradient(120deg,#061847,#0A2463_55%,#08163f)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F7FBFF] to-transparent" />
      <div className="container-xl relative grid items-center gap-8 py-10 sm:py-14 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.98fr_1.02fr]">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} className="max-w-3xl">
          <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="font-mono-label text-xs text-[#3DD6F5] sm:text-sm">
            1000-bed multi-specialty mega hospital
          </motion.p>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
            className="font-display mt-5 text-4xl font-bold leading-[1.04] text-white sm:text-6xl xl:text-7xl"
          >
            Where Science Meets Compassion.
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }} className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:mt-6 sm:text-xl sm:leading-8">
            50+ specialties, 500+ doctors, advanced robotic surgery, precision diagnostics, and 24/7 emergency care in one integrated medical campus.
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link href="/contact" className="shimmer inline-flex items-center justify-center gap-2 rounded-md bg-[#3DD6F5] px-5 py-4 text-sm font-black text-[#0A2463] shadow-2xl shadow-[#3DD6F5]/25 sm:px-7 sm:text-base">
              <CalendarCheck size={20} /> Book Appointment
            </Link>
            <a href="tel:1800999000" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/10 px-5 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/16 sm:px-7 sm:text-base">
              <Phone size={20} /> Emergency: 1800-999-000
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="absolute left-6 top-12 h-32 w-32 rounded-full bg-[#3DD6F5]/20 blur-3xl" />
          <DNAHelix />
        </motion.div>
      </div>
      <div className="container-xl relative -mb-12 grid grid-cols-2 rounded-md border border-white/20 bg-white p-2 shadow-2xl shadow-slate-900/16 sm:-mb-14 sm:p-3 lg:grid-cols-4">
        {hospitalStats.map((stat) => (
          <div key={stat.label} className="border-slate-100 p-4 text-center text-[#0A2463] sm:border-r sm:p-6 last:border-r-0">
            <p className="font-display text-3xl font-bold sm:text-4xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="font-mono-label mt-2 text-xs text-[#3AAFC8]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
