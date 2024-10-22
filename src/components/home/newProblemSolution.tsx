import * as React from "react"
import { motion } from "framer-motion"
import { Search, DollarSign, Star, Clock, Check, X } from "lucide-react"

export default function NewProblemSolution() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 mt-12">
            <div className="mx-auto max-w-7xl">
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
            <h3 className="text-2xl font-semibold text-orange-600 mb-6">The Problem</h3>
            <StepItem
                icon={Search}
                title="Overwhelming Search"
                description="Finding a reliable local garage feels daunting and time-consuming."
                isNegative
            />
            <StepItem
                icon={DollarSign}
                title="Lack of Transparency"
                description="Unclear pricing leads to unexpected costs and frustration."
                isNegative
            />
            <StepItem
                icon={Star}
                title="Inconsistent Quality"
                description="Service quality varies widely, risking poor repairs and safety issues."
                isNegative
            />
            <StepItem
                icon={Clock}
                title="Booking Difficulties"
                description="Securing available slots is often a challenge, leading to maintenance delays."
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
                icon={Search}
                title="Easy Comparison"
                description="Quickly find and compare verified local garages in one place."
            />
            <StepItem
                icon={DollarSign}
                title="Transparent Pricing"
                description="See upfront, competitive pricing for all services."
            />
            <StepItem
                icon={Star}
                title="Verified Quality"
                description="Read real customer reviews and ratings to ensure top-notch service."
            />
            <StepItem
                icon={Clock}
                title="Simple Booking"
                description="View real-time availability and book your slot instantly."
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
            className={`flex shadow-md hover:shadow-lg h-28 items-start space-x-4 p-4 rounded-lg ${isNegative ? "bg-orange-50" : "bg-blue-50"
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