"use client"


import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { poppins } from "@/fonts/fonts";
import { Garage } from "@/types/types";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import StarRating from "../ratings/Ratings";





export default function FeaturedGarage({
    garageName, location, pricing, owner, offers, images, ratings

}: Garage) {

    const router = useRouter()
    return (
        <div className="group relative">
            <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
            <div
                className=" p-4 rounded-lg shadow-md block z-10 relative"
            >

                {/* swiper for small devices */}
                <div className="">
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-[20vh] lg:mt-3 md:mt-6 mt-4">
                        {
                            images.banners?.map((data, idx) => <SwiperSlide key={idx}>
                                <Image
                                    src={data}
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
                <div >
                    <div className="h-full mt-2">
                        <div className="flex my-3 items-center gap-4 h-full">
                            <div className="flex rounded-full overflow-hidden">
                                <Image
                                    width={500}
                                    height={500}
                                    src={images.profile}
                                    alt={`image  of ${owner.name}`}
                                    className="size-[50px]"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold flex-1">{garageName}</h3>
                                <h2 className={`${poppins.className} text-sm font-semibold flex items-center gap-1`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span>
                                        {location.address.postalCode}
                                        {location.address.street}
                                        {location.address.canton}
                                        {location.address.city}
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">by {owner.name}</p>
                        <h2 className={`${poppins.className} my-3 flex items-center gap-1 h-10`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
                            <span className="">
                                {offers}
                            </span>
                        </h2>
                        <div className="flex justify-between items-center mt-4">
                            {/* Render stars based on rating */}
                            <div className="flex items-center gap-1">
                                <StarRating ratted={ratings.rating} size="18" />

                                <span className="text-sm">{ratings.rating} / {ratings.total}</span>
                            </div>
                            <span className="text-sm font-medium">From {pricing.currency} {pricing.price.min_price} - {pricing.currency} {pricing.price.max_price}</span>
                        </div>
                        {/* Book Now Button */}
                        <Button onClick={() => router.push(`/garages/${encodeURIComponent(owner.name)}`)}
                            className="mt-4 flex items-center justify-center gap-2 group/btn bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench  group-hover/btn:fill-white"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                            <span>Book Now</span>
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    );
}
