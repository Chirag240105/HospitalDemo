"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import s from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Departments", href: "/departments" },
  { label: "Services",    href: "/services" },
  { label: "Doctors",     href: "/doctors" },
  { label: "Gallery",     href: "/gallery" },
  { label: "Contact",     href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  // On non-home pages the navbar is always solid
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolled(window.scrollY > 60);
    handler(); // run once on mount
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClass = `${s.nav} ${solid ? s.navScrolled : s.navTransparent}`;

  return (
    <>
      <motion.header
        className={navClass}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="banner"
      >
        <div className={s.inner}>
          {/* Logo */}
          <Link href="/" className={s.logo} aria-label="Apex Hospital – Home">
            <div className={s.logoIcon} aria-hidden="true">A</div>
            <div>
              <div className={`${s.logoName} ${solid ? s.logoNameDark : s.logoNameLight}`}>
                Apex Hospital
              </div>
              <div className={`${s.logoTagline} ${solid ? s.logoTagDark : s.logoTagLight}`}>
                Multispecialty Care
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={s.links} aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link
                  key={label}
                  href={href}
                  className={[
                    s.link,
                    solid ? s.linkDark : s.linkLight,
                    isActive ? s.linkActive : "",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className={s.ctas}>
            <a href="tel:+911234567890" className={s.btnEmergency}>
              <Phone size={13} aria-hidden="true" />
              Emergency
            </a>
            <Link href="/contact" className={s.btnBook}>
              Book Appointment
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={s.hamburger}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={22} color={solid ? "var(--navy)" : "white"} />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={s.mobileMenu}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              className={s.mobileClose}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} color="white" />
            </button>

            {NAV_LINKS.map(({ label, href }, i) => {
              const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={href}
                    className={`${s.mobileLink} ${isActive ? s.mobileLinkActive : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.div>
              );
            })}

            <div className={s.mobileCtas}>
              <a href="tel:+911234567890" className={s.mobileBtnEmergency}>
                <Phone size={15} aria-hidden="true" /> Emergency Call
              </a>
              <Link href="/contact" className={s.mobileBtnBook} onClick={() => setOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
