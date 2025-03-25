"use client";

import { useTheme } from "@/context/ThemeContext";
import { Chip,} from "@jamsr-ui/react";
import React from "react";

export type AddressData = {
  id: string; // useful for identifying in callbacks
  label: string; // title of address (e.g., "Home", "Work", or city)
  recipientName: string;
  street: string;
  street2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
};

export type AddressCardProps = {
  address: AddressData;
  isDefault?: boolean;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  onSetAsDefault?: (id: string) => void;
};

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  isDefault = false,
  onEdit,
  onRemove,
  onSetAsDefault,
}) => {
  const { theme } = useTheme();

  const handleEdit = () => {
    if (onEdit) onEdit(address.id);
  };

  const handleRemove = () => {
    if (onRemove && !isDefault) onRemove(address.id);
  };

  const handleSetAsDefault = () => {
    if (onSetAsDefault && !isDefault) onSetAsDefault(address.id);
  };

  return (
    <div
      className={`rounded-2xl p-2  ${
        theme === "light" ? "bg-neutral-100" : "bg-zinc-800"
      }`}
    >
      <div
        className={`rounded-2xl py-4 px-3 ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-medium">{address.label}</h1>
          {isDefault && (
            <Chip
              variant="outlined"
              color="primary"
              size="sm"
              className="px-2 text-xs"
            >
              Default
            </Chip>
          )}
        </div>

        <div>
          <p className="text-sm tracking-wide leading-5">
            {address.recipientName} <br />
            {address.street} <br />
            {`${address.city}, ${address.state} ${address.postalCode}`} <br />
            {address.country} <br />
            {address.phone}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 p-2 text-sm">
        <button
          onClick={handleEdit}
          className="hover:underline underline-offset-4 hover:text-blue-400 cursor-pointer"
        >
          Edit
        </button>

        <div className="w-[1px] h-4 bg-neutral-500" />

        <button
          onClick={handleRemove}
          disabled={isDefault}
          className={`${
            isDefault
              ? "text-neutral-400 "
              : "hover:underline hover:text-blue-400 cursor-pointer underline-offset-4"
          }`}
        >
          Remove
        </button>

        <div className="w-[1px] h-4 bg-neutral-500" />

        <button
          onClick={handleSetAsDefault}
          disabled={isDefault}
          className={`${
            isDefault
              ? "text-neutral-400"
              : "hover:underline hover:text-blue-400 cursor-pointer underline-offset-4"
          }`}
        >
          Set as default
        </button>
      </div>
      
    </div>
  );
};

export default AddressCard;
