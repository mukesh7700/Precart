"use client";
import AppliesFilter from "@/components/filter/AppliesFilter";
import Category from "@/components/filter/Category";
import Color from "@/components/filter/Color";
import Fit from "@/components/filter/Fit";
import Price from "@/components/filter/Price";
import Size from "@/components/filter/Size";
import Sleeve from "@/components/filter/Sleeve";
import FullImageCard from "@/components/FullImageCard";
import Card3 from "@/components/HoverCard";
import ShopingCard from "@/components/ShopingCard";
import { DownArrow} from "@/components/svgs";
import CustomSwiper from "@/components/SwiperSlide";
import { Button,  Popover, Select, SelectItem } from "@jamsr-ui/react";
import React from "react";
import womencardData from "@/data/WomenCloths";

const shoes = [
  {
    imageSrc: "/images/women/20.webp",
    altText: "Clothing Item",
    text: "Dresses",
  },

  {
    imageSrc: "/images/others/tShirt/WomenSuits.jpg",
    altText: "Clothing Item",
    text: "Suits",
  },
  {
    imageSrc: "/images/others/shoes/1.webp",
    altText: "Clothing Item",
    text: "Shose",
  },
  {
    imageSrc: "/images/women/12.jpg",
    altText: "Clothing Item",
    text: "Jackets",
  },
  {
    imageSrc: "/images/women/22.webp",
    altText: "Clothing Item",
    text: "Trousers",
  },
  {
    imageSrc: "/images/women/21.webp",
    altText: "Clothing Item",
    text: "Jeans",
  },
];


const popoverData = [
  { label: "Filter", content: <AppliesFilter /> },
  { label: "Category", content: <Category /> },
  { label: "Size", content: <Size /> },
  { label: "Color", content: <Color /> },
  { label: "Price", content: <Price /> },
  { label: "Fit", content: <Fit /> },
  { label: "Sleeve Length", content: <Sleeve /> },
];

const page = () => {
  const handleLike = () => {
    console.log("Liked!");
  };

  return (
    <div className="container mx-auto max-w-[1280px]">
      <div className=" py-6">
        <CustomSwiper
          items={shoes.map((card, index) => (
            <Card3
              key={index}
              images={card.imageSrc}
              altText={card.altText}
              ButtonText={card.text}
            />
          ))}
        />
      </div>

      <div className="py-2">
        <h1 className="font-semibold text-2xl ">Women&apos;s Clothing</h1>
       
      </div>
      <div className="flex justify-between items-center">
      <div className="flex items-center justify-start gap-1 py-2">
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
      <div className="flex items-center w-1/2  justify-end gap-3">
          <p className="text-sm  text-neutral-500">120 Results</p>
          

          <p>Sort By:</p>

          <Select className="w-fit text-neutral-500">
            <SelectItem value="apple">Bestseller</SelectItem>
            <SelectItem value="blueberry">Trending</SelectItem>
            <SelectItem value="watermelon">Price low to high</SelectItem>
            <SelectItem value="banana">Price high to low</SelectItem>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 py-4">
        <FullImageCard
          src="/images/women/11.webp"
          href="#"
          title="Be Your Own Boss"
          subtitle="Shop Now"
        />
        {womencardData.map((card, index) => (
          <ShopingCard
            key={index}
            href="/product/women/categories/product-details"
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
            price={card.price}
            isTrending={card.isTrending}
            onLike={handleLike}
            showInfoText="Quick view"
          />
        ))}
        <FullImageCard
          src="/images/women/20.webp"
          href="#"
          title="New Arrivals"
          subtitle="Shop Now"
        />
      </div>
    </div>
  );
};

export default page;
