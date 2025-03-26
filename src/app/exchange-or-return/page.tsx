import ReturnCard from '@/components/ReturnCard'
import CartData from '@/data/CartData'
import { Button } from '@jamsr-ui/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto max-w-[1280px]  p-5 md:p-0'>
      <div className='flex justify-center  py-10 '>
        <div className=' max-w-xl'>
        <h1 className='text-2xl text-center font-semibold py-5'>What do you want to exchange or return? </h1>
        {CartData.map((item, index) => (
          <ReturnCard
          key={index}
          imageSrc={item.imageSrc}
          productName={item.productName}  
          color={item.color}
          size={item.size}
          quantity={item.quantity}
          stock={item.stock}
          isReturnable={item.isReturnable}
          />
        ))}
        <Button color='primary' size='lg' className='w-full my-5' >Confirm</Button>
        <p className='text-sm text-neutral-500  mt-5 tracking-wide leading-4'>By returning, you confirm that all items are in the same condition as when you received them. Please pack everything in its original packaging and ensure the tags remain attached. </p>
        <p className='text-sm text-neutral-500  my-5 tracking-wide leading-4'>We will assess the items&lsquo; condition before processing your refund. </p>
        <Link href="/exchange-or-return" className='text-sm font-semibold text-center  underline underline-offset-4'>view return policy</Link>
        </div>
      </div>
    </div>
  )
}

export default page