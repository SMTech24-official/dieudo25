"use client"

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BarChart2, Users, Mail, History, Settings, Package, Star, Home, Menu, X, Truck, Tag } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image'
import logo from "@/newlogo2.png"
import { poppins } from '@/fonts/fonts'


const garageNavItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },        // Layout Dashboard Icon
    { name: 'Quotes', href: '/dashboard/quotes', icon: BarChart2 },          // Bar Chart Icon for Quotes
    { name: 'Appointments', href: '/dashboard/appointments', icon: Users },  // Users Icon for Appointments
    { name: 'Communication', href: '/dashboard/communication', icon: Mail }, // Mail Icon for Communication
    { name: 'Services and Pricing', href: '/dashboard/services-pricing', icon: Package }, // Package Icon for Additional Services
    { name: 'Tire Orders', href: '/dashboard/tire-orders', icon: Truck },     // Truck Icon for Tire Orders
    { name: 'History', href: '/dashboard/history', icon: History },           // History Icon
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },        // Settings Icon
    { name: 'Home', href: '/', icon: Home },                                  // Home Icon
];


const customerNavItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },        // Layout Dashboard Icon
    { name: 'Quotes', href: '/dashboard/quotes', icon: BarChart2 },          // Bar Chart Icon for Quotes
    { name: 'Appointments', href: '/dashboard/appointments', icon: Users },  // Users Icon for Appointments
    { name: 'Messages', href: '/dashboard/messages', icon: Mail },           // Mail Icon for Messages (customer communication)
    { name: 'Service History', href: '/dashboard/service-history', icon: History }, // History Icon for Order History
    { name: 'Feedback', href: '/dashboard/feedback', icon: Star },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings }, // Settings Icon for Account Settings
    { name: 'Home', href: '/', icon: Home },
];

const navItems = customerNavItems;


export default function DashboardNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeNav, setActiveNav] = useState('') // State to manage active nav
    const navRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        // Update active nav when the pathname changes
        setActiveNav(pathname)
    }, [pathname])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [navRef])

    return (
        <div ref={navRef} className="relative z-40 h-full">
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden fixed flex items-center justify-end top-0 py-7 -left-2 z-30 w-full bg-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
            </Button>

            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 md:w-56 lg:w-72 h-full bg-white  shadow-2xl md:shadow-lg dark:bg-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col lg:mt-6 md:mt-3">
                    <div className="flex items-center justify-center">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <Image src={logo} alt='Company Logo' width={80} height={80} />
                            {/* <span className="text-xl font-bold text-secondary">LiftWork</span> */}
                        </Link>
                    </div>

                    <ScrollArea className="flex-1 py-4">
                        <nav className="space-y-2 pl-4 ">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        `flex group items-center space-x-3  px-3 py-2 ${poppins.className}`,
                                        pathname === item.href && "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-50",

                                        activeNav === item.href && "text-secondary border-r-2 border-secondary group-hover:text-secondary" // Apply text-secondary for active nav
                                    )}
                                    onClick={() => setActiveNav(item.href)} // Update active nav on click
                                >
                                    <item.icon className={`h-5 w-5  ${activeNav == item.href && "fill-white stroke-secondary"} group-hover:fill-white group-hover:stroke-secondary`} />
                                    <span className='group-hover:text-secondary'>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}
