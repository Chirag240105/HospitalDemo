"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Search, Star, X } from "lucide-react";
import AppointmentForm from "@/components/AppointmentForm";
import DoctorCard from "@/components/DoctorCard";
import { doctors, type Doctor } from "@/lib/data";
import { useState } from "react";

export default function DoctorsPage() {
  const [query, setQuery] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [gender, setGender] = useState("All");
  const [language, setLanguage] = useState("All");
  const [selected, setSelected] = useState<Doctor | null>(null);

  const specialties = ["All", ...Array.from(new Set(doctors.map((doctor) => doctor.specialty)))];
  const languages = ["All", ...Array.from(new Set(doctors.flatMap((doctor) => doctor.language)))];
  const filtered = doctors.filter((doctor) => {
    const haystack = `${doctor.name} ${doctor.specialty} ${doctor.degree}`.toLowerCase();
    return (
      haystack.includes(query.toLowerCase()) &&
      (specialty === "All" || doctor.specialty === specialty) &&
      (availability === "All" || doctor.availability === availability) &&
      (gender === "All" || doctor.gender === gender) &&
      (language === "All" || doctor.language.includes(language))
    );
  });

  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28">
      <section className="container-xl py-14">
        <p className="font-mono-label text-sm text-[#3AAFC8]">Our Specialists</p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight text-[#0A2463] sm:text-6xl">
          Find the right doctor for the right next step.
        </h1>
        <div className="mt-8 rounded-md border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
          <label className="mb-4 flex items-center gap-3 rounded-md border border-slate-200 px-4 py-3">
            <Search size={19} className="text-[#0A2463]" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by doctor, degree, or specialty" className="w-full outline-none" />
          </label>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { label: "Specialty", value: specialty, setter: setSpecialty, options: specialties },
              { label: "Language", value: language, setter: setLanguage, options: languages },
              { label: "Availability", value: availability, setter: setAvailability, options: ["All", "Today", "Tomorrow", "This Week"] },
              { label: "Gender", value: gender, setter: setGender, options: ["All", "Female", "Male"] },
            ].map((filter) => (
              <label key={filter.label} className="grid gap-2 text-sm font-bold text-[#0A2463]">
                {filter.label}
                <select value={filter.value} onChange={(event) => filter.setter(event.target.value)} className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]">
                  {filter.options.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((doctor) => (
          <DoctorCard key={doctor.name} doctor={doctor} onBook={setSelected} />
        ))}
      </section>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-[#061847]/80 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} profile and booking calendar`}
          >
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="mx-auto my-10 max-w-5xl rounded-md bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 p-5">
                <div>
                  <h2 className="font-display text-3xl font-bold text-[#0A2463]">{selected.name}</h2>
                  <p className="font-bold text-[#3AAFC8]">{selected.degree} - {selected.specialty}</p>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200" aria-label="Close doctor profile">
                  <X size={20} />
                </button>
              </div>
              <div className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="grid gap-5">
                  <p className="leading-8 text-slate-600">{selected.bio}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-md bg-[#E8F4FD] p-4"><Star className="mb-2 fill-[#3DD6F5] text-[#3DD6F5]" /> {selected.rating} patient rating</div>
                    <div className="rounded-md bg-[#E8F4FD] p-4"><CalendarDays className="mb-2 text-[#0A2463]" /> Available {selected.availability.toLowerCase()}</div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2463]">Education</h3>
                    <ul className="mt-2 grid gap-2 text-slate-600">{selected.education.map((item) => <li key={item}>- {item}</li>)}</ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2463]">Publications</h3>
                    <ul className="mt-2 grid gap-2 text-slate-600">{selected.publications.map((item) => <li key={item}>- {item}</li>)}</ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A2463]">Patient Reviews</h3>
                    <ul className="mt-2 grid gap-2 text-slate-600">{selected.reviews.map((item) => <li key={item}>&ldquo;{item}&rdquo;</li>)}</ul>
                  </div>
                </div>
                <AppointmentForm />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
