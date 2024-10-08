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
  const pathName = usePathname();

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
      path: "/services",
      name: "Services",
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
                  className={cn(
                    "text-gray-600 transition",
                    item.path === pathName ? "text-lilac" : "hover:text-lilac "
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href={"/sign-in"}>
                <Button className="bg-lemon px-8 hover:bg-lemon/80 text-gray-800">
                  SignIn
                </Button>
              </Link>
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
