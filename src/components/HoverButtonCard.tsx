import { Button, Chip } from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Fire } from "./svgs";

interface CardComponentProps {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  onLike?: () => void;
  onInfo?: () => void;
  showInfoText?: string;
  className?: string;
  isTrending?: boolean; // New prop for trending products
}

export default function CardComponent({
  href,
  imageSrc,
  altText,
  title,
  description,
  price,
  onLike = () => {},
  onInfo = () => {},
  showInfoText = "Show Info",
  className = "",
  isTrending = false, // Default to false
}: CardComponentProps) {
  return (
    <Link href={href} className={`text-start cursor-pointer ${className}`}>
      <div className="relative h-[300px] md:h-[400px] rounded-lg group transition-transform duration-300 overflow-hidden">
        {/* Trending Chip */}
        {isTrending && (
          <Chip className="absolute top-3 left-3 bg-black pe-3 font-bold">
            <Fire className="h-5 w-5" />
            Trending
          </Chip>
        )}

        {/* Image */}
        <Image
          width={200}
          height={200}
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />

        {/* Like Button */}
        <div
          className="absolute p-2 top-3 right-3 bg-white text-black rounded-full cursor-pointer"
          onClick={onLike}
        >
          <FaRegHeart />
        </div>

        {/* Info Button */}
        <Button
          className="text-md font-semibold hover:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-zinc-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          size="sm"
          startContent={<MdOutlineRemoveRedEye />}
          onClick={onInfo}
        >
          {showInfoText}
        </Button>
      </div>
      <div className="px-1">
        <h1 className="text-md font-semibold mt-2">{title}</h1>
        <p className="text-sm font-semibold text-zinc-500">{description}</p>
        <p className="text-sm font-semibold text-zinc-300">{price}</p>
      </div>
    </Link>
  );
}
