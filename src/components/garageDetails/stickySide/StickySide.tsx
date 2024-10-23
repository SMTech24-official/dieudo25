import React from 'react';

import { useState } from "react";
import Image from "next/image";
import { Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StarRating from "@/components/ratings/Ratings";
import TimeSlots from "@/components/timeSlots/TimeSlots";



interface ImageType {
    profile: string;
  }
  
  interface OwnerType {
    name: string;
    contact: {
      phone: string;
      email: string;
    };
  }
  
  interface RatingsType {
    rating: number;
    total: number;
  }
  
  interface OpeningHoursType {
    id: number;
    slotName: string;
    days: string;
    open?: string; // Optional for days with a 'Closed' status
    close?: string;
    status?: string;
  }
  
  interface CapacityType {
    maxVehiclesPerDay: number;
  }
  
  interface PricingType {
    currency: string;
    price: {
      min_price: number;
      max_price: number;
    };
  }
  
  interface TimeSlotAvailabilityType {
    emergencyService: boolean;
  }
  
  interface StickySideProps {
    images: ImageType;
    owner: OwnerType;
    ratings: RatingsType;
    openingHours: OpeningHoursType[];
    realTimeAvailability: boolean;
    capacity: CapacityType;
    pricing: PricingType;
    timeSlotAvailability: TimeSlotAvailabilityType;
  }





const StickySide : React.FC<StickySideProps> = ({ images, owner, ratings, openingHours, realTimeAvailability, capacity, pricing, timeSlotAvailability }) => {



    const [isOpen, setIsOpen] = useState(false);


    return (
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
                    <Button onClick={() => setIsOpen(true)} className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group">
                        <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
                        Book Now
                    </Button>
                )}
            </CardContent>
        </Card>
    );
};

export default StickySide;