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
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="md:hidden "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className=" ">
          <div className="grid gap-4 py-4 grow">
            {navLinks?.map((item) => (
              <Link
                key={item.path}
                href="/home"
                className="text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Button className="bg-lemon hover:bg-lemon/80 text-gray-800">
              Sign up-it&apos;s free
            </Button>
          </div>
          <SheetFooter className="grid gap-2">
            <div className=" ">
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
