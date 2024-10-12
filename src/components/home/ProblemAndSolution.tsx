"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AnimatePresence,  motion } from 'framer-motion'
import SectionHeader from "../section/SectionHeader";
import Image from 'next/image';
import SideImag from "@/assets/solution.png"

const ProblemAndSolution = () => {

    const easeOut = [0.42, 0, 0.58, 1];

    const problemSolutionSection = [
        {
            title: "Finding a reliable and affordable garage for vehicle maintenance and repair can be a daunting task for many car owners.",
            content: `The lack of transparency around costs, fluctuating service quality, and the difficulty in securing available slots contribute to a frustrating and unsatisfactory experience for consumers. This uncertainty can lead to delays in necessary maintenance, increasing the risk of costly breakdowns and safety issues.`
        },
        {
            title: "Imagine you’re preparing for a long trip and suddenly discover an issue Main Homepage 3 with your brakes.",
            content: `You try to quickly find a nearby garage, but you’re overwhelmed by options, unsure which one offers the best value for money and can accommodate you immediately. You spend hours reading conflicting reviews (when they exist) and comparing prices (if they’re even listed), only to end up choosing randomly or relying on a recommendation from a friend, hoping the service will meet your expectations and that a slot will be available soon. This situation is not only stressful, but also risky, as poor repairs can have serious consequences.`
        },
        {
            title: "LiftWork solves these problems by providing a centralized platform where customers can easily find, compare, and confidently book automotive garage services.",
            content: `Every garage listed on LiftWork is verified to ensure quality and reliability. Customers have access to detailed profiles that include pricing information, services offered, real- time availability, and authentic reviews from other users. Additionally, LiftWork offers full cost transparency and allows users to manage all bookings and communications through a simple interface, ensuring a hassle-free and secure experience for all automotive needs.`
        }
    ];


    return (
        <section className="py-12 lg:pb-20 pb-0 px-4">
            <SectionHeader
                subTitle="The Challenge of Reliable Garage Services"
                title="Simplifying Vehicle Maintenance with LiftWork"
                description="How LiftWork is Making Car Repairs Stress-Free and Transparent"
            />
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-0 md:gap-10 gap-4 items-center justify-center">
                <div>
                    {problemSolutionSection.map((section, index) => (
                        <Disclosure key={index} as="div" className="p-6 transition-all" defaultOpen={index === 0}>
                            <DisclosureButton className="group flex w-full items-start justify-between">
                                <span className=" font-bold text-primary text-start">
                                    {section.title}
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down group-open:rotate-180 transition-transform" ><path d="m6 9 6 6 6-6"/></svg>
                            </DisclosureButton>
                            <AnimatePresence>
                                <DisclosurePanel>
                                    <motion.div
                                        initial={{ opacity: 0, y: -24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -24 }}
                                        transition={{ duration: 0.2, ease: easeOut }}
                                        className="origin-top pt-2"
                                    >
                                        {section.content}
                                    </motion.div>
                                </DisclosurePanel>
                            </AnimatePresence>
                        </Disclosure>
                    ))}
                </div>
                <div className='w-full h-[60vh] '>
                    <Image
                        src={SideImag}
                        alt='Side Image'
                        objectFit='cover'
                        className="rounded-lg !w-full !h-full object-cover "
                    />
                </div>
            </div>
        </section>
    );
};

export default ProblemAndSolution;