import { MdOutlinePersonOutline } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegListAlt } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";

const data = [
    {
      Id: "1",
      items: [
        {
          title: "Personal Info",
          url: "/personal-info",
          icon: <MdOutlinePersonOutline />,
          
        },
        {
          title: "My Orders",
          url: "/my-order",
          icon: <LuShoppingBag />,
        },
        {
          title: "Order Details",
          url: "/order-details",
          icon: <FaRegListAlt />,
        },
        {
          title: "Addresses",
          url: "/addresses",
          icon: <TfiLocationPin />,
        },
        {
          title: "Payment",
          url: "/payment",
          icon: <MdOutlinePayment />,
        },
        {
          title: "Email Newsletter",
          url: "/email-newsletter",
          icon: <MdOutlineMail />,
        },
      ],
    },
    {
      Id: "2",
      items: [
        {
          title: "Gift Card",
          url: "/gift-card",
          icon: <FiGift />,
        },
        {
          title: "Return & Refunds",
          url: "/return-and-refund",
          icon: <IoRefresh />,
        },
        
      ],
    },
    {
      Id: "3",
      items: [
        {
          title: "Logout",
          url: "#",
          icon: <MdLogout />,
        },
       
        
      ],
    },
    
  ];

  export default data;