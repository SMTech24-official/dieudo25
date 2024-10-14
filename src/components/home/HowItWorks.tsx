"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, UserCheck, Star, Shield, Clock } from "lucide-react";
import SectionHeader from "../section/SectionHeader";

const steps = [
  {
    id: 1,
    icon: <CheckCircle className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />, 
    title: "Search for a Service",
    description:
      "Start by entering the service you need (e.g., tire replacement, oil change, brake repair) in our search bar. LiftWork will instantly show you a list of verified garages near you that specialize in the service you’re looking for. Filter by services, location, availability, customer reviews, or pricing to find the perfect match for your needs.",
  },
  {
    id: 2,
    icon: <ClipboardList className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white " />,
    title: "Request a Quote",
    description:
      "Once you’ve selected a garage, submit a quote request directly through the platform. Fill out a short form describing your vehicle and the services you need (e.g., tire replacement, brake repairs, general maintenance). You can also specify additional details, such as preferred appointment times or any concerns you might have.",
  },
  {
    id: 3,
    icon: <UserCheck className="h-6 w-6 text-secondary group-hover:fill-secondary " />, 
    title: "Review and Accept",
    description:
      "After submitting your request, the garage will review your information and send a detailed quote for the services. You’ll receive notifications when your quote is ready. Review the pricing, services offered, and time estimates. If satisfied, you can confirm the service and proceed with the booking.",
  },
  {
    id: 4,
    icon: <Star className="h-6 w-6 text-secondary group-hover:fill-secondary " />, 
    title: "Book Your Appointment",
    description:
      "Choose a time slot that works best for you from the garage’s real-time availability calendar. LiftWork’s scheduling system ensures that only available slots are shown, allowing for instant booking. Once confirmed, your appointment details will be saved to your dashboard, where you can track the service progress.",
  },
  {
    id: 5,
    icon: <Shield className="h-6 w-6 text-secondary group-hover:fill-secondary" />, 
    title: "Drop Off Your Vehicle",
    description:
      "On the day of your appointment, simply drop off your vehicle at the selected garage. The garage will handle everything from there, keeping you updated through the LiftWork platform on the status of your service.",
  },
  {
    id: 6,
    icon: <Clock className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
    title: "Pay and Drive Away",
    description:
      "After the service is completed, you’ll receive a final invoice through the platform. Pay directly online, and when your vehicle is ready, you can pick it up at the garage, knowing everything has been taken care of.",
  },
];

export default function HowItWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<null | NodeJS.Timeout>(null);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(autoPlayRef.current as NodeJS.Timeout);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
  };

  // Hover effect - pause on hover
  const pauseOnHover = () => clearInterval(autoPlayRef.current as NodeJS.Timeout);

  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  return (
    <section id="how-it-works" className="py-padding_extra_large lg:p-padding_base px-padding_small justify-center relative max-w-4xl mx-auto">
      <SectionHeader
        subTitle="How It Works"
        title="Working methodology"
        description=" The best way to work"
      />
      <div
  className="flex transition-transform duration-300 ease-in-out"
  style={{
    transform: `translateX(-${currentIndex * 100}%)`, // Slide one full card at a time
  }}
  onMouseEnter={pauseOnHover}
  onMouseLeave={resumeAutoPlay}
>
  {steps.map((step) => (
    <Card
      key={step.id}
      className="flex-shrink-0 h-auto mx-auto transition-all duration-300 cursor-pointer relative "
      style={{
        // Custom widths for different screen sizes
        width: 'calc(100%)', // Custom width for small devices (2/3)
        '@media (min-width: 640px)': { width: '50%' }, // Custom width for medium devices
        '@media (min-width: 1024px)': { width: '33.33%' }, // Custom width for large devices
      }} 
    >
      {/* Hover Effect Background */}
      <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>

      <CardContent className="relative z-10 flex flex-col items-center justify-between text-center p-6 h-full">
        <div className="mb-2">{step.icon}</div>
        <h3 className="text-xl font-semibold text-[#003366] flex-1 group-hover:text-primary transition-all duration-300">
          {step.title}
        </h3>
        <p className="text-base text-gray-600 group-hover:text-primary transition-all duration-300">
          {step.description}
        </p>
      </CardContent>
    </Card>
  ))}
      </div>





    </section>
  );
}
