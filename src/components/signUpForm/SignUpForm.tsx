"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem, SelectLabel } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

type SignupData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
  serviceType?: string;
  garageName?: string;
  address?: string;
  phoneNumber?: string;
  openingHours?: { day: string, start: string, end: string }[];
  timeSlotAvailability?: boolean;
  dailyCapacity?: number;
  servicesOffer?: string[];
   fullName: string;
  vehicleMakeModel: string;
  yearOfManufacture: string;
  vehicleType: string;
  licensePlateNumber: string;
  fuelType: string;
  tireWidth: string;
  tireHeight: string;
  tireDiameter: string;
  tireCondition: string;
  preferredTireType: string[];
  tireBudget: string;
  brandPreferences?: string;
  tpms: boolean;
  homePickupService: boolean;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SignupData>();


  const [isProvider, setIsProvider] = useState(false);
  const [openingHours, setOpeningHours] = useState<{ day: string, start: string, end: string }[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [customService, setCustomService] = useState("");

  const fullNameValidation = {
  required: "Full Name is required",
  minLength: {
    value: 2,
    message: "Full Name must be at least 2 characters long",
  },
};

const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Invalid email address",
  },
};

  const onSubmit = (data: SignupData) => {
    console.log("Signup attempted with:", { ...data, openingHours, services });
    // Handle signup logic here (e.g., API call)
  };

  const addOpeningHours = (day: string, start: string, end: string) => {
    setOpeningHours([...openingHours, { day, start, end }]);
  };

  const removeOpeningHour = (index: number) => {
    setOpeningHours(openingHours.filter((_, i) => i !== index));
  };

  const addService = (service: string) => {
    if (!services.includes(service)) {
      setServices([...services, service]);
    }
  };

  const removeService = (service: string) => {
    setServices(services.filter((s) => s !== service));
  };




  

  // Strong password validation regex
  const passwordValidation = {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
    validate: {
      uppercase: (value: string) =>
        /[A-Z]/.test(value) ||
        "Password must contain at least one uppercase letter",
      specialChar: (value: string) =>
        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
        "Password must contain at least one special character",
    },
  };

  return (
    <div className="flex items-center justify-center  w-full col-span-2 lg:col-span-1  h-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md  shadow p-4 border-zinc-900 space-y-8">
        <h2 className="text-2xl font-bold  text-gray-900">Sign Up</h2>

        {/* Tabs for User/Provider */}
        <Tabs defaultValue="user" className="space-y-4">
          <TabsList>
            <TabsTrigger value="user" onClick={() => setIsProvider(false)}>
              Customer
            </TabsTrigger>
            <TabsTrigger value="provider" onClick={() => setIsProvider(true)}>
              Garage Service Provider
            </TabsTrigger>
          </TabsList>

          {/* Normal User Signup Form */}
          <TabsContent value="user">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", { required: "Email Address is required" })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Phone Number"
                  {...register("phoneNumber", { required: "Phone Number is required" })}
                />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
              </div>

              {/* Vehicle Make and Model */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Vehicle Make and Model"
                  {...register("vehicleMakeModel", { required: "Vehicle Make and Model is required" })}
                />
                {errors.vehicleMakeModel && <p className="text-red-500">{errors.vehicleMakeModel.message}</p>}
              </div>

              {/* Year of Manufacture */}
              <div className="space-y-2">
                <Input
                  type="date"
                  placeholder="Year of Manufacture"
                  {...register("yearOfManufacture", { required: "Year of Manufacture is required" })}
                />
                {errors.yearOfManufacture && <p className="text-red-500">{errors.yearOfManufacture.message}</p>}
              </div>

              {/* Vehicle Type */}
              <div className="space-y-2">
                <Select {...register("vehicleType", { required: "Vehicle Type is required" })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Vehicle Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="Car">Car</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Utility Vehicle">Utility Vehicle</SelectItem>
                      <SelectItem value="Motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.vehicleType && <p className="text-red-500">{errors.vehicleType.message}</p>}
              </div>

              {/* License Plate Number */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="License Plate Number"
                  {...register("licensePlateNumber", { required: "License Plate Number is required" })}
                />
                {errors.licensePlateNumber && <p className="text-red-500">{errors.licensePlateNumber.message}</p>}
              </div>

              {/* Fuel Type */}
              <div className="space-y-2">
                <Select {...register("fuelType", { required: "Fuel Type is required" })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Fuel Type" />
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
                {errors.fuelType && <p className="text-red-500">{errors.fuelType.message}</p>}
              </div>

              {/* Current Tire Size */}
              <div className="space-y-2">
                <label>Current Tire Size</label>
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Width"
                    {...register("tireWidth", { required: "Width is required" })}
                  />
                  <Input
                    type="text"
                    placeholder="Height"
                    {...register("tireHeight", { required: "Height is required" })}
                  />
                  <Input
                    type="text"
                    placeholder="Diameter"
                    {...register("tireDiameter", { required: "Diameter is required" })}
                  />
                </div>
                {errors.tireWidth && <p className="text-red-500">{errors.tireWidth.message}</p>}
                {errors.tireHeight && <p className="text-red-500">{errors.tireHeight.message}</p>}
                {errors.tireDiameter && <p className="text-red-500">{errors.tireDiameter.message}</p>}
              </div>

              {/* Tire Condition */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Tire Condition"
                  {...register("tireCondition", { required: "Tire Condition is required" })}
                />
                {errors.tireCondition && <p className="text-red-500">{errors.tireCondition.message}</p>}
              </div>

              {/* Preferred Tire Type */}
              <div className="space-y-2">
                <label>Preferred Tire Type</label>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox {...register("preferredTireType")} value="Winter Tires" />
                    <label>Winter Tires</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox {...register("preferredTireType")} value="Summer Tires" />
                    <label>Summer Tires</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox {...register("preferredTireType")} value="All-Season Tires" />
                    <label>All-Season Tires</label>
                  </div>
                </div>
              </div>

              {/* Tire Budget */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Tire Budget"
                  {...register("tireBudget", { required: "Tire Budget is required" })}
                />
                {errors.tireBudget && <p className="text-red-500">{errors.tireBudget.message}</p>}
              </div>

              {/* Brand Preferences (Optional) */}
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Brand Preferences (Optional)"
                  {...register("brandPreferences")}
                />
              </div>

              {/* Tire Pressure Monitoring System (TPMS) */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox {...register("tpms")} />
                  <label>My car is equipped with a Tire Pressure Monitoring System (TPMS).</label>
                </div>
              </div>

              {/* Home Pickup Service */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox {...register("homePickupService")} />
                  <label>I prefer home pickup service.</label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 py-2 rounded text-white hover:text-white"
              >
                Sign Up
              </Button>
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link href="/sign-in" className="text-lilac">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </TabsContent>

          {/* Service Provider Signup Form */}
          <TabsContent value="provider">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Garage Name */}
              <div className="space-y-2">
                <Input type="text" placeholder="Garage Name" {...register("garageName", { required: "Garage name is required" })} />
                {errors.garageName && <p className="text-red-500">{errors.garageName.message}</p>}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Input type="email" placeholder="Email Address" {...register("email", { required: "Email is required" })} />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

                {/* Password */}
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Password"
                  {...register("password", passwordValidation)}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter your garage address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Input type="text" placeholder="Phone Number" {...register("phoneNumber", { required: "Phone number is required" })} />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
              </div>

              {/* Opening Hours */}
              <div className="space-y-2">
                <label>Opening Hours and Closing Hours</label>
                <div className="flex space-x-2">
                  <Select onValueChange={(day) => setValue("day", day)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Sunday">Sunday</SelectItem>
                        <SelectItem value="Monday">Monday</SelectItem>
                        <SelectItem value="Tuesday">Tuesday</SelectItem>
                        <SelectItem value="Wednesday">Wednesday</SelectItem>
                        <SelectItem value="Thursday">Thursday</SelectItem>
                        <SelectItem value="Friday">Friday</SelectItem>
                        <SelectItem value="Saturday">Saturday</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input type="time" placeholder="Start Time" {...register("start", { required: "Start time is required" })} required />
                  <Input type="time" placeholder="End Time" {...register("end", { required: "End time is required" })} required />
                  <Button
                    className="group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded text-white hover:text-white"
                    onClick={() => {
                      const day = watch("day");
                      const start = watch("start");
                      const end = watch("end");
                      // Validation to prevent adding empty values
                      if (day && start && end) {
                        addOpeningHours(day, start, end);
                      } else {
                        alert("Please fill in all fields before adding.");
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>
                {openingHours.map((hour, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span>{hour.day}: {hour.start} - {hour.end}</span>
                    <Button
                      className="bg-red-400 hover:bg-red-400 text-white hover:text-white"
                      variant="outline"
                      onClick={() => removeOpeningHour(index)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>


              {/* Time Slot Availability */}
              <div className="flex items-center">
                <Checkbox className="" {...register("timeSlotAvailability")} />
                <label className="ml-2 text-sm text-gray-600">Accepts appointments outside of regular hours</label>
              </div>

              {/* Daily Capacity */}
              <div className="space-y-2">
                <Input type="number" placeholder="Daily Capacity" {...register("dailyCapacity", { required: "Daily capacity is required" })} />
                {errors.dailyCapacity && <p className="text-red-500">{errors.dailyCapacity.message}</p>}
              </div>

              {/* Services Offered */}
              <div className="space-y-2">
                <Select onValueChange={(service) => addService(service)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service Types</SelectLabel>
                      <SelectItem value="Tire Installation">Tire Installation</SelectItem>
                      <SelectItem value="Tire Balancing">Tire Balancing</SelectItem>
                      <SelectItem value="Wheel Alignment">Wheel Alignment</SelectItem>
                      <SelectItem value="Tire Storage">Tire Storage</SelectItem>
                      <SelectItem value="Tire Ordering for the Customer">Tire Ordering for the Customer</SelectItem>
                      <SelectItem value="Servicing and Other Mechanical Services">Servicing and Other Mechanical Services</SelectItem>
                      <SelectItem value="Vehicle Pickup Service">Vehicle Pickup Service</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 ">
                    <span>{service}</span>
                    <Button className="bg-red-400 hover:bg-red-400 text-white hover:text-white" variant="outline" onClick={() => removeService(service)}>Remove</Button>
                  </div>
                ))}
                {services.includes("Other") && (
                  <div className="flex items-center space-x-2">
                    <Input
                      type="text"
                      placeholder="Enter custom service"
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                    />
                    <Button className="group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded text-white hover:text-white" onClick={() => addService(customService)}>Add</Button>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full group group gap-2 bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 py-2 rounded text-white hover:text-white font-medium">Sign Up</Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
