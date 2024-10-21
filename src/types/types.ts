import { LucideProps } from "lucide-react";

export type TireService = {
    serviceName: string;
    description: string;
    price: number; // Price in currency units
};

export type Review = {
    customerName: string;
    rating: number; // Rating out of 5
    comment: string;
    date: string; // Date of the review
};

type Contact = {
    phone: string;
    email: string;
};

type Address = {
    street: string;
    postalCode: string;
    city: string;
    canton: string;
    country: string;
};

export type OpeningHour = {
    id: number;
    slotName: string;
    days: string;
    open?: string;
    close?: string;
    status?: string;
};

type Capacity = {
    maxVehiclesPerDay: number;
};

type Service = {
    serviceName: string;
    serviceDetails: string;
    min_price: number;
    max_price: number;
    averageTime: string;
};

type price = {
    min_price: number;
    max_price: number;
};

type ImageLinks = {
    profile: string;
    banners: string[];
};

type TireDelivery = {
    brand: string;
    deliveryTime: string;
};
type Ratings = {
    rating: number;
    total: number;
};

type SpecialRequest = {
    serviceType: string;
    description: string;
};

export type Garage = {
    id: number;
    garageName: string;
    owner: {
        name: string;
        contact: Contact;
    };
    location: {
        address: Address;
    };
    openingHours: OpeningHour[];
    capacity: Capacity;
    timeSlotAvailability: {
        emergencyService: boolean;
    };
    servicesOffered: Service[];
    pricing: {
        currency: string;
        price: price;
    };
    ratings: Ratings;
    images: ImageLinks;
    realTimeAvailability: boolean;
    tireDelivery: TireDelivery[];
    specialRequests: SpecialRequest[];
    offers: string;
    garageBio: string;
};

export type QuoteData = {
    id: string;
    garageName?: string;
    ownerName?: string;
    services: {
        name: string;
        price?: number; // price is optional, since some services may not have a price provided
    }[];
    tirePurchased: boolean;
    status: string;
    requestDate: string;
    requestedTime: string;
    totalPrice: number;
    estimatedCompletion: string;
    customerName?: string
    location?: string
};


export type NavData = {
    name: string, href: string, icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}