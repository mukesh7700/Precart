import {
  Email1,
  Gift1,
  Location2,
  Logout,
  Order,
  OrderDitals,
  Person,
  Return,
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
        title: "My Orders",
        url: "/my-order",
        icon: <Order />,
      },
      {
        title: "Order Details",
        url: "/order-details",
        icon: <OrderDitals />,
      },
      {
        title: "Addresses",
        url: "/addresses",
        icon: <Location2 />,
      },
      {
        title: "Payment",
        url: "/payment",
        icon: <Wallet1 />,
      },
      {
        title: "Email Newsletter",
        url: "/email-newsletter",
        icon: <Email1 />,
      },
    ],
  },
  {
    Id: "2",
    items: [
      {
        title: "Gift Card",
        url: "/gift-card",
        icon: <Gift1 />,
      },
      {
        title: "Return & Refunds",
        url: "/return-and-refund",
        icon: <Return />,
      },
    ],
  },
  {
    Id: "3",
    items: [
      {
        title: "Logout",
        url: "#",
        icon: <Logout />,
      },
    ],
  },
];

export default data;
