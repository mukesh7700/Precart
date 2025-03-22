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
              <SelectItem value="Changed mind about purchase">Changed mind about purchase</SelectItem>
              <SelectItem value="Found better price elsewhere">Found better price elsewhere</SelectItem>
              <SelectItem value="Shipping time too long">Shipping time too long</SelectItem>
              <SelectItem value="Ordered incorrect item">Ordered incorrect item</SelectItem>
              <SelectItem value="Duplicate order placed accidentally">Duplicate order placed accidentally</SelectItem>
              <SelectItem value="Financial reasons">Financial reasons</SelectItem>
              <SelectItem value="No longer need item">No longer need item</SelectItem>
              <SelectItem value="Concerns about product quality">Concerns about product quality</SelectItem>
              <SelectItem value="Product was damaged or defective">Product was damaged or defective</SelectItem>
              <SelectItem value="Other">Other - please specify</SelectItem>
            </Select>
            <Textarea label="Tell us why you want to cancel " size="lg" />

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
