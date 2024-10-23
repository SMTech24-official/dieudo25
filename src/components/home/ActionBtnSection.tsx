import { Button } from "@/components/ui/button";
import React from "react";

const ActionBtnSection = () => {
  return (
    <header className="flex flex-col items-center justify-center py-padding_base px-padding_small text-center bg-[#F9F9F9] section-gap">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Ready to Book Your Service?
      </h1>
      <p className="text-base md:text-2xl text-gray-600 mb-8">
        Reliable garages, transparent pricing, seamless booking.
      </p>
      <Button className="mt-4 bg-secondary group hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-fit py-2 rounded text-white">
        Find a Garage Near You
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mx-2 group-hover:fill-white"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
      </Button>
    </header>

  );
};

export default ActionBtnSection;
