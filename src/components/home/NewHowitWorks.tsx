"use client";

import { CheckCircle, ClipboardList, UserCheck, Star, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "../section/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';



const steps = [
    {
        id: 1,
        icon: <CheckCircle className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
        title: <>Search  For a Service Near You</>,
        description:
            "Start by entering the service you need (e.g., tire replacement, oil change, brake repair) in our search bar. LiftWork will instantly show you a list of verified garages near you that specialize in the service you’re looking for. Filter by services, location, availability, customer reviews, or pricing to find the perfect match for your needs.",
    },
    {
        id: 2,
        icon: <ClipboardList className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white " />,
        title: "Submit a Request for a Quote",
        description:
            "Once you’ve selected a garage, submit a quote request directly through the platform. Fill out a short form describing your vehicle and the services you need (e.g., tire replacement, brake repairs, general maintenance). You can also specify additional details, such as preferred appointment times or any concerns you might have.",
    },
    {
        id: 3,
        icon: <UserCheck className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
        title: <>Review and Accept  the Quote</>,
        description:
            "After submitting your request, the garage will review your information and send a detailed quote for the services. You’ll receive notifications when your quote is ready. Review the pricing, services offered, and time estimates. If satisfied, you can confirm the service and proceed with the booking.",
    },
    {
        id: 4,
        icon: <Star className="h-6 w-6 text-secondary group-hover:fill-secondary " />,
        title: "Book Your Service Appointment",
        description:
            "Choose a time slot that works best for you from the garage’s real-time availability calendar. LiftWork’s scheduling system ensures that only available slots are shown, allowing for instant booking. Once confirmed, your appointment details will be saved to your dashboard, where you can track the service progress.",
    },
    {
        id: 5,
        icon: <Shield className="h-6 w-6 text-secondary group-hover:fill-secondary" />,
        title: "Drop Off Your Vehicle at the Garage",
        description:
            "On the day of your appointment, simply drop off your vehicle at the selected garage. The garage will handle everything from there, keeping you updated through the LiftWork platform on the status of your service.",
    },
    {
        id: 6,
        icon: <Clock className="h-6 w-6 text-secondary group-hover:fill-secondary group-hover:stroke-white" />,
        title: <>Pay and Pick Up Your  Vehicle</>,
        description:
            "After the service is completed, you’ll receive a final invoice through the platform. Pay directly online, and when your vehicle is ready, you can pick it up at the garage, knowing everything has been taken care of.",
    },
];




export default function NewHowItWorks() {
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
