"use client";
import { motion } from "framer-motion";
import { MessageCircle, Star } from "lucide-react";
import s from "./Doctors.module.css";

interface Doctor {
  name:    string;
  spec:    string;
  exp:     string;
  rating:  number;
  reviews: number;
  img:     string;
}

const DOCTORS: Doctor[] = [
  { name: "Dr. Rajesh Sharma",  spec: "Senior Cardiologist",   exp: "22 Years Experience", rating: 4.9, reviews: 312, img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Dr. Priya Mehta",    spec: "Head of Gynecology",    exp: "18 Years Experience", rating: 4.8, reviews: 287, img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Dr. Anil Verma",     spec: "Orthopedic Surgeon",    exp: "20 Years Experience", rating: 4.9, reviews: 198, img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Dr. Sunita Rao",     spec: "Neurologist",           exp: "15 Years Experience", rating: 4.7, reviews: 156, img: "https://randomuser.me/api/portraits/women/68.jpg" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <div style={{ display: "flex", gap: 2 }} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          fill={i < full ? "var(--teal)" : "none"}
          stroke={i < full ? "var(--teal)" : "var(--border)"}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Doctors() {
  const waUrl = (name: string) =>
    `https://wa.me/911234567890?text=${encodeURIComponent(`Hi, I'd like to book a consultation with ${name}`)}`;

  return (
    <section id="doctors" className={s.section} aria-labelledby="doctors-title">
      <div className={s.inner}>
        {/* Header */}
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Our Specialists</span>
          <h2 id="doctors-title" className={s.title}>Meet Our Doctors</h2>
          <p className={s.subtitle}>
            India&apos;s top specialists, each with decades of experience and thousands of successful treatments.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className={s.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        >
          {DOCTORS.map((doc) => (
            <motion.article key={doc.name} className={s.card} variants={cardVariants}>
              {/* Image */}
              <div className={s.imgWrap}>
                <img
                  src={doc.img}
                  alt={`Photo of ${doc.name}`}
                  className={s.img}
                  width={300}
                  height={400}
                  loading="lazy"
                />
                <div className={s.overlay} aria-hidden="true">
                  <a
                    href={waUrl(doc.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.waBtn}
                    aria-label={`WhatsApp consultation with ${doc.name}`}
                  >
                    <MessageCircle size={15} aria-hidden="true" />
                    WhatsApp Consult
                  </a>
                </div>
              </div>

              {/* Info */}
              <p className={s.name}>{doc.name}</p>
              <p className={s.spec}>{doc.spec}</p>
              <p className={s.exp}>{doc.exp}</p>
              <div className={s.rating}>
                <StarRating rating={doc.rating} />
                <span className={s.ratingNum}>{doc.rating}</span>
                <span className={s.ratingCount}>({doc.reviews} reviews)</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
