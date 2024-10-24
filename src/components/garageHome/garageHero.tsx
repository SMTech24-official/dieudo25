"use client"

import banner from "@/assets/LiftWork - Garage Homepage.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { poppins } from "@/fonts/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GarageHero = () => {
    const router = useRouter()
    return (
        <div className="bg-primary lg:h-[85vh] pb-padding_small">
            <div className="max-w-[1700px]  mx-auto px-4 flex items-center justify-between w-full h-full text-white">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-10 gap-4  justify-center items-center w-full">
                    <div className="flex flex-col justify-end items-start lg:h-[300px] space-y-8  relative 
                    xl:-translate-y-[2.9vh] 2xl:-translate-y-[1.3vh]  lg:-translate-y-[2.8vh]">
                        <div className={` ${poppins.className} lg:space-y-5 space-y-2 `}>
                            <h2 className={`  text-2xl md:text-3xl xl:text-5xl font-bold  2xl:w-[700px] tracking-wide`}>
                                Boost Your Garage’s Visibility and Simplify Your Operations
                            </h2>
                            <h4 className="text-sm md:text-base">
                                Join LiftWork and connect with more customers, streamline your bookings, and grow your business effortlessly
                            </h4>
                        </div>
                        <Button
                            onClick={() => router.push("/sign-up?q=true")}
                            type="submit"
                            className="mt-4 flex max-w-lg w-full items-center gap-2 group bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300  py-2 rounded text-white"
                        >
                            <span>Register Your Garage</span>
                        </Button>
                        <p className="text-center mt-2 md:text-lg">Already Have an Account ! <Link href={"sign-in"} className="text-secondary hover:underline">Login</Link> </p>
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
        </div >

    );
};

export default GarageHero;

