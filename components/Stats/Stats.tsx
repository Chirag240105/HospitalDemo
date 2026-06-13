"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import s from "./Stats.module.css";

const STATS = [
  { num: 50000, suffix: "+", label: "Patients Treated" },
  { num: 200,   suffix: "+", label: "Specialist Doctors" },
  { num: 25,    suffix: " Yrs", label: "Of Excellence" },
  { num: 98,    suffix: "%",  label: "Success Rate" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start   = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <div className={s.counterWrap}>
      <span ref={ref} className={s.counter} aria-label={`${target}${suffix}`}>
        {count.toLocaleString()}
      </span>
      <span className={s.suffix} aria-hidden="true">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section aria-label="Hospital statistics" className={s.section}>
      <div className={s.inner}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={s.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Counter target={stat.num} suffix={stat.suffix} />
            <p className={s.label}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
