import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../section/SectionHeader";

const services = [
  {
    title: "Web Development",
    description:
      "Hire freelance web development experts to build your business's online presence.",
    image: "/placeholder.svg?height=400&width=300",
    learnMore: true,
  },
  {
    title: "Video and Animation",
    description: "",
    image: "/placeholder.svg?height=400&width=300",
    learnMore: false,
  },
  {
    title: "Digital Marketing",
    description: "",
    image: "/placeholder.svg?height=400&width=300",
    learnMore: false,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 px-4">
      <SectionHeader />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden h-[660px]">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-50"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  {service.description && (
                    <p className="text-sm mb-4">{service.description}</p>
                  )}
                  {service.learnMore && (
                    <Button
                      variant="link"
                      className="text-white p-0 h-auto font-normal hover:no-underline"
                    >
                      Learn More <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button className="bg-lime-400 hover:bg-lime-500 text-gray-800">
            View all Services
          </Button>
        </div>
      </div>
    </section>
  );
}
