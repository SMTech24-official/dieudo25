import { Button } from "@/components/ui/button";
import React from "react";

const ActionBtnSection = () => {
  return (
    <header className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Hire the Worlds Best Freelancers
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8">
        Limitless work. Vetted talent.
      </p>
      <Button className="bg-lemon hover:bg-lemon/80 text-gray-800 font-semibold py-2 px-6 rounded-full text-lg">
        Sign up - It&apos;s free
      </Button>
    </header>
  );
};

export default ActionBtnSection;
