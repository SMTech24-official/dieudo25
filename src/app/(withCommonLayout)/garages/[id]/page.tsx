"use client";

import { useState } from "react";
import Image from "next/image";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { poppins } from "@/fonts/fonts";
import { garage } from "@/utils/garageData";
import { reviews } from "@/utils/review";
import BookingModal from "@/components/bookingModal/BookingModal";
import ImageGrid from "@/components/imageGrid/ImageGrid";
import ResponsiveSwiper from "@/components/responsiveSwiper/ResponsiveSwiper";
import StarRating from "@/components/ratings/Ratings";
import TimeSlots from "@/components/timeSlots/TimeSlots";
import ReviewCard from "@/components/reviewCard/ReviewCard";
import Offer from "@/components/garageOffer/Offer";
import { isGarageOpen } from "@/helper/openStatus";

export default function GarageDetailsPage({ params }: { params: { slug: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState(3);

  const {
    garageName,
    owner,
    location,
    openingHours,
    capacity,
    timeSlotAvailability,
    servicesOffered,
    ratings,
    pricing,
    images,
    realTimeAvailability,
    tireDelivery,
    specialRequests,
    garageBio
  } = garage;

  const handleReadMore = () => {
    setReviewsToShow(prev => prev + 3 > reviews.total ? 3 : prev + 3);
  };

  return (
    <section className="container py-8 px-4">
      <h1 className={`${poppins.className} text-3xl font-bold mb-6 flex items-center gap-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><rect width="12" height="12" x="6" y="10" /></svg>
        {garageName}
      </h1>

      <div className="hidden md:block">
        <ImageGrid gallery={images.banners} />
      </div>
      <ResponsiveSwiper
        bannerImages={images.banners}
        pagination={true}
        height="30vh"
        additionalClasses="md:hidden block"
      />

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <Card className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <Image
                width={60}
                height={60}
                src={images.profile}
                alt={`Profile of ${owner.name}`}
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">{owner.name}</h2>
                <div className="flex items-center gap-1">
                  <StarRating ratted={ratings.rating} size="17" />
                  <span className="text-sm">{ratings.rating} / {ratings.total}</span>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="hours">Hours</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>
              <TabsContent value="contact">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" /></svg>
                    {owner.contact.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    {owner.contact.email}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="hours">
                <div className="space-y-2">
                  {openingHours.map(data => (
                    <TimeSlots key={data.id} data={data} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="info">
                <div className="space-y-2">
                  <p>Max Capacity: {capacity.maxVehiclesPerDay} cars/day</p>
                  <p>Price Range: {pricing.currency} {pricing.price.min_price} - {pricing.price.max_price}</p>
                  <p>Emergency Service: {timeSlotAvailability.emergencyService ? "Available" : "Not Available"}</p>
                </div>
              </TabsContent>
            </Tabs>
            {realTimeAvailability && (
              <Button
                onClick={() => setIsOpen(true)}
                className="mt-4 w-full"
              >
                Book Now
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="lg:flex-1">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                {location.address.street}, {location.address.postalCode} {location.address.city}, {location.address.canton}
              </p>
              <div className="h-[40vh] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{garageBio}</p>
            </CardContent>
          </Card>

          <Offer/>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Services Offered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesOffered.map((service, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.serviceName}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{service.serviceDetails}</p>
                      <p className="mt-2 font-bold">Average Time: {service.averageTime}</p>
                      <p className="font-bold">Starting From {service.min_price.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.data.slice(0, reviewsToShow).map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Button onClick={handleReadMore}>
                  Read {reviewsToShow + 3 > reviews.total ? "Less" : "More"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}