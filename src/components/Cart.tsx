"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Repeater,
} from "@jamsr-ui/react";

const Cart = ({ isOpen, onClose, setIsOpen }) => {
  return (
    <div>
      <Drawer isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DrawerHeader className="text-lg font-semibold">Your Cart</DrawerHeader>
        <DrawerBody>
          <Repeater repeat={3}>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              laborum optio quo reiciendis odio facilis quos adipisci unde eum
              vero perspiciatis, minima iste doloribus voluptatibus officia
              dicta, maxime, placeat qui.
            </p>
          </Repeater>
        </DrawerBody>
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
