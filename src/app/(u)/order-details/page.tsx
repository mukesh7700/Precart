"use client"
import { IconButton, Popover, Text } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";


const Order = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center">
       <div className="grid place-content-center">
      <Popover
        trigger={
          <IconButton
            label="Popover Trigger"
            className={isOpen ? "text-red-500" : ""}
          >
            <InfoIcon />
          </IconButton>
        }
        className="p-2"
        triggerOn="hover"
        onOpenChange={(open) => setIsOpen(open)}
      >
        <Text as="p">This is a Popover content</Text>
      </Popover>
    </div>
    </div>
  )
}

export default Order