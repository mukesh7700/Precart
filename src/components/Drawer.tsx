"use client";

import {
  
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Accordion, AccordionItem
} from "@jamsr-ui/react";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.`;

const DrawerUsage = ({ isOpen, onClose, setIsOpen }) => {
 
  return (
    <div>
      
      <Drawer anchor="left" isOpen={isOpen} onOpenChange={setIsOpen} >
        <DrawerHeader className="text-2xl font-semibold">Menu</DrawerHeader>
        <DrawerBody>
        <Accordion>
      <AccordionItem aria-label="Pages" heading="Pages ">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Men" heading="Men">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Women" heading="Women">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Kids" heading="Kids">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Home" heading="Home">
        {content}
      </AccordionItem>
      <AccordionItem aria-label="Sales" heading="Sales">
        {content}
      </AccordionItem>
    </Accordion>
        </DrawerBody>
        
      </Drawer>
    </div>
  );
};

export default DrawerUsage;