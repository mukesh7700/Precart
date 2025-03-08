import { useTheme } from '@/context/ThemeContext'
import { Card } from '@jamsr-ui/react'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    title: "Featured Sale",
    items: [
      {
        title: "Buy2, Get 15% off",
        
      },
      {
        title: "Shoes $100 & Under",
        
      },
      
    ],
  },
  {
    title: "Men",
    items: [
      {
        title: "Shoes",
        
      },
      {
        title: "Clothing",
        
      },
      {
        title: "Accoessories",
        
      },
      
    ],
  },
  {
    title: "Women",
    items: [
      {
        title: "Shoes",
        
      },
      {
        title: "Clothing",
        
      },
      {
        title: "Accoesories",
        
      },
      
    ],
  },
  {
    title: "Kids",
    items: [
      {
        title: "Shoes",
        
      },
      {
        title: "Clothing",
        
      },
      {
        title: "Accoessories",
        
      },
      
    ],
  },
      
    ]
  

  

  


  
const Sales = () => {
  const { theme } = useTheme();
  return (
    <Card className={`md:max-w-md bg-[#181818] mx-auto md:p-2 ${
      theme === "light" ? "bg-white text-black border-none shadow" : "bg-[#181818] text-white"
    }`}>
        <div className=" md:grid grid-cols-2 gap-4 md:p-4">
          {data.map((item, index)=>(
            <div key={index} className='md:p-4'>
              <h1 className='text-md font-semibold mb-3'>{item.title}</h1>
              {item.items.map((item, index)=>(
                <Link href="#" key={index} className='text-md text-neutral-400 underline-offset-4 hover:underline hover:text-white mb-3 block' >{item.title}</Link>
              ))}
            </div>
          ))}

        </div>
        <div className='hidden md:block px-4 py-6 rounded-xl cursor-pointer'
        style={{
          backgroundImage:"url('/banner.jpg')" ,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        >
          <h1 className='text-lg font-semibold tracking-wider'>50% OFF</h1>
          <h1 className='text-lg tracking-wider'>Summer Sale</h1>
          <Link href="#" className='text-md hover:underline underline-offset-4 tracking-wider'>Shop now</Link>
        </div>
      
    </Card>
  )
}

export default Sales
