"use client";
import Breadcrumb from "@/components/Breadcrumb";

import AppliesFilter from "@/components/filter/AppliesFilter";
import Category from "@/components/filter/Category";
import Color from "@/components/filter/Color";
import Fit from "@/components/filter/Fit";
import Price from "@/components/filter/Price";
import Size from "@/components/filter/Size";
import Sleeve from "@/components/filter/Sleeve";
import Pagination from "@/components/Pagination";
import ShopingCard from "@/components/ShopingCard";
import { DownArrow } from "@/components/svgs";
import mencardData from "@/data/MenCloths";
import { Button, Popover } from "@jamsr-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const popoverData = [
  { label: "Filter", content: <AppliesFilter /> },
  { label: "Category", content: <Category /> },
  { label: "Size", content: <Size /> },
  { label: "Color", content: <Color /> },
  { label: "Price", content: <Price /> },
  { label: "Fit", content: <Fit /> },
  { label: "Sleeve Length", content: <Sleeve /> },
];

const Page = () => {
  

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="container max-w-[1280px] mx-auto p-5 md:p-0">
      <div className="grid grid-cols-2 gap-4 py-5  ">
        <Link href="/product/men">
          <Image
            src="/images/others/2.avif"
            alt="ram"
            width={100}
            height={100}
            className="h-[250px] w-full rounded-lg"
          />
          <h1 className=" text-center py-2 ">Men</h1>
        </Link>
        <Link href="/product/women/categories">
          <Image
            src="/images/others/1.avif"
            alt="ram"
            width={100}
            height={100}
            className="h-[250px] w-full rounded-lg"
          />
          <h1 className=" text-center py-2">Women</h1>
        </Link>
      </div>
      <div className="py-5 text-center">
        <div className="flex justify-center items-center gap-2 py-3">
          <Breadcrumb />
        </div>

        <div className="flex justify-center items-center gap-2 ">
          {popoverData.map(({ label, content }, index) => (
            <Popover
              key={index}
              trigger={
                <Button
                  endContent={<DownArrow className="h-5 w-5 " />}
                  className="border-1 border-neutral-500 bg-transparent rounded-full p-1"
                >
                  {label}
                </Button>
              }
              className="p-0 mt-2 bg-transparent shadow-none"
              placement="bottom-start"
            >
              <div className="">{content}</div>
            </Popover>
          ))}
        </div>
        <div>
          <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4 py-5">
            {mencardData.map((card, index) => (
              <ShopingCard
                key={index}
                href="/product/women/categories/product-details"
                imageContainerClassName="h-[300px] md:h-[600px]"
                imageSrc={card.imageSrc}
                altText={card.altText}
                title={card.title}
                description={card.description}
                price={card.price}
                isTrending={card.isTrending}
                showInfoText="Quick view"
              />
            ))}
            
          </div>
          <div className="flex justify-between items-center pb-5">
              <h1>12<span className="text-neutral-500 ms-2">results</span></h1>
              <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
