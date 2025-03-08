import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FullImageCardProps = {
    href: string;
    src:string;
    title: string;
    subtitle: string;
  };
const FullImageCard: React.FC<FullImageCardProps> = ({href, src, title, subtitle}) => {
  return (
    <Link href={href} className='relative text-white'>
        <Image width={400} height={400} src={src} alt="women" className='rounded-lg   w-full h-full ' />
        <div className='text-center absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='text-md font-semibold underline underline-offset-4'>{subtitle}</p></div>
    </Link>
  )
}

export default FullImageCard