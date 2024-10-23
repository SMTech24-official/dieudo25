"use client"

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { poppins } from "@/fonts/fonts";
import { Garage } from "@/types/types";
import { useRouter } from "next/navigation";
import StarRating from "../ratings/Ratings";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Award, Clock } from "lucide-react";

export default function FeaturedGarage({
    garageName, location, pricing, owner, offers, images, ratings
}: Garage) {
    const router = useRouter()

    return (
        <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg">
            <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
            <CardContent className="p-4 z-10 relative">
                <Swiper pagination={true} modules={[Pagination]} className="w-full h-[20vh] lg:mt-3 md:mt-6 mt-4 rounded-lg overflow-hidden">
                    {images.banners?.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <Image
                                src={data}
                                alt="Garage Image"
                                layout="fill"
                                objectFit="cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Link href={`/garages/${encodeURIComponent(owner.name)}`} className="block mt-4">
                    <div className="flex items-center gap-4">
                        <Image
                            width={50}
                            height={50}
                            src={images.profile}
                            alt={`image of ${owner.name}`}
                            className="rounded-full w-10 h-10 object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-lg">{garageName}</h3>
                            <p className="text-sm text-gray-600">by {owner.name}</p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">
                                {location.address.postalCode} {location.address.street}, {location.address.canton}, {location.address.city}
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span className="text-sm">{offers}</span>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <StarRating ratted={ratings.rating} size="18" />
                                <span className="text-sm">{ratings.rating} / {ratings.total}</span>
                            </div>
                            <p className="bg-blue-50 text-sm font-semibold p-[2px] text-black !hover:bg-blue-50">CHF {pricing.price.min_price} / hour</p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2 bg-blue-50 p-3 rounded-lg">
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
                </Link>
            </CardContent>
        </Card>
    );
}