import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Briefcase, Clipboard } from "lucide-react";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";

const TopBar = () => {
  return (
    <div className="bg-coal">
      <div className=" text-white max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">
            Get a quick quote for your vehicle&apos;s service today!
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {/* CTA Button */}
          <Link href="/request-quote">
            <Button className=" bg-secondary hover:bg-secondary/80 active:scale-95 transition-all w-full py-2 rounded-md text-white group">
              <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
              Request a Quote
            </Button>
          </Link>
          <div className="flex items-center gap-1">
            <TfiWorld />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white text-sm outline-none focus:outline-none focus:border-none h-auto p-1"
                >
                  EN <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
