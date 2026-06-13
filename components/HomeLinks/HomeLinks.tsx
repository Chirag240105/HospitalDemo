"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutGrid, Stethoscope, Users, ImageIcon, Phone, ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import s from "./HomeLinks.module.css";

interface PageCard {
  href:     string;
  icon:     LucideIcon;
  color:    string;
  bgColor:  string;
  title:    string;
  desc:     string;
}

const PAGES: PageCard[] = [
  {
    href:    "/departments",
    icon:    LayoutGrid,
    color:   "#00B4A6",
    bgColor: "#00B4A61A",
    title:   "Departments",
    desc:    "Explore our 15+ specialised departments staffed by India's leading consultants.",
  },
  {
    href:    "/services",
    icon:    Stethoscope,
    color:   "#3B82F6",
    bgColor: "#3B82F61A",
    title:   "Services",
    desc:    "Diagnostics, surgery, maternity, oncology, emergency and preventive health — all under one roof.",
  },
  {
    href:    "/doctors",
    icon:    Users,
    color:   "#8B5CF6",
    bgColor: "#8B5CF61A",
    title:   "Our Doctors",
    desc:    "Meet our 200+ specialists — each a leader in their field with decades of experience.",
  },
  {
    href:    "/gallery",
    icon:    ImageIcon,
    color:   "#F97316",
    bgColor: "#F973161A",
    title:   "Gallery",
    desc:    "Take a virtual tour of our world-class facilities, operation theatres and patient suites.",
  },
  {
    href:    "/contact",
    icon:    Phone,
    color:   "#10B981",
    bgColor: "#10B9811A",
    title:   "Book Appointment",
    desc:    "Fill a quick form and confirm your appointment via WhatsApp in under 60 seconds.",
  },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function HomeLinks() {
  return (
    <section className={s.section} aria-labelledby="explore-title">
      <div className={s.inner}>
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Explore Apex</span>
          <h2 id="explore-title" className={s.title}>Everything under one roof</h2>
          <p className={s.subtitle}>
            Navigate to any section of Apex Hospital — every page is packed with detail to help
            you make the right healthcare decision.
          </p>
        </motion.div>

        <motion.div
          className={s.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
          {PAGES.map(({ href, icon: Icon, color, bgColor, title, desc }) => (
            <motion.div key={href} variants={cardVariants}>
              <Link href={href} className={s.card} aria-label={`Go to ${title} page`}>
                <div>
                  <div
                    className={s.iconWrap}
                    style={{ backgroundColor: bgColor }}
                    aria-hidden="true"
                  >
                    <Icon size={26} color={color} strokeWidth={1.7} />
                  </div>
                  <h3 className={s.cardTitle}>{title}</h3>
                  <p className={s.cardDesc}>{desc}</p>
                </div>
                <span className={s.cardArrow} aria-hidden="true">
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
