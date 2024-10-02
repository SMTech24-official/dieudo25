"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceCard from "@/app/components/services/ServiceCard";
import { servicesData } from "@/utils/servicesData";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  //   const fetchServices = async (page: number, query: string = "") => {
  //     // Simulated API response with fake data
  //     const response = await fetch(`/api/services?page=${page}&query=${query}`);
  //     const data = await response.json();
  //     setServices(data.services);
  //   };

  //   useEffect(() => {
  //     fetchServices(page, query);
  //   }, [page, query]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData?.services.map((service) => (
          <div key={service.id}>
            <ServiceCard
              title={service.title}
              sellerName={service.sellerName}
              rating={service.rating}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
}
