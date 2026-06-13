"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import s from "./Contact.module.css";

const DEPARTMENTS = [
  "Cardiology", "Orthopedics", "Gynecology", "Neurology",
  "Pediatrics", "Dermatology", "Ophthalmology", "Oncology", "General Medicine",
];

const INFO_ITEMS = [
  { icon: MapPin, label: "Address",   value: "42 Medical Hub, Sector 18, Noida, UP 201301" },
  { icon: Phone,  label: "Phone",     value: "+91 12345 67890  (24/7 available)" },
  { icon: Clock,  label: "OPD Hours", value: "Mon–Sat: 8 am–8 pm · Emergency: 24/7" },
];

interface FormState {
  name:    string;
  phone:   string;
  dept:    string;
  date:    string;
  message: string;
}

const INITIAL_FORM: FormState = { name: "", phone: "", dept: "", date: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const set = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hi Apex Hospital 👋",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Department: ${form.dept}`,
      `Preferred Date: ${form.date}`,
      form.message ? `Message: ${form.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/911234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className={s.section} aria-labelledby="contact-title">
      <div className={s.inner}>
        {/* Header */}
        <motion.div
          className={s.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className={s.eyebrow}>Get In Touch</span>
          <h2 id="contact-title" className={s.title}>Book an Appointment</h2>
        </motion.div>

        <div className={s.grid}>
          {/* Info + Map */}
          <motion.div
            className={s.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={s.infoItems}>
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className={s.infoItem}>
                  <div className={s.infoIconWrap} aria-hidden="true">
                    <Icon size={18} color="var(--teal)" />
                  </div>
                  <div>
                    <p className={s.infoLabel}>{label}</p>
                    <p className={s.infoValue}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className={s.mapWrap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1!2d77.3261!3d28.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzE0LjIiTiA3N8KwMTknMzQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                title="Apex Hospital location on Google Maps"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={s.formCard}>
              <p className={s.formTitle}>Fill in your details</p>
              <form className={s.form} onSubmit={handleSubmit} noValidate>
                <div className={s.row}>
                  <div className={s.fieldGroup}>
                    <label htmlFor="contact-name" className={s.label}>Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      className={s.input}
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={set("name")}
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className={s.fieldGroup}>
                    <label htmlFor="contact-phone" className={s.label}>Phone Number</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className={s.input}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set("phone")}
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="contact-dept" className={s.label}>Department</label>
                  <div className={s.selectWrap}>
                    <select
                      id="contact-dept"
                      className={s.select}
                      value={form.dept}
                      onChange={set("dept")}
                      required
                    >
                      <option value="">Select Department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="contact-date" className={s.label}>Preferred Date</label>
                  <input
                    id="contact-date"
                    type="date"
                    className={s.input}
                    value={form.date}
                    onChange={set("date")}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className={s.fieldGroup}>
                  <label htmlFor="contact-message" className={s.label}>Message (optional)</label>
                  <textarea
                    id="contact-message"
                    className={s.textarea}
                    placeholder="Describe your symptoms or any specific concern…"
                    value={form.message}
                    onChange={set("message")}
                  />
                </div>

                <button type="submit" className={s.submitBtn}>
                  <Send size={16} aria-hidden="true" />
                  Book via WhatsApp
                </button>

                <p className={s.formNote}>
                  Your details will be sent directly to our appointments team.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
