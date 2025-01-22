import React from 'react'
import { Account } from './svgs'
import Link from 'next/link';


interface ProductCardProps {
    images: string; // Array of image URLs
    title: string; // Product title
    subtitle: string; // Product subtitle or price
    linkHref: string; // Link URL
  }

const Card4 = (
    { 
        images, 
        title, 
        subtitle,  
        linkHref="#"
      }: ProductCardProps
) => {
  return (
    <Link href={linkHref} className='px-4 py-8 border border-neutral-500 rounded-lg hover:border-violet-500 hover:border-2 cursor-pointer'>
        <p className='w-[30px] h-[30px]'>{images}</p>
        <p  className='px-0 py-2 text-lg font-semibold' >{title}</p>
        <p className='text-md text-neutral-500 leading-3'>{subtitle}</p>
    </Link>
  )
}

export default Card4