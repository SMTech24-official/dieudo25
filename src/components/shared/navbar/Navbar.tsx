"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";
import Mobile from "./Mobile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg"


import {
  Home,
  Info,
  Wrench,
  UserCheck,
  LogIn,
  UserPlus,
  Clipboard,
  Phone,
  BookOpen,
} from "lucide-react"; // Import icons
import Image from "next/image";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference for dropdown
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    const handleClickOutside = (event: MouseEvent) => {
      // Close dropdown if clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { path: "/", name: "Home", icon: <Home className="h-4 w-4 inline-block mr-1" /> },
    { path: "#how-it-works", name: "How it works", icon: <Info className="h-4 w-4 inline-block mr-1" /> },
    { path: "/find-garages", name: "Find Garages", icon: <Wrench className="h-4 w-4 inline-block mr-1" /> },
    { path: "/register-garage", name: "Register Your Garage", icon: <UserCheck className="h-4 w-4 inline-block mr-1" /> },
  ];

  const dropdownLinks = [
    { path: "/contact-us", name: "Contact", icon: <Phone className="h-4 w-4 inline-block mr-1" /> },
    { path: "/blog", name: "Blog", icon: <BookOpen className="h-4 w-4 inline-block mr-1" /> },
  ];

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav>
      <TopBar />
      <div
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isSticky ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="Company logo" width={60} height={50}/>

          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            {/* Nav links */}
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                scroll={true}
                className={cn(
                  "text-gray-600 transition flex items-center",
                  pathName === item.path ? "text-primary" : "hover:text-primary"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="text-gray-600 hover:text-primary"
                onClick={handleToggleDropdown}
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40 z-50">
                  {dropdownLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Separate Login and Sign Up Buttons */}
            <Link href="/sign-in">
              <Button className="bg-[#FF6600] flex items-center px-4 hover:bg-[#FF6600]/80 text-white">
                <LogIn className="h-4 w-4 inline-block mr-1" />
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-[#FF6600] flex items-center px-4 hover:bg-[#FF6600]/80 text-white">
                <UserPlus className="h-4 w-4 inline-block mr-1" />
                Sign Up
              </Button>
            </Link>

            {/* CTA Button */}
            <Link href="/request-quote">
              <Button className="bg-[#FF6600] flex items-center px-8 hover:bg-[#FF6600]/80 text-white">
                <Clipboard className="h-4 w-4 inline-block mr-1" />
                Request a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="w-full flex justify-end md:hidden">
            <Mobile navLinks={navLinks} /> {/* Pass handleLinkClick to Mobile */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
