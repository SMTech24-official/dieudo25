/* eslint-disable react/no-unescaped-entities */
"use client";

import BookingModal from "@/components/bookingModal/BookingModal";
import { Button } from "@/components/ui/button";
import { poppins } from "@/fonts/fonts";
import { Garage, TireService } from "@/types/types";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import { useState } from "react";
import ResponsiveSwiper from "@/components/responsiveSwiper/ResponsiveSwiper";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import { reviews } from "@/utils/review";
import { garage } from "@/utils/garageData";


const gallery = [
  "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar"
]





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

export default function Page({ params }: { params: { slug: string } }) {

  const [load, setLoad] = useState(reviews.limit); // Start with showing 3 reviews

  const handleReadMore = () => {
    if (load + 3 > reviews.total) {
      setLoad(3); // Reset to show only 3 reviews if limit reached
    } else {
      setLoad(prevLoad => prevLoad + 3); // Load more reviews
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  console.log(params);


  const {
    garageName,
    owner: { name: ownerName, contact: { phone, email } },
    location: { address: { street, postalCode, city, canton } },
    openingHours,
    capacity: { maxVehiclesPerDay },
    timeSlotAvailability: { emergencyService },
    servicesOffered,
    ratings: { rating, total: totalRatings },
    pricing: { currency, price: { min_price, max_price } },
    images: { profile, banners },
    realTimeAvailability,
    tireDelivery,
    specialRequests,
    offers,
    garageBio
  } = garage;

  return (
    <main className="container  md:py-20 py-10 w-full h-full">

      {/* name  */}
      <h2 className={`${poppins.className} lg:text-2xl md:text-xl text-lg md:mb-2 mb-1 font-semibold flex items-center gap-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><rect width="12" height="12" x="6" y="10" /></svg>
        <span>
          {garageName}
        </span>
      </h2>

      {/* gallarey  */}
      <ImageGrid gallery={banners} />

      {/* swiper for small devices */}
      <ResponsiveSwiper
        bannerImages={banners}
        pagination={true}
        height="30vh" // You can adjust this value
        additionalClasses="md:hidden block" // Add any additional classes you want
      />




      <div className="flex md:flex-row flex-col-reverse gap-6 w-full md:h-screen overflow-y-scroll garage_Details lg:mt-10">
        {/* Left Side (Scrollable Content) */}
        <div className="flex-1 ">
          {/* address  */}
          <div className="lg:mt-6 md:mt-6 mt-4  md:space-y-2 space-y-1">
            <h2 className={`${poppins.className} lg:text-lg font-semibold flex items-center gap-2`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              <p>
                <span>{postalCode} </span>
                <span>{street}, </span>
                <span>{city}, </span>
                <span>{canton},</span>
              </p>
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
                {garageBio}
              </p>
            </div>
            {/* End Bio */}
            {/* SERVICE */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Service Offered</h4>
              <div>
                {/* serviceName
serviceDetails
min_price
max_price
averageTime */}
                {servicesOffered.map((service, index) => (
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
                {servicesOffered.map((service, index) => (
                  <div key={index} className="p-4  w-96 h-40 relative rounded-md shadow-md space-y-2 hover:shadow-lg flex flex-col hover:cursor-pointer">
                    <h5 className="font-semibold flex-1">{service.serviceName}</h5>
                    <p className="flex-grow">{service.serviceDetails}</p>
                    <p className="text-primary font-bold">Starting From {service.min_price.toFixed(2)}</p>
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
                {reviews.data.slice(0, load).map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleReadMore}
                  type="submit"
                  className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white"
                >
                  <span>Read  <span>{load + 3 > reviews.total ? "Less" : "More"}</span> </span>
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
          </div>
        </div>
        {/* End Right Side (Sticky Content) */}
      </div>
    </main>
  );
}

