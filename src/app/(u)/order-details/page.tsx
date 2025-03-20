"use client";

import { AddressData } from "@/components/AddressCard";
import AddressCard from "@/components/AddressDetailsCard";
import AddressUpdate from "@/components/AddressUpdate";
import OrderCard from "@/components/OrderCard";
import OrderItemCard from "@/components/OrderItemCard";
import TabContent from "@/components/TabContent";
import React, { useState } from "react";

const orders = [
  {
    Status: "Order in progress",
    orderDate: "04/08/2024",
    orderId: "98765",
    total: "$229",
    estimatedDelivery: "Monday, Aug 12 2024",
    shippingAddress: {
      id: "address-1", 
      label: "Office",
      recipientName: "James Collins",
      street: "280 Suzanne Throughway",
      city: "Breannabury",
      state: "Bihar",
      postalCode: "45801",
      country: "US",
      phone: "+44 000 000 0001",
    },
    products: [
      {
        id: 101,
        name: "Classic Denim Jacket",
        price: 120,
        image: "/images/men/1.jpg",
        color: "Blue",
        size: "L",
        quantity: 1,
      },
      {
        id: 102,
        name: "Leather Boots",
        price: 180,
        image: "/images/men/2.jpg",
        color: "Dark Brown",
        size: "US10",
        quantity: 1,
      },
    ],
  },
  {
    Status: "Order delivered",
    orderDate: "08/03/2025",
    orderId: "98765",
    total: "$99",
    estimatedDelivery: "Friday, Aug 16 2024",
    shippingAddress: {
      id: "address-1", 
      label: "Office",
      recipientName: "James Collins",
      street: "280 Suzanne Throughway",
      city: "Breannabury",
      state: "Bihar",
      postalCode: "45801",
      country: "US",
      phone: "+44 000 000 0001",
    },
    products: [
      {
        id: 201,
        name: "Cotton T-Shirt",
        price: 25,
        image: "/images/women/1.jpg",
        color: "White",
        size: "M",
        quantity: 3,
      },
    ],
  },
];


const Order = () => {
  const [addresses, setAddresses] = useState<AddressData[]>(orders[0].shippingAddress);
  const [isOpen, setIsOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<AddressData | null>(null);

  const handleEdit = (id: string) => {
    const address = addresses.find((addr) => addr.id === id);
    if (address) {
      setEditingAddress(address); // Pass the address to the modal
      setIsOpen(true);
    }
    // Add your edit modal logic here
  };
  // Filter orders with status "Order in progress"
  const inProgressOrders = orders.filter(
    (order) => order.Status === "Order in progress"
  );

  return (
    <div className="p-5 w-full min-h-full">
      {/* Top header */}
      <div className="flex justify-between items-center w-full mb-6">
        <div className="text-lg font-semibold w-1/2">Order history</div>
      </div>

      {/* Filtered Tabs */}
      <div>
        {inProgressOrders.length > 0 ? (
          inProgressOrders.map((order, index) => (
            <React.Fragment key={index}>
              <TabContent
                orderDate={order.orderDate}
                orderId={order.orderId}
                status={order.Status}
                total={order.total}
              >
                <AddressCard address={order.shippingAddress} onEdit={handleEdit}/>
                <br />
                <OrderCard
                  estimatedDelivery={order.estimatedDelivery}
                  shippingAddress={order.shippingAddress}
                >
                  {order.products.map((product) => (
                    <OrderItemCard key={product.id} {...product} />
                  ))}
                </OrderCard>
              </TabContent>
              <br />
            </React.Fragment>
          ))
        ) : (
          <div>No orders in progress.</div>
        )}
      </div>
      {isOpen && (
      <AddressUpdate
        open={isOpen}
        onClose={() => setIsOpen(false)}
        address={editingAddress}
        // Pass other props as needed
      />
    )}
    </div>
  );
};

export default Order;
