"use client";
import { motion } from "framer-motion";
import s from "./Gallery.module.css";

interface GalleryImage {
  url:   string;
  label: string;
  alt:   string;
}

const IMAGES: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80", label: "Operation Theatre",       alt: "Modern hospital operation theatre" },
  { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80",    label: "ICU Ward",               alt: "Advanced ICU with monitoring equipment" },
  { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80", label: "Diagnostic Lab",         alt: "High-tech diagnostic laboratory" },
  { url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80", label: "Patient Rooms",          alt: "Comfortable private patient room" },
  { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80", label: "Specialist Consultation", alt: "Doctor consulting with a patient" },
  { url: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=600&q=80", label: "Pharmacy",              alt: "Well-stocked hospital pharmacy" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Gallery() {
  return (
    <section id="gallery" className={s.section} aria-labelledby="gallery-title">
      <div className={s.inner}>
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Our Facility</span>
          <h2 id="gallery-title" className={s.title}>Inside Apex</h2>
        </motion.div>

        <motion.div
          className={s.masonry}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          role="list"
          aria-label="Hospital gallery"
        >
          {IMAGES.map((img) => (
            <motion.div
              key={img.label}
              className={s.item}
              variants={itemVariants}
              tabIndex={0}
              role="listitem"
              aria-label={img.label}
            >
              <img
                src={img.url}
                alt={img.alt}
                className={s.img}
                loading="lazy"
                width={600}
              />
              <div className={s.overlay} aria-hidden="true">
                <span className={s.overlayLabel}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
