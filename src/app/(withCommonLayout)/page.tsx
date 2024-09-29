import React from "react";
import ActionBtnSection from "../components/home/ActionBtnSection";
import FreelancerSlider from "../components/home/FreelancherSlider";
import ServicesSection from "../components/home/ServiceSection";
import HowItWorks from "../components/home/HowItWorks";
import PopularFreelancers from "../components/home/PopularFreelancers";

const page = () => {
  return (
    <>
      <ActionBtnSection />
      <FreelancerSlider />
      <ServicesSection />
      <HowItWorks />
      <PopularFreelancers />
    </>
  );
};

export default page;
