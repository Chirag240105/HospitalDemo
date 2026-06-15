"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { departments, doctors } from "@/lib/data";
import { useMemo, useState } from "react";

const timeSlots = ["09:00", "10:30", "12:00", "14:30", "16:00", "18:00"];

export default function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [department, setDepartment] = useState(departments[0].name);
  const [slot, setSlot] = useState(timeSlots[0]);
  const [submitted, setSubmitted] = useState(false);

  const filteredDoctors = useMemo(() => {
    const matching = doctors.filter((doctor) => doctor.specialty === department || department.includes(doctor.specialty));
    return matching.length ? matching : doctors.slice(0, 3);
  }, [department]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="relative grid min-w-0 gap-4 rounded-md border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-6 [&_input]:min-w-0 [&_input]:w-full [&_select]:min-w-0 [&_select]:w-full [&_textarea]:min-w-0 [&_textarea]:w-full"
    >
      <AnimatePresence>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 grid place-items-center rounded-md bg-white/96 text-center"
          >
            <div>
              <div className="relative mx-auto h-24 w-24">
                {[...Array(12)].map((_, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[#3DD6F5]"
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos(index) * 62,
                      y: Math.sin(index) * 62,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
                <CheckCircle2 className="absolute inset-0 m-auto text-emerald-500" size={72} />
              </div>
              <p className="font-display mt-4 text-3xl font-bold text-[#0A2463]">Appointment requested</p>
              <p className="mt-2 text-slate-600">Our care team will confirm your slot shortly.</p>
              <button type="button" onClick={() => setSubmitted(false)} className="mt-5 rounded-md bg-[#0A2463] px-4 py-2 font-bold text-white">
                Book another
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={compact ? "grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" : "grid min-w-0 gap-4 sm:grid-cols-2"}>
        <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
          Name
          <input required name="name" className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]" placeholder="Patient name" />
        </label>
        {!compact ? (
          <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
            Email
            <input required type="email" name="email" className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]" placeholder="you@example.com" />
          </label>
        ) : null}
        <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
          Phone
          <input required type="tel" name="phone" className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]" placeholder="+91 98765 43210" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
          Department
          <select value={department} onChange={(event) => setDepartment(event.target.value)} className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]">
            {departments.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
          Doctor
          <select className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]">
            {filteredDoctors.map((doctor) => (
              <option key={doctor.name}>{doctor.name}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
          Date
          <input required type="date" name="date" className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]" />
        </label>
      </div>
      {!compact ? (
        <>
          <div>
            <p className="mb-3 text-sm font-bold text-[#0A2463]">Time slot</p>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {timeSlots.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSlot(item)}
                  className={`rounded-md border px-3 py-3 text-sm font-black ${slot === item ? "border-[#3DD6F5] bg-[#E8F4FD] text-[#0A2463]" : "border-slate-200 text-slate-600"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center justify-between rounded-md border border-slate-200 px-4 py-3 text-sm font-bold text-[#0A2463]">
            Insurance assistance required
            <input type="checkbox" className="h-5 w-5 accent-[#0A2463]" />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#0A2463]">
            Message
            <textarea name="message" rows={4} className="rounded-md border border-slate-200 px-4 py-3 text-[#1A1A2E]" placeholder="Tell us what care you need" />
          </label>
        </>
      ) : null}
      <button type="submit" className="shimmer inline-flex items-center justify-center gap-2 rounded-md bg-[#3DD6F5] px-6 py-4 font-black text-[#0A2463]">
        <Send size={18} /> Submit Appointment
      </button>
    </form>
  );
}
