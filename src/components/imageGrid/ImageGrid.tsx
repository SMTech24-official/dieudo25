// ImageGallery.tsx
import React from "react";
import Image from "next/image";

interface GalleryProps {
    gallery: string[]; // Array of image URLs
}

const ImageGrid: React.FC<GalleryProps> = ({ gallery }) => {
    return (
        <div className="md:grid grid-cols-4 grid-rows-2 lg:gap-4 md:gap-2 hidden w-full h-full">
            {/* First div covering 2 columns and 2 rows */}
            <div className="rounded-md col-span-2 row-span-2">
                <Image
                    width={1200}
                    height={900}
                    src={gallery[0]}
                    alt={`Image ${0 + 1}`}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            {/* Second div */}
            <div className="rounded-md col-start-3 col-span-1 row-start-1 row-span-1">
                <Image
                    width={1200}
                    height={900}
                    src={gallery[1]}
                    alt={`Image ${1 + 1}`}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            {/* Third div */}
            <div className="rounded-md col-start-3 col-span-1 row-start-2 row-span-1">
                <Image
                    width={1200}
                    height={900}
                    src={gallery[2]}
                    alt={`Image ${2 + 1}`}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            {/* Fourth div */}
            <div className="rounded-md col-start-4 row-start-1 col-span-1 row-span-1">
                <Image
                    width={1200}
                    height={900}
                    src={gallery[3]}
                    alt={`Image ${3 + 1}`}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>

            {/* Fifth div */}
            <div className="rounded-md col-start-4 col-span-1 row-start-2 row-span-1">
                <Image
                    width={1200}
                    height={900}
                    src={gallery[1]} // Use the second image again
                    alt={`Image ${1 + 1}`}
                    className="rounded-md w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ImageGrid;
