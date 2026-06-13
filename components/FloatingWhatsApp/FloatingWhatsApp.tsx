"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import s from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/911234567890?text=Hi, I'd like to book an appointment at Apex Hospital."
      target="_blank"
      rel="noopener noreferrer"
      className={s.fab}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 220, damping: 18 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse rings */}
      <span className={s.pulse} aria-hidden="true" />
      <span className={s.pulse} aria-hidden="true" />
      {/* Icon */}
      <MessageCircle size={26} color="white" fill="white" aria-hidden="true" />
    </motion.a>
  );
}
