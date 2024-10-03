import DigitalWorkSection from "@/components/about/DigitalWorkSection";
import GuidingPrinciplesSection from "@/components/about/GuidingPrinciplesSection";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import SkillhiveSection from "@/components/about/SkillhiveSection";

import React from "react";
import avatarImage from "@/assets/portrait-smiling-blonde-woman.jpg";
import JoinCommunity from "@/components/home/JoinCommunity";

const iamges = [
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
  avatarImage,
];

const AboutUS = () => {
  return (
    <main>
      <SkillhiveSection />
      <DigitalWorkSection />
      <GuidingPrinciplesSection />
      <MeetTheTeam />
      <JoinCommunity images={iamges} />
    </main>
  );
};

export default AboutUS;
