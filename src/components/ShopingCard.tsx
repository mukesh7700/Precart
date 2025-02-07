"use client"
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";


interface CardComponentProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  onLike?: () => void;
  onInfo?: () => void;
  showInfoText?: string;
  className?: string;
}



export default function ShopingCard({
    imageSrc,
    altText,
    title,
    description,
    price,
    onLike = () => {},
    
    className = "",
  }: CardComponentProps) {
  return (
    <div className={`text-start cursor-pointer ${className}`}>
      <div className="relative   h-[250px] md:h-[350px] rounded-lg group transition-transform duration-300 overflow-hidden">
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
          className="absolute p-2 top-3 right-3 bg-white text-black rounded-full"
          onClick={onLike}
        >
          <FaRegHeart />
        </div>

        {/* Info Button */}
        
      </div>
      <h1 className="text-xl font-semibold mt-3">{title}</h1>
      <p className="text-lg font-semibold text-zinc-500">{description}</p>
      <p className="text-lg font-semibold text-zinc-300">{price}</p>
    </div>
  )
}

