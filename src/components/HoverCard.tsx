import { Button, Card } from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  images: string; // Array of image URLs
  // Product subtitle or price

  ButtonText: string;
  altText: string; // Link text
}

export default function Card3({
  images,
  ButtonText,
  altText,
}: ProductCardProps) {
  return (
    <Card className="cursor-pointer">
      <Link
        href="#"
        className=" 
       relative rounded-xl overflow-hidden h-[180px]   group"
      >
        <Image
          width={400}
          height={400}
          src={images}
          alt={altText}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          className="absolute group top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full "
          size="sm"
        >
          {ButtonText}
        </Button>
      </Link>
    </Card>
  );
}
