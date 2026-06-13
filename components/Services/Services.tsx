"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope, Scan, Syringe, HeartPulse, Baby, Bone,
  Brain, Eye, FlaskConical, Ambulance, Scissors, Pill,
  Shield, Microscope, Dna, WormIcon as Worm, BedDouble, UserRound,
  ArrowRight, Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import s from "./Services.module.css";

interface Service {
  icon:  LucideIcon;
  name:  string;
  desc:  string;
  tag?:  string;
  tagColor?: string;
}

interface ServiceCategory {
  eyebrow: string;
  title:   string;
  desc:    string;
  color:   string;
  bgColor: string;
  icon:    LucideIcon;
  services: Service[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    eyebrow:  "Diagnostic Services",
    title:    "Advanced Diagnostics",
    desc:     "Precise diagnosis is the foundation of great care. Our state-of-the-art diagnostic wing combines the latest imaging, lab science, and AI-assisted analysis to give you answers fast.",
    color:    "#3B82F6",
    bgColor:  "#3B82F61A",
    icon:     Scan,
    services: [
      { icon: Scan,        name: "MRI & CT Scanning",        desc: "3T MRI and 128-slice CT with same-day reports for urgent cases.",                tag: "Available 24/7", tagColor: "#3B82F6" },
      { icon: Microscope,  name: "Pathology & Blood Tests",  desc: "Full blood panel, biopsy analysis, hormone profiles and 400+ test menu.",       tag: "NABL Certified", tagColor: "#10B981" },
      { icon: Dna,         name: "Genetic Testing",          desc: "Hereditary cancer panels, prenatal screening, and pharmacogenomics.",            tag: "Specialist Review", tagColor: "#8B5CF6" },
      { icon: FlaskConical,name: "Microbiology Lab",         desc: "Culture and sensitivity, PCR diagnostics, rapid antigen and antibody tests.",   tag: "NABL Certified", tagColor: "#10B981" },
      { icon: HeartPulse,  name: "Cardiac Diagnostics",      desc: "2D Echo, Stress ECG, Holter monitoring and TMT with cardiologist report.",      tag: "Report in 2 hrs", tagColor: "#F59E0B" },
      { icon: Eye,         name: "Ophthalmic Diagnostics",   desc: "OCT, visual field testing, retinal photography and corneal topography.",        tag: "Same Day Report",  tagColor: "#3B82F6" },
    ],
  },
  {
    eyebrow:  "Surgical Excellence",
    title:    "Surgical Services",
    desc:     "From minimally invasive laparoscopy to complex robotic procedures, our surgical teams are trained at the world's leading institutes, performing 5,000+ surgeries every year.",
    color:    "#EF4444",
    bgColor:  "#EF44441A",
    icon:     Scissors,
    services: [
      { icon: Scissors,    name: "Robotic Surgery",          desc: "Da Vinci robotic system for precision in urology, gynecology and thoracic cases.",tag: "Robotic Assisted", tagColor: "#EF4444" },
      { icon: Bone,        name: "Orthopedic Surgery",       desc: "Total knee, hip & shoulder replacement with rapid recovery protocols.",          tag: "Implant Warranty",  tagColor: "#F97316" },
      { icon: Brain,       name: "Neurosurgery",             desc: "Minimally invasive spine surgery, brain tumor resection, DBS and more.",        tag: "Neuro Navigation",  tagColor: "#8B5CF6" },
      { icon: HeartPulse,  name: "Cardiac Surgery",          desc: "Bypass, valve repair/replacement, TAVR, and congenital heart defect corrections.", tag: "Heart Team",     tagColor: "#EF4444" },
      { icon: Baby,        name: "Obstetric Surgery",        desc: "Planned and emergency C-sections, fibroid removal, ectopic pregnancy care.",    tag: "Neonatal ICU Ready",tagColor: "#EC4899" },
      { icon: Stethoscope, name: "General Surgery",          desc: "Appendix, gallbladder, hernia, bariatric and colorectal laparoscopic procedures.", tag: "Day Care Option", tagColor: "#10B981" },
    ],
  },
  {
    eyebrow:  "Maternal & Child Health",
    title:    "Mother & Child Care",
    desc:     "A dedicated centre of excellence for every stage of parenthood — from pre-conception counselling to your child's first decade of health milestones.",
    color:    "#EC4899",
    bgColor:  "#EC48991A",
    icon:     Baby,
    services: [
      { icon: Baby,       name: "High-Risk Pregnancy",       desc: "Specialist monitoring, fetal medicine unit, and 24/7 obstetric emergency team.",  tag: "Fetal Medicine",  tagColor: "#EC4899" },
      { icon: BedDouble,  name: "Maternity Suites",          desc: "Private LDR rooms with birthing pool, family suite, and lactation consultants.",  tag: "Private Rooms",   tagColor: "#F59E0B" },
      { icon: Stethoscope,name: "Neonatology & NICU",        desc: "Level III NICU with 30 beds, ventilator support and transport incubators.",       tag: "Level III NICU",  tagColor: "#EF4444" },
      { icon: UserRound,  name: "Pediatric OPD",             desc: "Vaccination, growth monitoring, allergy testing and child developmental checks.", tag: "All Ages",        tagColor: "#10B981" },
      { icon: Scissors,   name: "Pediatric Surgery",         desc: "Minimally invasive surgery for congenital anomalies, appendix and hernias.",     tag: "Paediatric Team", tagColor: "#8B5CF6" },
      { icon: HeartPulse, name: "Pediatric Cardiology",      desc: "Echo, ECG and catheterisation for congenital and acquired heart disease in children.", tag: "Sub-Specialist", tagColor: "#EF4444" },
    ],
  },
  {
    eyebrow:  "Cancer Care",
    title:    "Oncology Services",
    desc:     "A multidisciplinary tumour board reviews every case. We combine surgery, precision radiation, immunotherapy and supportive care under one roof for the best outcomes.",
    color:    "#F97316",
    bgColor:  "#F973161A",
    icon:     Shield,
    services: [
      { icon: Dna,         name: "Precision Oncology",       desc: "Genomic profiling and liquid biopsy to match the best targeted therapy for your cancer.", tag: "Tumour Board",  tagColor: "#F97316" },
      { icon: Syringe,     name: "Medical Oncology",         desc: "Chemotherapy, immunotherapy, hormonal therapy and bone marrow transplants.",    tag: "Day Care Chemo",  tagColor: "#EF4444" },
      { icon: Scan,        name: "Radiation Oncology",       desc: "LINAC with IMRT, IGRT, SRS and SBRT — precise radiation with minimal side-effects.", tag: "Painless",     tagColor: "#8B5CF6" },
      { icon: Scissors,    name: "Surgical Oncology",        desc: "Organ-preserving cancer surgery including breast conservation and laparoscopic colectomy.", tag: "Oncoplastic",tagColor: "#F97316" },
      { icon: HeartPulse,  name: "Palliative Care",          desc: "Symptom management, pain control and emotional support for patients and families.", tag: "Compassionate",  tagColor: "#10B981" },
      { icon: Microscope,  name: "Histopathology",           desc: "IHC, FISH and molecular pathology for accurate diagnosis and subtype classification.", tag: "NABL Lab",     tagColor: "#3B82F6" },
    ],
  },
  {
    eyebrow:  "Emergency & Critical Care",
    title:    "Emergency Services",
    desc:     "Our 24/7 emergency department is equipped for every crisis — trauma, cardiac arrest, stroke, and more. Average door-to-doctor time under 4 minutes.",
    color:    "#DC2626",
    bgColor:  "#DC26261A",
    icon:     Ambulance,
    services: [
      { icon: Ambulance,   name: "Trauma & Emergency",       desc: "Level II trauma centre with emergency OT, blood bank, and resuscitation bay.",  tag: "24/7 Open",       tagColor: "#DC2626" },
      { icon: HeartPulse,  name: "Cardiac Emergency",        desc: "Primary PCI within 90 minutes of arrival — round-the-clock cath lab readiness.", tag: "Door to Balloon 90min", tagColor: "#EF4444" },
      { icon: Brain,       name: "Stroke Unit",              desc: "Dedicated stroke pathway with tPA thrombolysis and mechanical thrombectomy.",    tag: "Clot Retrieval",  tagColor: "#8B5CF6" },
      { icon: BedDouble,   name: "Medical ICU",              desc: "20-bed ICU with intensivist round-the-clock, ventilator and haemodynamic monitoring.", tag: "Intensivist Led", tagColor: "#3B82F6" },
      { icon: Pill,        name: "Poison & Overdose",        desc: "Dedicated toxicology team for all ingestion, bite and chemical exposure emergencies.", tag: "Toxicologist",  tagColor: "#F97316" },
      { icon: Syringe,     name: "Rapid Blood Transfusion",  desc: "On-site blood bank with all groups, FFP, platelets and cryo available 24/7.",  tag: "Blood Bank",      tagColor: "#DC2626" },
    ],
  },
  {
    eyebrow:  "Wellness & Prevention",
    title:    "Preventive Health",
    desc:     "Your health is worth protecting before problems begin. Our preventive care programmes combine comprehensive screening, lifestyle medicine and personalised wellness plans.",
    color:    "#10B981",
    bgColor:  "#10B9811A",
    icon:     Pill,
    services: [
      { icon: Stethoscope, name: "Executive Health Checkup", desc: "Comprehensive 80+ parameter master health checkup with specialist review.",     tag: "Half Day Package", tagColor: "#10B981" },
      { icon: HeartPulse,  name: "Cardiac Wellness",         desc: "Lipid panel, ECG, echo and stress test bundled with cardiologist counselling.",  tag: "Heart Package",   tagColor: "#EF4444" },
      { icon: Dna,         name: "Cancer Screening",         desc: "PSA, mammography, Pap smear, colonoscopy and low-dose CT lung screening.",      tag: "Early Detection",  tagColor: "#F97316" },
      { icon: UserRound,   name: "Diabetes Management",      desc: "HbA1c, podiatry, retinal screening and dietitian counselling in one appointment.", tag: "Diabetic Clinic",tagColor: "#F59E0B" },
      { icon: Worm,        name: "Weight Management",        desc: "Bariatric surgery consultation, nutrition plans and body composition analysis.", tag: "Obesity Clinic",  tagColor: "#8B5CF6" },
      { icon: FlaskConical,name: "Vaccination Centre",       desc: "Travel vaccines, flu shots, HPV, pneumococcal and all childhood immunisations.", tag: "Walk-in",         tagColor: "#10B981" },
    ],
  },
];

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <div className={s.page}>
      {CATEGORIES.map((cat, catIdx) => {
        const CatIcon = cat.icon;
        return (
          <section
            key={cat.title}
            id={cat.title.toLowerCase().replace(/\s+/g, "-")}
            className={s.category}
            aria-labelledby={`cat-${catIdx}`}
          >
            <div className={s.categoryInner}>
              {/* Category header */}
              <motion.div
                className={s.categoryHeader}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <div
                  className={s.categoryIconWrap}
                  style={{ backgroundColor: cat.bgColor }}
                  aria-hidden="true"
                >
                  <CatIcon size={30} color={cat.color} strokeWidth={1.7} />
                </div>
                <div className={s.categoryHeaderText}>
                  <p className={s.categoryEyebrow}>{cat.eyebrow}</p>
                  <h2 id={`cat-${catIdx}`} className={s.categoryTitle}>{cat.title}</h2>
                  <p className={s.categoryDesc}>{cat.desc}</p>
                </div>
              </motion.div>

              {/* Service cards */}
              <motion.div
                className={s.servicesGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              >
                {cat.services.map((svc) => {
                  const SvcIcon = svc.icon;
                  return (
                    <motion.div
                      key={svc.name}
                      className={s.card}
                      variants={cardVariants}
                      role="article"
                    >
                      <div
                        className={s.cardIconWrap}
                        style={{ backgroundColor: cat.bgColor }}
                        aria-hidden="true"
                      >
                        <SvcIcon size={22} color={cat.color} strokeWidth={1.7} />
                      </div>
                      <h3 className={s.cardTitle}>{svc.name}</h3>
                      <p className={s.cardDesc}>{svc.desc}</p>
                      {svc.tag && (
                        <span
                          className={s.cardTag}
                          style={{
                            color: svc.tagColor,
                            backgroundColor: `${svc.tagColor}1A`,
                          }}
                        >
                          {svc.tag}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA strip */}
      <div className={s.ctaStrip}>
        <div className={s.ctaStripOrb} aria-hidden="true" />
        <motion.div
          className={s.ctaStripInner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={s.ctaTitle}>
            Not sure which service<br />
            <span className={s.ctaAccent}>you need?</span>
          </h2>
          <p className={s.ctaSubtitle}>
            Talk to our patient advisors — they&apos;ll guide you to the right department and doctor
            within minutes, at no charge.
          </p>
          <div className={s.ctaBtns}>
            <Link href="/contact" className={s.ctaBtnPrimary}>
              Book Appointment <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a href="tel:+911234567890" className={s.ctaBtnOutline}>
              <Phone size={15} aria-hidden="true" /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
