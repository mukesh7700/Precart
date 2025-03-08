import Link from "next/link";
import React from "react";
import kids from "@/data/Kids";
import Image from "next/image";
import { Card } from "@jamsr-ui/react";
import { useTheme } from "@/context/ThemeContext";

const Kids = () => {
  const { theme } = useTheme();
  return (
    <Card
      className={`px-8 ${
        theme === "light" ? "bg-white text-black border-none shadow" : "bg-[#181818] text-white"
      }`}
    >
      <div className="grid md:grid-flow-col-dense md:my-2">
        {kids.map((products) => (
          <div key={products.Id} className="md:py-2">
            {products.item.map((product) => (
              <React.Fragment key={product.title}>
                <h1 className="text-md font-semibold md:my-3">
                  {product.title}
                </h1>
                {product.items.map((item) => (
                  <Link
                    href="#"
                    className="text-sm text-neutral-400 underline-offset-4 hover:underline hover:text-current mb-3 block"
                    key={item.title}
                  >
                    {item.title}
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </div>
        ))}
        <div className="hidden md:block  w-full h-full rounded-lg cursor-pointer relative">
          <div
            className="px-4 py-6 h-full rounded-xl cursor-pointer"
            style={{
              backgroundImage: "url('/images/kids/1.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>

      <div className="py-[15px]  border-t border-neutral-800">
        <div className="container mx-auto md:flex justify-between gap-8 items-center">
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <Image
              width={400}
              height={400}
              src="/Shoes.avif"
              alt="shoes"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Shoes</h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <Image
              width={400}
              height={400}
              src="/Accessories.avif"
              alt="accessories"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">
              Accessories
            </h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <Image
              width={400}
              height={400}
              src="/Beg.avif"
              alt="backpacks"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Backpacks</h1>
          </div>
          <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
            <Image
              width={400}
              height={400}
              src="/Shorts.avif"
              alt="socks"
              className="h-[40px] w-[40px] rounded-md"
            />
            <h1 className="text-md font-semibold tracking-wider">Shorts</h1>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Kids;
