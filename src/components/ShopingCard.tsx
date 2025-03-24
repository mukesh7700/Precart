import {  Chip } from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

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
  isTrending?: boolean;
  imageContainerClassName?: string; 
  imageLikeClassName?: string; 
  imageTrendingClassName?: string; 
  
}

export default function ShopingCard({
  href,
  imageSrc,
  altText,
  title,
  description,
  price,
  
  onLike = () => {},

  className = "",
  isTrending = false,
  imageContainerClassName = "h-[300px] md:h-[400px]",
  imageLikeClassName="", 
  imageTrendingClassName="",
  
}: CardComponentProps) {
  return (
    <Link href={href} className={`text-start cursor-pointer ${className}`}>
      <div className={`relative ${imageContainerClassName} rounded-lg group transition-transform duration-300 overflow-hidden`}>
        {/* Trending Chip */}
        {isTrending && (
          <Chip className= {`absolute  top-3 left-3 bg-black text-white pe-3 font-bold ${imageTrendingClassName}`}>
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
          className={`absolute p-2 top-3 right-3 bg-white text-black rounded-full cursor-pointer ${imageLikeClassName} group-hover:bg-neutral-200 transition duration-300`}
          onClick={onLike}
        >
          <FaRegHeart  />
        </div>

        {/* Info Button */}
      </div>
      <div className="px-1">
        <h1 className="text-md font-semibold mt-2">{title}</h1>
        <p className="text-sm font-semibold text-neutral-500">{description}</p>
        <p className="text-sm font-semibold text-neutral-500">{price}</p>
      </div>
    </Link>
  );
}
