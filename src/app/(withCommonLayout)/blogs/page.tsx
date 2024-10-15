import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/utils/blogData";
import SectionHeader from "../../../components/section/SectionHeader";
import { PaginationPage } from "@/components/services/PaginationPage";
import Image from "next/image";
import { poppins } from "@/fonts/fonts";
import Link from "next/link";

const gallery = [
  "https://img.freepik.com/free-photo/auto-mechanic-checking-car_1303-14042.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/car-repair-maintenance-theme-mechanic-uniform-working-auto-service_627829-3918.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/happy-african-american-auto-repairman-talking-customer-workshop_637285-8626.jpg?semt=ais_hybrid-rr-similar",
  "https://img.freepik.com/free-photo/female-mechanic-repairing-car_1170-1617.jpg?semt=ais_hybrid-rr-similar"
]


export default function BlogPostGrid() {
  return (
    <div className="container mx-auto px-padding_small pt-padding_medium m-10">
      <SectionHeader
        subTitle="Find your best garage blogPosts..."
        title="Gain More Knowledge with our Blog"
        description="Best blogs for your services"
      />
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <CardHeader className="p-0">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                objectFit="cover"
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
            <CardTitle className={`leading-7 ${poppins.className}`}> {post.title} </CardTitle>
              <CardDescription className="py-3 leading-5">{post.description}</CardDescription>
            </CardContent>
            <CardFooter className="px-4 py-2 bg-gray-50 flex justify-between items-center mt-auto">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
              <Link href={`/blogs/${post.id}`}>
                <Button variant="outline" size="sm" className="bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 text-white hover:text-white">
                  Read Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 container px-5">
        <PaginationPage />
      </div>
    </div>
  );
}

