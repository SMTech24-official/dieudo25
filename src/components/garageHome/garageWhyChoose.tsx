"use client";

import { Card } from "@/components/ui/card";
import SectionHeader from "../section/SectionHeader";
import { CheckCircle, Star, Calendar, Mail } from "lucide-react";

const features = [
    {
        icon: <CheckCircle className="h-8 w-8 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
        title: <>Ease of Attracting <br /> New Customers</>,
        description:
            "LiftWork provides a digital platform that showcases garage services to a wider audience. Garages gain better visibility through detailed profiles accessible to customers searching for services online, thus increasing the chances of attracting new clients.",
    },
    {
        icon: <Calendar className="h-8 w-8 text-secondary group-hover:fill-secondary  group-hover:stroke-white" />,
        title: <>Automated Management <br /> of Appointments</>,
        description:
            "With LiftWork, garages can automate appointment scheduling and manage time slots in real time. This prevents double bookings, optimizes scheduling, and allows clients to easily book available slots without manual intervention from the garage.",
    },
    {
        icon: <Mail className="h-8 w-8 text-secondary group-hover:fill-secondary  group-hover:stroke-white" />,
        title: <>Ease of Tracking <br /> Requests and Communications</>,
        description:
            "LiftWork offers an intuitive dashboard where garages can manage all interactions with their clients, track quotes, appointments, and messages, all from one place. This centralization provides an overview and helps avoid missed requests.",
    },
    {
        icon: <Star className="h-8 w-8 text-secondary group-hover:fill-secondary" />,
        title: <>Ensuring Customer <br /> Trust</>,
        description:
            "LiftWork allows customers to leave authentic, verified reviews, helping garages build credibility and attract new customers based on positive feedback. This helps garages improve their reputation and assures potential customers of the quality of their services.",
    },
];

export default function GarageWhyChooseLiftWork() {
    return (
        <section className="py-padding_base px-padding_small bg-section section-gap">
            <SectionHeader
                subTitle="Why Choose LiftWork?"
                title="Key Features"
                description="Discover the advantages of working with us."
            />
            <div className="container mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="flex flex-col group items-center justify-between w-full px-5 py-10 shadow-md h-full bg-white relative overflow-hidden transition-all ease-linear duration-300" // Main Card classes
                        >
                            {/* Hover Effect Background Layer */}
                            <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>

                            {/* Icon and Content */}
                            <div className="relative z-10 flex flex-col items-center gap-4"> {/* Flex layout for full height */}
                                <div className=""> {/* Centering the icon */}
                                    {feature.icon}
                                </div>
                                <h3 className="font-bold text-xl text-center">
                                    {feature.title}
                                </h3>
                                <p className="text-sm ">
                                    {feature.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
