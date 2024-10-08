/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { servicesData } from "@/utils/servicesData";
import SearchBar from "@/components/services/SearchBarProps";
import FilterOptions from "@/components/services/FilterOptions";
import { PaginationPage } from "@/components/services/PaginationPage";
import ServiceCard from "@/components/services/ServiceCard";

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
      <SearchBar onSearch={setQuery} />
      <FilterOptions />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData?.services.map((service) => (
          <div key={service.id}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 container px-5">
        <PaginationPage />
      </div>
    </div>
  );
}
