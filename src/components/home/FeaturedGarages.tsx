"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import garage1 from "@/assets/slider-image-1.jpg";
import garage2 from "@/assets/slider-image-2.jpg";
import garage3 from "@/assets/slider-image-3.jpg";
import SectionHeader from "../section/SectionHeader";
import StarPicker from 'react-star-picker';
import 'react-star-picker/styles.css';

const garages = [
  {
    id: 1,
    name: "Elite Auto Repair",
    location: "New York, NY",
    rating: 4.5,
    image: garage1,
  },
  {
    id: 2,
    name: "QuickFix Garage",
    location: "Los Angeles, CA",
    rating: 4.7,
    image: garage2,
  },
  {
    id: 3,
    name: "AutoCare Experts",
    location: "Houston, TX",
    rating: 4.9,
    image: garage3,
  },
];

export default function FeaturedGarages() {
  return (
    <section className="py-12 lg:py-40 px-4">
      <SectionHeader
        subTitle="Find your best garage partner"
        title="Featured Garages"
        description="Our Trusted Garages"
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4 max-w-[1200px] w-full px-2 sm:px-0">
          {garages.map((garage) => (
            <Card
              key={garage.id}
              className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[360px] h-[480px]"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={garage.image}
                    alt={garage.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#003366] mb-1">
                    {garage.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{garage.location}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center w-32"> {/* Fixed width for alignment */}
                      <StarPicker
                        size={20}
                        starCount={5}
                        disabled={true}
                        value={garage.rating} // Provide the rating value directly
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {garage.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <Button
                  className="mt-4 flex items-center group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all w-full py-2 rounded text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench group-hover:fill-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  <span>Book Now </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
