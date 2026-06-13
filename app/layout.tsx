import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll      from "@/components/SmoothScroll/SmoothScroll";
import Navbar            from "@/components/Navbar/Navbar";
import Footer            from "@/components/Footer/Footer";
import FloatingWhatsApp  from "@/components/FloatingWhatsApp/FloatingWhatsApp";

export const metadata: Metadata = {
  title: {
    template: "%s | Apex Multispecialty Hospital",
    default:  "Apex Multispecialty Hospital | Expert Care, Human Touch",
  },
  description:
    "Trusted multispecialty hospital in Delhi NCR with 200+ doctors, 15+ departments, and 50,000+ patients treated. NABH Accredited.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
