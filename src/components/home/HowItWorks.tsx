"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CheckCircle, ClipboardList, UserCheck, Star, Shield, Clock } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search for a Service",
    description:
      "Start by entering the service you need (e.g., tire replacement, oil change, brake repair) in our search bar. LiftWork will instantly show you a list of verified garages near you that specialize in the service you’re looking for. Filter by services, location, availability, customer reviews, or pricing to find the perfect match for your needs.",
    icon: <CheckCircle className="h-6 w-6 text-lime-400" />,
  },
  {
    id: 2,
    title: "Request a Quote",
    description:
      "Once you’ve selected a garage, submit a quote request directly through the platform. Fill out a short form describing your vehicle and the services you need (e.g., tire replacement, brake repairs, general maintenance). You can also specify additional details, such as preferred appointment times or any concerns you might have.",
    icon: <ClipboardList className="h-6 w-6 text-lime-400" />,
  },
  {
    id: 3,
    title: "Review and Accept",
    description:
      "After submitting your request, the garage will review your information and send a detailed quote for the services. You’ll receive notifications when your quote is ready. Review the pricing, services offered, and time estimates. If satisfied, you can confirm the service and proceed with the booking.",
    icon: <UserCheck className="h-6 w-6 text-lime-400" />,
  },
  {
    id: 4,
    title: "Book Your Appointment",
    description:
      "Choose a time slot that works best for you from the garage’s real-time availability calendar. LiftWork’s scheduling system ensures that only available slots are shown, allowing for instant booking. Once confirmed, your appointment details will be saved to your dashboard, where you can track the service progress.",
    icon: <Star className="h-6 w-6 text-lime-400" />,
  },
  {
    id: 5,
    title: "Drop Off Your Vehicle",
    description:
      "On the day of your appointment, simply drop off your vehicle at the selected garage. The garage will handle everything from there, keeping you updated through the LiftWork platform on the status of your service.",
    icon: <Shield className="h-6 w-6 text-lime-400" />,
  },
  {
    id: 6,
    title: "Pay and Drive Away",
    description:
      "After the service is completed, you’ll receive a final invoice through the platform. Pay directly online, and when your vehicle is ready, you can pick it up at the garage, knowing everything has been taken care of.",
    icon: <Clock className="h-6 w-6 text-lime-400" />,
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

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-10">How It Works</h2>
      <div className="max-w-6xl mx-auto relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
          }}
        >
          {steps.map((step, index) => (
            <Card
              key={step.id}
              className="flex-shrink-0 w-[100%] sm:w-[50%] lg:w-[33.33%] h-[450px] transition-all duration-300 mx-4"
            >
              <CardContent className="flex flex-col items-center justify-between text-center p-9 h-full">
                <div className="mb-2">{step.icon}</div>
                <h3 className="text-xl font-semibold text-[#003366] mb-1">{step.title}</h3>
                <p className="text-base text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-[0px] top-1/2 -translate-y-1/2 mx-3"
          onClick={prevSlide}
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-[0px] top-1/2 -translate-y-1/2"
          onClick={nextSlide}
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
