"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // assuming you're using Next.js for image optimization
import skillhiveSectionImage from "@/assets/slider-image-1.jpg";

export default function SkillhiveSection() {
  return (
    <section className=" container  py-16 lg:py-24 ">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="md:text-5xl text-4xl font-semibold text-center text-gray-900 mb-16 text-coal"
      >
        What’s <span className="text-lilac">Brand Name</span> All About?
      </motion.h2>
      <div className="flex-col gap-9 flex lg:flex-row-reverse items-center justify-center">
        {/* Text Section */}
        <div className="flex-1  text-center lg:text-left ">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-2xl font-bold text-coal md:text-4xl"
          >
            <span className="text-lilac">Evolving Work </span> in the Online
            Landscape.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-base text-gray-500"
          >
            Pudding candy canes cheesecake icing tart bonbon muffin. Dragée
            danish halvah chupa chups pie fruitcake jujubes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2 text-base text-gray-500"
          >
            Sugar plum icing danish bonbon topping dragée caramels marshmallow.
          </motion.p>
          <motion.a
            href="#get-started"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-block mt-6 px-6 py-3 text-coal bg-lemon/80  rounded-lg font-medium hover:bg-lemon transition-colors"
          >
            Get Started
          </motion.a>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 mt-10 lg:mt-0"
        >
          <Image
            src={skillhiveSectionImage} // replace with your image path
            alt="Skillhive Illustration"
            width={600}
            height={400}
              objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
