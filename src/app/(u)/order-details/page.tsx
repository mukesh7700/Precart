"use client"
import { IconButton, Popover } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";


const Order = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
       
      <Popover
        trigger={
          <IconButton
            label="Popover Trigger"
            className={isOpen ? "text-red-500" : ""}
          >
            <InfoIcon />
          </IconButton>
        }
        placement="bottom"
        className="w-screen mx-2 shadow-none p-4 bg-transparent backdrop-blur-none "
        triggerOn="hover"
        onOpenChange={(open) => setIsOpen(open)}
      >
        <div className="max-w-lg bg-red-500 mx-auto" >This is a Popover content</div>
      </Popover>
    
    </div>
  )
}

export default Order