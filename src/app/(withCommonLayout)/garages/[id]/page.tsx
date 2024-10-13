/* eslint-disable react/no-unescaped-entities */
"use client";

import BookingModal from "@/components/bookingModal/BookingModal";
import { Button } from "@/components/ui/button";

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
import { poppins } from "@/fonts/fonts";
import { Review, TireService } from "@/types/types";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import { useState } from "react";


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




// Create an array of tire-related garage services
const tireServices: TireService[] = [
  {
    serviceName: "Tire Rotation",
    description: "Rotate your tires to ensure even wear and extend tire life.",
    price: 25.00
  },
  {
    serviceName: "Tire Alignment",
    description: "Adjust the angles of the wheels to the manufacturer's specifications.",
    price: 75.00
  },
  {
    serviceName: "Tire Balancing",
    description: "Balance your tires to ensure a smooth ride and even wear.",
    price: 50.00
  },
  {
    serviceName: "Tire Inspection",
    description: "Inspect tires for wear, damage, and proper inflation.",
    price: 15.00
  },
  {
    serviceName: "Tire Replacement",
    description: "Replace old or damaged tires with new ones.",
    price: 100.00
  },
  {
    serviceName: "Tire Repair",
    description: "Repair punctured or damaged tires to extend their life.",
    price: 30.00
  },
  {
    serviceName: "Winter Tire Installation",
    description: "Install winter tires for improved traction in snow and ice.",
    price: 40.00
  },
  {
    serviceName: "Summer Tire Installation",
    description: "Install summer tires for optimal performance in warm weather.",
    price: 40.00
  },
  {
    serviceName: "Tire Pressure Monitoring System (TPMS) Check",
    description: "Check and reset your TPMS for accurate tire pressure readings.",
    price: 20.00
  },
  {
    serviceName: "Tire Clean and Shine",
    description: "Clean and apply shine to your tires for enhanced appearance.",
    price: 10.00
  }
];

const reviews: Review[] = [
  {
    customerName: "John Doe",
    rating: 4.5,
    comment: "Fast and professional service, tires delivered and installed in one hour. Very satisfied!",
    date: "2024-10-01"
  },
  {
    customerName: "Jane Smith",
    rating: 4,
    comment: "Excellent service! The staff was friendly, and they did a great job on my tires. Highly recommended!",
    date: "2024-09-20"
  },
  {
    customerName: "Mike Johnson",
    rating: 4,
    comment: "Good service, but it took a bit longer than expected. Overall, happy with the result.",
    date: "2024-09-15"
  },
  {
    customerName: "John Doe",
    rating: 4.5,
    comment: "Fast and professional service, tires delivered and installed in one hour. Very satisfied!",
    date: "2024-10-01"
  },
  {
    customerName: "Jane Smith",
    rating: 4,
    comment: "Excellent service! The staff was friendly, and they did a great job on my tires. Highly recommended!",
    date: "2024-09-20"
  },
  {
    customerName: "Mike Johnson",
    rating: 4,
    comment: "Good service, but it took a bit longer than expected. Overall, happy with the result.",
    date: "2024-09-15"
  }
];

export default function Page({ params }: { params: { slug: string } }) {

  const [load, setLoad] = useState(3)

  const handleReadMore = () => {
    setLoad(load === 3 ? 6 : 3);
  };

  const [isOpen, setIsOpen] = useState(false);
  console.log(params);
  return (
    <main className="container  md:py-20 py-10 w-full h-full">

      {/* name  */}
      <h2 className={`${poppins.className} lg:text-2xl md:text-xl text-lg md:mb-2 mb-1 font-semibold flex items-center gap-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><rect width="12" height="12" x="6" y="10" /></svg>
        <span>
          Quick Tire Garage
        </span>
      </h2>

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

      {/* swiper for small devices */}
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

 


      <div className="flex md:flex-row flex-col-reverse gap-6 w-full md:h-screen overflow-y-scroll garage_Details lg:mt-10">
        {/* Left Side (Scrollable Content) */}
        <div className="flex-1 ">
               {/* address  */}
      <div className="lg:mt-6 md:mt-6 mt-4  md:space-y-2 space-y-1">
        <h2 className={`${poppins.className} lg:text-lg font-semibold flex items-center gap-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
          <span>
            1234 Tire Lane, Springfield, IL, 62704
          </span>
        </h2>
      </div>
          {/* Location */}
          <div className="h-[40vh] lg:mt-6 md:mt-6 mt-4">
            <iframe
              src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              allowFullScreen
            ></iframe>
          </div>

          {/* Request a Quote */}
          <div className="flex justify-center md:py-4 py-3">
            <button
              type="submit"
              className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white"
            >
              <span>Request a Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
            </button>
          </div>
          {/* Request a Quote */}

          <div className="service_Details">
            {/* Bio */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">BIO</h4>
              <p>
                At Smith's Auto Garage, we believe in keeping your ride running
                smoothly, no matter the make or model. With over 20 years of
                experience, our team of certified mechanics is dedicated to providing
                top-notch service, from routine maintenance to major repairs. Whether
                you need a quick oil change or a complete engine overhaul, we’ve got
                you covered. We pride ourselves on honest assessments, fair pricing,
                and getting you back on the road as soon as possible.
                <br />
                When your car deserves the best, think Smith's Auto Garage — your
                trusted neighborhood mechanics.
              </p>
            </div>
            {/* End Bio */}
            {/* SERVICE */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Service Offered</h4>
              <div>
                {tireServices.map((service, index) => (
                  <div key={index} className="p-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-life-buoy"><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /><circle cx="12" cy="12" r="4" /></svg>
                    <p className="font-semibold">{service.serviceName}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* End Bio */}

            {/* price */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Competitive Price</h4>
              <div className="flex items-center justify-center flex-wrap lg:gap-4 ">
                {tireServices.map((service, index) => (
                  <div key={index} className="p-4  w-96 h-40 relative rounded-md shadow-md space-y-2 hover:shadow-lg flex flex-col hover:cursor-pointer">
                    <h5 className="font-semibold flex-1">{service.serviceName}</h5>
                    <p className="flex-grow">{service.description}</p>
                    <p className="text-primary font-bold">${service.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* price */}

            {/* Request a Quote */}
            <div className="flex justify-center md:py-4 py-3">
              <button
                type="submit"
                className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white"
              >
                <span>Request a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              </button>
            </div>
            {/* Request a Quote */}

            {/* review  */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-6 md:space-y-10">
              <h4 className="text-coal font-bold text-lg uppercase">Customer Reviews</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.slice(0, load).map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleReadMore}
                  type="submit"
                  className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white"
                >
                  <span>Read  <span>{load ===3 ? "More": "Less"}</span> </span>
                </button>
              </div>
            </div>


          </div>
        </div>
        {/* End Left Side (Scrollable Content) */}


        {/* Right Side (Sticky Content) */}
        <div className="h-[50vh] md:w-[30%] top-0 sticky">
          <div className="bg-white h-full w-full p-4 shadow-md">
            <div className="mb-5">
              <Button
                onClick={() => setIsOpen(true)}
                className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-full px-4 py-2 rounded text-white"
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
        {/* End Right Side (Sticky Content) */}
      </div>
    </main>
  );
}

