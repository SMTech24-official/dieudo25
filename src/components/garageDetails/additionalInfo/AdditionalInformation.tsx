import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoArrowUpRight } from 'react-icons/go';
import CancellationPolicyModal from '@/components/garageDetails/cancelPolicy/CancelPolicy';

// Define types for the owner and location props
interface Owner {
  contact: {
    phone: string;
    email: string;
  };
}

interface Location {
  address: {
    postalCode: string;
    street: string;
    canton: string;
    city: string;
  };
}

// Define the props for the component
interface AdditionalInformationProps {
  owner: Owner;
  location: Location;
}

const AdditionalInformation: React.FC<AdditionalInformationProps> = ({ owner, location }) => {
  return (
    <Card className="mb-8 bg-section">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div className="flex md:flex-row flex-col md:items-center gap-5">
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-call"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                <path d="M14.05 6A5 5 0 0 1 18 10" />
              </svg>
              {owner.contact.phone}
            </p>
            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {owner.contact.email}
            </p>
          </div>
          <div className="flex justify-center">
            <Button className="mt-4 flex items-center gap-2 bg-secondary hover:bg-secondary/80  w-fit px-4 py-2 rounded text-white">
              Message Us <GoArrowUpRight className="text-lg" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span className="">
            {location.address.postalCode} {location.address.street},{' '}
            {location.address.canton}, {location.address.city}
          </span>
        </p>
        <div className="h-[40vh] w-full">
          <iframe
            src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
      <CancellationPolicyModal />
    </Card>
  );
};

export default AdditionalInformation;
