import React from "react";

import ActionBtnSection from "@/components/home/ActionBtnSection";
import HowItWorks from "@/components/home/HowItWorks";
import Hero from "@/components/home/Hero";
import ProblemAndSolution from "@/components/home/ProblemAndSolution";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import WhyChooseLiftWork from "@/components/home/WhyChooseLiftWork";
import FeaturedGarages from "@/components/home/FeaturedGarages";
import NewProblemSolution from "@/components/home/newProblemSolution";


const page = () => {
  return (
    <>
      <Hero />
      <NewProblemSolution/>
      <WhyChooseLiftWork />
      <HowItWorks />
      <FeaturedGarages />
      <TestimonialsSlider />
      <ActionBtnSection />
    </>
  );
};

export default page;
