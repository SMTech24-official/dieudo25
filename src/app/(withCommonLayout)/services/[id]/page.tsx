"use client";

import BookingModal from "@/components/bookingModal/BookingModal";
import Video from "@/components/services/serviceDetailsPage/Video";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(params);
  return (
    <main className="container  py-20">
      <h2 className="mb-6 text-2xl font-medium">Title</h2>
      <div className="flex md:flex-row flex-col-reverse gap-6 w-full">
        {/* Left Side (Sticky Content) */}
        <div className="md:w-[30%] w-full sticky top-20 h-[70vh]">
          <div className="bg-white h-full w-full p-4 shadow-md">
            <div className="mb-5">
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-lemon/80 hover:bg-lemon active:scale-95 text-coal w-full"
              >
                Book Now
              </Button>
              <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
            {/* Add your sticky content here */}
            <p>Important Links</p>
            <p>Contact Information</p>
            {/* You can add more elements as needed */}
          </div>
        </div>

        {/* Right Side (Scrollable Content) */}
        <div className="flex-1 h-[70vh] overflow-y-auto">
          <Video />
          <div className="mt-5 space-y-2">
            <h4 className="text-coal font-bold text-lg">BIO</h4>
            <p>At Smith's Auto Garage, we believe in keeping your ride running smoothly, no matter the make or model. With over 20 years of experience, our team of certified mechanics is dedicated to providing top-notch service, from routine maintenance to major repairs. Whether you need a quick oil change or a complete engine overhaul, we’ve got you covered. We pride ourselves on honest assessments, fair pricing, and getting you back on the road as soon as possible.

              When your car deserves the best, think Smith's Auto Garage — your trusted neighborhood mechanics.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
