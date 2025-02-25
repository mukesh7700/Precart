"use client";

import { Alert, Button, IconButton } from "@jamsr-ui/react";
import { CloseIcon, EyeClosedIcon } from "@jamsr-ui/shared-icons";
import { useState } from "react";

export const AlertWithAction = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div className="flex flex-col gap-4">
      
        
      {isOpen && (
        <Alert
          status="danger"
          style={{ backgroundImage: "linear-gradient(to right, red, #FD6585)" }}
          action={
            <div className="flex flex-row gap-2">
              
              <IconButton
                label="Close"
                onClick={handleClose}
                radius="full"
                
                variant="light"
              >
                <CloseIcon className="size-5" />
              </IconButton>
            </div>
          }
        >
          Your Pro plan has expired.
        </Alert>
      )}

      
    </div>
  );
};
