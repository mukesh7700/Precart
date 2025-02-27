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
        </DrawerBody>
        <Divider/>
        <DrawerFooter className="flex justify-between">
          <Button onClick={onClose} variant="light">
            Cancel
          </Button>
          <Button onClick={onClose} color="success">
            Apply
          </Button>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};

export default Cart;
