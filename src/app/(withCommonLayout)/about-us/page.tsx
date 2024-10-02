import DigitalWorkSection from "@/app/components/about/DigitalWorkSection";
import GuidingPrinciplesSection from "@/app/components/about/GuidingPrinciplesSection";
import MeetTheTeam from "@/app/components/about/MeetTheTeam";
import SkillhiveSection from "@/app/components/about/SkillhiveSection";
import JoinCommunity from "@/app/components/home/JoinCommunity";
import React from "react";
import avatarImage from "@/assets/portrait-smiling-blonde-woman.jpg";

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
