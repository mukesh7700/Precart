import { useTheme } from '@/context/ThemeContext'
import { Button, Divider } from '@jamsr-ui/react'
import Link from 'next/link'
import React from 'react'
import { Location, Van } from './svgs'
import Image from 'next/image'

const OrderCard = () => {
    const {theme} = useTheme()
  return (
    <div>
        <div
            className={`p-4 rounded-lg ${
              theme === "light" ? "bg-white" : "bg-black"
            }`}
          >
            <div className="flex justify-between items-center mb-2 ">
              <div>
                <p className='flex items-center gap-2 mb-1 text-sm text-neutral-500'><Van className="w-6 h-6"/> Estimated delivery:<span className='text-white'>Wednesday, Aug 7 2024</span> </p>
                <p className="text-sm text-neutral-400 leading-6 flex items-center gap-2 mb-1"> <Location/>
                280 Suzanne Throughway, New York, Breannabury, OR 45801, US 
                </p>
              </div>
              <div>
                <Link href="/order-details"  className={`p-2 text-sm rounded-md ${theme=== "light" ? "bg-black text-white": "bg-white text-black"}`} >Order detail</Link>
              </div>
            </div>
            
            <Divider/>
            <div className='flex gap-4  items-stretch pt-4'>
                <div>
                    <Image
                    height={200}
                    width={200}
                    src="/images/men/1.jpg" 
                    alt=''
                    className='h-[175px]   w-[130px] rounded-lg '
                    />
                </div>
                <div className='grow'>
                    <h1 className='text-lg'>Embroidered Hoodie </h1>
                    <p>$69 </p>
                    <div className='grid md:grid-cols-3 gap-2 py-4 '>
                        <div>
                            <p className='text-sm text-neutral-500 mb-2'>Color</p>
                            <p className='text-sm'>Brown/Red</p>
                        </div>
                        <div>
                            <p className='text-sm text-neutral-500 mb-2'>Size</p>
                            <p className='text-sm'>US7</p>
                        </div>
                        <div>
                            <p className='text-sm text-neutral-500 mb-2'>Quantity</p>
                            <p className='text-sm'>1</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Button disableAnimation disableRipple variant='outlined'>Buy it again</Button>
                        <Button disableAnimation disableRipple variant='outlined'>Write a Product review</Button>
                    </div>
                </div>

            </div>
            
          </div>
    </div>
  )
  
}

export default OrderCard