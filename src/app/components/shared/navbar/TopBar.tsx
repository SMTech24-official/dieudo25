import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Briefcase } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-coal">
      <div className=" text-white max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Briefcase className="h-5 w-5" />
          <span className="text-sm hidden sm:inline">
            Post a job on Skillhive today and earn one month free!
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-lime-400 hover:bg-lime-500 text-gray-800 text-sm py-1 px-3 h-auto">
            Post a job
          </Button>
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
  );
};

export default TopBar;
