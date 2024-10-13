import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { poppins } from "@/fonts/fonts";
import StarPicker from "react-star-picker";
import 'react-star-picker/styles.css';



interface ServiceCardProps {
  id: number,
  garage: string,
  ownerName: string,
  rating: number,
  minPrice: string,
  maxPrice: string,
  profileImage: string,
  bannerImage: string[],
  offer: string
}

export default function ServiceCard({
  garage,
  ownerName,
  rating,
  minPrice,
  maxPrice,
  profileImage,
  offer,
  bannerImage,

}: ServiceCardProps) {
  return (
    <div
      className=" p-4 rounded-lg shadow-md block"
    >

      {/* swiper for small devices */}
      <div className="">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-full h-[20vh] lg:mt-3 md:mt-6 mt-4">
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
          <div className="flex my-3 items-center gap-4 h-full">
            <div className="flex rounded-full overflow-hidden">
              <Image
                width={500}
                height={500}
                src={profileImage}
                alt={`image  of ${garage}`}
                className="size-[50px]"
              />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold flex-1">{garage}</h3>
              <h2 className={`${poppins.className} text-sm font-semibold flex items-center gap-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                <span>
                  1234 Tire Lane, Springfield, IL, 62704
                </span>
              </h2>
            </div>
          </div>
          <p className="text-sm text-gray-600">by {ownerName}</p>
          <h2 className={`${poppins.className} my-3 flex items-center gap-1 h-10`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" /><circle cx="12" cy="8" r="6" /></svg>
            <span className="">
              {offer}
            </span>
          </h2>
          <div className="flex justify-between items-center mt-4">
            {/* Render stars based on rating */}
            <div className="flex items-center gap-1">
              <StarPicker
                size={20}
                starCount={5}
                disabled={true}
                className=""
                halfStars={true}
                value={rating} />
                <span className="text-sm">{rating} / 120</span>
            </div>
            <span className="text-sm font-medium">From {minPrice} - {maxPrice}</span>
          </div>
        </div>
      </Link>

    </div>
  );
}
