import React from "react";
import TabContent from "./TabContent";
import OrderCard from "./OrderCard";
import OrderItemCard from "./OrderItemCard";



const orders = [
  {
    Status: "Order in progress",
    orderDate: "04/08/2024",
    orderId: "98765",
    total: "$229",
    estimatedDelivery: "Monday, Aug 12 2024",
    shippingAddress: "42 Elm Street, Springfield, IL 62704, US",
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
    shippingAddress: "77 Maple Avenue, Brooklyn, NY 11201, US",
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
  return (
    <div>
      {orders.map((order, index) => (
        <React.Fragment key={index}>
          <TabContent
            orderDate={order.orderDate}
            orderId={order.orderId}
            status={order.Status}
            total={order.total}
          >
            <OrderCard
              estimatedDelivery={order.estimatedDelivery}
              shippingAddress={order.shippingAddress}
            >
              {order.products.map((product) => (
                <OrderItemCard key={product.id} {...product} />
              ))}
            </OrderCard>
          </TabContent>
          <br /> {/* This adds the space you wanted */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Order;
