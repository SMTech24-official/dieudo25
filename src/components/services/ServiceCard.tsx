import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  sellerName: string;
  rating: number;
  price: string;
  imageUrl: string;
  bannerImage: string;
}

export default function ServiceCard({
  title,
  sellerName,
  rating,
  price,
  imageUrl,
  bannerImage,
}: ServiceCardProps) {
  console.log(bannerImage);
  return (
    <Link
      href={`/garages/${encodeURIComponent(sellerName)}`}
      className="border border-lemon p-4 rounded-lg shadow-md block"
    >
      <Image
        src={bannerImage}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
        width={1200}
        height={500}
      />
      <div className="h-full">
        <div className="flex items-center gap-4 h-full">
          <div className="flex rounded-full overflow-hidden">
            <Image
              width={500}
              height={500}
              src={imageUrl}
              alt={`image  of ${title}`}
              className="size-[50px]"
            />
          </div>
          <h3 className="text-lg font-semibold flex-1">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">by {sellerName}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-yellow-500">⭐ {rating}</span>
          <span className="text-sm font-medium">{price}</span>
        </div>
      </div>
    </Link>
  );
}
