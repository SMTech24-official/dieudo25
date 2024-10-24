import * as React from "react"
import { motion } from "framer-motion"
import {  DollarSign, Star, Check, X, Phone, Calendar, Users } from "lucide-react"
import { FaToolbox } from "react-icons/fa6"
import { GiGrowth } from "react-icons/gi"

export default function GarageProblemSolution() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white  section-gap">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-8">
                    <ProblemSection />
                    <SolutionSection />
                </div>
            </div>
        </div>
    )
}

function ProblemSection() {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-orange-600 mb-6">Challenges for Garages</h3>
            <StepItem
                icon={Phone}
                title="Overwhelming Daily Operations"
                description="Attracting new customers and managing daily operations can be overwhelming for many garages."
                isNegative
            />
            <StepItem
                icon={DollarSign}
                title="Costly and Inefficient Advertising"
                description="Traditional advertising is costly and inefficient, leaving garages struggling to keep up with digital services."
                isNegative
            />
            <StepItem
                icon={Calendar}
                title="Manual Scheduling Chaos"
                description="Without the right tools, managing bookings, customer inquiries, and service requests becomes chaotic."
                isNegative
            />
            <StepItem
                icon={Users}
                title="Lost Opportunities and Unhappy Customers"
                description="Missed service requests, unhappy customers, and lost revenue result from inefficient management."
                isNegative
            />
        </div>
    )
}

function SolutionSection() {
    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">The LiftWork Solution</h3>
            <StepItem
                icon={FaToolbox}
                title="Streamlined Digital Platform"
                description="LiftWork automates bookings, centralizes customer communication, and showcases your services to a wider audience."
            />
            <StepItem
                icon={Calendar}
                title="Real-time Availability"
                description="Easily manage bookings with real-time availability and prevent double-booking or missed opportunities."
            />
            <StepItem
                icon={Star}
                title="Verified Reviews"
                description="Build trust with verified customer reviews, helping you attract more clients."
            />
            <StepItem
                icon={GiGrowth}
                title="Focus on Quality Service"
                description="LiftWork helps you grow your business while focusing on delivering top-quality service."
            />
        </div>
    )
}

function StepItem({
    icon: Icon,
    title,
    description,
    isNegative = false,
}: {
    icon: React.ElementType
    title: string
    description: string
    isNegative?: boolean
}) {
    return (
        <div
            className={`flex shadow-md hover:shadow-lg md:h-32  items-start space-x-4 p-4 rounded-lg ${isNegative ? "bg-orange-50" : "bg-blue-50"
                }`}
        >
            <div
                className={`flex-shrink-0 rounded-full p-2 ${isNegative ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                    }`}
            >
                <Icon className="h-6 w-6" />
            </div>
            <div className="flex-grow">
                <h4 className={`text-lg font-medium ${isNegative ? "text-orange-700" : "text-blue-700"}`}>
                    {title}
                </h4>
                <p className="mt-1 text-gray-600">{description}</p>
            </div>
            <div className="flex-shrink-0">
                {isNegative ? (
                    <X className="h-6 w-6 text-orange-500" />
                ) : (
                    <Check className="h-6 w-6 text-blue-500" />
                )}
            </div>
        </div>
    )
}