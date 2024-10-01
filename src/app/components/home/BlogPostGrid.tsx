import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// import Image from "next/image";

const blogPosts = [
  {
    title: "7 Client Red Flags Freelancers Should Look Out for",
    description:
      "This post covers all the client red flags you should look out for when freelancing.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YGqOiiwar5kZ7GM79BRIuy749FU53K.png",
    category: "Skillhive News",
  },
  {
    title: "The Ultimate Guide to Becoming a Freelancer in 2023",
    description:
      "Read about defining your specialty, choosing your skills, creating a portfolio, and more.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YGqOiiwar5kZ7GM79BRIuy749FU53K.png",
    category: "Freelancing tips",
  },
  {
    title: "The Top Productivity Hacks All Freelancers Should Practice Daily",
    description:
      "Whether you're a seasoned freelancer or new to freelancing, use these productivity hacks to make the most of your time.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YGqOiiwar5kZ7GM79BRIuy749FU53K.png",
    category: "Freelancer features",
  },
];

export default function BlogPostGrid() {
  return (
    <div className="container mx-auto px-4 pt-32">
      <h2 className="text-5xl font-medium text-center mb-12 text-coal">
        Gain More Knowledge with our Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              {/* <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              /> */}
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
            </CardContent>
            <CardFooter className="px-4 py-2 bg-gray-50">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button className="bg-[#D0F288] text-gray-800 hover:bg-[#bfe06e]">
          View All
        </Button>
      </div>
    </div>
  );
}
