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
  return (
    <div className="max-w-md mx-auto p-2">
        <div className=" grid grid-cols-2 gap-4 p-4">
          {data.map((item, index)=>(
            <div key={index} className='p-4'>
              <h1 className='text-md font-semibold mb-3'>{item.title}</h1>
              {item.items.map((item, index)=>(
                <Link href="#" className='text-md text-neutral-400 underline-offset-4 hover:underline hover:text-white mb-3 block' >{item.title}</Link>
              ))}
            </div>
          ))}

        </div>
        <div className='px-4 py-6 rounded-xl cursor-pointer'
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
      
    </div>
  )
}

export default Sales
