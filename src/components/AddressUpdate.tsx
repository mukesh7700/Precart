"use client";

import { useDisclosure } from "@jamsr-ui/hooks";
import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  type DialogProps,
  Input,
  Repeater,
  Text,
} from "@jamsr-ui/react";
import { CountrySelect } from "./CountrySelectWithFlags";



const AddressUpdate = (props: Partial<DialogProps> & {
    buttonText?: string;
  },) => {
    const { isOpen, onClose, setIsOpen, onOpen } = useDisclosure();
    const { buttonText, ...restProps } = props;
  return (
    <div>
    <Button onClick={onOpen}>{buttonText}</Button>
    <Dialog isOpen={isOpen} onOpenChange={setIsOpen} {...restProps}>
      <DialogContent>
        <DialogHeader>Edit Address</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
        <Input
      className=""
      label="Title"
      type="email"
    />
    <Input
      className=""
      label="Full name"
      type="email"
    />
    <CountrySelect/>
    <Input
      className=""
      label="Address 1"
      type="email"
    />
    <Input
      className=""
      label="Address 2 (optional)"
      type="email"
    />
    <Input
      className=""
      label="City"
      type="email"
    />
    <div className="flex gap-4">
    <Input
      className=""
      label="State"
      type="email"
    />
    <Input
      className=""
      label="Zip Code"
      type="email"
    />
    </div>
    <Input
      className=""
      label="Phone"
      type="email"
    />
    <Checkbox label="Make this my default address " />
    <Button color="primary">Add address</Button>
    <Button className="ui-hover:bg-red-500" variant="outlined" onClick={onClose} >cancel</Button>
        </DialogBody>
        
      </DialogContent>
    </Dialog>
  </div>
  )
}



export default AddressUpdate