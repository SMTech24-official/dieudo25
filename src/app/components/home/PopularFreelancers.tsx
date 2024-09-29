import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const freelancers = [
  {
    name: "Oluwa Tosin Adeyemi",
    title: "Web Developer",
    rate: "32USD/ Hr",
    image: "/placeholder.svg?height=400&width=400",
    bgColor: "bg-teal-100",
  },
  {
    name: "Malik Johnson",
    title: "Digital Marketing Strategist",
    rate: "32USD/ Hr",
    image: "/placeholder.svg?height=400&width=400",
    bgColor: "bg-blue-100",
  },
  {
    name: "Kwame Osei",
    title: "Video and Animation Specialist",
    rate: "32USD/ Hr",
    image: "/placeholder.svg?height=400&width=400",
    bgColor: "bg-pink-100",
  },
];

export default function PopularFreelancers() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Freelancers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer, index) => (
            <Card
              style={{ backgroundImage: `url("${freelancer.image?.src}")` }}
              key={index}
              className={`overflow-hidden h-[400px] flex items-end`}
            >
              <CardContent className="p-0 w-full">
                <div className="w-full p-3">
                  <div className="p-6 bg-red-500 rounded-md">
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
