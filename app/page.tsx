"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2, Globe2, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import DepartmentCard from "@/components/DepartmentCard";
import DoctorCard from "@/components/DoctorCard";
import HeroSection from "@/components/HeroSection";
import { blogs, departments, doctors, services, testimonials } from "@/lib/data";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
      <p className="font-mono-label mb-3 text-xs text-[#3AAFC8] sm:text-sm">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-[#0A2463]"}`}>{title}</h2>
      {copy ? <p className={`mt-4 text-base leading-7 sm:text-lg sm:leading-8 ${light ? "text-white/72" : "text-slate-600"}`}>{copy}</p> : null}
    </div>
  );
}

function HospitalImage() {
  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-md border border-[#3DD6F5]/30 bg-[#061847] shadow-2xl shadow-[#0A2463]/15 sm:min-h-[360px] lg:min-h-[420px]">
      <Image
        src="/hospital1.jpg"
        alt="NovaCrest Medical Center hospital building"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-center"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2463]/32 via-transparent to-[#3DD6F5]/12" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main id="main-content" className="bg-[#F7FBFF] text-[#1A1A2E]">
      <HeroSection />

      <Reveal className="px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Centers of Excellence"
            title="Specialized care, coordinated around you"
            copy="Twelve flagship departments bring senior specialists, advanced diagnostics, and compassionate care pathways together."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {departments.slice(0, 12).map((department) => (
              <DepartmentCard key={department.name} department={department} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-xl grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-10">
          <HospitalImage />
          <div>
            <p className="font-mono-label text-xs text-[#3AAFC8] sm:text-sm">Why Choose Us</p>
            <h2 className="font-display mt-3 text-3xl font-bold leading-tight text-[#0A2463] sm:text-4xl lg:text-5xl">
              A mega hospital with boutique attention.
            </h2>
            <div className="mt-6 grid gap-4 sm:mt-8">
              {[
                { icon: ShieldCheck, title: "International quality systems", copy: "NABH, JCI, ISO, and infection-control audits across critical pathways." },
                { icon: Sparkles, title: "Precision technology", copy: "Robotic surgery, AI-assisted imaging, genomics, and integrated command centers." },
                { icon: Stethoscope, title: "500+ senior doctors", copy: "Multi-disciplinary boards for faster answers on complex cases." },
                { icon: Globe2, title: "Global patient desk", copy: "Language support, travel coordination, visa guidance, and family concierge care." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-3 rounded-md border border-slate-200 bg-[#F7FBFF] p-4 sm:gap-4 sm:p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#E8F4FD] text-[#0A2463] sm:h-12 sm:w-12">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="font-bold text-[#0A2463]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-xl">
          <SectionHeading eyebrow="Featured Doctors" title="Globally trained, deeply human" />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 sm:gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="w-[min(82vw,320px)] shrink-0 snap-start md:w-[360px]">
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="bg-[#0A2463] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="container-xl">
          <SectionHeading eyebrow="Patient Testimonials" title="Stories that stay with us" light />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="rounded-md border border-white/10 bg-white/10 p-5 shadow-xl shadow-black/10 sm:p-6">
                <div className="mb-5 flex gap-1 text-[#3DD6F5]">
                  {[...Array(story.rating)].map((_, index) => (
                    <Award key={index} size={18} className="fill-[#3DD6F5]" />
                  ))}
                </div>
                <p className="leading-8 text-white/82">&ldquo;{story.quote}&rdquo;</p>
                <h3 className="mt-6 font-bold">{story.name}</h3>
                <p className="text-sm text-[#3DD6F5]">{story.treatment}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="container-xl">
          <SectionHeading eyebrow="Latest Health Blogs" title="Readable medicine from our specialists" />
          <div className="grid gap-6 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.title} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
                <div className="relative aspect-[16/10]">
                  <Image src={blog.image} alt={blog.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md bg-[#E8F4FD] px-3 py-1 text-xs font-black text-[#0A2463]">{blog.tag}</span>
                    <span className="text-sm font-bold text-slate-500">{blog.readTime}</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-bold leading-tight text-[#0A2463] sm:text-2xl">{blog.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="container-xl rounded-md bg-[#0A2463] p-5 text-white shadow-2xl shadow-[#0A2463]/18 sm:p-6 lg:p-10">
          <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono-label text-xs text-[#3DD6F5] sm:text-sm">Appointments</p>
              <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Start with the right specialist.</h2>
            </div>
            <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">Share a few details and our care desk will confirm the best department, doctor, and slot.</p>
          </div>
          <AppointmentForm compact />
        </div>
      </Reveal>

      <Reveal className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="container-xl grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <div key={service.title} className="group perspective-card min-h-72 sm:min-h-60">
              <div className="flip-card relative h-full min-h-72 rounded-md sm:min-h-60">
                <div className="flip-face absolute inset-0 rounded-md border border-slate-200 bg-[#F7FBFF] p-5 sm:p-6">
                  <CheckCircle2 className="text-[#3DD6F5]" size={30} />
                  <h3 className="font-display mt-5 text-xl font-bold text-[#0A2463] sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{service.copy}</p>
                </div>
                <div className="flip-face flip-back absolute inset-0 rounded-md bg-[#0A2463] p-5 text-white sm:p-6">
                  <p className="font-mono-label text-xs text-[#3DD6F5]">Stats</p>
                  <ul className="mt-5 grid gap-3">
                    {service.stats.map((stat) => (
                      <li key={stat} className="rounded-md bg-white/10 px-4 py-3 font-bold">{stat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </main>
  );
}
