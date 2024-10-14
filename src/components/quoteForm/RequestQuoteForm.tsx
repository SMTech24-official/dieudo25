"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export default function RequestQuoteForm() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [tireBudgetVisible, setTireBudgetVisible] = useState(false); // For showing tire budget options

  const onSubmit = (data:any) => {
    console.log("Quote request submitted", data);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 1. Pre-Filled Personal Information */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Personal Information (Pre-filled)</legend>
          <Input type="text" value="Jean Dupont" readOnly />
          <Input type="email" value="jean.dupont@gmail.com" readOnly />
          <Input type="tel" value="+33 6 12 34 56 78" readOnly />
          <Input type="text" value="12 Rue des Pneu, 75000 Paris" readOnly />
        </fieldset>

        {/* 2. Vehicle Information */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Vehicle Information</legend>
          <Select {...register("vehicle")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Renault Clio IV">Renault Clio IV, 2018, Gasoline</SelectItem>
                <SelectItem value="Another Vehicle">Another Vehicle</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input type="text" placeholder="Vehicle Make and Model" {...register("vehicleMakeModel")} />
          <Input type="text" placeholder="Year of Manufacture" {...register("yearOfManufacture")} />
          <Input type="text" placeholder="License Plate Number" {...register("licensePlateNumber")} />
          <Select {...register("fuelType")}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Fuel Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Gasoline">Gasoline</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </fieldset>

        {/* 3. Type of Service Requested */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Type of Service Requested</legend>
          <Checkbox {...register("services")} value="Tire Installation">Tire Installation</Checkbox>
          <Checkbox {...register("services")} value="Wheel Balancing">Wheel Balancing</Checkbox>
          <Checkbox {...register("services")} value="Wheel Alignment">Wheel Alignment</Checkbox>
          <Checkbox {...register("services")} value="Tire Storage">Tire Storage</Checkbox>
          <div className="flex items-center space-x-2">
            <Checkbox {...register("services")} value="Other">Other</Checkbox>
            <Input type="text" placeholder="Specify Other Service" {...register("otherService")} />
          </div>
        </fieldset>

        {/* 4. Tire Information */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Tire Information</legend>
          <Input type="text" placeholder="Current Tire Size (Width/Height/Diameter)" {...register("tireSize")} />
          <div className="flex items-center space-x-2">
            <Checkbox {...register("tireType")} value="Winter">Winter</Checkbox>
            <Checkbox {...register("tireType")} value="Summer">Summer</Checkbox>
            <Checkbox {...register("tireType")} value="All-Season">All-Season</Checkbox>
            <Input type="text" placeholder="Other Tire Type" {...register("otherTireType")} />
          </div>
          <Select {...register("brandPreference")}>
            <SelectTrigger>
              <SelectValue placeholder="Brand Preference (Optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Michelin">Michelin</SelectItem>
                <SelectItem value="Goodyear">Goodyear</SelectItem>
                <SelectItem value="Bridgestone">Bridgestone</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Checkbox {...register("purchaseTires")} onClick={() => setTireBudgetVisible(!tireBudgetVisible)}>
              Yes, I want the garage to buy the tires for me
            </Checkbox>
            <Checkbox {...register("purchaseTires")}>No, I already have my tires</Checkbox>
          </div>
          {tireBudgetVisible && (
            <Select {...register("tireBudget")} >
              <SelectTrigger>
                <SelectValue placeholder="Tire Budget (per tire)" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="CHF50-75">CHF50-75</SelectItem>
                  <SelectItem value="CHF75-100">CHF75-100</SelectItem>
                  <SelectItem value="CHF100-150">CHF100-150</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </fieldset>

        {/* 5. Preferred Date and Time for Service */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Preferred Date and Time</legend>
          <Checkbox {...register("preferredDate")} value="As Soon as Possible">As Soon as Possible</Checkbox>
          <Checkbox {...register("preferredDate")} value="Within a Week">Within a Week</Checkbox>
          <Checkbox {...register("preferredDate")} value="In 2 Weeks or More">In 2 Weeks or More</Checkbox>
          <div className="flex space-x-4">
            <Checkbox {...register("preferredTime")} value="Morning">Morning (8 AM - 12 PM)</Checkbox>
            <Checkbox {...register("preferredTime")} value="Afternoon">Afternoon (12 PM - 5 PM)</Checkbox>
            <Checkbox {...register("preferredTime")} value="Evening">Evening (5 PM - 7 PM)</Checkbox>
            <Checkbox {...register("preferredTime")} value="Flexible">Flexible</Checkbox>
          </div>
        </fieldset>

        {/* 6. Comments or Specific Requests */}
        <fieldset className="space-y-2">
          <legend className="text-lg font-bold">Comments or Specific Requests</legend>
          <Input
            type="text"
            placeholder="Comments or Special Requests"
            {...register("comments")}
          />
        </fieldset>

        {/* 7. Confirmation and Submission */}
        <Button type="submit" className="w-full bg-lemon/80 hover:bg-lemon active:scale-95 transition text-coal font-medium">
          Request my quote
        </Button>
      </form>
    </div>
  );
}
