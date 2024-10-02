import Image from "next/image";

interface ServiceCardProps {
  title: string;
  sellerName: string;
  rating: number;
  price: string;
  imageUrl: string;
}

export default function ServiceCard({
  title,
  sellerName,
  rating,
  price,
  imageUrl,
}: ServiceCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
        width={1200}
        height={500}
      />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">by {sellerName}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-500">⭐ {rating}</span>
        <span className="text-sm font-medium">{price}</span>
      </div>
    </div>
  );
}
