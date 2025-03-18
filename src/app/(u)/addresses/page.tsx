"use client";
import React, { useState } from "react";
import AddressCard, { AddressData } from "@/components/AddressCard";
import { div } from "framer-motion/client";
import { Add } from "@/components/svgs";
import { Input } from "@jamsr-ui/react";
import AddressUpdate from "@/components/AddressUpdate";

const initialAddresses: AddressData[] = [
  {
    id: "1",
    label: "Home",
    recipientName: "James Collins",
    street: "280 Suzanne Throughway",
    city: "Breannabury",
    state: "OR",
    postalCode: "45801",
    country: "US",
    phone: "+44 000 000 0001",
  },
  {
    id: "2",
    label: "Office",
    recipientName: "James Collins",
    street: "123 Business St",
    city: "Portland",
    state: "OR",
    postalCode: "97035",
    country: "US",
    phone: "+44 000 000 0002",
  },
];

const Page: React.FC = () => {
  const [addresses, setAddresses] = useState<AddressData[]>(initialAddresses);
  const [defaultAddressId, setDefaultAddressId] = useState("1");

  const handleEdit = (id: string) => {
    console.log(`Edit address ${id}`);
    // Add your edit modal logic here
  };

  const handleRemove = (id: string) => {
    console.log(`Removing address ${id}`);

    // Remove the address from the list
    setAddresses((prev) => prev.filter((address) => address.id !== id));

    // If the removed address was the default, clear it or pick another
    if (id === defaultAddressId) {
      const remaining = addresses.filter((address) => address.id !== id);
      setDefaultAddressId(remaining[0]?.id || "");
    }
  };

  const handleSetAsDefault = (id: string) => {
    console.log(`Setting address ${id} as default`);
    setDefaultAddressId(id);
  };

  return (
    <div className="p-5 w-full min-h-full">
      <div className="flex justify-between items-center w-full mb-6">
        <div className="text-lg font-semibold w-1/2">Address</div>
      </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          isDefault={defaultAddressId === address.id}
          onEdit={handleEdit}
          onRemove={handleRemove}
          onSetAsDefault={handleSetAsDefault}
        />
      ))}

      {addresses.length === 0 && (
        <p className="text-gray-500 text-sm">No addresses found.</p>
      )}
      <div
        
        className="min-w-[300px] group  border rounded-2xl border-neutral-500 border-dashed p-2  h-[215px] flex items-center justify-center ">
        <div  >
        <Add className="w-10 h-10 text-neutral-500 mx-auto"/>
        <p className="text-sm group-hover:text-purple-500">Add address</p>
        </div>
      </div>
    </div>
    <AddressUpdate/>
    </div>
  );
};

export default Page;
