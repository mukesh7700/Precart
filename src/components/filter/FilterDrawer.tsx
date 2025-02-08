"use client";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  Button,
} from "@jamsr-ui/react";

import { Close } from "../svgs";
import AppliesFilter from "@/components/filter/AppliesFilter";
import Category from "@/components/filter/Category";
import Size from "@/components/filter/Size";
import Color from "@/components/filter/Color";
import Price from "@/components/filter/Price";
import Fit from "@/components/filter/Fit";
import Sleeve from "@/components/filter/Sleeve";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: (open: boolean) => void;
}

const FilterDrawer: React.FC<CartProps> = ({ isOpen, setIsOpen, onClose }) => {
  return (
    <div>
      <Drawer
        anchor="right"
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
        }
      >
        <DrawerHeader className="text-lg font-semibold border-b border-neutral-500 ">
          Filter
        </DrawerHeader >
        <DrawerBody>
          <AppliesFilter/>
          <Category/>
          <Size/>
          <Color/>
          <Price/>
          <Fit/>
          <Sleeve/>

        </DrawerBody>
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
