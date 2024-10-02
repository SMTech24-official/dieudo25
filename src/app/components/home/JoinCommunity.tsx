"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

// Framer Motion animation settings for floating effect
const floatingVariants = {
  initial: { y: 0, x: 0 },
  animate: {
    y: [-10, 10, -10], // vertical oscillation
    x: [5, -5, 5], // horizontal oscillation
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Generate random small bubbles with positions inside the large bubble
const generateBubbles = (imageUrls: StaticImageData[], numBubbles: number) =>
  Array.from({ length: numBubbles }, (_, index) => ({
    id: index,
    size: Math.random() * (60 - 30) + 30, // random size between 30px and 60px
    src: imageUrls[index % imageUrls.length], // rotating between provided image URLs
  }));

export default function JoinCommunity({
  images,
}: {
  images: StaticImageData[];
}) {
  const bubbles = generateBubbles(images, 50); // Generate 50 bubbles dynamically

  return (
    <section className="relative w-full bg-lilac py-12 px-4 md:px-6 lg:px-4 mt-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-white text-center md:text-left md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Join our community!</h2>
          <p className="text-lg mb-6">
            We empower you to become freelancers and connect them with clients.
            We&apos;re shaping the future of work, with dozens of service
            categories to discover and explore.
          </p>
          <p className="text-lg mb-8">
            If you&apos;re ready to dive in, we&apos;d love to have you part of
            the community. Let&apos;s come together to make work better.
          </p>
          <Button className="bg-lime-400 text-black font-semibold rounded-full px-8 py-3 hover:bg-lime-500">
            Get Started
          </Button>
        </div>

        {/* Outer Large Bubble with smaller bubbles inside */}
        <div className="relative flex items-center justify-center w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-lime-400 overflow-hidden mt-12 md:mt-0">
          {/* Nested smaller bubbles */}
          <div className="grid grid-cols-5 gap-3 w-full h-full items-center justify-center">
            {bubbles.map((bubble) => (
              <motion.div
                key={bubble.id}
                className="rounded-full border-2 border-lime-400 flex items-center justify-center"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                }}
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                <Image
                  src={bubble.src}
                  alt={`Bubble ${bubble.id}`}
                  width={bubble.size}
                  height={bubble.size}
                  className="rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
