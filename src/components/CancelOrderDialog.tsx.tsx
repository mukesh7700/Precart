"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  Select,
  SelectItem,
  Textarea,
} from "@jamsr-ui/react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}
const CancelOrder: React.FC<DrawerProps> = ({ open, onClose }) => {
  // Populate form when editing an address
  // Re-run when address or open changes

  // Example input handler:

  const handleSave = () => {
    console.log("Save address:");
    onClose();
  };

  return (
    <div>
      <Dialog isOpen={open} onOpenChange={(val) => !val && onClose()}>
        <DialogContent>
          <DialogHeader className="border-b border-neutral-500 text-lg">
            Cancel Order
          </DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Select className="" label="Reason">
              <SelectItem value="apple">Changed mind about purchase</SelectItem>
              <SelectItem value="blueberry">Found better price elsewhere</SelectItem>
              <SelectItem value="watermelon">Shipping time too long</SelectItem>
              <SelectItem value="banana">Ordered incorrect item</SelectItem>
              <SelectItem value="orange">Duplicate order placed accidentally</SelectItem>
              <SelectItem value="orange">Financial reasons</SelectItem>
              <SelectItem value="orange">No longer need item</SelectItem>
              <SelectItem value="orange">Concerns about product quality</SelectItem>
              <SelectItem value="orange">Product was damaged or defective</SelectItem>
              <SelectItem value="orange">Other - please specify</SelectItem>
            </Select>
            <Textarea label="Enter your email" size="lg" />

            <Button onClick={handleSave}  color="primary">
              Cancel Order
            </Button>
            <Button
              
              
              variant="outlined"
              onClick={onClose}
            >
              I changed my mind
            </Button>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CancelOrder;
