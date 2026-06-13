"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import s from "./PageHero.module.css";

interface PageHeroProps {
  eyebrow:   string;
  title:     string;
  titleAccent?: string;   // portion of title rendered in teal gradient
  subtitle?: string;
  breadcrumb?: string;    // label for current page in breadcrumb
}

export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className={s.hero} aria-label={`${breadcrumb ?? title} page banner`}>
      <div className={s.gridOverlay} aria-hidden="true" />
      <div className={`${s.orb} ${s.orbOne}`} aria-hidden="true" />
      <div className={`${s.orb} ${s.orbTwo}`} aria-hidden="true" />

      <div className={s.inner}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            className={s.breadcrumb}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span className={s.breadcrumbSep} aria-hidden="true">/</span>
            <span className={s.breadcrumbCurrent}>{breadcrumb}</span>
          </motion.nav>
        )}

        {/* Eyebrow */}
        <motion.div
          className={s.eyebrow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className={s.dot} aria-hidden="true" />
          <span className={s.eyebrowText}>{eyebrow}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className={s.title}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {title}
          {titleAccent && (
            <>
              {" "}
              <span className={s.titleAccent}>{titleAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.div
          className={s.divider}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "center" }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          aria-hidden="true"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className={s.subtitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
