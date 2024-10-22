"use client";

import SectionHeader from "../section/SectionHeader";
import { garagesData } from "@/utils/garageData";
import FeaturedGarage from "../services/FeaturedGarage";
import PartnerCategories from "./Partners";



export default function FeaturedGarages() {
  return (
    <section className="section-gap bg-section">
      <SectionHeader
        subTitle="Empowering Quality Service Through Strategic Partnerships"
        title="Our Trusted Partners"
        description="At LiftWork, we partner with leading suppliers and experts to provide high-quality parts, reliable insurance, and top tools. This ensures our garages offer excellent service, clear pricing, and peace of mind for all your vehicle needs."
      />
      <div className="container mt-12">
        {/* Responsive Grid to display the garages */}
        <div className="">
          <PartnerCategories />
        </div>
      </div>
    </section>
  );
}
