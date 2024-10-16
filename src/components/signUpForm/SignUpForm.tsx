"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpComponents from "./UserTab/SignUpComponents";
import GarageServiceProviderSignUp from "./garageTab/GarageSignUp";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";


const SignupForm = () => {
  const searchParams = useSearchParams()
  const activeTab = searchParams.has("q")
  const router = useRouter()

  return (
      <div className="flex items-center justify-center col-span-2 lg:col-span-1 h-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:w-[600px] p-4 border-zinc-900 space-y-8">
          <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>

          {/* Tabs for User/Provider */}
          <Tabs defaultValue={activeTab ? "provider" : "user"} className="space-y-4 shadow-md p-4" >
            <TabsList onClick={() => router.push("/sign-up")}>
              <TabsTrigger value="user" >
                Customer
              </TabsTrigger>
              <TabsTrigger value="provider">
                Garage Service Provider
              </TabsTrigger>
            </TabsList>

            {/* Customer Signup Form */}
            <TabsContent value="user">
              <SignUpComponents />
            </TabsContent>

            {/* Garage Service Provider Signup Form */}
            <TabsContent value="provider">
              <GarageServiceProviderSignUp />
            </TabsContent>
          </Tabs>
        </div>
      </div>

  );
}

export default SignupForm 