"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "./svgs";

interface CartCardProps {
  imageSrc: string;
  productName: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const CartCard: React.FC<CartCardProps> = ({
  imageSrc,
  productName,
  color,
  size,
  quantity,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {isOpen && (
        <div className="p-3">
          <div className="flex justify-start items-start gap-4">
            <div className="h-[150px] w-[100px] rounded-lg overflow-hidden relative">
              <Image
                width={200}
                height={200}
                src={imageSrc}
                alt={productName}
                className="w-full h-full object-cover"
              />
              <div className="absolute p-[1px] top-1 right-1 bg-white text-black rounded-full cursor-pointer">
                <Heart className="h-4 w-4" />
              </div>
            </div>
            <div>
              <h1 className="text-md">{productName}</h1>
              <p className="text-sm text-neutral-500 leading-loose">
                Color: {color}
              </p>
              <p className="text-sm text-neutral-500 leading-loose">
                Size: {size}
              </p>
              <p className="text-sm text-neutral-500 leading-loose">
                Qty: {quantity}
              </p>
              <h1 className="text-md">${price}</h1>
              <h1
                className="p-0 text-start underline underline-offset-2 cursor-pointer hover:text-blue-400"
                onClick={handleClose}
              >
                Remove
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartCard;
