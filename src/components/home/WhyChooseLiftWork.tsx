"use client";

import { Card } from "@/components/ui/card";
import SectionHeader from "../section/SectionHeader";
import { CheckCircle, Star, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
    title: <> Ensuring Price <br/> Clarity and Comparison </> ,
    description:
      "LiftWork integrates a price transparency feature, where each garage displays detailed pricing for every service offered. Users can compare prices between different garages to choose the one that fits their budget, ensuring better cost control from the start of the process.",
  },
  {
    icon: <Star className="h-8 w-8 text-secondary group-hover:fill-secondary" />,
    title: <>Ease of Finding <br/> Garage Available Quickly</>,
    description:
      "The LiftWork platform provides real-time visualization of available time slots. Clients can instantly see which garages have openings at specific times and book immediately, reducing wait times and making scheduling easier.",
  },
  {
    icon: <Users className="h-8 w-8 text-secondary group-hover:fill-secondary" />,
    title: <>Consistent and Reliable <br /> Service Quality</>,
    description:
      "Every garage listed on LiftWork is accompanied by authentic reviews and ratings from other customers. This allows users to rely on real experiences when choosing a reliable garage, based on the quality of service provided, helping to avoid unpleasant surprises.",
  },
  {
    icon: <Shield className="h-8 w-8 text-secondary group-hover:fill-secondary group-hover:stroke-secondary" />,
    title: <> Dashboard for Easy <br /> Booking and Updates </>,
    description:
      "LiftWork offers an intuitive dashboard where customers can easily manage all their bookings, track service progress, and communicate directly with the garage. This feature ensures better organization and reduces misunderstandings or lost communications.",
  },
];

export default function WhyChooseLiftWork() {
  return (
    <section className="py-padding_base px-padding_small">
      <SectionHeader
        subTitle="Why Choose LiftWork?"
        title="Key Features"
        description="Discover the advantages of working with us."
      />
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> 
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col group items-center justify-between w-full px-5 py-10 shadow-md h-full bg-white relative overflow-hidden transition-all ease-linear duration-300" // Main Card classes
            >
              {/* Hover Effect Background Layer */}
              <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
              
              {/* Icon and Content */}
              <div className="relative z-10 flex flex-col items-center gap-4"> {/* Flex layout for full height */}
                <div className=""> {/* Centering the icon */}
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-center">
                  {feature.title}
                </h3>
                <p className="text-sm ">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
