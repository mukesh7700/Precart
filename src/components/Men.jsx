import Link from "next/link";
import React from "react";
import men from "@/data/Men";

import { Card } from "@jamsr-ui/react";
import { useTheme } from "@/context/ThemeContext";

const Men = () => {
  const { theme } = useTheme();
  return (
    <Card
      className={`px-8   ${
        theme === "light" ? "bg-white text-black border-none shadow" : "bg-[#181818] text-white"
      }`}
    >
      <div className=" grid md:grid-flow-col-dense md:my-2  ">
        {men.map((item, index) => (
          <div key={index} className="md:py-2">
            <h1 className="text-md font-semibold md:my-3">{item.title}</h1>
            {item.items.map((item, index) => (
              <Link
                href="#"
                className="text-sm text-neutral-400 underline-offset-4 hover:underline hover:text-current mb-3 block"
                key={index}
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
        <div className="hidden md:block  w-full h-full  rounded-lg cursor-pointer relative">
          <div
            className="px-4 py-6 h-full  rounded-lg  "
            style={{
              backgroundImage: "url('/images/men/3.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            
          </div>
        </div>
      </div>

      <div className="md:py-[15px] border-t border-neutral-800">
        <div className=" container mx-auto md:flex justify-between gap-8 items-center ">
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer ">
            <img
              src="/shoes2.jpg"
              alt="shoes"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Shoes</h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <img
              src="/Accessories.avif"
              alt="shoes"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider ">
              Accessories
            </h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <img
              src="/Beg.avif"
              alt="shoes"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Backpacks</h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <img
              src="/Socks.avif"
              alt="shoes"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Socks</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Men;
