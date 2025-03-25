import { useTheme } from "@/context/ThemeContext";
import { Button, Divider } from "@jamsr-ui/react";
import React, { useState } from "react";
import { Cardimg,  Pen, Print } from "./svgs";
import { AddressData } from "./AddressCard";
import CancelOrder from "./CancelOrderDialog.tsx";
import Link from "next/link";


export type AddressCardProps = {
  address: AddressData;
  
  onEdit?: (id: string) => void;
  
};
const AddressCard:React.FC<AddressCardProps> = ({ address, onEdit}) => {
  const [isCancelOpen, setIsCancelOpenOpen] = useState(false);
  const { theme } = useTheme();

  const handleCancel = () => {
    console.log("Order cancelled");
    setIsCancelOpenOpen(true);
  }

  return (
    <div>
      <div
        className={`p-4 rounded-lg ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          <div>
            <h1>Shipping address </h1>
            <p className="text-sm text-neutral-400 leading-6">
              {address.recipientName} <br />
              {address.street} <br />
              {`${address.city}, ${address.state} ${address.postalCode}`} <br />
              {address.country} <br />
              {address.phone}
            </p>
          </div>
          <div className="grid grid-rows-2">
            <div>
              <h1>Contact details </h1>
              <p className="text-sm text-neutral-400 leading-6">
                jamescollins@site.so{" "}
              </p>
            </div>
            <div>
              <h1>Payment method </h1>
              <p className="text-sm text-neutral-400 leading-6 flex gap-1 items-center">
                <span>
                  <Cardimg className=" h-4 w-4" />
                </span>{" "}
                MasterCard •••• 4242{" "}
              </p>
            </div>
          </div>
          <div>
            <ul className="text-sm ">
              <li className="flex justify-between items-center mb-2">
                <p>Subtotal</p>
                <p>$229</p>
              </li>
              <li className="flex justify-between items-center mb-2">
                <p>Shipping</p>
                <p>$Free</p>
              </li>
              <li className="flex justify-between items-center mb-2">
                <p>Estimated Tax</p>
                <p>$0</p>
              </li>
              <li className="flex justify-between items-center mb-2 text-neutral-500">
                <p>Sale</p>
                <p>-$20</p>
              </li>
              <li className="flex justify-between items-center mb-2">
                <p>Total</p>
                <p> USD $229 </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <Button
            disableAnimation
            disableRipple
            variant="outlined"
            startContent={<Pen className="h=4 w-4" />}
            onClick={() => onEdit && onEdit(address.id)}
          >
            Change address
          </Button>
          <Button
            disableAnimation
            disableRipple
            variant="outlined"
            startContent={<Print className="h=4 w-4" />}
          >
            View or Print receipt
          </Button>
        </div>
        <Divider />
        <div className="flex justify-between items-center pt-2 text-sm">
          <h1 className="text-neutral-500">
            Something wrong?
            <Link
              href="/exchange-or-return" 
              
              className="px-1 hover:text-blue-500 underline underline-offset-4"
              
            >
              Exchange or return  &raquo;
            </Link>
          </h1>
          <Button
            disableAnimation
            disableRipple
            onClick={handleCancel}
            variant="outlined"
            className="text-danger ui-hover:text-danger-400"
          >
            Cancel order
          </Button>
        </div>
        {isCancelOpen && (
          <CancelOrder
            open={isCancelOpen}
            onClose={() => setIsCancelOpenOpen(false)}
            
          />
        )}
      </div>
    </div>
  );
};

export default AddressCard;
