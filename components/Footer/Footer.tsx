import Link from "next/link";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import s from "./Footer.module.css";

const DEPTS = ["Cardiology", "Orthopedics", "Gynecology", "Neurology", "Pediatrics", "Dermatology"];
const LINKS = [
  { label: "About Us",       href: "/#whyus" },
  { label: "Careers",        href: "#" },
  { label: "Health Blog",    href: "#" },
  { label: "Insurance",      href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms",          href: "#" },
];

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* Emergency bar */}
      <div className={s.emergencyBar}>
        <div className={s.emergencyInner}>
          <span className={s.emergencyText}>🚨 24/7 Emergency Services Available</span>
          <a href="tel:+911234567890" className={s.emergencyLink}>
            <Phone size={13} aria-hidden="true" />
            Call Now: +91 12345 67890
          </a>
        </div>
      </div>

      <div className={s.main}>
        <div className={s.grid}>
          {/* Brand */}
          <div className={s.brand}>
            <div className={s.logoRow}>
              <div className={s.logoIcon} aria-hidden="true">A</div>
              <div>
                <div className={s.logoName}>Apex Hospital</div>
                <div className={s.logoTagline}>Multispecialty Care</div>
              </div>
            </div>
            <p className={s.brandDesc}>
              25 years of trusted healthcare in Delhi NCR. Your health, our unwavering mission.
            </p>
            <div className={s.socials}>
              <a href="https://wa.me/911234567890" className={`${s.socialBtn} ${s.socialWa}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} color="white" />
              </a>
              <a href="tel:+911234567890" className={`${s.socialBtn} ${s.socialPh}`} aria-label="Phone">
                <Phone size={16} color="white" />
              </a>
              <a href="mailto:care@apexhospital.in" className={`${s.socialBtn} ${s.socialMail}`} aria-label="Email">
                <Mail size={16} color="white" />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div className={s.col}>
            <h3 className={s.colTitle}>Departments</h3>
            <ul className={s.linkList}>
              {DEPTS.map((d) => (
                <li key={d}>
                  <Link href="/departments" className={s.footerLink}>{d}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={s.col}>
            <h3 className={s.colTitle}>Quick Links</h3>
            <ul className={s.linkList}>
              {LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={s.footerLink}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={s.col}>
            <h3 className={s.colTitle}>Contact</h3>
            <div className={s.contactItem}>
              <MapPin size={14} color="var(--teal)" style={{ marginTop: 3, flexShrink: 0 }} aria-hidden="true" />
              <p className={s.contactText}>42 Medical Hub, Sector 18, Noida, UP 201301</p>
            </div>
            <div className={s.contactItem}>
              <Phone size={14} color="var(--teal)" style={{ flexShrink: 0 }} aria-hidden="true" />
              <p className={s.contactText}>+91 12345 67890</p>
            </div>
            <div className={s.contactItem}>
              <Mail size={14} color="var(--teal)" style={{ flexShrink: 0 }} aria-hidden="true" />
              <p className={s.contactText}>care@apexhospital.in</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={s.bottomBar}>
          <p className={s.copyright}>© 2026 Apex Multispecialty Hospital. All rights reserved.</p>
          <p className={s.credit}>
            Built by <span className={s.creditAccent}>Chirag Web Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
