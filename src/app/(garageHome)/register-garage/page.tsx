import GarageHero from "@/components/garageHome/garageHero";
import GarageHowItWorks from "@/components/garageHome/garageHowItWorks";
import GarageProblemSolution from "@/components/garageHome/garageProbandSolution";
import GarageWhyChooseLiftWork from "@/components/garageHome/garageWhyChoose";
import ActionBtnSection from "@/components/home/ActionBtnSection";
import FeaturedGarages from "@/components/home/FeaturedGarages";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";


const page = () => {
  return (
    <>
      <GarageHero />
      <GarageProblemSolution/>
      <GarageWhyChooseLiftWork />
      <GarageHowItWorks />
      <FeaturedGarages />
      <TestimonialsSlider />
      <ActionBtnSection />
    </>
  );
};

export default page;
