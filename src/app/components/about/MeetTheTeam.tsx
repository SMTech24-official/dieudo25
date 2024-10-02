"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "@/assets/team-1.jpeg";
import image2 from "@/assets/team-2.jpeg";
import image3 from "@/assets/team-3.jpeg";
import image4 from "@/assets/team-4.jpeg";

export default function MeetTheTeam() {
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
      imageSrc: image2, // replace with the correct image path
    },
    {
      name: "Kelly Turner",
      title: "Chief Executive Officer (CEO)",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image3, // replace with the correct image path
    },
    {
      name: "Allen Edwards",
      title: "Co-founder and Head of Operations",
      description:
        "Pie soufflé plum pie marshmallow carrot bar powder dragée pie apple sugar bar powder sweet! Bar plum marshmallow ice cake plum pie candy marshmallow pie brownie donut pie pastry powder bar carrot dragée ice canes bear.",
      imageSrc: image4, // replace with the correct image path
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
          <p className="mt-4 text-lg text-gray-500">
            We’re committed and gutsy, sharing a similar determination and core
            values. Our cause is simple: We want to empower all freelancers to
            do what they love.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center lg:flex-row lg:text-left bg-white shadow-lg rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              {/* Image */}
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-lg w-full lg:w-40 h-40 object-cover"
              />

              {/* Text */}
              <div className="mt-6 lg:mt-0 lg:ml-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.title}</p>
                <p className="mt-4 text-gray-500">{member.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-lime-500 hover:text-lime-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zm-8.356 20.745h-3.038v-7.634h3.038v7.634zM7.98 11.61H7.96c-.987 0-1.627-.678-1.627-1.527 0-.867.658-1.527 1.665-1.527.987 0 1.626.66 1.646 1.527 0 .85-.658 1.527-1.665 1.527zm12.378 9.135h-3.035v-4.155c0-1.041-.373-1.751-1.305-1.751-.711 0-1.135.479-1.321.942-.068.16-.086.379-.086.599v4.365H11.59c.04-7.092 0-7.634 0-7.634h3.035v1.079c.403-.619 1.126-1.498 2.743-1.498 2.007 0 3.515 1.311 3.515 4.129v4.924z"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
