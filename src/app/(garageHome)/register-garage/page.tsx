import GarageHero from "@/components/garageHome/garageHero";
import ActionBtnSection from "@/components/home/ActionBtnSection";
import FeaturedGarages from "@/components/home/FeaturedGarages";
import Hero from "@/components/home/Hero";
import NewHowItWorks from "@/components/home/NewHowitWorks";
import NewProblemSolution from "@/components/home/newProblemSolution";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import WhyChooseLiftWork from "@/components/home/WhyChooseLiftWork";


const page = () => {
  return (
    <>
      <GarageHero />
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
