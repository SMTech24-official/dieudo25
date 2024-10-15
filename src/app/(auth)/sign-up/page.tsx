import React from "react";
import authImage from "@/assets/auth.jpg";
import SignUpForm from "@/components/signUpForm/SignUpForm";

const SignUp = () => {
  return (
    <main className="grid lg:grid-cols-2 justify- lg:min-h-screen lg:py-0 py-10 place-items-center lg:place-items-start w-full ">
      <div
        style={{ backgroundImage: `url(${authImage.src})` }}
        className="flex-1 bg-blue-500/30 bg-center bg-cover lg:flex bg-blend-overlay text-white hidden flex-col justify-center p-10 col-span-1 w-full h-full"
      >
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-6">Designed for Individuals</h1>
          <p className="text-lg mb-4">
            See the analytics and grow your data remotely, from anywhere!
          </p>
          <div className="mt-10 relative"></div>
        </div>
      </div>
      <div className="w-full">
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
