import {
  Email1,
  Gift1,
  Location2,
  Logout,
  Order,
  OrderDitals,
  Person,
  Return1,
  Wallet1,
} from "@/components/svgs";

const data = [
  {
    Id: "1",
    items: [
      {
        title: "Personal Info",
        url: "/personal-info",
        icon: <Person />,
      },
      {
        title: "Orders",
        url: "/my-order",
        icon: <Order />,
      },
      {
        title: "Cart",
        url: "/order-details",
        icon: <OrderDitals />,
      },
      {
        title: "Addresses",
        url: "/addresses",
        icon: <Location2 />,
      },
      
      
      
    ],
  },
  
  
];

export default data;
