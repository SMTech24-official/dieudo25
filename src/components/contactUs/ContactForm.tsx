"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"; // ShadCN Input component
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Textarea } from "@/components/ui/textarea"; // ShadCN Textarea component (assumed available)
import { GoArrowUpRight } from "react-icons/go";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submit handler
  const onSubmit = () => {
    
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mb-6">
          Love to hear from you, <br /> Get in touch{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-600 mb-2 font-medium">
              Your name
            </label>
            <Input
              id="name"
              className="!outline-primary "
              placeholder="write your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2 ">
                {String(errors.name?.message)}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-2 font-medium">
              Your email
            </label>
            <Input
              id="email"
              className="!outline-primary "
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {String(errors.email?.message)}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="flex flex-col lg:col-span-2 ">
            <label htmlFor="subject" className="text-gray-600 mb-2 font-medium">
              Subject
            </label>
            <Input
              id="subject"
              className="!outline-primary "
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-2">
                {String(errors.subject?.message)}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="lg:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-gray-600 mb-2 font-medium">
              Message
            </label>
            <Textarea
              id="message"
              className="!outline-primary "
              placeholder="Let us know your project details"
              rows={5}
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-2">
                {String(errors.message?.message)}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="lg:col-span-2">
            <Button
              type="submit"
              className="w-full flex items-center gap-2 bg-secondary hover:bg-[#FF6600]/80 text-base active:scale-95 transition text-[#7e92e3] hover:text-[#eff2fd]"
            >
              Just Send <GoArrowUpRight className="text-lg" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
