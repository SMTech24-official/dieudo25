"use client";

import { Card } from "@/components/ui/card";
import SectionHeader from "../section/SectionHeader";
import { CheckCircle, Star, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
    title: "Ensuring price transparency and comparability",
    description:
      "LiftWork integrates a price transparency feature, where each garage displays detailed pricing for every service offered. Users can compare prices between different garages to choose the one that fits their budget, ensuring better cost control from the start of the process.",
  },
  {
    icon: <Star className="h-6 w-6 text-secondary group-hover:fill-secondary" />,
    title: "Ease of finding a garage available quickly",
    description:
      "The LiftWork platform provides real-time visualization of available time slots. Clients can instantly see which garages have openings at specific times and book immediately, reducing wait times and making scheduling easier.",
  },
  {
    icon: <Users className="h-6 w-6 text-secondary group-hover:fill-secondary" />,
    title: "Consistent service quality",
    description:
      "Every garage listed on LiftWork is accompanied by authentic reviews and ratings from other customers. This allows users to rely on real experiences when choosing a reliable garage, based on the quality of service provided, helping to avoid unpleasant surprises.",
  },
  {
    icon: <Shield className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-secondary" />,
    title: "Ease of managing communications and appointments",
    description:
      "LiftWork offers an intuitive dashboard where customers can easily manage all their bookings, track service progress, and communicate directly with the garage. This feature ensures better organization and reduces misunderstandings or lost communications.",
  },
];

export default function WhyChooseLiftWork() {
  return (
    <section className="py-12 lg:py-40 px-4">
      <SectionHeader
        subTitle="Why Choose LiftWork?"
        title="Key Features"
        description="Discover the advantages of working with us."
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"> 
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col group items-center p-6 shadow-md h-[400px] bg-white relative overflow-hidden transition-all ease-linear duration-300" // Main Card classes
            >
              {/* Hover Effect Background Layer */}
              <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
              
              {/* Icon and Content */}
              <div className="relative z-10 flex flex-col items-center justify-between h-full"> {/* Flex layout for full height */}
                <div className="mb-4 flex justify-center items-center h-12 w-12"> {/* Centering the icon */}
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-primary flex-1 group-hover:text-primary transition-all ease-out duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 text-center group-hover:text-primary transition-all ease-out duration-300">
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
