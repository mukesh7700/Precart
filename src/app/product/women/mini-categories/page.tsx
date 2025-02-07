"use client";
import ButtonCard from "@/components/ButtonCard";
import FullImageCard from "@/components/FullImageCard";

import ItemList from "@/components/ItemList";
import ShopingCard from "@/components/ShopingCard";
import { Filter } from "@/components/svgs";

import { Button, Divider, Select, SelectItem } from "@jamsr-ui/react";

import React from "react";

const items = [
  { name: "Dresses", image: "/WomenDresses.jpg", link: "#" },
  { name: "Trousers", image: "/WomenTrousers.jpg", link: "#" },
  { name: "Jeans", image: "/WomenJeans.jpg", link: "#" },
];

const mencardData = [
  {
    imageSrc: "/trending/men/Trouser.jpg",
    altText: "Clothing Item",
    title: "Slim Lyocell Trousers",
    description: "Men's Trousers",
    price: "$50",
  },
  {
    imageSrc: "/trending/men/jacket.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/trending/men/Tshirt.jpg",
    altText: "Clothing Item",
    title: "Classic Denim Jacket",
    description: "Men's Outerwear",
    price: "$80",
  },
  {
    imageSrc: "/trending/men/Hoodie.jpg",
    altText: "Clothing Item",
    title: "Cotton Crew Neck Tee",
    description: "Men's T-Shirt",
    price: "$25",
  },
  {
    imageSrc: "/trending/men/WhiteTshirt.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/image1.jpg",
    altText: "Clothing Item",
    title: "Slim Lyocell Trousers",
    description: "Men's Trousers",
    price: "$50",
  },
  {
    imageSrc: "/images2.jpg",
    altText: "Clothing Item",
    title: "Classic Denim Jacket",
    description: "Men's Outerwear",
    price: "$80",
  },
  {
    imageSrc: "/images3.jpg",
    altText: "Clothing Item",
    title: "Cotton Crew Neck Tee",
    description: "Men's T-Shirt",
    price: "$25",
  },
  {
    imageSrc: "/images4.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/images6.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/image7.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
];

const ButtonCardData =[{
  src:"/buttonCard/Jeans.jpg",
  label:"Jeans",
  count:21
},
{
  src:"/buttonCard/Jackets.jpg",
  label:"Jackets",
  count:15
},
{
  src:"/buttonCard/Polos.jpg",
  label:"Polos",
  count:35
},
{
  src:"/buttonCard/Shirts.jpg",
  label:"Shirts",
  count:47
},
{
  src:"/buttonCard/Trousers.jpg",
  label:"Trousers",
  count:30
},
]
const page = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center p-3">
      <h1 className="font-semibold text-2xl mx-auto">Women's Clothing</h1>
      </div>
      
      <ItemList items={items} />
      <div className="flex items-center justify-between p-3">
        <div>
          <Button
            variant="text"
            startContent={<Filter className="w-4 h-4" />}
            className="hover:underline underline-offset-4  text-md "
          >
            Filter
          </Button>
        </div>
        <div className="flex items-center w-1/2  justify-end gap-3">
          <p>140 Item</p>

          <p>Sort By:</p>

          <Select className="w-fit text-neutral-500">
            <SelectItem value="apple">Bestseller</SelectItem>
            <SelectItem value="blueberry">Trending</SelectItem>
            <SelectItem value="watermelon">Price low to high</SelectItem>
            <SelectItem value="banana">Price high to low</SelectItem>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-3">
        <FullImageCard src="/Card1.jpg" href="#" title="Be Your Own Boss" subtitle="Shop Now"/>
        {mencardData.map((card, index) => (
          <ShopingCard
            key={index}
            imageSrc={card.imageSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
            price={card.price}
            showInfoText="Quick view"
          />
        ))}
        <FullImageCard src="/Card2.jpg" href="#" title="New Arrivals" subtitle="Shop Now"/>
      </div>
      <Divider color="dark" className="px-3"/>
      <div className="pt-4 pb-[50px] px-3">
        <p>Related categories </p>
        <div className="py-3 flex gap-5 justify-start items-center">
          {ButtonCardData.map((card, index) => (
            <ButtonCard href="#" key={index} src={card.src} label={card.label} count={card.count} />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default page;
