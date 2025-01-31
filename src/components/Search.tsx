"use client";
import {
 
  Dialog,
  DialogBody,
  DialogContent,
 
  Input,
 
} from "@jamsr-ui/react";
import { BiSearch } from "react-icons/bi";

interface CartProps {
  isOpen: boolean;
  
  setIsOpen: (open: boolean) => void;
}
const Search: React.FC<CartProps> = ({ isOpen, setIsOpen }) => {
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
