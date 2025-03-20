import { useTheme } from '@/context/ThemeContext';
import { Divider } from '@jamsr-ui/react';
import Link from 'next/link';
import React from 'react';
import { Location, Van } from './svgs';
import {AddressData } from "./AddressCard";

interface OrderCardProps {
  
  estimatedDelivery: string;
  shippingAddress: AddressData;
  children?: React.ReactNode; // To pass product cards as children
}

const OrderCard: React.FC<OrderCardProps> = ({
  
  estimatedDelivery,
  shippingAddress,
  children,
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <div className="w-full">
      <div
        className={`p-4 rounded-lg ${
          isLightTheme ? 'bg-white' : 'bg-black'
        }`}
      >
        {/* Order Info */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="flex items-center gap-2 mb-1 text-sm text-neutral-500">
              <Van className="w-6 h-6" />
              Estimated delivery:
              <span className="text-white">{estimatedDelivery}</span>
            </p>
            <p className="text-sm text-neutral-400 leading-6 flex items-center gap-2 mb-1">
              <Location />
              
              {`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`} 
              {shippingAddress.country}
              {shippingAddress.phone}
            </p>
          </div>
          <div>
            <Link
              href={`/order-details`}
              className={`p-2 text-sm rounded-md ${
                isLightTheme
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              Order detail
            </Link>
          </div>
        </div>

        <Divider />

        {/* Render Children (ProductItemCards) */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default OrderCard;
