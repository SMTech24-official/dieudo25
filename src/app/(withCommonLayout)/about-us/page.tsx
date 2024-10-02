import DigitalWorkSection from "@/app/components/about/DigitalWorkSection";
import GuidingPrinciplesSection from "@/app/components/about/GuidingPrinciplesSection";
import MeetTheTeam from "@/app/components/about/MeetTheTeam";
import SkillhiveSection from "@/app/components/about/SkillhiveSection";
import React from "react";

const AboutUS = () => {
  return (
    <main>
      <SkillhiveSection />
      <DigitalWorkSection />
      <GuidingPrinciplesSection />
      <MeetTheTeam />
    </main>
  );
};

export default AboutUS;
