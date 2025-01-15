"use client";
import Link from "next/link";
import { IconButton, Tab, Tabs } from "@jamsr-ui/react";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import Image from "next/image";

const page = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="h-96 bg-zinc-600 rounded-lg m-5"></div>
        <div className=" flex p-5 justify-center gap-6 items-center">
          <div className="text-center ">
            <Link href="#">
              <div className="h-20 w-20 mb-2 bg-zinc-800 rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"></div>
            </Link>
            T Shirt
          </div>
          <div className="text-center ">
            <Link href="#">
              <div className="h-20 w-20 mb-2 bg-zinc-800 rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"></div>
            </Link>
            Trousers
          </div>
          <div className="text-center ">
            <Link href="#">
              <div className="h-20 w-20 mb-2 bg-zinc-800 rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"></div>
            </Link>
            Shose
          </div>
          <div className="text-center ">
            <Link href="#">
              <div className="h-20 w-20 mb-2 bg-zinc-800 rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"></div>
            </Link>
            Jackets
          </div>
        </div>
        <div className="p-5 text-center">
          <h1 className="text-3xl font-semibold my-3">Trending now </h1>
          <Tabs
            classNames={{
              tab: "border border-gray-900 w-[200px] ",
            }}
            variant="bordered"
            defaultValue="men"
          >
            <Tab value="men" heading="Men">
              <div className="relative w-full">
                <IconButton
                  label=""
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full  bg-white  text-black "
                  onClick={scrollLeft}
                >
                  <IoIosArrowBack />
                </IconButton>

                <div
                  ref={scrollContainer}
                  className="flex  items-center flex-nowrap gap-2 overflow-hidden "
                >
                  <div>
                    <div className="py-5  min-w-[200px] relative text-start">
                      <Image
                        src="/shirt.avif"
                        width={300}
                        height={500}
                        alt="Picture of the author"
                        className="rounded-xl "
                      />
                      <h1 className="text-xl font-bold mt-3">Slim Lyocell Trousers</h1>
                      <p className="text-lg font-semibold text-zinc-600">Men's Trousers</p>
                      <p className="text-lg font-semibold">$50</p>

                    </div>
                  </div>
                </div>
                <IconButton
                  label=""
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white  text-black "
                  onClick={scrollRight}
                >
                  <GrFormNext />
                </IconButton>
              </div>
            </Tab>
            <Tab value="women" heading="Women"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default page;
