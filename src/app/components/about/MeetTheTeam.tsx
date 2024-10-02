"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/assets/team-1.jpeg";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

export default function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      name: "Scott Lee",
      title: "Co-founder and Chief Technical Officer (CTO)",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image1, // replace with the correct image path
    },
    {
      name: "Bailey Lewis",
      title: "Co-founder and Chief Data & Analytics Officer",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image1, // replace with the correct image path
    },
    {
      name: "Kelly Turner",
      title: "Chief Executive Officer (CEO)",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image1, // replace with the correct image path
    },
    {
      name: "Allen Edwards",
      title: "Co-founder and Head of Operations",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image1, // replace with the correct image path
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
          <p className="mt-4 text-lg sm:w-[60%] mx-auto text-gray-500">
            We’re committed and gutsy, sharing a similar determination and core
            values. Our cause is simple: We want to empower all freelancers to
            do what they love.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-center lg:h-auto sm:h-[350px] sm:flex-row flex-col  lg:text-left bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {/* Image */}
              <div className="sm:w-[35%] w-full h-[400px] sm:h-full">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-lg w-full size-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-6 flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
                <p className="my-4 text-gray-500">{member.description}</p>
                <Link
                  href={"#"}
                  className="h-6 w-6 bg-lilac flex items-center justify-center text-white rounded-md"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
