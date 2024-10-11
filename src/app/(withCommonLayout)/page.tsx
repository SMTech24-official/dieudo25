import React from "react";

import avatarImage from "@/assets/portrait-smiling-blonde-woman.jpg";
import ActionBtnSection from "@/components/home/ActionBtnSection";
import ServicesSection from "@/components/home/ServiceSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularFreelancers from "@/components/home/PopularFreelancers";
import SuccessStories from "@/components/home/SuccessStories";
import JoinCommunity from "@/components/home/JoinCommunity";
import Hero from "@/components/home/Hero";
import ProblemAndSolution from "@/components/home/ProblemAndSolution";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";

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

const page = () => {
  return (
    <>
      <Hero />
      <ProblemAndSolution/>
      <TestimonialsSlider />
      <ServicesSection />
      <HowItWorks />
      <PopularFreelancers />
      <ActionBtnSection />
      <SuccessStories />
      {/* <BlogPostGrid /> */}
      <JoinCommunity images={iamges} />
    </>
  );
};

export default page;
