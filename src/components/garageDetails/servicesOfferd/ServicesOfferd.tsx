import React, { useState } from "react";
import { Clipboard, Package, ShoppingCart, Battery, Cog, Wrench, Zap, Stethoscope, ShieldCheck, Cpu, Paintbrush, Truck, AlertTriangle, Car, Plus, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BookingModal from "@/components/bookingModal/BookingModal";
import { PiTireDuotone, PiEngineThin } from "react-icons/pi";
import { RiOilLine } from "react-icons/ri";
import { GiAutoRepair, GiCarWheel } from "react-icons/gi";
import { SiJfrogpipelines } from "react-icons/si";

// Define types for the service offered
interface ServiceOffered {
  serviceName: string;
  serviceDetails: string;
  min_price: number;
  max_price: number;
  averageTime: string;
}

interface ServicesOfferedProps {
  servicesOffered: ServiceOffered[];
}

const ServicesOffered: React.FC<ServicesOfferedProps> = ({ servicesOffered }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to get the corresponding service icon
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName) {
      case "Tire Services":
        return <PiTireDuotone className="h-6 w-6" />;
      case "Tire Storage":
        return <Package className="h-6 w-6" />;
      case "Tire Ordering":
        return <ShoppingCart className="h-6 w-6" />;
      case "Oil Changes":
        return <RiOilLine className="h-6 w-6" />;
      case "Battery Services":
        return <Battery className="h-6 w-6" />;
      case "Brake Repairs":
        return <GiAutoRepair className="h-6 w-6" />;
      case "Wheel Alignment":
        return <GiCarWheel className="h-6 w-6" />;
      case "Transmission Repair":
        return <Cog className="h-6 w-6" />;
      case "General Maintenance":
        return <Wrench className="h-6 w-6" />;
      case "HVAC Services":
        return <Zap className="h-6 w-6" />;
      case "Electrical Repairs":
        return <Zap className="h-6 w-6" />;
      case "Diagnostic Services":
        return <Stethoscope className="h-6 w-6" />;
      case "Safety Inspections and Emissions":
        return <ShieldCheck className="h-6 w-6" />;
      case "Hybrid and Electric Vehicle Maintenance":
        return <Cpu className="h-6 w-6" />;
      case "Detailing Services":
        return <Paintbrush className="h-6 w-6" />;
      case "Roadside Assistance and Towing":
        return <Truck className="h-6 w-6" />;
      case "Engine Repair and Maintenance":
        return <PiEngineThin className="h-6 w-6" />;
      case "Exhaust System Repair":
        return <SiJfrogpipelines className="h-6 w-6" />;
      case "Advanced Brake System (ABS) Repairs":
        return <AlertTriangle className="h-6 w-6" />;
      case "Bodywork and Collision Repair":
        return <Car className="h-6 w-6" />;
      case "Accessory Installation":
        return <Plus className="h-6 w-6" />;
      case "Advanced Driver Assistance Systems (ADAS) Calibration":
        return <Gauge className="h-6 w-6" />;
      default:
        return <Wrench className="h-6 w-6" />;
    }
  };

  // Function to display the appropriate button (Book Now or Request a Quote)
  const getButton = (service: string): JSX.Element => {
    const bookableServices = ["Tire Services", "Tire Storage", "Tire Ordering"];

    if (bookableServices.includes(service)) {
      return (
        <Button onClick={() => setIsOpen(true)} className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full rounded-md text-white group">
          <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
          <span className="text-sm">Book Now</span>
        </Button>
      );
    } else {
      return (
        <Button className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 w-full py-2 rounded-md text-white group">
          <Clipboard className="h-4 w-4 inline-block mr-1 group-hover:fill-white" />
          Request a Quote
        </Button>
      );
    }
  };

  return (
    <Card className="mb-8 bg-section">
      <CardHeader>
        <CardTitle>Services Offered</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {servicesOffered.map((service, index) => (
            <Card key={index} className="relative group cursor-pointer h-[300px]">
              <span className="absolute inset-0 bg-[#eff2fd] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-lg z-0"></span>
              <CardHeader className="z-40 relative">
                <CardTitle className="text-lg flex items-center gap-2 h-16 group-hover:text-secondary">
                  {getServiceIcon(service.serviceName)}
                  {service.serviceName}
                </CardTitle>
              </CardHeader>
              <CardContent className="z-40 relative flex flex-col ">
                <p className="h-16 ">{service.serviceDetails}</p>
                <p className="font-bold">Average Time: {service.averageTime}</p>
                <p className="font-bold">Starting From {service.min_price.toFixed(2)}</p>
              </CardContent>
              <div className="z-40 relative flex justify-center items-center px-5">
                {getButton(service.serviceName)}
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Card>
  );
};

export default ServicesOffered;
