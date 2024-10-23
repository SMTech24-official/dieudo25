/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { servicesList, ServicesListType } from "./services";
import { Button } from "../ui/button";
import { useState } from "react";

export default function FilterOptions() {
  const [serviceOption, setServiceOption] = useState("");

  const handleServiceOptionChange = (value: string) => {
    setServiceOption(value);
    // Add logic to filter services based on selected option
  };



  const [locationCoords, setLocationCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null)

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocationCoords({ latitude, longitude });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  console.log(locationCoords);






  return (
    <div className="flex gap-4 mb-6 items-center">
      <Select onValueChange={handleServiceOptionChange} defaultValue="">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Service Option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Service Options</SelectLabel>
            {
              servicesList.map((data: ServicesListType, idx: number) => <SelectItem key={idx} value={data.value}>{data.name}</SelectItem>)
            }
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <Button onClick={getLocation} className=" bg-secondary group hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-fit py-2 rounded text-white">
          Find a Garage Near You
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mx-2 group-hover:fill-white"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
        </Button>
      </div>
    </div>
  );
}

