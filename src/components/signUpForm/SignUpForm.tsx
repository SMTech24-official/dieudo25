"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you have a Checkbox component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // ShadCN Select component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // ShadCN Tabs component
import Link from "next/link";

type SignupData = {
  name?: string; // Optional for normal users
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: boolean;
  serviceType?: string; // Optional for service providers
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupData>();
  const [isProvider, setIsProvider] = useState(false); // State to track which tab is selected

  const onSubmit = (data: SignupData) => {
    console.log("Signup attempted with:", data);
    // Handle signup logic here (e.g., API call)
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
              Normal User
            </TabsTrigger>
            <TabsTrigger value="provider" onClick={() => setIsProvider(true)}>
              Service Provider
            </TabsTrigger>
          </TabsList>

          {/* Normal User Signup Form */}
          <TabsContent value="user">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

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

              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex items-center">
                <Checkbox {...register("rememberMe")} />
                <label className="ml-2 text-sm text-gray-600">
                  Remember Me
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-lemon/80 hover:bg-lemon active:scale-95 transition text-coal font-medium"
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
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Full Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="name@mail.com"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

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
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Service Type Dropdown */}
              <div className="space-y-2">
                <Select
                  {...register("serviceType", {
                    required: "Service type is required",
                  })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Service Types</SelectLabel>
                      <SelectItem value="Car">Car</SelectItem>
                      <SelectItem value="Bike">Bike</SelectItem>
                      <SelectItem value="Plumbing">Truck</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-red-500">{errors.serviceType.message}</p>
                )}
              </div>

              <div className="flex items-center">
                <Checkbox {...register("rememberMe")} />
                <label className="ml-2 text-sm text-gray-600">
                  Remember Me
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-lemon/80 hover:bg-lemon active:scale-95 transition text-coal font-medium"
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
        </Tabs>
      </div>
    </div>
  );
}
