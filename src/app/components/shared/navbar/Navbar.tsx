"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import TopBar from "./TopBar";
import Mobile from "./Mobile";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about-us",
      name: "About Us",
    },

    {
      path: "/service",
      name: "Service",
    },
    {
      path: "/contact-us",
      name: "Contact US",
    },
  ];
  return (
    <nav>
      <TopBar />
      <div
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isSticky ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-4    items-center justify-between w-full ">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              LOGO
            </Link>

            <nav className="hidden md:flex items-center space-x-6 font-medium">
              {navLinks?.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="User account">
                <User className="h-5 w-5" />
              </Button>

              <Button className="bg-lemon hover:bg-lemon/80 text-gray-800">
                Sign up-it&apos;s free
              </Button>
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

            <div className="w-full flex justify-end md:hidden">
              {" "}
              <Mobile navLinks={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
