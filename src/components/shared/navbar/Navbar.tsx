"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopBar from "./TopBar";
import Mobile from "./Mobile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/how-it-works", name: "How it works" },
    { path: "/find-garages", name: "Find Garages" },
    { path: "/register-garage", name: "Register Your Garage" },
  ];

  const dropdownLinks = [
    { path: "/contact-us", name: "Contact" },
    { path: "/blog", name: "Blog" },
  ];

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown open/close
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
            LOGO
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            {/* Nav links */}
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-gray-600 transition",
                  item.path === pathName ? "text-lilac" : "hover:text-lilac"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown Menu */}
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-lilac"
                onClick={handleToggleDropdown} // Use the toggle function here
              >
                More
              </button>
              {isDropdownOpen && ( 
                <div className="absolute bg-white shadow-lg rounded-md mt-2 w-40">
                  {dropdownLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-lilac"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Login / Sign Up Button */}
            <Link href="/sign-in">
              <Button className="bg-[#FF6600] px-8 hover:bg-[#FF6600]/80 text-white">
                Login / Sign Up
              </Button>
            </Link>

            {/* CTA Button */}
            <Link href="/request-quote">
              <Button className="bg-[#FF6600] px-8 hover:bg-[#FF6600]/80 text-white">
                Request a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="w-full flex justify-end md:hidden">
            <Mobile navLinks={navLinks} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
