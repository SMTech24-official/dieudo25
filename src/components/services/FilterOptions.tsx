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
            <SelectItem value="Web Design">Web Design</SelectItem>
            <SelectItem value="Graphic Design">Graphic Design</SelectItem>
            <SelectItem value="SEO">SEO</SelectItem>
            <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
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
            <SelectItem value="Below $100">Below $100</SelectItem>
            <SelectItem value="$100 - $500">$100 - $500</SelectItem>
            <SelectItem value="$500 - $1000">$500 - $1000</SelectItem>
            <SelectItem value="Above $1000">Above $1000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
