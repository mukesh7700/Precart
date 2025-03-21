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

import { useEffect, useState } from "react";
import { AddressData } from "@/components/AddressCard";
import { CountrySelect } from "./CountrySelectWithFlags";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  address?: AddressData | null;
}
const AddressUpdate: React.FC<DrawerProps> = ({ open, onClose, address }) => {
  const [formValues, setFormValues] = useState({
    label: "",
    recipientName: "",
    street: "",
    
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Populate form when editing an address
  useEffect(() => {
    if (address) {
      setFormValues({
        label: address.label,
        recipientName: address.recipientName,
        street: address.street,
        
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
        phone: address.phone,
      });
    } else {
      // Clear form when adding new
      setFormValues({
        label: "",
        recipientName: "",
        street: "",
        
        city: "",
        state: "",
        postalCode: "",
        country: "",
        phone: "",
      });
    }
  }, [address, open]); // Re-run when address or open changes

  // Example input handler:
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  

  const handleSave = () => {
    console.log("Save address:", formValues);
    onClose();
  };

  return (
    <div>
      <Dialog isOpen={open} onOpenChange={(val) => !val && onClose()}>
        <DialogContent>
          <DialogHeader className="border-b border-neutral-500 text-lg">
            Edit Address
          </DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Input
              className=""
              size="lg"
              label="Title"
              type="text"
              name="label"
              value={formValues.label}
              onChange={handleChange}
            />
            <Input
              className=""
              size="lg"
              label="Full name"
              type="text"
              name="recipientName"
              value={formValues.recipientName}
              onChange={handleChange}
            />
            <CountrySelect/>
            
         
            <Input
              className=""
              size="lg"
              label="Address"
              type="text"
              name="street"
              value={formValues.street}
              onChange={handleChange}
            />
            
            <Input
              className=""
              size="lg"
              label="City"
              type="text"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <div className="flex gap-4">
              <div className="basis-1/2">
                <Input
                  label="State"
                  size="lg"
                  type="text"
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                />
              </div>
              <div className="basis-1/2">
                <Input
                  label="Zip Code"
                  size="lg"
                  isNumberInput
                  name="postalCode"
                  value={formValues.postalCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Input
              className=""
              size="lg"
              label="Phone"
              isNumberInput
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <Checkbox label="Make this my default address " />
            <Button onClick={handleSave} size="lg" color="primary">
              {address ? "Update Address" : "Add Address"}
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
