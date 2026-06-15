"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-[#0A2463] text-white"
          aria-live="polite"
          aria-label="NovaCrest loading"
        >
          <div className="w-min text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl shadow-[#3DD6F5]/30"
            >
              <HeartPulse size={38} className="text-[#3DD6F5]" />
            </motion.div>
            <p className="font-display mt-5 whitespace-nowrap text-2xl font-bold">NovaCrest</p>
            <svg className="mt-5 h-8 w-64" viewBox="0 0 260 32" role="img" aria-label="Heartbeat loading line">
              <motion.path
                d="M2 18H58L70 6L86 28L102 12L116 18H258"
                fill="none"
                stroke="#3DD6F5"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
