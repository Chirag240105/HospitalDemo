import type { Metadata } from "next";
import Hero      from "@/components/Hero/Hero";
import Stats     from "@/components/Stats/Stats";
import WhyUs     from "@/components/WhyUs/WhyUs";
import Reviews   from "@/components/Reviews/Reviews";
import HomeLinks from "@/components/HomeLinks/HomeLinks";

export const metadata: Metadata = {
  title: "Apex Multispecialty Hospital | Expert Care, Human Touch",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <HomeLinks />
      <WhyUs />
      <Reviews />
    </main>
  );
}
