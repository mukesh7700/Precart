"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Input,
  Repeater,
  Text,
} from "@jamsr-ui/react";
import { BiSearch } from "react-icons/bi";

const Search = ({ isOpen, onClose, setIsOpen }) => {
  return (
    <div >
      <Dialog className="w-full" closeButton={null} isOpen={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogBody >
            <Input startContent={<BiSearch />}  className="w-full" />
            
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
