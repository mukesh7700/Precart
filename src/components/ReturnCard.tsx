"use client";

import { useTheme } from "@/context/ThemeContext";

import React, { useState } from "react";
import Image from "next/image";
import { Checkbox, Tab, Tabs } from "@jamsr-ui/react";

interface ReturnCardProps {
    imageSrc: string;
    productName: string;
    color: string;
    size: string;
    quantity: number;
    
  }
const ReturnCard: React.FC<ReturnCardProps> = (
    {
        imageSrc,
        productName,
        color,
        size,
        quantity,
        
      }
) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
    

  return (
    <div className="mb-2">
      
        <div
          
          className={`rounded-2xl p-2  ${
            theme === "light" ? "bg-neutral-100" : "bg-zinc-800"
          }`}
        >
          <div
            className={`rounded-2xl p-2 ${
              theme === "light" ? "bg-white" : "bg-[#080808]"
            }`}
          >
            <div className="p-1">
          <div className="flex justify-start items-start gap-4">
            <div className="h-[120px] w-[90px] rounded-lg overflow-hidden ">
              <Image
                width={200}
                height={200}
                src={imageSrc}
                alt={productName}
                className="w-full h-full object-cover"
              />
              
            </div>
            <div className="w-full">
              <h1 className="text-md  flex justify-between ">{productName} <Checkbox radius="full" onCheckedChange={() => setIsOpen(!isOpen)} /></h1>

              <p className="text-sm text-neutral-500 leading-loose">
                Color: {color}
              </p>
              <p className="text-sm text-neutral-500 leading-loose">
                Size: {size}
              </p>
              <p className="text-sm text-neutral-500 leading-loose">
                Qty: {quantity}
              </p>
              
              
            </div>
          </div>
            </div>
            {isOpen && (
                <Tabs
                  variant="underlined"
                  defaultValue="tab1"
                 
                  classNames={{
                    base: "w-full justify-center ",}}               
                >   
                  
                    <Tab value="tab1" heading={"Exchange"}>Exchange</Tab>
                    <Tab value="tab2" heading={"Return"}>Return</Tab>
                </Tabs>
            )}
          </div>
        </div>
      
    </div>
  );
};

export default ReturnCard;
