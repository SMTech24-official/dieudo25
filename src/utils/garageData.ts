export const garagesData = {
  garages: [
    {
      id: 1,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
    {
      id: 2,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
    {
      id: 3,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
    {
      id: 4,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
    {
      id: 5,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
    {
      id: 6,
      garageName: "Karl's Car Clinic",
      owner: {
        name: "Karl Schmidt",
        contact: {
          phone: "+41 31 123 4567",
          email: "karl.schmidt@example.ch",
        },
      },
      location: {
        address: {
          street: "Waisenhausplatz 4",
          postalCode: "3000",
          city: "Bern",
          canton: "Bern",
          country: "Switzerland",
        },
      },
      openingHours: [
        {
          id: 1,
          slotName: "Weekday Regular",
          days: "Monday to Friday",
          open: "07:00",
          close: "17:00",
        },
        {
          id: 2,
          slotName: "Saturday Service",
          days: "Saturday",
          open: "09:00",
          close: "14:00",
        },
        {
          id: 3,
          slotName: "Sunday Closed",
          days: "Sunday",
          status: "Closed",
        },
      ],
      capacity: {
        maxVehiclesPerDay: 10,
      },
      timeSlotAvailability: {
        emergencyService: true,
      },
      servicesOffered: [
        {
          serviceName: "Tire Rotation",
          serviceDetails: "Helps extend tire life and balance wear.",
          min_price: 50,
          max_price: 60, // 20% higher than min_price
          averageTime: "4 wheels - 30 minutes",
        },
        {
          serviceName: "Engine Diagnostics",
          serviceDetails: "Comprehensive engine checkup and diagnostics.",
          min_price: 100,
          max_price: 120, // 20% higher than min_price
          averageTime: "1 vehicle - 45 minutes",
        },
        {
          serviceName: "Brake Repair",
          serviceDetails: "Replacement of brake pads and fluid.",
          min_price: 150,
          max_price: 180, // 20% higher than min_price
          averageTime: "4 wheels - 60 minutes",
        },
      ],
      ratings: {
        rating: 4.9,
        total: 300,
      },
      pricing: {
        currency: "CHF",
        price: {
          min_price: 150,
          max_price: 180, // Example higher price for promo
        },
      },
      images: {
        profile:
          "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
        banners: [
          "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
          "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
        ],
      },
      realTimeAvailability: true,
      tireDelivery: [
        {
          brand: "Continental",
          deliveryTime: "2 business days",
        },
        {
          brand: "Dunlop",
          deliveryTime: "3 business days",
        },
      ],
      specialRequests: [
        {
          serviceType: "Hybrid Vehicle Maintenance",
          description: "Specialized service for hybrid cars.",
        },
      ],
      offers: "20% off on your first detailing service!",
      garageBio:
        "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
    },
  ],
  total: 44, // Total number of services
  page: 1, // Current page number
  limit: 8, // Number of services per page
};

export const garage = {
  id: 1,
  garageName: "Karl's Car Clinic",
  owner: {
    name: "Karl Schmidt",
    contact: {
      phone: "+41 31 123 4567",
      email: "karl.schmidt@example.ch",
    },
  },
  location: {
    address: {
      street: "Waisenhausplatz 4",
      postalCode: "3000",
      city: "Bern",
      canton: "Bern",
      country: "Switzerland",
    },
  },
  openingHours: [
    {
      id: 1,
      slotName: "Weekday Regular",
      days: "Monday",
      open: "07:00",
      close: "17:00",
    },
    {
      id: 4,
      slotName: "Weekday Regular",
      days: "Tuesday",
      open: "07:00",
      close: "17:00",
    },
    {
      id: 5,
      slotName: "Wednesday Service",
      days: "Wednesday",
      open: "09:00",
      close: "19:00",
    },
    {
      id: 6,
      slotName: "Thursday Closed",
      days: "Thursday",
      status: "Closed",
    },
    {
      id: 7,
      slotName: "Friday Service",
      days: "Friday",
      open: "09:00",
      close: "14:00",
    },
    {
      id: 2,
      slotName: "Saturday Service",
      days: "Saturday",
      open: "09:00",
      close: "14:00",
    },
    {
      id: 3,
      slotName: "Sunday Closed",
      days: "Sunday",
      status: "Closed",
    },
  ],
  capacity: {
    maxVehiclesPerDay: 10,
  },
  timeSlotAvailability: {
    emergencyService: true,
  },
  servicesOffered: [
    {
      serviceName: "Tire Services",
      serviceDetails:
        "Includes tire rotation, balancing, repair, and replacement.",
      min_price: 50,
      max_price: 70,
      averageTime: "1 hour",
    },
    {
      serviceName: "Tire Storage",
      serviceDetails: "Secure off-season tire storage in optimal conditions.",
      min_price: 30,
      max_price: 40,
      averageTime: "30 minutes",
    },
    {
      serviceName: "Tire Ordering",
      serviceDetails: "Order new tires with personalized recommendations.",
      min_price: 20,
      max_price: 30,
      averageTime: "15 minutes",
    },
    {
      serviceName: "Oil Changes",
      serviceDetails:
        "Essential for maintaining engine lubrication and performance.",
      min_price: 80,
      max_price: 100,
      averageTime: "45 minutes",
    },
    {
      serviceName: "Battery Services",
      serviceDetails: "Battery testing, replacement, and diagnostics.",
      min_price: 60,
      max_price: 80,
      averageTime: "30 minutes",
    },
    {
      serviceName: "Brake Repairs",
      serviceDetails: "Includes pad, rotor, and fluid replacement.",
      min_price: 150,
      max_price: 180,
      averageTime: "1 hour",
    },
    {
      serviceName: "Wheel Alignment",
      serviceDetails: "Ensures the angles of the wheels are correctly aligned.",
      min_price: 100,
      max_price: 120,
      averageTime: "1 hour",
    },
    {
      serviceName: "Transmission Repair",
      serviceDetails: "Maintenance and repair of transmission components.",
      min_price: 500,
      max_price: 600,
      averageTime: "5 hours",
    },
    {
      serviceName: "General Maintenance",
      serviceDetails: "Includes filter replacements, fluid checks, and more.",
      min_price: 100,
      max_price: 120,
      averageTime: "1 hour",
    },
    {
      serviceName: "HVAC Services",
      serviceDetails:
        "Heating, ventilation, and air conditioning system maintenance.",
      min_price: 150,
      max_price: 180,
      averageTime: "1.5 hours",
    },
    {
      serviceName: "Electrical Repairs",
      serviceDetails:
        "Repairs alternators, starters, and other electrical components.",
      min_price: 200,
      max_price: 250,
      averageTime: "2 hours",
    },
    {
      serviceName: "Diagnostic Services",
      serviceDetails:
        "Advanced diagnostic checks for engine and emission issues.",
      min_price: 100,
      max_price: 120,
      averageTime: "1 hour",
    },
    {
      serviceName: "Safety Inspections and Emissions",
      serviceDetails:
        "Safety inspections and emissions testing as per regulations.",
      min_price: 80,
      max_price: 100,
      averageTime: "45 minutes",
    },
    {
      serviceName: "Hybrid and Electric Vehicle Maintenance",
      serviceDetails: "Specialized services for hybrid and electric vehicles.",
      min_price: 300,
      max_price: 350,
      averageTime: "3 hours",
    },
    {
      serviceName: "Detailing Services",
      serviceDetails: "Complete vehicle cleaning and restoration.",
      min_price: 100,
      max_price: 120,
      averageTime: "2 hours",
    },
    {
      serviceName: "Roadside Assistance and Towing",
      serviceDetails: "Emergency towing and roadside help.",
      min_price: 150,
      max_price: 200,
      averageTime: "As needed",
    },
    {
      serviceName: "Engine Repair and Maintenance",
      serviceDetails: "Comprehensive engine diagnostics and repairs.",
      min_price: 500,
      max_price: 600,
      averageTime: "5 hours",
    },
    {
      serviceName: "Exhaust System Repair",
      serviceDetails: "Repair or replacement of exhaust system components.",
      min_price: 200,
      max_price: 240,
      averageTime: "2 hours",
    },
    {
      serviceName: "Advanced Brake System (ABS) Repairs",
      serviceDetails: "Repairs and diagnostics for ABS systems.",
      min_price: 250,
      max_price: 300,
      averageTime: "2 hours",
    },
    {
      serviceName: "Bodywork and Collision Repair",
      serviceDetails: "Restoration of vehicle exterior after damage.",
      min_price: 1000,
      max_price: 1200,
      averageTime: "10 hours",
    },
    {
      serviceName: "Accessory Installation",
      serviceDetails:
        "Installation of accessories like roof racks and tow bars.",
      min_price: 50,
      max_price: 60,
      averageTime: "1 hour",
    },
    {
      serviceName: "Advanced Driver Assistance Systems (ADAS) Calibration",
      serviceDetails: "Calibration of ADAS components like parking sensors.",
      min_price: 300,
      max_price: 350,
      averageTime: "3 hours",
    },
  ],
  ratings: {
    rating: 4.9,
    total: 300,
  },
  pricing: {
    currency: "CHF",
    price: {
      min_price: 150,
      max_price: 180, // Example higher price for promo
    },
  },
  images: {
    profile:
      "https://img.freepik.com/free-photo/repairmen-talking-phone-workshop_23-2147897948.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid-rr-similar",
    banners: [
      "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
      "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
      "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
      "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar",
    ],
  },
  realTimeAvailability: true,
  tireDelivery: [
    {
      brand: "Continental",
      deliveryTime: "2 business days",
    },
    {
      brand: "Dunlop",
      deliveryTime: "3 business days",
    },
  ],
  specialRequests: [
    {
      serviceType: "Hybrid Vehicle Maintenance",
      description: "Specialized service for hybrid cars.",
    },
  ],
  offers: {
    discount: "20% Off",
    services: "On your first detailing service",
    valid: "30 Days"
  } ,
  garageBio:
    "At Karl's Car Clinic, we offer professional automotive services with a focus on diagnostics and repairs. Our goal is to keep your vehicle in top shape with efficient and affordable services.",
};
