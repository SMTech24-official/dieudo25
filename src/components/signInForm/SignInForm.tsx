"use client";
import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import authImage from "@/assets/auth.jpg";
import Link from "next/link";

// Define types for form data
type LoginFormInputs = {
  email: string;
  password: string;
  remember: boolean;
};

const SignInFrom = () => {
  // React Hook Form setup with types
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // Form submit handler with type safety
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
    // Handle login logic here (e.g., API call)
  };

  return (
    <div className="lg:min-h-screen lg:py-0 py-10 flex">
      {/* Left Section */}
      <div
        style={{ backgroundImage: `url(${authImage.src})` }}
        className="flex-1 bg-blue-500/30 bg-center bg-cover lg:flex bg-blend-overlay text-white hidden flex-col justify-center p-10"
      >
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-6">Designed for Individuals</h1>
          <p className="text-lg mb-4">
            See the analytics and grow your data remotely, from anywhere!
          </p>
          <div className="mt-10 relative"></div>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="flex-1 flex justify-center items-center lg:px-0 px-5">
        <div className="w-full lg:max-w-md border border-slate-200 shadow p-4  ">
          <h2 className="text-2xl font-bold  mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="name@mail.com"
                {...register("email", { required: "Email is required" })}
                className="w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Input
                type="password"
                placeholder="********"
                {...register("password", { required: "Password is required" })}
                className="w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="text-right mt-2">
                <a href="#" className="text-blue-500 text-sm">
                  Reset Password
                </a>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                {...register("remember")}
                className="mr-2"
              />
              <label>Remember Password</label>
            </div>

            <Button
              type="submit"
              className="w-full bg-lemon/80 hover:bg-lemon text-coal font-bold py-2"
            >
              Login
            </Button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>

            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInFrom;
