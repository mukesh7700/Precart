"use client";

import {
  
  Drawer,
  DrawerBody,
 
  DrawerHeader,
  Accordion, AccordionItem
} from "@jamsr-ui/react";
import Pages from "@/components/Pages";
import Men from "@/components/Men";
import Women from "@/components/Women";
import Kids from "@/components/Kids";
import Home from "@/components/Home";
import Sales from "@/components/Sales";

interface CartProps {
  isOpen: boolean;
  
  setIsOpen: (open: boolean) => void;
}

const DrawerUsage: React.FC<CartProps> = ({ isOpen,  setIsOpen }) => {
 
  return (
    <div>
      
      <Drawer anchor="left" isOpen={isOpen} onOpenChange={setIsOpen} >
        <DrawerHeader className="text-2xl font-semibold">Menu</DrawerHeader>
        <DrawerBody>
        <Accordion>
      <AccordionItem aria-label="Pages" heading="Pages " className="p-0">
        <Pages/>
      </AccordionItem>
      <AccordionItem aria-label="Men" heading="Men" className="p-0">
        <Men/>
      </AccordionItem>
      <AccordionItem aria-label="Women" heading="Women " className="p-0">
        <Women/>
      </AccordionItem>
      <AccordionItem aria-label="Kids" heading="Kids" className="p-0">
        <Kids/>
      </AccordionItem>
      <AccordionItem aria-label="Home" heading="Home" className="p-0">
        <Home/>
      </AccordionItem>
      <AccordionItem aria-label="Sales" heading="Sales" className="p-0">
        <Sales/>
      </AccordionItem>
    </Accordion>
        </DrawerBody>
        
      </Drawer>
    </div>
  );
};

export default DrawerUsage;