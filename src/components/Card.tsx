import { Button } from "@jamsr-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";

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

export default function CardComponent({
  imageSrc,
  altText,
  title,
  description,
  price,
  onLike = () => {},
  onInfo = () => {},
  showInfoText = "Show Info",
  className = "",
}: CardComponentProps) {
  return (
    <div className={`text-start cursor-pointer ${className}`}>
      <div className="relative w-60 md:w-80 h-[400px] md:h-[600] rounded-lg group transition-transform duration-300 overflow-hidden">
        {/* Image */}
        <img
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
        <Button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 text-zinc-700  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          size="sm"
          startContent={<MdOutlineRemoveRedEye />}
          onClick={onInfo}
        >
          {showInfoText}
        </Button>
      </div>
      <h1 className="text-xl font-semibold mt-3">{title}</h1>
      <p className="text-lg font-semibold text-zinc-500">{description}</p>
      <p className="text-lg font-semibold text-zinc-300">{price}</p>
    </div>
  );
}
