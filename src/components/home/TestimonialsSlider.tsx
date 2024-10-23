"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import image1 from "@/assets/testi1.jpg";
import image2 from "@/assets/testi2.jpg";
import image3 from "@/assets/testi3.jpg";
import image4 from "@/assets/testi6.jpg";
import SectionHeader from "../section/SectionHeader";
import StarRating from "../ratings/Ratings";
// import StarPicker from 'react-star-picker';

// import 'react-star-picker/styles.css';

const customers = [
  {
    id: 1,
    name: "Lukas Meier",
    rating: 5,
    description:
      "LiftWork made finding a reliable garage so easy! I was able to compare prices and book an appointment in minutes. The service was top-notch, and I felt confident in my choice.",
    image: image1,
  },
  {
    id: 2,
    name: "Jonas Müller",
    rating: 4,
    description:
      "Great platform to book car services! I was able to quickly find a trustworthy garage with transparent pricing. The entire experience was hassle-free, and I'll definitely use LiftWork again.",
    image: image2,
  },
  {
    id: 3,
    name: "Fabian Weber",
    rating: 5,
    description:
      "I loved how easy it was to find a garage that met my needs. The reviews and pricing were clear, and the booking process was seamless. It took the stress out of car maintenance!",
    image: image3,
  },
  {
    id: 4,
    name: "David Fischer",
    rating: 5,
    description:
      "LiftWork was a game-changer for me. I was able to secure a same-day appointment, and the garage I chose was professional and affordable. I highly recommend this service!",
    image: image4,
  }

];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const autoPlayRef = useRef<null | NodeJS.Timeout>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number>(0);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-play interval of 5 seconds

    return () => clearInterval(autoPlayRef.current as NodeJS.Timeout);
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + customers.length) % customers.length
    );
  };

  return (
    <div className="section-gap">
      <SectionHeader
        subTitle="What Our Customers Say"
        title="Trusted by Many, Loved by All"
        description="Customer Experiences That Speak for Themselves"
      />

      <div
        className="relative w-full h-[30vh] mt-12 lg:h-[30vh] overflow-hidden container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={sliderRef}
      >
        <div className="flex items-center justify-center h-full relative">
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index =
              (currentIndex + offset + customers.length) % customers.length;
            const freelancer = customers[index];
            return (
              <Card
                key={freelancer.id}
                className={`absolute hover:bg-[#eff2fd] transition-all duration-300 origin-top-left  ease-in-out group-hover:scale-100 ${offset === 0
                  ? "z-20 scale-100 opacity-100"
                  : Math.abs(offset) === 1
                    ? "z-10 scale-75 opacity-80"
                    : "z-0 scale-50 opacity-30"
                  } ${offset < 0
                    ? "-translate-x-1/2"
                    : offset > 0
                      ? "translate-x-1/2"
                      : ""
                  }`}
              >

                <CardContent className="p-6 xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px] ">

                  <h3 className="md:text-lg text-sm font-semibold mb-5 group-hover:text-primary transition-all ease-out duration-300 tracking-wide">
                    <span className="text-yellow-400 text-xl">&quot;</span> {freelancer.description} <span className="text-yellow-400 text-xl">&quot;</span>
                  </h3>

                  <div className="flex gap-4 items-center">
                    <Image
                      src={freelancer.image}
                      alt={freelancer.name}
                      objectFit="cover"
                      className="rounded-full lg:w-20 w-16 lg:h-20 h-16 object-cover"
                    />

                    <div className="">
                      <h3 className="text-lg font-semibold mb-1 text-nowrap group-hover:text-primary transition-all ease-out duration-300">
                        {freelancer.name}
                      </h3>

                      <div className="flex gap-2 items-center">
                        <StarRating ratted={freelancer.rating} size="20" />

                        <span className="text-sm text-gray-600 group-hover:text-primary transition-all duration-300 ease-out">
                          {freelancer.rating} / 5
                        </span>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
