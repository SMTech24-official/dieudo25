"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";
import Mobile from "./Mobile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/assets/newLogo.png"


import {
  Home,
  Info,
  Wrench,
  UserCheck,
  LogIn,
  UserPlus,
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
    { path: "./#how-it-works", name: "How it works", icon: <Info className="h-4 w-4 inline-block mr-1" /> },
    { path: "/garages", name: "Find Garages", icon: <Wrench className="h-4 w-4 inline-block mr-1" /> },
    { path: "/dashboard", name: "Dashboard", icon: <Wrench className="h-4 w-4 inline-block mr-1" /> },
    { path: "/register-garage", name: "Register Your Garage", icon: <UserCheck className="h-4 w-4 inline-block mr-1" /> },
  ];

  const dropdownLinks = [
    { path: "/contact-us", name: "Contact", icon: <Phone className="h-4 w-4 inline-block mr-1" /> },
    { path: "/blogs", name: "Blog", icon: <BookOpen className="h-4 w-4 inline-block mr-1" /> },
  ];

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav>
      <TopBar />
      <div
        className={`sticky top-0 z-50 bg-primary transition-all duration-300 ${isSticky ? "shadow-md py-2" : "py-4"
          }`}
      >
        <div className="max-w-[1700px]  mx-auto px-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="Company logo" width={80} height={80} />
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium">
            {/* Nav links */}
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                scroll={true}
                className={cn(
                  " transition flex items-center text-white text-nowrap",
                  pathName === item.path ? "text-secondary" : "hover:text-secondary"
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                className=" hover:text-secondary text-white"
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
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Separate Login and Sign Up Buttons */}
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button className=" bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group">
                  <LogIn className="h-4 w-4 inline-block mr-1 group-hover:fill-white" /> 
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className=" bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group">
                  <UserPlus className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="w-full flex justify-end lg:hidden">
            <Mobile navLinks={navLinks} /> {/* Pass handleLinkClick to Mobile */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
