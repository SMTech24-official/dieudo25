"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ClipboardList, UserCheck, Star, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../section/SectionHeader";
import { Button } from "../ui/button";


const steps = [
  {
    id: 1,
    icon: <CheckCircle className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
    title: <>Search <br /> For a Service Near You</>,
    description:
      "Start by entering the service you need (e.g., tire replacement, oil change, brake repair) in our search bar. LiftWork will instantly show you a list of verified garages near you that specialize in the service you’re looking for. Filter by services, location, availability, customer reviews, or pricing to find the perfect match for your needs.",
  },
  {
    id: 2,
    icon: <ClipboardList className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white " />,
    title: "Submit a Request for a Quote",
    description:
      "Once you’ve selected a garage, submit a quote request directly through the platform. Fill out a short form describing your vehicle and the services you need (e.g., tire replacement, brake repairs, general maintenance). You can also specify additional details, such as preferred appointment times or any concerns you might have.",
  },
  {
    id: 3,
    icon: <UserCheck className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
    title: <>Review and Accept <br /> the Quote</>,
    description:
      "After submitting your request, the garage will review your information and send a detailed quote for the services. You’ll receive notifications when your quote is ready. Review the pricing, services offered, and time estimates. If satisfied, you can confirm the service and proceed with the booking.",
  },
  {
    id: 4,
    icon: <Star className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
    title: "Book Your Service Appointment",
    description:
      "Choose a time slot that works best for you from the garage’s real-time availability calendar. LiftWork’s scheduling system ensures that only available slots are shown, allowing for instant booking. Once confirmed, your appointment details will be saved to your dashboard, where you can track the service progress.",
  },
  {
    id: 5,
    icon: <Shield className="h-6 w-6 text-secondary group-hover:fill-secondary" />,
    title: "Drop Off Your Vehicle at the Garage",
    description:
      "On the day of your appointment, simply drop off your vehicle at the selected garage. The garage will handle everything from there, keeping you updated through the LiftWork platform on the status of your service.",
  },
  {
    id: 6,
    icon: <Clock className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
    title: <>Pay and Pick Up Your <br /> Vehicle</>,
    description:
      "After the service is completed, you’ll receive a final invoice through the platform. Pay directly online, and when your vehicle is ready, you can pick it up at the garage, knowing everything has been taken care of.",
  },
];




export default function HowItWorks() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<null | NodeJS.Timeout>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);







  // Auto-play functionality
  useEffect(() => {
    if (true) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Auto-play interval of 5 seconds

      return () => clearInterval(autoPlayRef.current as NodeJS.Timeout);
    }

  }, [currentIndex]);

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX - startX;
    if (moveX > 100) {
      prevSlide();
      setIsDragging(false);
    } else if (moveX < -100) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    if (moveX > 100) {
      prevSlide();
      setIsDragging(false);
    } else if (moveX < -100) {
      nextSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + steps.length) % steps.length
    );
  };





  return (
    <div
      id="how-it-works"
      className={` py-padding_base lg:py-padding_extra_large px-padding_small`}
    >
      <SectionHeader
        subTitle="What Our Customers Say"
        title="Trusted by Many, Loved by All"
        description="Customer Experiences That Speak for Themselves"
      />

      <div
        className="relative container h-[60vh] lg:h-[50vh] overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div className="flex items-center justify-center h-full relative ">
          {[-2, -1, 0, 1, 2, 3].map((offset) => {
            const index = (currentIndex + offset + steps.length) % steps.length;
            const step = steps[index];
            return (
              <Card
                key={step?.id}
                className={`absolute transition-all duration-300 origin-top-left  ease-in-out  group ${offset === 0
                  ? "z-20 scale-100 opacity-100"
                  : Math.abs(offset) === 1
                    ? "z-10 scale-75 opacity-60"
                    : "z-0 scale-50 opacity-30"
                  } ${offset < 0
                    ? "-translate-x-1/2"
                    : offset > 0
                      ? "translate-x-1/2"
                      : ""
                  }`}
              >
                <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
                <CardContent className="relative z-10 flex flex-col items-center justify-between text-center p-6  xl:w-[400px] lg:w-[400px] md:w-[500px] sm:w-[400px] w-[300px] xl:h-[400px] lg:h-[400px] md:h-[320px] sm:h-[400px] h-[300px] ">
                  {/* Hover Effect Background Layer */}
                  <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>

                  {/* Icon and Content */}
                  <div className="relative z-10 flex flex-col items-center space-y-5"> {/* Flex layout for full height */}
                    <div className="flex text-xl font-bold gap-2 items-center"> {/* Centering the icon */}
                      {step.icon} <span className="text-secondary">Step {step.id}</span>
                    </div>
                    <h3 className="font-bold sm:text-2xl text-center">
                      {step.title}
                    </h3>
                    <p className="sm:text-base text-xs">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2"
          onClick={prevSlide}
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2"
          onClick={nextSlide}
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
