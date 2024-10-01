"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import image1 from "@/assets/slider-image-1.jpg";
import image2 from "@/assets/slider-image-2.jpg";
import image3 from "@/assets/slider-image-3.jpg";
import image4 from "@/assets/slider-image-4.jpg";
import image5 from "@/assets/slider-image-4.jpg";

const freelancers = [
  {
    id: 1,
    name: "Emily Smith",
    title: "Content Writer",
    description:
      "A wordsmith with a flair for creating compelling content. From blog posts to SEO-optimized articles, I'm your go-to writer for all things wordy.",
    image: image1,
    skills: ["Content Writing", "SEO", "Copywriting"],
  },
  {
    id: 2,
    name: "Robert Miller",
    title: "Front-end Developer",
    description:
      "A passionate web developer with years of experience in creating sleek and user-friendly websites. Let's turn your digital vision into a reality!",
    image: image2,
    skills: ["React", "JavaScript", "CSS", "Responsive Web Design"],
  },
  {
    id: 3,
    name: "Keisha Davis",
    title: "Illustrator",
    description:
      "Hello, I'm Keisha, a creative graphic designer. My designs are all about telling a story through visuals. Whether it's branding, illustrations, or marketing materials, I'm here to make your vision pop!",
    image: image3,
    skills: [
      "Adobe Creative Suite",
      "Branding",
      "Illustration",
      "Print Design",
      "UI/UX Design",
    ],
  },
  {
    id: 4,
    name: "Alex Johnson",
    title: "Social Media Manager",
    description:
      "Social media guru. I specialize in growing and engaging audiences across platforms to build a thriving online community. Let's boost your brand's presence and connect with your audience on a whole new level!",
    image: image4,
    skills: [
      "Social Media Strategy",
      "Content Planning",
      "Analytics",
      "Community Management",
    ],
  },
  {
    id: 5,
    name: "Michael Brown",
    title: "Video Editor",
    description:
      "Passionate about visual storytelling and editing wizard. Whether it's a promotional video, documentary, or YouTube highlight reel, I bring your footage to life with captivating visuals that tell your story.",
    image: image5,
    skills: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
  },
];

export default function FreelancerSlider() {
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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % freelancers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + freelancers.length) % freelancers.length
    );
  };

  return (
    <div
      className="relative w-full h-[100vh] lg:h-[60vh] px-4 py-12 overflow-hidden"
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
            (currentIndex + offset + freelancers.length) % freelancers.length;
          const freelancer = freelancers[index];
          return (
            <Card
              key={freelancer.id}
              className={`absolute transition-all duration-300 ease-in-out ${
                offset === 0
                  ? "z-20 scale-100 opacity-100"
                  : Math.abs(offset) === 1
                  ? "z-10 scale-75 opacity-60"
                  : "z-0 scale-50 opacity-30"
              } ${
                offset < 0
                  ? "-translate-x-1/2"
                  : offset > 0
                  ? "translate-x-1/2"
                  : ""
              }`}
            >
              <CardContent className="p-6 xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px]">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={freelancer.image}
                    alt={freelancer.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  {freelancer.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{freelancer.title}</p>
                {offset === 0 && (
                  <>
                    <p className="text-sm mb-4">{freelancer.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {freelancer.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-lime-100 text-lime-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}
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
        aria-label="Previous freelancer"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={nextSlide}
        aria-label="Next freelancer"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
