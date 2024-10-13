import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StaticImageData } from "next/image";
import image1 from "@/assets/popular-freelancer-1.jpg";
import image2 from "@/assets/popular-freelancer-2.jpg";
import image3 from "@/assets/popular-freelancer-3.jpg";
import SectionHeader from "../section/SectionHeader";

type freelancersDataTypes = {
  name: string;
  title: string;
  rate: string;
  image: StaticImageData;
};

const freelancers: freelancersDataTypes[] = [
  {
    name: "Oluwa Tosin Adeyemi",
    title: "Web Developer",
    rate: "32USD/ Hr",
    image: image1,
  },
  {
    name: "Malik Johnson",
    title: "Digital Marketing Strategist",
    rate: "32USD/ Hr",
    image: image2,
  },
  {
    name: "Kwame Osei",
    title: "Video and Animation",
    rate: "32USD/ Hr",
    image: image3,
  },
];

export default function PopularFreelancers() {
  return (
    <section className="py-padding_base px-padding_small">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Popular Freelancers" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer, index) => (
            <Card
              style={{ backgroundImage: `url("${freelancer.image?.src}")` }}
              key={index}
              className={`overflow-hidden  h-[400px] flex items-end bg-center bg-cover`}
            >
              <CardContent className="p-0 w-full">
                <div className="w-full p-3">
                  <div className="p-6 bg-light/50 backdrop-blur-sm rounded-md">
                    <h3 className="text-xl font-semibold mb-1">
                      {freelancer.name}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-gray-600">{freelancer.title}</p>
                      <p className="text-gray-800 font-medium">
                        {freelancer.rate}
                      </p>
                    </div>
                    <Button className="w-full bg-lime-400 hover:bg-lime-500 text-gray-800">
                      View Freelancer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button className="bg-lime-400 hover:bg-lime-500 text-gray-800 px-8">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
