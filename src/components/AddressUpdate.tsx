"use client";

import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  
  Input,
} from "@jamsr-ui/react";
import { CountrySelect } from "./CountrySelectWithFlags";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}
const AddressUpdate: React.FC<DrawerProps> = ({ open, onClose }) => {
  return (
    <div>
      <Dialog isOpen={open} onOpenChange={(val) => !val && onClose()}>
        <DialogContent>
          <DialogHeader className="border-b border-neutral-500 text-lg">
            Edit Address
          </DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Input className="" size="lg" label="Title" type="text" />
            <Input className="" size="lg" label="Full name" type="text" />
            <CountrySelect />
            <Input className="" size="lg" label="Address 1" type="text" />
            <Input
              className=""
              size="lg"
              label="Address 2 (optional)"
              type="text"
            />
            <Input className="" size="lg" label="City" type="text" />
            <div className="flex gap-4">
              <div className="basis-1/2">
                <Input label="State" size="lg" type="text" />
              </div>
              <div className="basis-1/2">
                <Input label="Zip Code" size="lg" isNumberInput />
              </div>
            </div>
            <Input className="" size="lg" label="Phone" isNumberInput />
            <Checkbox label="Make this my default address " />
            <Button size="lg" color="primary">
              Add address
            </Button>
            <Button
              size="lg"
              color="danger"
              variant="outlined"
              onClick={onClose}
            >
              cancel
            </Button>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddressUpdate;
