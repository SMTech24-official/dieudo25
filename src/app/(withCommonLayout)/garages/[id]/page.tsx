
"use client";

import BookingModal from "@/components/bookingModal/BookingModal";
import { Button } from "@/components/ui/button";
import { poppins } from "@/fonts/fonts";
import { TireService } from "@/types/types";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import { useState } from "react";
import ResponsiveSwiper from "@/components/responsiveSwiper/ResponsiveSwiper";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import { reviews } from "@/utils/review";
import { garage } from "@/utils/garageData";
import TimeSlots from "@/components/timeSlots/TimeSlots";
import { isGarageOpen } from "@/helper/openStatus";
import Image from "next/image";
import wheel from "@/assets/wheel.png"
import { Clipboard } from "lucide-react";
import StarRating from "@/components/ratings/Ratings";






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
    <section className="container  py-padding_base pb-0 px-padding_small">




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

      <div className="flex lg:gap-10 md:gap-4 w-full h-full">
        {/* Left Side (Scrollable Content) */}
        <div className="xl:w-[25vw] lg:w-[35vw] w-[70vw]  h-[65vh]  sticky top-20 p-4 hidden md:block xl:mb-28 lg:mb-80 md:mb-80 mb-4">
          <div className="bg-white h-[70vh] sticky top-10  border w-full p-4 shadow-md">
            {/* owner  */}
            <div className="flex items-center gap-4">
              <div className="flex rounded-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={profile}
                  alt={`image  of ${ownerName}`}
                  objectFit="cover"
                  className="size-[50px]"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm flex-1">{ownerName}</h3>
                <div className="flex items-center gap-1">

                  <StarRating ratted={rating} size="17" />

                  <span className="text-sm">{rating} / {totalRatings}</span>
                </div>
              </div>
            </div>
            {/* contact  */}
            <div className="mt-5">
              <p className="uppercase font-semibold">Contact Information</p>
              <div className="space-y-2 mt-4 ">
                <p className="flex items-center gap-2 ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                  {phone}</p>
                <p className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  {email}
                </p>
              </div>
            </div>
            {/* openihng hours  */}
            <div className="mt-5">
              <p className="uppercase font-semibold flex items-center justify-between"><span>Open Hours</span> <span className={`${isGarageOpen(openingHours) === "Closed" ? "text-red-600" : "text-green-600"}`}>{isGarageOpen(openingHours)}</span> </p>
              <div className="space-y-2 mt-2">
                {
                  openingHours.map(data => <TimeSlots key={data.id} data={data} />)
                }
              </div>
            </div>
            <div className="mt-5">
              <p className="uppercase font-semibold flex items-center justify-between"><span>Max Capacity / day</span> <span className="">{maxVehiclesPerDay} CAr</span> </p>
            </div>
            <div className="mt-5">
              <p className="uppercase font-semibold flex items-center justify-between"><span>Price range</span> <span className="">{currency} {min_price} - {max_price}</span> </p>
            </div>
            <div className="mt-5">
              <p className="uppercase font-semibold flex items-center justify-between"><span>Emergency Service</span> <span className="">{emergencyService ? "Available" : "Not Available"}</span> </p>
            </div>

            {
              realTimeAvailability && (
                <div className="mb-5">
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-full px-4 py-2 rounded text-white"
                  >
                    Book Now
                  </Button>
                  <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
              )
            }

          </div>
        </div>
        {/* End Left Side (Scrollable Content) */}


        {/* Right Side (Sticky Content) */}
        <div className="lg:flex-1 lg:pb-10 md:pb-8 pb-4">
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
              className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white group"
            >
              <span>Request a Quote</span>
              <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
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


            <div className="lg:mt-10 md:mt-7 mt-5  shadow-md rounded-md flex items-center justify-center gap-2 md:p-6 p-3 bg-hover_Color animate-pulse">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tags fill-secondary"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" /><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" /><circle cx="6.5" cy="9.5" r=".5" fill="currentColor" /></svg>

              <p className="md:text-lg">
                {offers}
              </p>
            </div>


            {/* SERVICE */}
            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Service Offered</h4>
              <div>
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
              <div className="flex items-center justify-center flex-wrap gap-4">
                {servicesOffered.map((service, index) => (
                  <div key={index} className="p-4  w-96 h-40 relative rounded-md shadow-md space-y-2 hover:shadow-lg flex flex-col hover:cursor-pointer">
                    <h5 className="font-semibold flex-1">{service.serviceName}</h5>
                    <p className="flex-grow">{service.serviceDetails}</p>
                    <div>
                      <p className="text-primary font-bold">Average Time: {service.averageTime}</p>
                      <p className="text-primary font-bold">Starting From {service.min_price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* price */}

            {/* Request a Quote */}
            <div className="flex justify-center md:py-4 py-3">
              <button
                type="submit"
                className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80 group w-fit px-4 py-2 rounded text-white"
              >
                <span>Request a Quote</span>
                <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
              </button>
            </div>
            {/* Request a Quote */}

            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Tier Delivery</h4>
              <div className="flex items-center justify-center flex-wrap gap-4 ">
                {tireDelivery.map((tier, index) => (
                  <div key={index} className="p-4  w-96 h-40 relative rounded-md shadow-md space-y-2 hover:shadow-lg flex flex-col hover:cursor-pointer">
                    <Image src={wheel} alt="wheel logo" width={50} height={50} objectFit="cover" />
                    <div>
                      <h5 className="font-semibold flex-1">Brand: {tier.brand}</h5>
                      <p className="flex-grow">Delivery Time: {tier.deliveryTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:mt-10 md:mt-7 mt-5 space-y-2 md:space-y-4">
              <h4 className="text-coal font-bold text-lg uppercase">Special Services</h4>
              <div className="flex items-center justify-center flex-wrap gap-4 ">
                {specialRequests.map((special, index) => (
                  <div key={index} className="p-4  w-96 h-32 relative rounded-md shadow-md space-y-2 hover:shadow-lg flex flex-col hover:cursor-pointer">
                    <h5 className="font-semibold flex-1">{special.serviceType}</h5>
                    <p className="flex-grow">{special.description}</p>
                  </div>
                ))}
              </div>
            </div>


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
        {/* End Right Side (Sticky Content) */}
      </div>
    </section>
  );
}

