"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import garage1 from "@/assets/slider-image-1.jpg";
import garage2 from "@/assets/slider-image-2.jpg";
import garage3 from "@/assets/slider-image-3.jpg";
import SectionHeader from "../section/SectionHeader";
import StarPicker from 'react-star-picker'; // Importing StarPicker
import 'react-star-picker/styles.css'; // Importing styles for StarPicker

const garages = [
  {
    id: 1,
    name: "Elite Auto Repair",
    location: "123 Main St, New York, NY 10001",
    rating: 4.5,
    image: garage1,
  },
  {
    id: 2,
    name: "QuickFix Garage",
    location: "456 Elm St, Los Angeles, CA 90001",
    rating: 4.7,
    image: garage2,
  },
  {
    id: 3,
    name: "AutoCare Experts",
    location: "789 Oak St, Houston, TX 77002",
    rating: 4.5,
    image: garage3,
  },
];

export default function FeaturedGarages() {
  return (
    <section className="py-padding_base lg:py-padding_base px-padding_small">
      <SectionHeader
        subTitle="Find your best garage partner"
        title="Featured Garages"
        description="Our Trusted Garages"
      />
      <div className="max-w-[1180px] mx-auto">
        {/* Responsive Grid to display the garages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-center mx-auto">
          {garages.map((garage) => (
            <Card
              key={garage.id}
              className="relative w-full max-w-[320px] md:max-w-[330px] lg:max-w-[340px] h-[440px] shadow-md hover:shadow-lg transition-all duration-300 mx-auto group overflow-hidden rounded-xl"
            >
              {/* Hover Effect Background */}
              <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>

              <CardContent className="relative z-10 p-6 flex flex-col justify-between h-full">
                {/* Garage Image */}
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={garage.image}
                    alt={garage.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                {/* Garage Information */}
                <div>
                  <h3 className="text-lg font-semibold text-[#003366] group-hover:text-primary transition-all ease-out duration-300 mb-1">
                    {garage.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-primary transition-all ease-out duration-300 mb-4">{garage.location}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      <StarPicker
                      onChange={() => {}}
                        size={20}
                        starCount={5}
                        value={garage.rating}
                        halfStars
                        disabled={true}
                      />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 group-hover:text-primary transition-all duration-300 ease-out">
                      {garage.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                {/* Book Now Button */}
                <Button
                  className="mt-4 flex items-center group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench group-hover:fill-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  <span>Book Now</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
