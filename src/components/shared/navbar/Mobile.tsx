"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Mobile = ({
  navLinks,
}: {
  navLinks: { name: string; path: string }[];
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  // Dropdown items for Contact + Blog
  const dropdownLinks = [
    { path: "/contact-us", name: "Contact" },
    { path: "/blog", name: "Blog" },
  ];

  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          {/* Mobile Menu Content */}
          <div className="grid gap-4 py-4 grow">
            {navLinks?.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}

            {/* Dropdown for Contact + Blog */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-lilac"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
              >
                More
              </button>
              {isDropdownOpen && ( // Render dropdown only if open
                <div className="absolute mt-2 bg-white shadow-lg rounded-md w-full">
                  {dropdownLinks.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-lilac"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dashboard Link */}
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>

            {/* Call-to-Action Buttons */}
            <Button className="bg-[#FF6600] hover:bg-[#FF6600]/80 text-white">
              Login / Sign Up
            </Button>
            <Button className="bg-[#FF6600] hover:bg-[#FF6600]/80 text-white">
              Request a Quote
            </Button>
          </div>

          {/* Shopping Cart */}
          <SheetFooter className="grid gap-2">
            <div className="relative">
              <Button
                className="relative"
                variant="ghost"
                size="icon"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">
                  0
                </span>
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Mobile;
