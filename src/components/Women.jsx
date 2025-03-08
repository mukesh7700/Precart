import Link from "next/link";
import React from "react";
import women from "@/data/Women";
import { Card } from "@jamsr-ui/react";
import { useTheme } from "@/context/ThemeContext";

const Women = () => {
  const { theme } = useTheme();
  return (
    
      <Card
        className={` px-8  ${
          theme === "light" ? "bg-white text-black border-none shadow" : "bg-[#181818] text-white"
        }`}
      >
        
          <div className="md:grid grid-flow-col-dense md:my-4">
            {women.map((products) => (
              <div key={products.Id} className="md:py-2 ">
                {products.item.map((product) => (
                  <React.Fragment key={product.title}>
                    <h1 className="text-md font-semibold  md:py-3">
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
            <div className="hidden md:block  w-full h-[full]  rounded-lg cursor-pointer relative">
              <div
                className="px-4 py-6 h-full rounded-xl cursor-pointer"
                style={{
                  backgroundImage: "url('/images/women/8.jpg')",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Link
                  href="#"
                  className=" hidden xl:block absolute top-3/4 left-1/2 transform -translate-x-1/2 text-md tracking-wider rounded-full px-2 bg-gradient-to-r from-neutral-500 via-neutral-500 to-neutral-300"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        

        <div className="py-[15px] border-t border-neutral-800">
          <div className="container mx-auto md:flex justify-between gap-8 items-center">
            <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
              <img
                src="/WomenShoes.avif"
                alt="shoes"
                className="h-[40px] w-[40px] rounded-md"
              />
              <h1 className="text-md font-semibold tracking-wider">Shoes</h1>
            </div>
            <div className="flex items-center grow p-1 gap-4  rounded-md cursor-pointer">
              <img
                src="/Womenaccess.avif"
                alt="accessories"
                className="h-[40px] w-[40px] rounded-md"
              />
              <h1 className="text-md font-semibold tracking-wider">
                Accessories
              </h1>
            </div>
            <div className="flex items-center grow p-1 gap-4 rounded-md cursor-pointer">
              <img
                src="/T-shirt.avif"
                alt="backpacks"
                className="h-[40px] w-[40px] rounded-md"
              />
              <h1 className="text-md font-semibold tracking-wider">T-shirt</h1>
            </div>
            <div className="flex items-center grow p-1 gap-4 rounded-md cursor-pointer">
              <img
                src="/hats.avif"
                alt="socks"
                className="h-[40px] w-[40px] rounded-md"
              />
              <h1 className="text-md font-semibold tracking-wider">Hats</h1>
            </div>
          </div>
        </div>
      </Card>
    
  );
};

export default Women;
