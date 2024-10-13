/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterOptions() {
  const [serviceOption, setServiceOption] = React.useState("");
  const [budget, setBudget] = React.useState("");

  const handleServiceOptionChange = (value: string) => {
    setServiceOption(value);
    // Add logic to filter services based on selected option
  };

  const handleBudgetChange = (value: string) => {
    setBudget(value);
    // Add logic to filter services based on selected budget
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
            <SelectItem value="Tire Installation">Tire Installation</SelectItem>
            <SelectItem value="Tire Balancing">Tire Balancing</SelectItem>
            <SelectItem value="Wheel Alignment">Wheel Alignment</SelectItem>
            <SelectItem value="Tire Storage">Tire Storage</SelectItem>
            <SelectItem value="Vehicle Pickup Service">Vehicle Pickup Service</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={handleBudgetChange} defaultValue="">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Budget" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Budget</SelectLabel>
            <SelectItem value="Below CHF 100">Below CHF 100</SelectItem>
            <SelectItem value="CHF 100 - CHF 500">CHF 100 - CHF 500</SelectItem>
            <SelectItem value="CHF 500 - CHF 1000">CHF 500 - CHF 1000</SelectItem>
            <SelectItem value="Above CHF 1000">Above CHF 1000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
