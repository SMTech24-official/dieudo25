import { QuoteData } from "@/types/types";

export const garageRequests: QuoteData[] = [
    {
      id: "Q12345",
      status: "Pending",
      requestDate: "2024-03-15",
      garageName: "AutoFix Garage",
      ownerName: "Alice Johnson",
      services: [
        { name: "Tire Installation", price: 80 },
        { name: "Wheel Balancing", price: 40 },
        { name: "Tire Purchase (4x)", price: 400 },
        { name: "Tire Rotation" }, // No price provided
        { name: "Battery Replacement" } // No price provided
      ],
      totalPrice: 520,
      tirePurchased: true,
      estimatedCompletion: "3 days",
      requestedTime: "2024-09-03T11:26:49.508Z",
    },
    {
      id: "Q12346",
      status: "Completed",
      requestDate: "2024-05-10",
      garageName: "Speedy Repairs",
      ownerName: "Bob Smith",
      services: [
        { name: "Oil Change", price: 60 },
        { name: "Brake Replacement", price: 150 }
      ],
      totalPrice: 210,
      tirePurchased: false,
      estimatedCompletion: "1 day",
      requestedTime: "2024-05-12T09:15:30.000Z",
    },
    {
      id: "Q12347",
      status: "Cancelled",
      requestDate: "2024-07-01",
      garageName: "FixIt Fast",
      ownerName: "Carol Davis",
      services: [
        { name: "Battery Replacement", price: 120 },
        { name: "Tire Rotation", price: 40 }
      ],
      totalPrice: 160,
      tirePurchased: false,
      estimatedCompletion: "2 days",
      requestedTime: "2024-07-03T12:34:22.000Z",
    },
    {
      id: "Q12348",
      status: "Received",
      requestDate: "2024-02-28",
      garageName: "WheelWorks",
      ownerName: "David Miller",
      services: [
        { name: "Tire Purchase (2x)", price: 200 },
        { name: "Wheel Alignment", price: 70 }
      ],
      totalPrice: 270,
      tirePurchased: true,
      estimatedCompletion: "1 day",
      requestedTime: "2024-03-01T14:25:45.000Z",
    },
    {
      id: "Q12349",
      status: "Pending",
      requestDate: "2024-08-10",
      garageName: "FastFix Garage",
      ownerName: "Emma Wilson",
      services: [
        { name: "Oil Change", price: 50 },
        { name: "Transmission Fluid Replacement", price: 180 }
      ],
      totalPrice: 230,
      tirePurchased: false,
      estimatedCompletion: "1 day",
      requestedTime: "2024-08-12T16:48:12.000Z",
    },
    {
      id: "Q12350",
      status: "Completed",
      requestDate: "2024-06-15",
      garageName: "Car Care Experts",
      ownerName: "Frank Harris",
      services: [
        { name: "Tire Rotation", price: 30 },
        { name: "Air Filter Replacement", price: 25 }
      ],
      totalPrice: 55,
      tirePurchased: false,
      estimatedCompletion: "Same day",
      requestedTime: "2024-06-16T10:00:00.000Z",
    },
    {
      id: "Q12351",
      status: "Cancelled",
      requestDate: "2024-01-20",
      garageName: "Prime Auto Service",
      ownerName: "Grace Lee",
      services: [
        { name: "Brake Replacement", price: 180 },
        { name: "Wheel Balancing", price: 40 }
      ],
      totalPrice: 220,
      tirePurchased: false,
      estimatedCompletion: "2 days",
      requestedTime: "2024-01-22T11:45:00.000Z",
    },
    {
      id: "Q12352",
      status: "Received",
      requestDate: "2024-04-05",
      garageName: "Auto Hub",
      ownerName: "Henry Brown",
      services: [
        { name: "Tire Installation", price: 100 },
        { name: "Battery Replacement", price: 120 }
      ],
      totalPrice: 220,
      tirePurchased: true,
      estimatedCompletion: "2 days",
      requestedTime: "2024-04-07T09:30:00.000Z",
    },
    {
      id: "Q12353",
      status: "Pending",
      requestDate: "2024-09-22",
      garageName: "Expert Auto",
      ownerName: "Isla King",
      services: [
        { name: "Transmission Repair", price: 600 },
        { name: "Tire Replacement", price: 350 }
      ],
      totalPrice: 950,
      tirePurchased: true,
      estimatedCompletion: "5 days",
      requestedTime: "2024-09-24T15:22:10.000Z",
    },
    {
      id: "Q12354",
      status: "Completed",
      requestDate: "2024-10-01",
      garageName: "Fast Lane Repairs",
      ownerName: "Jack Cooper",
      services: [
        { name: "Oil Change", price: 50 },
        { name: "Tire Purchase (4x)", price: 400 }
      ],
      totalPrice: 450,
      tirePurchased: true,
      estimatedCompletion: "2 days",
      requestedTime: "2024-10-03T12:00:00.000Z",
    }
  ];
  
  