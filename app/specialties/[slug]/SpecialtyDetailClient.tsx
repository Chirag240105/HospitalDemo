"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import type { SpecialtyDetail } from "@/lib/specialtyData";
import s from "./SpecialtyDetail.module.css";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function SpecialtyDetailClient({ spec }: { spec: SpecialtyDetail }) {
  return (
    <>
      {/* ── OVERVIEW ─────────────────────────────────────────────── */}
      <section className={s.overviewSection} aria-labelledby="overview-title">
        <div className={s.overviewInner}>
          {/* Left */}
          <motion.div
            className={s.overviewText}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              className={s.sectionEyebrow}
              style={{ color: spec.color }}
              variants={fadeUp}
            >
              {spec.eyebrow}
            </motion.span>

            <motion.h2 id="overview-title" className={s.sectionTitle} variants={fadeUp}>
              About {spec.name}
            </motion.h2>

            <motion.div className={s.overviewParas} variants={stagger}>
              {spec.overview.map((para, i) => (
                <motion.p key={i} className={s.overviewPara} variants={fadeUp}>
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.div className={s.trainingBox} variants={fadeUp}>
              <p className={s.trainingLabel}>Training & Credentials</p>
              <p className={s.trainingText}>{spec.training}</p>
            </motion.div>
          </motion.div>

          {/* Right: sticky facts card */}
          <motion.aside
            className={s.factsCard}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            aria-label="Key department statistics"
          >
            <p className={s.factsTitle}>Department at a Glance</p>
            <div className={s.factsGrid}>
              {spec.keyFacts.map((f) => (
                <div key={f.label} className={s.factItem}>
                  <span className={s.factValue} style={{ color: spec.color }}>
                    {f.value}
                  </span>
                  <span className={s.factLabel}>{f.label}</span>
                </div>
              ))}
            </div>
            <div className={s.btnStack}>
              <Link href="/contact" className={s.bookBtn}>
                Book Appointment <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <a href="tel:+911234567890" className={s.emergencyBtn}>
                <Phone size={14} aria-hidden="true" /> Emergency: +91 12345 67890
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ───────────────────────────────────── */}
      <section className={s.conditionsSection} aria-labelledby="conditions-title">
        <div className={s.condInner}>
          <motion.div
            className={s.condHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className={s.sectionEyebrow} style={{ color: spec.color }}>
              What We Treat
            </span>
            <h2 id="conditions-title" className={s.sectionTitle}>
              Conditions &amp; Diseases
            </h2>
          </motion.div>

          <motion.div
            className={s.condGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          >
            {spec.conditions.map((c) => (
              <motion.div key={c.name} className={s.condCard} variants={fadeUp}>
                <div
                  className={s.condDot}
                  style={{ backgroundColor: spec.color }}
                  aria-hidden="true"
                />
                <h3 className={s.condName}>{c.name}</h3>
                <p className={s.condDesc}>{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SYMPTOMS ─────────────────────────────────────────────── */}
      <section className={s.symptomsSection} aria-labelledby="symptoms-title">
        <div className={s.sympOrb} aria-hidden="true" />
        <div className={s.sympInner}>
          <motion.div
            className={s.sympHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className={s.sectionEyebrow} style={{ color: spec.color }}>
              Warning Signs
            </span>
            <h2 id="symptoms-title" className={`${s.sectionTitle} ${s.sympHeaderTitleWhite}`}>
              Symptoms to Watch For
            </h2>
            <p className={s.sympSubtitle}>
              Do not ignore these warning signs. Early medical attention significantly improves outcomes.
            </p>
          </motion.div>

          <motion.div
            className={s.sympGrid}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          >
            {spec.symptoms.map((sym) => (
              <motion.div key={sym.label} className={s.sympCard} variants={fadeUp}>
                <div className={s.sympLabel}>
                  <div className={s.sympCheckIcon} aria-hidden="true">
                    <CheckCircle2 size={12} color="var(--teal)" />
                  </div>
                  {sym.label}
                </div>
                <p className={s.sympDetail}>{sym.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCEDURES ───────────────────────────────────────────── */}
      <section className={s.proceduresSection} aria-labelledby="procedures-title">
        <div className={s.procInner}>
          <motion.div
            className={s.procHeader}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className={s.sectionEyebrow} style={{ color: spec.color }}>
              What We Do
            </span>
            <h2 id="procedures-title" className={s.sectionTitle}>
              Procedures &amp; Treatments
            </h2>
          </motion.div>

          <motion.div
            className={s.procList}
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          >
            {spec.procedures.map((p, i) => (
              <motion.div key={p.name} className={s.procItem} variants={fadeUp}>
                <div
                  className={s.procNum}
                  style={{
                    backgroundColor: spec.bgColor,
                    color: spec.color,
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className={s.procName}>{p.name}</h3>
                  <p className={s.procDesc}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY APEX ─────────────────────────────────────────────── */}
      <section
        className={s.whyApexSection}
        style={{ backgroundColor: spec.bgColor }}
        aria-labelledby="why-apex-title"
      >
        <div className={s.whyApexOrb} aria-hidden="true" />
        <motion.div
          className={s.whyApexInner}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span
            className={s.whyApexBadge}
            style={{ color: spec.color, backgroundColor: `${spec.color}22` }}
          >
            Why Choose Apex
          </span>

          <h2 id="why-apex-title" className={s.whyApexTitle}>
            The Apex {spec.name} Difference
          </h2>

          <p className={s.whyApexText}>{spec.whyApex}</p>

          <div className={s.whyApexCtas}>
            <Link href="/contact" className={s.ctaPrimary}>
              Book an Appointment <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/doctors" className={s.ctaOutline}>
              Meet Our Specialists
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
