// ResponsiveSwiper.tsx
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";



interface ResponsiveSwiperProps {
    bannerImages: string[]; // Array of image URLs for the gallery
    pagination?: boolean; // Optional pagination prop
    height?: string; // Height of the swiper
    additionalClasses?: string; // Additional classes for styling
}

const ResponsiveSwiper: React.FC<ResponsiveSwiperProps> = ({
    bannerImages,
    pagination = true,
    height,
    additionalClasses,
}) => {
    // Dynamic visibility class

    return (
        <div className={`${additionalClasses}`}>
            <Swiper pagination={pagination} modules={[Pagination]} className={`mySwiper w-full h-[${height}]  lg:mt-6 md:mt-6 mt-4`}>
                {bannerImages?.map((data, idx) => (
                    <SwiperSlide key={idx}>
                        <Image
                            src={data}
                            alt="Garage Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ResponsiveSwiper;
