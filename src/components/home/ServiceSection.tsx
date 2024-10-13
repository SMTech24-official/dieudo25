import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../section/SectionHeader";
import image1 from "@/assets/slider-image-1.jpg";
import image2 from "@/assets/slider-image-2.jpg";
import image3 from "@/assets/slider-image-3.jpg";

const services = [
  {
    title: "Web Development",
    description:
      "Hire freelance web development experts to build your business's online presence.",
    image: image1,
    learnMore: true,
  },
  {
    title: "Video and Animation",
    description:
      "Hire freelance web development experts to build your business's online presence.",
    image: image2,
    learnMore: true,
  },
  {
    title: "Digital Marketing",
    description:
      "Hire freelance web development experts to build your business's online presence.",
    image: image3,
    learnMore: true,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-padding_base px-padding_small">
      <SectionHeader
        subTitle="What our freelancers are best at"
        title="Popular Freelance Services"
        description="Soufflé powder halvah cake candy. Jelly-o croissant pie shortbread brownie sweet cookie."
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden h-[350px] lg:h-[660px] group relative"
            >
              <div className=" absolute top-0 left-0 w-full h-full group">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="lg:brightness-75 brightness-50 lg:group-hover:brightness-50 transition duration-500 group-hover:scale-105 "
                />
                <CardContent className="absolute inset-0  lg:translate-y-[20%]  group-hover:translate-y-0 duration-500 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 lg:mb-10 lg:group-hover:mb-2">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-base font-medium mb-4">
                      {service.description}
                    </p>
                  )}
                  {service.learnMore && (
                    <div>
                      <Button
                        variant="link"
                        className="text-white  p-0 h-auto font-medium hover:no-underline"
                      >
                        Learn More <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
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
