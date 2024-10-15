"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import authImage from "@/assets/auth.jpg";
import Link from "next/link";
import SignupForm from "../signUpForm/SignUpForm";
import SignInComponents from "../signUpForm/UserTab/SignUpComponents";
import LoginPageComponents from "./LogIncomponents";

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
      <div className="flex-1 flex items-center justify-center lg:px-0 px-5">
            <LoginPageComponents />
      </div>
    </div>
  );
};

export default SignInFrom;
