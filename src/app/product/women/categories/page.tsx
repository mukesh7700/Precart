import FullImageCard from "@/components/FullImageCard";
import Card3 from "@/components/HoverCard";
import ShopingCard from "@/components/ShopingCard";
import React from "react";
const shoes = [
  {
    imageSrc: "/shoes1.jpg",
    altText: "Clothing Item",
    text: "AIR JORDAN",
  },
  {
    imageSrc: "/shoes2.jpg",
    altText: "Clothing Item",
    text: "AIR JORDAN1",
  },
  {
    imageSrc: "/shoes3.jpg",
    altText: "Clothing Item",
    text: "DUNK",
  },
  {
    imageSrc: "/shoes4.jpg",
    altText: "Clothing Item",
    text: "AIR FORCE1",
  },
  {
    imageSrc: "/shoes5.jpg",
    altText: "Clothing Item",
    text: "BLAZER",
  },
  {
    imageSrc: "/shoes.avif",
    altText: "Clothing Item",
    text: "ADIDAS",
  },
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
const page = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex gap-5 items-center justify-around flex-nowrap p-4">
        {shoes.map((card, index) => (
          <Card3
            key={index}
            images={card.imageSrc}
            altText={card.altText}
            ButtonText={card.text}
          />
        ))}
      </div>
      <div className="px-4">
      <h1 className="font-semibold text-2xl ">Women's Clothing</h1>
      <div className="flex items-center justify-between gap-4 p-3">
      
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
            
          />
        ))}
        <FullImageCard src="/Card2.jpg" href="#" title="New Arrivals" subtitle="Shop Now"/>
      </div>
    </div>
  );
};

export default page;
