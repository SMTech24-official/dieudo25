"use client"

import { useState } from 'react';
import SectionHeader from "../section/SectionHeader";
import Image from 'next/image';
import SideImag from "@/assets/solution.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const ProblemAndSolution = () => {
    const easeOut = [0.42, 0, 0.58, 1];

    // Track the open section index, initially set to null so no section is open on load
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const problemSolutionSection = [
        {
            title: "Finding a reliable and affordable garage for vehicle maintenance and repair can be a daunting task for many car owners.",
            content: `The lack of transparency around costs, fluctuating service quality, and the difficulty in securing available slots contribute to a frustrating and unsatisfactory experience for consumers. This uncertainty can lead to delays in necessary maintenance, increasing the risk of costly breakdowns and safety issues.`
        },
        {
            title: "Imagine you’re preparing for a long trip and suddenly discover an issue with your brakes.",
            content: `You try to quickly find a nearby garage, but you’re overwhelmed by options, unsure which one offers the best value for money and can accommodate you immediately. You spend hours reading conflicting reviews (when they exist) and comparing prices (if they’re even listed), only to end up choosing randomly or relying on a recommendation from a friend, hoping the service will meet your expectations and that a slot will be available soon. This situation is not only stressful, but also risky, as poor repairs can have serious consequences.`
        },
        {
            title: "LiftWork solves these problems by providing a centralized platform where customers can easily find, compare, and confidently book automotive garage services.",
            content: `Every garage listed on LiftWork is verified to ensure quality and reliability. Customers have access to detailed profiles that include pricing information, services offered, real-time availability, and authentic reviews from other users. Additionally, LiftWork offers full cost transparency and allows users to manage all bookings and communications through a simple interface, ensuring a hassle-free and secure experience for all automotive needs.`
        }
    ];

    return (
        <section className="py-padding_base px-padding_small">
            <div className="container mx-auto lg:mt-12">
                {/* Left column - text section */}
                <div className="container mx-auto " >
                    <Accordion type="single" collapsible className="w-full">
                        {problemSolutionSection.map((section, index) => (
                            <AccordionItem
                                value={`item-${index}`}
                                key={index}
                                className="p-3 transition-all duration-300"

                            >
                                <AccordionTrigger
                                    className="group flex w-full justify-between items-center py-3 text-lg"
                                >
                                    <span className="font-bold  text-start w-full text-lg">
                                        {section.title}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent>
                                    {section.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section >
    );
};

export default ProblemAndSolution;
