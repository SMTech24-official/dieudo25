"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import garage1 from "@/assets/slider-image-1.jpg";
import garage2 from "@/assets/slider-image-2.jpg";
import garage3 from "@/assets/slider-image-3.jpg";
import SectionHeader from "../section/SectionHeader";


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
    <section className="py-12 px-4">
      <SectionHeader
        subTitle=""
        title="Our Trusted Garages"
        description=""
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-4 max-w-[1200px] w-full px-2 sm:px-0">
          {garages.map((garage) => (
            <Card
              key={garage.id}
              className="w-full max-w-[320px] md:max-w-[350px] lg:max-w-[360px] h-[480px]" // Slightly wider cards
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
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-5 w-5 ${
                          index < Math.floor(garage.rating)
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {garage.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <Button variant="default" className="w-full bg-primary">
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



