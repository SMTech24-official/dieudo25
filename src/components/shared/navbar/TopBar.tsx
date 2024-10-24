import LocationModal from "@/components/locationModal/LocationModal";
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
    <div className="bg-coal ">
      <div className="text-white max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">
            Get a quick quote for your vehicle&apos;s service today!
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {/* CTA Button */}
          <LocationModal />

          
          <div className="flex items-center gap-1">
            <TfiWorld />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white text-sm h-auto p-1 outline-none border-none
                             hover:bg-transparent hover:text-white focus:outline-none hover:focus:outline-none focus:ring-0 focus:bg-transparent"
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
