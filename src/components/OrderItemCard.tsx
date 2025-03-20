import { Button, Divider } from '@jamsr-ui/react';
import Image from 'next/image';
import React from 'react';

interface ProductItemCardProps {
  id: string | number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
  
  
}

const OrderItemCard: React.FC<ProductItemCardProps> = ({
  
  name,
  price,
  image,
  color,
  size,
  quantity,
  
}) => {
  return (
    <div className="w-full">
      <div className="flex gap-4 items-stretch pt-4">
        {/* Product Image */}
        <div>
          <Image
            height={200}
            width={200}
            src={image}
            alt={name}
            className="h-[175px] w-[130px] rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="grow">
          <h1 className="text-lg">{name}</h1>
          <p>${price}</p>

          <div className="grid md:grid-cols-3 gap-2 py-4">
            <div>
              <p className="text-sm text-neutral-500 mb-2">Color</p>
              <p className="text-sm">{color}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-2">Size</p>
              <p className="text-sm">{size}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-2">Quantity</p>
              <p className="text-sm">{quantity}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button disableAnimation disableRipple variant="outlined">
              Buy it again
            </Button>
            <Button disableAnimation disableRipple variant="outlined">
              Write a Product review
            </Button>
          </div>
        </div>
      </div>

       <Divider className="mt-4" />
    </div>
  );
};

export default OrderItemCard;
