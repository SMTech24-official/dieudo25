

export const garagesData = {
  garages:  [
    {
      id: 1,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch"
        }
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland"
        }
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00"
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00"
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed"
        }
      ],
      capacity: {
        maxVehiclesPerDay: 10
      },
      timeSlotAvailability: {
        emergencyService: true
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes"
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes"
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes"
        }
      ],
      ratings: {
        rating: 4.9,
        total: 300
      },
      pricing: {
        currency: "CHF",
        price: 
          {
            min_price: 150,
            max_price: 180 // Example higher price for promo
          }
        
      },
      images: {
        profile: "https://via.placeholder.com/300x200.png?text=Garage+Profile",
        banners: [
          "https://via.placeholder.com/1200x400.png?text=Garage+Banner1",
          "https://via.placeholder.com/1200x400.png?text=Garage+Banner2",
          "https://via.placeholder.com/1200x400.png?text=Garage+Banner3",
          "https://via.placeholder.com/1200x400.png?text=Garage+Banner4"
        ]
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days"
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days"
        }
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars."
        }
      ],
      offers:"20% off on your first detailing service!",
      garageBio: "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services."
    }
  ],
  total: 44, // Total number of services
  page: 1, // Current page number
  limit: 8, // Number of services per page
};



export const garage=  {
  id: 1,
  garageName: "Karl's Car Clinic",
  owner: {
    name: "Karl Schmidt",
    contact: {
      phone: "+41 31 123 4567",
      email: "karl.schmidt@example.ch"
    }
  },
  location: {
    address: {
      street: "Waisenhausplatz 4",
      postalCode: "3000",
      city: "Bern",
      canton: "Bern",
      country: "Switzerland"
    }
  },
  openingHours: [
    {
      id: 1,
      slotName: "Weekday Regular",
      days: "Monday to Friday",
      open: "07:00",
      close: "17:00"
    },
    {
      id: 2,
      slotName: "Saturday Service",
      days: "Saturday",
      open: "09:00",
      close: "14:00"
    },
    {
      id: 3,
      slotName: "Sunday Closed",
      days: "Sunday",
      status: "Closed"
    }
  ],
  capacity: {
    maxVehiclesPerDay: 10
  },
  timeSlotAvailability: {
    emergencyService: true
  },
  servicesOffered: [
    {
      serviceName: "Tire Rotation",
      serviceDetails: "Helps extend tire life and balance wear.",
      min_price: 50,
      max_price: 60, // 20% higher than min_price
      averageTime: "4 wheels - 30 minutes"
    },
    {
      serviceName: "Engine Diagnostics",
      serviceDetails: "Comprehensive engine checkup and diagnostics.",
      min_price: 100,
      max_price: 120, // 20% higher than min_price
      averageTime: "1 vehicle - 45 minutes"
    },
    {
      serviceName: "Brake Repair",
      serviceDetails: "Replacement of brake pads and fluid.",
      min_price: 150,
      max_price: 180, // 20% higher than min_price
      averageTime: "4 wheels - 60 minutes"
    }
  ],
  ratings: {
    rating: 4.9,
    total: 300
  },
  pricing: {
    currency: "CHF",
    price: 
      {
        min_price: 150,
        max_price: 180 // Example higher price for promo
      }
    
  },
  images: {
    profile: "https://via.placeholder.com/300x200.png?text=Garage+Profile",
    banners: [
      "https://via.placeholder.com/1200x400.png?text=Garage+Banner1",
      "https://via.placeholder.com/1200x400.png?text=Garage+Banner2",
      "https://via.placeholder.com/1200x400.png?text=Garage+Banner3",
      "https://via.placeholder.com/1200x400.png?text=Garage+Banner4"
    ]
  },
  realTimeAvailability: true,
  tireDelivery: [
    {
      brand: "Continental",
      deliveryTime: "2 business days"
    },
    {
      brand: "Dunlop",
      deliveryTime: "3 business days"
    }
  ],
  specialRequests: [
    {
      serviceType: "Hybrid Vehicle Maintenance",
      description: "Specialized service for hybrid cars."
    }
  ],
  offers:"20% off on your first detailing service!",
  garageBio: "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services."
}
 