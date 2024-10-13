import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { poppins } from "@/fonts/fonts";

interface ServiceCardProps {
  garage: string,
  ownerName: string,
  rating: string,
  minPrice: string,
  maxPrice: string,
  profileImage: string,
  bannerImage: string[],
}

export default function ServiceCard({
  garage,
  ownerName,
  rating,
  minPrice,
  maxPrice,
  profileImage,
  bannerImage,

}: ServiceCardProps) {
  return (
    <div
      className=" p-4 rounded-lg shadow-md block"
    >
      {/* name  */}
      <h2 className={`${poppins.className} md:mb-2 mb-1 font-semibold flex items-center gap-2`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><rect width="12" height="12" x="6" y="10" /></svg>
        <span>
          Quick Tire Garage
        </span>
      </h2>
      {/* swiper for small devices */}
      <div className="">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-[20vh] lg:mt-6 md:mt-6 mt-4">
          {
            bannerImage?.map((data, idx) => <SwiperSlide key={idx}>
              <Image
                src={data}
                alt="Garage Image"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </SwiperSlide>
            )
          }

        </Swiper>
      </div>
      <Link href={`/garages/${encodeURIComponent(ownerName)}`}>
        <div className="h-full mt-2">
          <div className="flex items-center gap-4 h-full">
            <div className="flex rounded-full overflow-hidden">
              <Image
                width={500}
                height={500}
                src={profileImage}
                alt={`image  of ${garage}`}
                className="size-[50px]"
              />
            </div>
            <h3 className="text-lg font-semibold flex-1">{garage}</h3>
          </div>
          <p className="text-sm text-gray-600">by {ownerName}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-500">⭐ {rating}</span>
            <span className="text-sm font-medium">Start From {minPrice} - {maxPrice}</span>
          </div>
        </div>
      </Link>

    </div>
  );
}
