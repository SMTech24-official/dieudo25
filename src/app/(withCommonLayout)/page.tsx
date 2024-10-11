import React from "react";

import avatarImage from "@/assets/portrait-smiling-blonde-woman.jpg";
import ActionBtnSection from "@/components/home/ActionBtnSection";
import FreelancerSlider from "@/components/home/FreelancherSlider";
import ServicesSection from "@/components/home/ServiceSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularFreelancers from "@/components/home/PopularFreelancers";
import SuccessStories from "@/components/home/SuccessStories";
import JoinCommunity from "@/components/home/JoinCommunity";
import WhyChooseLiftWork from "@/components/home/WhyChooseLiftWork";
import FeaturedGarages from "@/components/home/FeaturedGarages";

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
      <ActionBtnSection />
      <FreelancerSlider />
      <WhyChooseLiftWork />
      <ServicesSection />
      <HowItWorks />
      <FeaturedGarages />
      <PopularFreelancers />
      <SuccessStories />
      {/* <BlogPostGrid /> */}
      <JoinCommunity images={iamges} />
    </>
  );
};

export default page;
