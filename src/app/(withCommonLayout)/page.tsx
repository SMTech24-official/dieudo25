import React from "react";

import avatarImage from "@/assets/portrait-smiling-blonde-woman.jpg";
import ActionBtnSection from "@/components/home/ActionBtnSection";
import FreelancerSlider from "@/components/home/FreelancherSlider";
import ServicesSection from "@/components/home/ServiceSection";
import HowItWorks from "@/components/home/HowItWorks";
import PopularFreelancers from "@/components/home/PopularFreelancers";
import SuccessStories from "@/components/home/SuccessStories";
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

const page = () => {
  return (
    <>
      <ActionBtnSection />
      <FreelancerSlider />
      <ServicesSection />
      <HowItWorks />
      <PopularFreelancers />
      <SuccessStories />
      {/* <BlogPostGrid /> */}
      <JoinCommunity images={iamges} />
    </>
  );
};

export default page;
