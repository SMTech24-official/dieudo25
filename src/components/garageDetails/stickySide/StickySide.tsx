import React from 'react';

import { useState } from "react";
import Image from "next/image";
import { BadgeSwissFranc, Calendar, Car, Clipboard, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StarRating from "@/components/ratings/Ratings";
import TimeSlots from "@/components/garageDetails/timeSlots/TimeSlots";
import BookingModal from '@/components/bookingModal/BookingModal';
import { GoArrowUpRight } from 'react-icons/go';
import { isGarageOpen } from '@/helper/openStatus';



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





const StickySide: React.FC<StickySideProps> = ({ images, owner, ratings, openingHours, realTimeAvailability, capacity, pricing, timeSlotAvailability }) => {



    const [isOpen, setIsOpen] = useState(false);


    return (
        <Card className="lg:w-1/3 lg:sticky lg:top-20 h-fit lg:mb-[30px]">
            <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Image
                            width={60}
                            height={60}
                            src={images.profile}
                            alt={`Profile of ${owner.name}`}
                            className="rounded-full w-12 h-12"
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{owner.name}</h2>
                            <div className="flex items-center gap-1">
                                <StarRating ratted={ratings.rating} size="17" />
                                <span className="text-sm">{ratings.rating} / {ratings.total}</span>
                            </div>
                        </div>
                    </div>
                    <div className='text-base'>
                        <p className={`${isGarageOpen(openingHours) === "Open" ? "text-green-500"
                            : isGarageOpen(openingHours) === "Closing Soon" ? "text-yellow-500"
                                : "text-red-500"}`}>
                            {isGarageOpen(openingHours)}
                        </p>

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
                        <div className="flex justify-center">
                            <Button className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white">
                                Message Us <GoArrowUpRight className="text-lg" />
                            </Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="hours">
                        <div className="space-y-2 py-4">
                            {openingHours?.map(data => (
                                <TimeSlots key={data.id} data={data} />
                            ))}
                            <Button onClick={() => setIsOpen(true)} className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group">
                                <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
                                Book Now
                            </Button>
                        </div>
                    </TabsContent>
                    <TabsContent value="info">
                        <div className="space-y-4 py-4">
                            <div className="flex items-center gap-2">
                                <Car />
                                <p className='flex items-center justify-between w-full'>Max Capacity: <span className='text-secondary'>{capacity.maxVehiclesPerDay} cars /day</span></p>
                            </div>
                            <div className="flex items-center gap-2">
                                <BadgeSwissFranc />
                                <p className='flex items-center justify-between w-full'>Price /Hours: <span className='text-secondary'>{pricing.currency} {pricing.price.max_price}</span></p>

                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldAlert />
                                <p className='flex items-center justify-between w-full'>Emergency Service: <span className='text-secondary'>{timeSlotAvailability.emergencyService ? "Available" : "Not Available"}</span></p>
                            </div>

                            <div className="mt-5 space-y-2 ">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Daily Overview
                                </h4>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">Today: <strong>8 spots left</strong> out of 39 available slots</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm">Tomorrow: <strong>10 spots available</strong> out of 39 slots</span>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

        </Card>
    );
};

export default StickySide;