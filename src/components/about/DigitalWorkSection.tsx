"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import digitalWorkSectionImage from "@/assets/slider-image-3.jpg";

export default function DigitalWorkSection() {
  // Setting up scroll animation
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation on scroll up and down
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="flex flex-col container lg:flex-row items-center justify-center gap-8 py-16 lg:py-24 ">
      {/* Text Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="flex-1 text-center lg:text-left "
      >
        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
          Pioneering <span className="text-indigo-600">Digital Work</span>
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          Pudding candy canes cheesecake icing tart bonbon muffin. Dragée danish
          halvah chupa chups pie fruitcake jujubes. Sugar plum icing danish
          bonbon topping dragée caramels marshmallow.
        </p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-indigo-600">Our Vision</h3>
            <p className="mt-2 text-gray-500">
              To be the online hub for affordable, high quality, and reliable
              short-term work.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-indigo-600">Our Mission</h3>
            <p className="mt-2 text-gray-500">
              We aim to empower independent professionals to grow their
              businesses and connections.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className="flex-1 mt-10 lg:mt-0"
      >
        <Image
          src={digitalWorkSectionImage} // replace with your image path
          alt="Digital Work Illustration"
          width={600}
          height={400}
            objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </section>
  );
}
