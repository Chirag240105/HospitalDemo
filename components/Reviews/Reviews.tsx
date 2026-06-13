"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import s from "./Reviews.module.css";

interface Review {
  name:      string;
  location:  string;
  rating:    number;
  text:      string;
  procedure: string;
}

const REVIEWS: Review[] = [
  {
    name:      "Anjali Sharma",
    location:  "Noida",
    rating:    5,
    text:      "The care I received during my cardiac surgery was exceptional. Dr. Rajesh and the entire team made me feel safe throughout. The facilities are genuinely world-class.",
    procedure: "Cardiac Surgery",
  },
  {
    name:      "Rakesh Gupta",
    location:  "Ghaziabad",
    rating:    5,
    text:      "My mother's knee replacement was handled with incredible precision and care. The post-op recovery support was outstanding. Highly recommend Apex for orthopedic procedures.",
    procedure: "Knee Replacement",
  },
  {
    name:      "Meena Patel",
    location:  "Delhi",
    rating:    5,
    text:      "Delivered both my children here. Dr. Priya Mehta is simply the best. The maternity ward is clean, comfortable and the nursing staff is so attentive and warm.",
    procedure: "Maternity Care",
  },
  {
    name:      "Suresh Verma",
    location:  "Faridabad",
    rating:    4,
    text:      "Very professional staff. The diagnostic process was quick and accurate — got my reports within hours. Transparent pricing was a big relief compared to other hospitals.",
    procedure: "Diagnostic Services",
  },
];

const slideVariants = {
  enter:  (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit:   (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function Reviews() {
  const [[idx, dir], setSlide] = useState([0, 0]);

  const go = useCallback((newIdx: number, direction: number) => {
    setSlide([newIdx, direction]);
  }, []);

  const prev = useCallback(() => go(idx === 0 ? REVIEWS.length - 1 : idx - 1, -1), [idx, go]);
  const next = useCallback(() => go(idx === REVIEWS.length - 1 ? 0 : idx + 1,  1), [idx, go]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const review = REVIEWS[idx];

  return (
    <section className={s.section} aria-labelledby="reviews-title" aria-live="polite">
      <div className={s.inner}>
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Patient Stories</span>
          <h2 id="reviews-title" className={s.title}>What Our Patients Say</h2>
        </motion.div>

        <div className={s.carouselWrap}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              className={s.slide}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review by ${review.name}`}
            >
              <Quote size={36} className={s.quoteIcon} aria-hidden="true" />
              <p className={s.reviewText}>&ldquo;{review.text}&rdquo;</p>

              <div className={s.stars} aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? "var(--teal)" : "none"}
                    stroke={i < review.rating ? "var(--teal)" : "var(--border)"}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className={s.reviewerName}>{review.name}</p>
              <p className={s.reviewerMeta}>{review.location} · {review.procedure}</p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className={s.controls}>
            <button
              className={s.arrowBtn}
              onClick={prev}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} color="var(--navy)" />
            </button>

            <div className={s.dots} role="tablist" aria-label="Review navigation">
              {REVIEWS.map((_, i) => (
                <div
                  key={i}
                  className={`${s.dot} ${i === idx ? s.dotActive : s.dotInactive}`}
                  onClick={() => go(i, i > idx ? 1 : -1)}
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Go to review ${i + 1}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && go(i, i > idx ? 1 : -1)}
                />
              ))}
            </div>

            <button
              className={s.arrowBtn}
              onClick={next}
              aria-label="Next review"
            >
              <ChevronRight size={20} color="var(--navy)" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
