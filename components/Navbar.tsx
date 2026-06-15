"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CalendarCheck, ChevronDown, HeartPulse, Menu, Phone, X } from "lucide-react";
import { departments, slugify } from "@/lib/data";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="NovaCrest Medical Center home">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0A2463] text-[#3DD6F5] shadow-lg shadow-[#0A2463]/20">
        <HeartPulse size={25} strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className="font-display block text-xl font-bold text-[#0A2463] sm:text-2xl">NovaCrest</span>
        <span className="font-mono-label block text-[10px] text-[#1A1A2E]/70">Medical Center</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "bg-white shadow-xl shadow-slate-900/10" : "bg-white/66 backdrop-blur-md"}`}>
      <motion.div className="fixed left-0 top-0 h-1 origin-left bg-[#3DD6F5]" style={{ scaleX, width: "100%" }} />
      <div className="border-b border-white/70">
        <nav className="container-xl flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Logo />
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              link.label === "Departments" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link href={link.href} className="nav-link inline-flex items-center gap-1 text-sm font-bold text-[#1A1A2E]">
                    Departments <ChevronDown size={15} />
                  </Link>
                  <AnimatePresence>
                    {megaOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-1/2 top-10 grid w-[680px] -translate-x-1/2 grid-cols-3 gap-2 rounded-md border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15"
                      >
                        {departments.slice(0, 12).map((item) => (
                          <Link
                            key={item.name}
                            href={`/departments/${slugify(item.name)}`}
                            className="rounded-md px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#E8F4FD] hover:text-[#0A2463]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="nav-link text-sm font-bold text-[#1A1A2E]">
                  {link.label}
                </Link>
              ),
            )}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="shimmer inline-flex items-center gap-2 rounded-md bg-[#3DD6F5] px-5 py-3 text-sm font-black text-[#0A2463] shadow-lg shadow-[#3DD6F5]/25"
            >
              <CalendarCheck size={18} /> Book Now
            </Link>
            <a href="tel:1800999000" className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-red-600 text-white" aria-label="Call emergency hotline">
              <Phone size={18} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0A2463] lg:hidden"
            aria-label="Toggle mobile navigation"
            aria-expanded={open}
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-20 z-[60] max-h-[calc(100dvh-5rem)] overflow-y-auto bg-[#071A49] px-5 py-6 text-white shadow-2xl shadow-slate-950/30 lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-lg font-extrabold leading-none tracking-normal text-white transition hover:border-[#3DD6F5]/50 hover:bg-[#3DD6F5]/12 focus-visible:border-[#3DD6F5]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#3DD6F5] px-5 py-4 text-sm font-black text-[#0A2463]"
            >
              <CalendarCheck size={19} /> Book Appointment
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
