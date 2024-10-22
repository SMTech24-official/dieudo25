"use client"

import banner from "@/assets/LiftWork - Homepage .png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { poppins } from "@/fonts/fonts";

const Hero = () => {

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const search = (e.target as HTMLFormElement).search.value;
        console.log(search);
        // handle form submission logic here
        alert(`Search with: ${search}`);
    };


    return (
        <div className="bg-primary lg:h-[85vh] pb-padding_small">
            <div className="max-w-[1700px]  mx-auto px-4 flex items-center justify-between w-full h-full text-white">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-10 gap-4  justify-center items-center w-full">
                    <div className="flex flex-col justify-end items-start lg:h-[300px] space-y-8  relative 
                    xl:-translate-y-[2.9vh] 2xl:-translate-y-[1.3vh]  lg:-translate-y-[2.8vh]">
                        <div className={` ${poppins.className} lg:space-y-5 space-y-2 `}>
                            <h2 className={`  text-2xl md:text-3xl xl:text-5xl font-bold  2xl:w-[700px] `}>
                                Find trusted garages near you,
                                Right Away
                            </h2>
                            <h4 className="text-sm md:text-base">
                                Get a quote or book a service from
                                top rated garages instantly for your
                                tire or maintenance.
                            </h4>
                        </div>
                        <form className="max-w-lg w-full" onSubmit={(e) => handleSearch(e)}>
                            <div className="flex items-center gap-2 relative">
                                <label htmlFor="Search" className="md:text-xl">Search:</label>
                                <input
                                    id="Search"
                                    name="search"
                                    type="search"
                                    placeholder="Search for any service..."
                                    className="w-full peer px-4 py-2 text-black placeholder-gray-400 bg-primary border-b border-primary outline-none focus:border-white"
                                    required
                                />
                                <Wrench className={cn(" transition flex items-center", "transition-all duration-300 group-hover:fill-white absolute right-0 opacity-35 peer-focus:opacity-100")} />
                            </div>


                            <Button
                                type="submit"
                                className="mt-4 flex items-center gap-2 group bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded text-white"
                            >
                                <span>Find garages</span>
                            </Button>
                        </form>
                    </div>
                    <div className="2xl:h-[660px] xl:h-[600px] lg:h-[600px] h-[50vh] w-full">
                        <Image
                            src={banner}
                            alt="Banner Image"
                            objectFit="cover"
                            className="rounded-lg !w-full !h-full object-cover "
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Hero;