import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | NovaCrest Medical Center",
    default: "NovaCrest Medical Center | Where Science Meets Compassion",
  },
  description:
    "NovaCrest Medical Center is a 1000-bed multi-specialty hospital with 50+ specialties, advanced diagnostics, robotic surgery, and 24/7 emergency care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-white px-4 py-3 font-bold text-[#0A2463] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <LoadingScreen />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
