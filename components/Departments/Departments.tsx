"use client";
import { motion } from "framer-motion";
import { Heart, Bone, Baby, Brain, Stethoscope, Smile, Eye, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import s from "./Departments.module.css";

interface Dept {
  icon:  LucideIcon;
  name:  string;
  desc:  string;
  color: string;
}

const DEPARTMENTS: Dept[] = [
  { icon: Heart,       name: "Cardiology",    desc: "Advanced heart care & cardiac surgery with state-of-the-art catheterization labs.",       color: "#FF6B6B" },
  { icon: Bone,        name: "Orthopedics",   desc: "Joint replacement, sports injuries & spinal surgery by India's top orthopedic surgeons.", color: "#00B4A6" },
  { icon: Baby,        name: "Gynecology",    desc: "Comprehensive women's health — from routine checkups to high-risk maternity care.",        color: "#FF8CC8" },
  { icon: Brain,       name: "Neurology",     desc: "Diagnosis & treatment of brain, spine, and peripheral nerve disorders.",                   color: "#A78BFA" },
  { icon: Stethoscope, name: "Pediatrics",    desc: "Gentle, specialized healthcare for newborns, children and adolescents.",                  color: "#FCD34D" },
  { icon: Smile,       name: "Dermatology",   desc: "Skin, hair & nail disorders plus advanced cosmetic dermatology treatments.",              color: "#34D399" },
  { icon: Eye,         name: "Ophthalmology", desc: "Full-spectrum eye care including cataract surgery, LASIK & retinal treatments.",          color: "#60A5FA" },
  { icon: Activity,    name: "Oncology",      desc: "Multidisciplinary cancer care: surgery, chemotherapy, radiation & immunotherapy.",        color: "#F97316" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Departments() {
  return (
    <section className={s.section} aria-labelledby="dept-title">
      <div className={s.inner}>
        {/* Header */}
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Specialized Care</span>
          <h2 id="dept-title" className={s.title}>Our Departments</h2>
          <p className={s.subtitle}>
            15+ specialized departments equipped with cutting-edge technology and staffed by India&apos;s leading doctors.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className={s.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        >
          {DEPARTMENTS.map((dept) => {
            const Icon = dept.icon;
            return (
              <motion.div
                key={dept.name}
                className={s.card}
                variants={itemVariants}
                tabIndex={0}
                role="article"
                aria-label={dept.name}
              >
                <div
                  className={s.iconWrap}
                  style={{ backgroundColor: `${dept.color}1A` }}
                  aria-hidden="true"
                >
                  <Icon size={24} color={dept.color} strokeWidth={1.8} />
                </div>
                <h3 className={s.cardTitle}>{dept.name}</h3>
                <p className={s.cardDesc}>{dept.desc}</p>
                <span className={s.cardLink} aria-hidden="true">
                  Learn more →
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
