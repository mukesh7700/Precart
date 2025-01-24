"use client";

import {
    Divider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuItemButton,
} from "@jamsr-ui/react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegListAlt } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { IoRefresh } from "react-icons/io5";
import Link from "next/link";


const data = [
  {
    title: "",
    items: [
      {
        title: "Personal Info",
        url: "/personal-info",
        icon: <MdOutlinePersonOutline />,
        isActive: true,
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
    title: "kk",
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
    title: "jj",
    items: [
      {
        title: "Logout",
        url: "#",
        icon: <MdLogout />,
      },
     
      
    ],
  },
  
];

export const SidebarUsage = () => {
  return (
    <Sidebar className="w-[300px] h-auto bg-transparent">
      <SidebarContent>
        {data.map((item) => {
          const { items, title } = item;
          return (
            <SidebarGroup key={title}>
              
              
              <SidebarMenu className="my-2" >
              <Divider color="dark" />
                {items.map((item) => {
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="group/collapsible mb-3 "
                    >
                      
                      <Link href={item.url} >
                      <SidebarMenuItemButton className="text-md gap-2 ">
                        
                        {item.icon && item.icon}
                        {item.title}
                      </SidebarMenuItemButton></Link>
                      
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};
