"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Microscope, UserCheck, Ambulance, CreditCard, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import s from "./WhyUs.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon:  LucideIcon;
  title: string;
  desc:  string;
}

const FEATURES: Feature[] = [
  {
    icon:  Microscope,
    title: "Latest Technology",
    desc:  "3T MRI, Da Vinci Robotic Surgery, AI-assisted diagnostics — we invest in the best tools for the best outcomes.",
  },
  {
    icon:  UserCheck,
    title: "Patient-First Approach",
    desc:  "Every care plan is built around you. Your comfort, your questions, your pace — our team is here every step.",
  },
  {
    icon:  Ambulance,
    title: "24/7 Emergency Response",
    desc:  "Fully equipped emergency wing with a dedicated trauma team — ready around the clock, every day of the year.",
  },
  {
    icon:  CreditCard,
    title: "Transparent Pricing",
    desc:  "No hidden charges. Know your treatment cost upfront. Cashless facility for 50+ major insurance providers.",
  },
];

export default function WhyUs() {
  const sectionRef  = useRef<HTMLElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        );
      }
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="whyus" ref={sectionRef} className={s.section} aria-labelledby="whyus-title">
      <div className={s.inner}>
        {/* Left text */}
        <div ref={leftRef} className={s.textCol} style={{ opacity: 0 }}>
          <span className={s.eyebrow}>Why Apex</span>
          <h2 id="whyus-title" className={s.title}>
            Healthcare that puts<br />
            <span className={s.titleAccent}>you first.</span>
          </h2>
          <p className={s.body}>
            We built Apex on a simple belief: every patient deserves world-class care delivered with warmth
            and respect. That belief shapes every decision we make — from the doctors we hire to the
            technology we deploy.
          </p>
          <a href="/contact" className={s.cta}>
            Book a Consultation <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Right feature cards */}
        <div ref={rightRef} className={s.featuresGrid} style={{ opacity: 0 }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={s.featureCard}>
              <div className={s.featureIconWrap} aria-hidden="true">
                <Icon size={20} color="var(--teal)" strokeWidth={1.8} />
              </div>
              <h3 className={s.featureTitle}>{title}</h3>
              <p className={s.featureDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
