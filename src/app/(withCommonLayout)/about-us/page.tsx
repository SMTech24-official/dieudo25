import DigitalWorkSection from "@/app/components/about/DigitalWorkSection";
import GuidingPrinciplesSection from "@/app/components/about/GuidingPrinciplesSection";
import SkillhiveSection from "@/app/components/about/SkillhiveSection";
import React from "react";

const AboutUS = () => {
  return (
    <main>
      <SkillhiveSection />
      <DigitalWorkSection />
      <GuidingPrinciplesSection />
    </main>
  );
};

export default AboutUS;
