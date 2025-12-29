"use client";
import FivethSections from "@/components/hero-section-demo-1";
import { FourthSections } from "./components/main-page-components/FourthSections";
import { HeroSections } from "./components/main-page-components/Herosections";
import CredibilitySection from "./components/main-page-components/SecondSections";
import ServicesSection from "./components/main-page-components/ThirSection";

export default function ComingSoon() {
  return (
    // Landing page components
    <div className=" w-full">
      <HeroSections />
      {/* Next-sections */}
      <CredibilitySection />
      {/* Third components */}
      <ServicesSection/>
      {/* Fourth Sections */}
      <FourthSections/>
      {/* Fivth sections */}
      <FivethSections/>
    </div>
  );
}
