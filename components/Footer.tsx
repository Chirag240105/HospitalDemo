import Link from "next/link";
import { Globe2, HeartPulse, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { departments } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#071A49] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="container-xl grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.85fr_1fr_1.05fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-[#3DD6F5] text-[#0A2463]">
              <HeartPulse size={27} />
            </span>
            <div>
              <p className="font-display text-2xl font-bold">NovaCrest</p>
              <p className="font-mono-label text-[10px] text-[#3DD6F5]">Medical Center</p>
            </div>
          </div>
          <p className="mt-6 leading-8 text-white/68">
            A 1000-bed multi-specialty medical center built for complex medicine, faster decisions, and deeply humane care.
          </p>
          <a href="tel:1800999000" className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-3 font-black text-white">
            <Phone size={18} /> Emergency: 1800-999-000
          </a>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Quick Links</h3>
          <div className="grid gap-3 text-white/68">
            {["Home", "Departments", "Doctors", "Services", "About", "Contact"].map((item) => (
              <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-[#3DD6F5]">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Departments</h3>
          <div className="grid gap-3 text-white/68">
            {departments.slice(0, 8).map((item) => (
              <Link key={item.name} href="/departments" className="hover:text-[#3DD6F5]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Contact</h3>
          <div className="grid gap-4 leading-7 text-white/68">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[#3DD6F5]" size={18} /> NovaCrest Avenue, Sector 42, New Delhi NCR</p>
            <p className="flex gap-3"><Phone className="mt-1 shrink-0 text-[#3DD6F5]" size={18} /> +91 11 4567 8900</p>
            <p className="flex gap-3"><Mail className="mt-1 shrink-0 text-[#3DD6F5]" size={18} /> appointments@novacrestmed.in</p>
          </div>
          <div className="mt-6 flex gap-3">
            {[Globe2, Mail, MessageCircle].map((Icon, index) => (
              <a key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition hover:bg-[#3DD6F5] hover:text-[#0A2463]" aria-label="Social media profile">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-bold">Location</h3>
          <iframe
            title="NovaCrest Medical Center map"
            src="https://www.google.com/maps?q=New%20Delhi%20India&output=embed"
            className="h-52 w-full rounded-md border border-white/10"
            loading="lazy"
          />
        </div>
      </div>
      <div className="container-xl mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
        Copyright 2026 NovaCrest Medical Center. All rights reserved.
      </div>
    </footer>
  );
}
