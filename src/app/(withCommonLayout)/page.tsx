import React from "react";

import ActionBtnSection from "@/components/home/ActionBtnSection";
import Hero from "@/components/home/Hero";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import WhyChooseLiftWork from "@/components/home/WhyChooseLiftWork";
import FeaturedGarages from "@/components/home/FeaturedGarages";
import NewProblemSolution from "@/components/home/newProblemSolution";
import NewHowItWorks from "@/components/home/NewHowitWorks";


const page = () => {
  return (
    <>
      <Hero />
      <NewProblemSolution/>
      <WhyChooseLiftWork />
      <NewHowItWorks />
      <FeaturedGarages />
      <TestimonialsSlider />
      <ActionBtnSection />
    </>
  );
};

export default page;
