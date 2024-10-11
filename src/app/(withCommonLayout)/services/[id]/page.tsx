/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
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
    <main className="container  py-20">
      <h2 className="mb-6 text-2xl font-medium">Title</h2>
      <div className="flex md:flex-row flex-col-reverse gap-6 w-full">
        {/* Left Side (Sticky Content) */}
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

        {/* Right Side (Scrollable Content) */}
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

            {/* swiper  */}

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-[30vh]">
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
        </div>
      </div>
    </main>
  );
}
