import { useTheme } from "@/context/ThemeContext";
import { Divider } from "@jamsr-ui/react";
import Link from "next/link";
import React from "react";
import { Check, Location, Van } from "./svgs";
import { AddressData } from "./AddressCard";

interface OrderCardProps {
  estimatedDelivery: string;
  shippingAddress: AddressData;
  orderStatus: string;
  children?: React.ReactNode; // To pass product cards as children
  showOrderDetailsButton?: boolean; // Optional: hide/show order details button
  showShippingAddress?: boolean; 
}

const OrderCard: React.FC<OrderCardProps> = ({
  estimatedDelivery,
  shippingAddress,
  orderStatus,
  children,
  showOrderDetailsButton = true, // default: show it
  showShippingAddress = true,    // default: show it
}) => {
  const { theme } = useTheme();
  const isLightTheme = theme === "light";

  return (
    <div className="w-full">
      <div
        className={`p-4 rounded-lg ${isLightTheme ? "bg-white" : "bg-black"}`}
      >
        {/* Order Info */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="flex items-center gap-2 mb-1 text-sm text-neutral-500">
              <Van className="w-6 h-6" />
              {orderStatus === "delivered"
                ? "Delivered:"
                : "Estimated delivery:"}
              <span className="text-white">{estimatedDelivery}</span>
            </p>
            {showShippingAddress && (
              <p className="text-sm text-neutral-400 leading-6 flex items-center gap-2 mb-1">
                <Location />
                {`${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postalCode}`}
                {shippingAddress.country}
                {shippingAddress.phone}
              </p>
            )}
          </div>
          {showOrderDetailsButton && (
            <div>
              <Link
                href={`/order-details`}
                className={`p-2 text-sm rounded-md ${
                  isLightTheme ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                Order detail
              </Link>
            </div>
          )}
        </div>

        <Divider />
        {orderStatus !== "delivered" && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
              <div>
                <p className="text-sm text-neutral-500 leading-6">
                  <span className="text-white flex items-center gap-2">
                    <Check /> Order placed
                  </span>
                  <div className="h-1 bg-white rounded-2xl" />
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 leading-6">
                  <span className="text-blue-500 flex gap-2 items-center">
                    <div className="h-2 w-2 bg-blue-500 rounded-full" />
                    Preparing order
                  </span>
                  <div className="h-1 bg-blue-500 rounded-2xl" />
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 leading-6">
                  <span>Shipped</span>
                  <div className="h-1 bg-neutral-500 rounded-2xl" />
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 leading-6">
                  <span className="">Delivered </span>
                  <div className="h-1 bg-neutral-500 rounded-2xl" />
                </p>
              </div>
            </div>
            <Divider />
          </>
        )}

        {/* Render Children (ProductItemCards) */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default OrderCard;
