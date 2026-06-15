import AppointmentForm from "@/components/AppointmentForm";
import { Ambulance, Car, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main id="main-content" className="bg-[#F7FBFF] pb-20 pt-28">
      <section className="container-xl grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="font-mono-label text-sm text-[#3AAFC8]">Appointments</p>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight text-[#0A2463] sm:text-6xl">
            Book care with clarity.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Choose a department, preferred doctor, date, time slot, and insurance support. Our care desk confirms every request personally.
          </p>
          <div className="mt-8">
            <AppointmentForm />
          </div>
        </div>
        <aside className="grid gap-5">
          <div className="rounded-md border border-red-200 bg-red-50 p-6 text-red-700">
            <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 font-black text-white">
              <span className="h-2.5 w-2.5 animate-ping rounded-full bg-white" /> 24/7 Emergency
            </div>
            <h2 className="font-display text-3xl font-bold">Critical care hotline</h2>
            <a href="tel:1800999000" className="mt-4 inline-flex items-center gap-2 text-2xl font-black">
              <Ambulance size={28} /> 1800-999-000
            </a>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
            <h2 className="font-display text-3xl font-bold text-[#0A2463]">Contact info</h2>
            <div className="mt-6 grid gap-4 leading-7 text-slate-600">
              <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#3AAFC8]" /> NovaCrest Avenue, Sector 42, New Delhi NCR</p>
              <p className="flex gap-3"><Phone className="mt-1 shrink-0 text-[#3AAFC8]" /> +91 11 4567 8900</p>
              <p className="flex gap-3"><MessageCircle className="mt-1 shrink-0 text-[#3AAFC8]" /> WhatsApp: +91 90000 90000</p>
              <p className="flex gap-3"><Mail className="mt-1 shrink-0 text-[#3AAFC8]" /> appointments@novacrestmed.in</p>
            </div>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5">
            <h2 className="font-display text-3xl font-bold text-[#0A2463]">Hospital directions</h2>
            <p className="mt-3 flex gap-3 leading-7 text-slate-600"><Car className="mt-1 shrink-0 text-[#3AAFC8]" /> 35 minutes from IGI Airport, valet at Gate 1, emergency entry from Service Road B.</p>
            <iframe
              title="NovaCrest Medical Center directions"
              src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
              className="mt-5 h-72 w-full rounded-md border border-slate-200"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
