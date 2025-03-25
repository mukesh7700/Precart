import ReturnCard from '@/components/ReturnCard'
import CartData from '@/data/CartData'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto max-w-[1280px]  p-5 md:p-0'>
      <div className='flex justify-center py-10'>
        <div>
        <h1 className='text-2xl font-semibold py-5'>What do you want to exchange or return? </h1>
        {CartData.map((item, index) => (
          <ReturnCard
          key={index}
          imageSrc={item.imageSrc}
          productName={item.productName}  
          color={item.color}
          size={item.size}
          quantity={item.quantity}
          />
        ))}
        
        </div>
      </div>
    </div>
  )
}

export default page