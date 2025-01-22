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


const data = [
  {
    title: "",
    items: [
      {
        title: "Personal Info",
        icon: <MdOutlinePersonOutline />,
        isActive: true,
      },
      {
        title: "My Orders",
        icon: <LuShoppingBag />,
      },
      {
        title: "Order Details",
        icon: <FaRegListAlt />,
      },
      {
        title: "Addresses",
        icon: <TfiLocationPin />,
      },
      {
        title: "Payment",
        icon: <MdOutlinePayment />,
      },
      {
        title: "Email Newsletter",
        icon: <MdOutlineMail />,
      },
    ],
  },
  {
    title: "kk",
    items: [
      {
        title: "Gift Card",
        url: "#",
        icon: <FiGift />,
      },
      {
        title: "Return & Refunds",
        url: "#",
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
    <Sidebar className="w-[300px] h-auto">
      <SidebarContent>
        {data.map((item) => {
          const { items, title } = item;
          return (
            <SidebarGroup key={title}>
              
              <Divider color="dark" />
              <SidebarMenu className="my-2" >
                {items.map((item) => {
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className="group/collapsible mb-3 "
                    >
                      <SidebarMenuItemButton className="text-md gap-2 ">
                        {item.icon && item.icon}
                        {item.title}
                      </SidebarMenuItemButton>
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
