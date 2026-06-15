"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import s from "./Hero.module.css";

// Load Spline without SSR
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <SplineFallback />,
});

function SplineFallback() {
  return (
    <div className={s.splineFallback} aria-hidden="true">
      <div className={s.fallbackOrbA} />
      <div className={s.fallbackOrbB} />
    </div>
  );
}

const BADGES = [
  { icon: Shield, text: "NABH Accredited" },
  { icon: Clock,  text: "24/7 Emergency" },
  { icon: Award,  text: "25 Years of Excellence" },
];

export default function Hero() {
  const lineRef   = useRef<HTMLDivElement>(null);
  const orbOneRef = useRef<HTMLDivElement>(null);
  const orbTwoRef = useRef<HTMLDivElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError]   = useState(false);

  useEffect(() => {
    // Animated underline: scaleX 0 → 1
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, delay: 0.9, ease: "power3.out" }
      );
    }
    // Ambient orb pulse
    if (orbOneRef.current) {
      gsap.to(orbOneRef.current, { scale: 1.08, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }
    if (orbTwoRef.current) {
      gsap.to(orbTwoRef.current, { scale: 1.12, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5 });
    }
  }, []);

  return (
    <section id="home" className={s.hero} aria-label="Hero section">
      {/* Background elements */}
      <div className={s.gridOverlay} aria-hidden="true" />
      <div ref={orbOneRef} className={s.orbOne} aria-hidden="true" />
      <div ref={orbTwoRef} className={s.orbTwo} aria-hidden="true" />

      <div className={s.inner}>
        {/* ── Left: text content ── */}
        <div className={s.textCol}>
          {/* Eyebrow */}
          <motion.div
            className={s.eyebrow}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <div className={s.eyebrowDot} aria-hidden="true" />
            <span className={s.eyebrowText}>Delhi NCR&apos;s Trusted Multispecialty Hospital</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            className={s.headline}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Expert Care,
            <br />
            <span className={s.headlineTeal}>Human Touch.</span>
          </motion.h1>

          {/* Teal animated line */}
          <div ref={lineRef} className={s.underline} aria-hidden="true" />

          {/* Subtext */}
          <motion.p
            className={s.subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            From routine checkups to complex surgeries — 200+ specialists across 15 departments,
            dedicated to your complete recovery.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={s.ctas}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <Link href="/contact" className={s.btnPrimary}>
              Book Appointment <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/departments" className={s.btnOutline}>
              Explore Departments
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className={s.badges}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {BADGES.map(({ icon: Icon, text }) => (
              <div key={text} className={s.badge}>
                <div className={s.badgeIcon} aria-hidden="true">
                  <Icon size={15} color="var(--teal)" />
                </div>
                <span className={s.badgeText}>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Spline 3D ── */}
        <motion.div
          className={s.visualCol}
          initial={{ opacity: 0 }}
          animate={{ opacity: splineLoaded || splineError ? 1 : 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          aria-hidden="true"
        >
          <div className={s.splineWrap}>
            {splineError ? (
              <SplineFallback />
            ) : (
              <Spline
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
                onError={() => setSplineError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={s.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        aria-hidden="true"
      >
        <span className={s.scrollLabel}>Scroll</span>
        <div className={s.scrollLine} />
      </motion.div>
    </section>
  );
}
