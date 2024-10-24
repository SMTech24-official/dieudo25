import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import React from "react";

const GarageActionBtnSection = () => {
    return (
        <header className="flex flex-col items-center justify-center py-padding_base px-padding_small text-center bg-[#F9F9F9] section-gap">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Ready to register Your Garage ?
            </h1>
            <Button className="mt-4 bg-secondary group hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-fit py-2 rounded text-white">
                Register Now
                <UserPlus className="h-4 w-4 inline-block ml-2 group-hover:fill-white" />
            </Button>
        </header>

    );
};

export default GarageActionBtnSection;
