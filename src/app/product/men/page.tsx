"use client"
import ButtonCard from '@/components/ButtonCard'
import FilterDrawer from '@/components/filter/FilterDrawer';
import FullImageCard from '@/components/FullImageCard';
import ShopingCard from '@/components/ShopingCard';
import { Filter } from '@/components/svgs';
import { Button, CircularProgress,  Select, SelectItem } from '@jamsr-ui/react';
import React, { useState } from 'react'
import mencardData from '@/data/MenCloths';
    


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

  
const Page = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const openMenu = () => setIsMenuOpen(true);

      const handleLike = () => {
        console.log("Liked!");
      };

  return (
    <div className='container mx-auto max-w-screen-xl '>
        <div className="pt-4 pb-[50px] py-3">
        <p className='text-lg font-semibold'>Men&apos;s Clothing </p>
        <div className="py-3 flex gap-5 justify-start items-center">
          {ButtonCardData.map((card, index) => (
            <ButtonCard href="#" key={index} src={card.src} label={card.label} count={card.count} />
          ))}
          
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div>
          <Button
            variant="text"
            startContent={<Filter className="w-4 h-4" />}
            className="hover:underline underline-offset-4  text-md "
            onClick={openMenu}
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
      <div className="grid grid-cols-5 gap-4 py-3">
        <FullImageCard src="/images/men/14.webp" href="#" title="Be Your Own Boss" subtitle="Shop Now"/>
        {mencardData.map((card, index) => (
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
        <FullImageCard src="/images/men/15.webp" href="#" title="New Arrivals" subtitle="Shop Now"/>
      </div>
      <div   className='py-10 px-3 flex  gap-3 items-center'>
        <CircularProgress className='h-5' color='default'/>
        <p className='text-sm'> Loading . . .</p>
      </div>
      
      <FilterDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} onClose={() => setIsMenuOpen(false)} />
    
    </div>
  )
}

export default Page