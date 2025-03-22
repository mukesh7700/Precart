"use client";

import { Divider, Sidebar, SidebarMenuItemButton } from "@jamsr-ui/react";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter
import data from "@/data/Menu";
import React from "react";
import {Logout } from "./svgs";
import { useTheme } from "@/context/ThemeContext";

export const SidebarUsage = () => {
  const pathname = usePathname(); // Get the current path
  const { theme} = useTheme();
  return (
    <Sidebar className="w-[300px] h-auto bg-transparent ">
      <>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="py-1">
              {item.items.map((subItem, subIndex) => {
                const isActive = pathname === subItem.url; // Check if the current URL matches
                return (
                  <Link href={subItem.url} key={subIndex}>
                    <SidebarMenuItemButton
                      className={`mt-3 flex gap-3 text-lg ${
                        isActive ? theme === "light" ? "bg-neutral-100" : "bg-zinc-800" : ""
                      }`}
                    >
                      <span className="w-6 h-6">{subItem.icon}</span>

                      <span>{subItem.title}</span>
                    </SidebarMenuItemButton>
                  </Link>
                );
              })}
              <SidebarMenuItemButton  className="mt-3 flex gap-3 text-lg ui-hover:bg-danger">
                <span className="w-6 h-6">
                  <Logout />
               </span>

                <span>Logout</span>
              </SidebarMenuItemButton>
            </div>
            {index !== data.length - 1 && <Divider className="mx-2" />}
          </React.Fragment>
        ))}
      </>
    </Sidebar>
  );
};
