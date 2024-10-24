"use client";

import { CheckCircle, ClipboardList, UserCheck, Star, Shield, Clock, UserPlus, Mail, ClipboardCheck, DollarSign } from "lucide-react";
import SectionHeader from "../section/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';



const steps = [
    {
        id: 1,
        icon: <UserPlus className="h-6 w-6 text-secondary group-hover:fill-secondary" />,
        title: <>Create Your Profile</>,
        description:
            "Sign up on LiftWork, fill in your garage’s services, pricing, location, and available slots. A complete profile helps customers find you and trust your expertise. Add photos and descriptions to showcase your skills.",
    },
    {
        id: 2,
        icon: <Mail className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white " />,
        title: <>Receive Service Requests</>,
        description:
            "Once your profile is live, customers nearby can find your garage and request quotes for services. You’ll receive these requests with all the needed details about the client and their vehicle.",
    },
    {
        id: 3,
        icon: <ClipboardCheck className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
        title: <>Send Quotes & Manage Appointments</>,
        description:
            "Respond to requests by sending detailed quotes. Communicate with clients directly through LiftWork and manage bookings using the real-time scheduling system to avoid double bookings.",
    },
    {
        id: 4,
        icon: <DollarSign className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
        title: <>Complete the Service & Get Paid</>,
        description:
            "After completing the service, send the invoice through the platform. Customers pay securely, and once done, they can collect their vehicle. Build your reputation with verified customer reviews.",
    },
];


export default function GarageHowItWorks() {
    return (
        <div
            id="how-it-works"
            className={` section-gap`}
        >
            <SectionHeader
                subTitle="How LiftWork Helps You Get the Best Service"
                title="How it Works"
                description="Using LiftWork is simple and hassle-free. In just a few quick steps, you can find trusted garages, compare options, and book your car service."
            />
            <div className="container mx-auto mt-12" >
                <Accordion type="single" collapsible className="w-full">
                    {steps.map((section, index) => (
                        <AccordionItem
                            value={`item-${index}`}
                            key={index}
                            className="p-3 transition-all duration-300"

                        >
                            <AccordionTrigger
                                className="group flex w-full justify-between items-center py-3 text-lg !border-0"
                            >
                                <span className="font-bold flex items-center text-start gap-2 w-full text-lg !border-0">
                                    {section.icon}{section.title}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                {section.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
