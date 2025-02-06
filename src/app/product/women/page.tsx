"use client"
import CardComponent from '@/components/HoverButtonCard';
import ItemList from '@/components/ItemList'
import { Filter } from '@/components/svgs';

import { Button, Divider, Select, SelectItem } from '@jamsr-ui/react';
import React from 'react'

const items = [
    { name: "Suits", image: "/WomenSuits.jpg", link: "#" },
    { name: "Dresses", image: "/WomenDresses.jpg", link: "#" },
    { name: "Trousers", image: "/WomenTrousers.jpg", link: "#" },
    { name: "Jeans", image: "/WomenJeans.jpg", link: "#" }
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
    <section className='container mx-auto'>
        <h1>
        Womens Clothing 
        </h1>
        <ItemList items={items}/>
        <div className='flex items-center justify-between p-3'>
          <div>
            <Button variant='text' startContent={<Filter className="w-4 h-4"/>} className='hover:underline underline-offset-4  text-md '>Filter</Button>
          </div>
          <div className='flex items-center w-1/2  justify-end gap-3'>
            <p>140 Item</p>
           
            <p>Sort By:</p>
            
            <Select
        className="w-fit text-neutral-500"
        
      >
        <SelectItem value="apple">Bestseller</SelectItem>
        <SelectItem value="blueberry">Trending</SelectItem>
        <SelectItem value="watermelon">Price low to high</SelectItem>
        <SelectItem value="banana">Price high to low</SelectItem>
        
      </Select>

          </div>

        </div>
        <div className='grid grid-cols-5 gap-4 p-3'>
          {mencardData.map((card, index) => (
                                  <CardComponent
                                    key={index}
                                    imageSrc={card.imageSrc}
                                    altText={card.altText}
                                    title={card.title}
                                    description={card.description}
                                    price={card.price}
                                    
                                    showInfoText="Quick view"
                                  />
                                ))}
        </div>
        <Divider/>
        <div className='p-3'>
          <p>Related categories </p>
          <div className='py-3 flex gap-5 justify-start items-center'>

          </div>
        </div>

    </section>
  )
}

export default page