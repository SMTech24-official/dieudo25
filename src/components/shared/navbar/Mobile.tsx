"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Menu, Phone, BookOpen, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";

const Mobile = ({ navLinks }: { navLinks: { name: string; path: string; icon: JSX.Element }[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownLinks = [
    { path: "/contact-us", name: "Contact", icon: <Phone className="h-4 w-4 inline-block mr-1" /> },
    { path: "/blog", name: "Blog", icon: <BookOpen className="h-4 w-4 inline-block mr-1" /> },
  ];

  // Close dropdown when clicking outside or other elements
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-content")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Add empty dependency array to ensure effect is only applied once

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="grid grid-cols-2 gap-2 lg:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          {/* Mobile Menu Content */}
          <div className="grid gap-4 py-4 grow">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center text-gray-600 hover:text-gray-900"
                onClick={handleLinkClick}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            {/* Dropdown for Contact + Blog */}
            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-primary"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              >
                More
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-md w-full dropdown-content">
                  {dropdownLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
                      onClick={handleLinkClick} // Close dropdown and mobile menu on link click
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {isDropdownOpen && <div className="h-16" />} {/* Spacer if dropdown is open */}

            {/* Separate Login and Sign Up Buttons */}
            <div className="flex items-center gap-2">
              <Link href="/sign-in">
                <Button className="bg-secondary hover:bg-secondary/80 text-white flex items-center" onClick={handleLinkClick}>
                  <LogIn className="h-4 w-4 inline-block mr-1" />
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-secondary hover:bg-secondary/80 text-white flex items-center" onClick={handleLinkClick}>
                  <UserPlus className="h-4 w-4 inline-block mr-1" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobile;
