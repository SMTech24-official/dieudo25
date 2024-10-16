"use client";

import SectionHeader from "../section/SectionHeader";
import { garagesData } from "@/utils/garageData";
import FeaturedGarage from "../services/FeaturedGarage";



export default function FeaturedGarages() {
  return (
    <section className="py-padding_base px-padding_small">
      <SectionHeader
        subTitle="Find your best garage partner"
        title="Featured Garages"
        description="Our Trusted Garages"
      />
      <div className="container mt-12">
        {/* Responsive Grid to display the garages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {garagesData?.garages.slice(0,3).map((garages) => (
            <div key={garages.id}>
              <FeaturedGarage {...garages} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
