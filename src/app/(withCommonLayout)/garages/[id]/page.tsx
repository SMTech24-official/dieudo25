"use client";

import { useState } from "react";
import Image from "next/image";
import { Clipboard, MapPin, Package, ShoppingCart, Battery, Cog, Wrench, Zap, Stethoscope, ShieldCheck, Cpu, Paintbrush, Truck, AlertTriangle, Car, Plus, Gauge } from "lucide-react";
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
import Offer from "@/components/garageDetails/garageOffer/Offer";
import { PiTireDuotone, PiEngineThin } from "react-icons/pi";
import { RiOilLine } from "react-icons/ri";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { SiJfrogpipelines } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import CancellationPolicyModal from "@/components/garageDetails/cancelPolicy/CancelPolicy";
import AdditionalInformation from "@/components/garageDetails/additionalInfo/AdditionalInformation";
import Reviews from "@/components/garageDetails/reviews/Reviews";
import ServicesOffered from "@/components/garageDetails/servicesOfferd/ServicesOfferd";
import StickySide from "@/components/garageDetails/stickySide/StickySide";

export default function GarageDetailsPage({ params }: { params: { slug: string } }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <StickySide images={images} owner={owner} capacity={capacity} openingHours={openingHours} pricing={pricing} ratings={ratings} realTimeAvailability={realTimeAvailability} timeSlotAvailability={timeSlotAvailability}/>

        <div className="lg:flex-1">

          <Card className="mb-8 bg-section">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{garageBio}</p>
            </CardContent>
          </Card>

          <div className="mb-8">
            <Offer />
          </div>

          <ServicesOffered servicesOffered={servicesOffered} />
          <Reviews />

          <AdditionalInformation owner={owner} location={location} />

        </div>
      </div>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}