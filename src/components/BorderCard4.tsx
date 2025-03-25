import React from 'react'

import Link from 'next/link';


interface ProductCardProps {
    logo:React.ReactNode; // Array of image URLs
    title: string; // Product title
    subtitle: string; // Product subtitle or price
    linkHref: string; // Link URL
  }

const Card4 = (
    { 
        logo, 
        title, 
        subtitle,  
        linkHref="#"
      }: ProductCardProps
) => {
  return (
    <Link href={linkHref} className='px-4 py-8 border border-neutral-500 rounded-lg hover:border-blue-400  cursor-pointer '>
        <p className='w-[30px] h-[30px]'>{logo}</p>
        <p  className='px-0 py-2 text-lg font-semibold' >{title}</p>
        <p className='text-md text-neutral-500 leading-6'>{subtitle}</p>
    </Link>
  )
}

export default Card4