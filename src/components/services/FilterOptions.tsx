/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";
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

export default function FilterOptions() {
  const [serviceOption, setServiceOption] = React.useState("");

  const handleServiceOptionChange = (value: string) => {
    setServiceOption(value);
    // Add logic to filter services based on selected option
  };
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
    </div>
  );
}

