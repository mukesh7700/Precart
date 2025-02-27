"use client";

import { Alert, IconButton } from "@jamsr-ui/react";
import { CloseIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      {isOpen && (
        <Alert
          className="py-6 text-white"
          style={{ backgroundImage: "linear-gradient(to right, #920B3A, #004493  )" }}
          action={
            <div className="flex flex-row gap-2  ">
              <IconButton
               
                label="Close"
                onClick={handleClose}
                radius="full"
                variant="text"
              >
                <CloseIcon className="size-5" />
              </IconButton>
            </div>
          }
        >
          <h1 className="text-md font-semibold">Choose your free gift </h1>
          <p className="text-sm text-neutral-300">When you spend $30. Use code SUMMER.</p>
        </Alert>
      )}
    </div>
  );
};
