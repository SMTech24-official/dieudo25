"use client"; // Marking the component as a Client Component

import { notFound, useParams } from "next/navigation"; // Use useParams and notFound from next/navigation
import { blogPosts } from "@/utils/blogData"; // Import blog data
import {
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../../../components/section/SectionHeader";
import { poppins } from "@/fonts/fonts";

export default function SingleBlogPost() {
  const params = useParams(); // Use useParams to get the dynamic route parameters
  const postId = Number(params.id); // Convert the id from string to a number

  const post = blogPosts.find((post) => post.id === postId); // Find the post based on the id

  // If the post is not found, show a 404 page
  if (!post) {
    return notFound();
  }

  return (
    <div className='bg-gray-100 py-8'>
      {' '}
      {/* Set the background color for the whole section */}
      <SectionHeader
        subTitle=''
        title='Your Daily Blogs'
        description=''
      />
      <div className='container mx-auto px-4 py-8 shadow-lg rounded-lg'>
        {' '}
        {/* Apply background, shadow, and rounded corners */}
        <div className='flex flex-col lg:flex-row gap-8 items-start'>
          {/* Right side: Image */}
          <div className='w-full lg:w-1/2 mb-6 lg:mb-0 mx-4'>
            {' '}
            {/* Added horizontal margins for small devices */}
            <Image
              src={post.image}
              alt={post.title}
              width={800} // Increased the width of the image
              height={500}
              className='w-full h-auto object-cover rounded'
            />
          </div>

          {/* Left side: Blog details */}
          <div className='w-full lg:w-2/3 p-6 mx-4'>
            {' '}
            {/* Added horizontal margins for blog details */}
            <CardTitle className={`text-4xl font mb-4 ${poppins.className}`}>
              {post.title}
            </CardTitle>
            <CardDescription className='text-lg mb-6'>
              {post.description}
            </CardDescription>
            <p className='text-gray-700 mb-4'>
              {/* Here you can add more detailed content */}
              This is the detailed content for the blog post titled &quot;
              {post.title}&quot;. You can replace this with actual content or
              fetch it from a CMS.
            </p>
            <div className='mt-6'>
              <Link href='/blogs'>
                <Button
                  className='bg-secondary hover:bg-secondary/80 active:scale-95 transition-all duration-300 text-white hover:text-white'
                  variant='outline'>
                  Back to Blogs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
