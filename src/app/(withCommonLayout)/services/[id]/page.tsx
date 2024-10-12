/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-Image-element */
"use client";

import BookingModal from "@/components/bookingModal/BookingModal";
import Video from "@/components/services/serviceDetailsPage/Video";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


import image1 from "../../../../assets/slider-image-1.jpg";
import image2 from "../../../../assets/slider-image-2.jpg";
import image3 from "../../../../assets/slider-image-3.jpg";
import image4 from "../../../../assets/slider-image-4.jpg";
import Image from "next/image";


const gallery = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {

    image: image3,

  },
  {

    image: image4,

  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(params);
  return (
    <main className="container  md:py-20 py-10">
      {/* gallarey  */}
      <div className="md:grid grid-cols-4 grid-rows-2 lg:gap-4 md:gap-2 hidden">
        {/* First div covering 2 columns and 2 rows */}
        <div className="rounded-md col-span-2 row-span-2">
          <Image src={gallery[0].image} alt={`Image ${0 + 1}`} className="rounded-md w-full h-full object-cover" />
        </div>

        {/* Second div */}
        <div className="rounded-md col-start-3 col-span-1 row-start-1 row-span-1">
          <Image src={gallery[1].image} alt={`Image ${1 + 1}`} className="rounded-md w-full h-full object-cover" />
        </div>

        {/* Third div */}
        <div className="rounded-md col-start-3 col-span-1 row-start-2 row-span-1">
          <Image src={gallery[2].image} alt={`Image ${2 + 1}`} className="rounded-md w-full h-full object-cover" />
        </div>

        {/* Fourth div */}
        <div className="rounded-md col-start-4 row-start-1 col-span-1 row-span-1">
          <Image src={gallery[3].image} alt={`Image ${3 + 1}`} className="rounded-md w-full h-full object-cover" />
        </div>

        {/* Fifth div */}
        <div className="rounded-md col-start-4 col-span-1 row-start-2 row-span-1">
          <Image src={gallery[1].image} alt={`Image ${1 + 1}`} className="rounded-md w-full h-full object-cover" />
        </div>
      </div>


      <div className="md:hidden block">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-[30vh] lg:mt-6 md:mt-6 mt-4">
          {
            gallery?.map((data, idx) => <SwiperSlide key={idx}>
              <Image
                src={data.image}
                alt="Garage Image"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </SwiperSlide>
            )
          }

        </Swiper>
      </div>

      {/* heading include name and address  */}
      <div className="lg:mt-6 md:mt-6 mt-4  md:space-y-2 space-y-1">
        <h2 className={`${"font"} lg:text-2xl md:text-xl text-lg font-semibold`}>Quick Tire Garage</h2>
        <h2 className={`${"font"} lg:text-lg font-semibold`}>1234 Tire Lane, Springfield, IL, 62704</h2>
      </div>

      {/* location  */}
      {/* Google Map  */}
      <div className="relative h-[40vh] lg:mt-6 md:mt-6 mt-4 ">
        <iframe src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          allowFullScreen></iframe>
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-6 w-full">
        {/* Left Side (Sticky Content) */}
        <div className="flex-1 h-[70vh] overflow-y-auto service_Details">
          <Video />

          {/* bio  */}
          <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
            <h4 className="text-coal font-bold text-lg">BIO</h4>
            <p>At Smith's Auto Garage, we believe in keeping your ride running smoothly, no matter the make or model. With over 20 years of experience, our team of certified mechanics is dedicated to providing top-notch service, from routine maintenance to major repairs. Whether you need a quick oil change or a complete engine overhaul, we’ve got you covered. We pride ourselves on honest assessments, fair pricing, and getting you back on the road as soon as possible.

              When your car deserves the best, think Smith's Auto Garage — your trusted neighborhood mechanics.</p>
          </div>
          {/* bio  */}
          <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
            <h3 className="text-coal font-bold text-lg">Workshop Gallery</h3>

          </div>
        </div>
        {/* Right Side (Scrollable Content) */}

        <div className="md:w-[30%] w-full sticky top-20 h-[70vh]">
          <div className="bg-white h-full w-full p-4 shadow-md">
            <div className="mb-5">
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-lemon/80 hover:bg-lemon active:scale-95 text-coal w-full"
              >
                Book Now
              </Button>
              <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
            {/* Add your sticky content here */}
            <p>Important Links</p>
            <p>Contact Information</p>
            {/* You can add more elements as needed */}
          </div>
        </div>
      </div>
    </main>
  );
}
