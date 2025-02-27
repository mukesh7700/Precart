"use client";

import {

  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,

} from "@jamsr-ui/react";
import { Close } from "./svgs";
import { AlertWithAction } from "./AlertAction";
import CartCard from "./CartCard";
import CartData from "@/data/CartData";
import Link from "next/link";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (open: boolean) => void;
}
const Cart: React.FC<CartProps> = ({ isOpen, onClose, setIsOpen }) => {
  

  return (
    <div>
      <Drawer anchor="right"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
       
        className="max-w-[400px] "
        closeButton={
          <Button
            className="absolute  right-2 top-3 rounded-full text-md py-1"
            variant="outlined"
            size="sm"
            onClick={onClose}
            endContent={<Close />}
          >
            Esc
          </Button>
        }>
        <DrawerHeader className="text-lg font-semibold" >Cart (3 items)</DrawerHeader>
        <Divider/>
        <DrawerBody className="p-0">
       <AlertWithAction/>
       <div>
        {
          CartData.map((cart, index)=>(
            <CartCard
            key={index}
            imageSrc={cart.imageSrc}
            productName={cart.productName}
            color={cart.color}
            size={cart.size}
            quantity={cart.quantity}
            price={cart.price}
            />
          ))
        }
       </div>
        </DrawerBody>
        <Divider/>
        <DrawerFooter>
          <div className="p-2 w-full ">
            <div className="flex justify-between items-center text-lg font-semibold  ">
              <div>Subtotal</div>
              <div>$229</div>
            </div>
            <div className="text-sm text-neutral-500">Shipping, taxes and discounts are calculated at checkout. </div>
            <div className="flex justify-between items-center py-2">
            <Link href="/cart" onClick={onClose}  className="border border-neutral-500 px-8 py-1 hover:bg-neutral-400  rounded-lg">
            View cart (3)
          </Link>
          <Button onClick={onClose} color="primary" className=" px-8">
            Checkout
          </Button>
            </div>
          </div>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default Cart;
