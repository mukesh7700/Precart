import { Button } from '@jamsr-ui/react'

import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
   <div className='w-screen'>
    <div className='md:p-10 md:max-w-xl text-center mx-auto '>
        <div className=''>
            <Button variant='outlined' size='sm'  className='rounded-full py-1 mb-4'>coming soon</Button>
            <h1 className='text-lg font-semibold mb-4'>Home Store</h1>
            <div className='grid grid-cols-3 grid-rows-1 gap-2 md:gap-3 mb-4'>
                <img src="/Home1.jpg" alt="home" className='rounded-lg h-[150px] md:h-[200px] w-full' />
                <img src="/Home2.jpg" alt="home" className='rounded-lg h-[150px] md:h-[200px]' />
                <img src="/Home3.jpg" alt="home" className='rounded-lg h-[150px] md:h-[200px]' />

            </div>
            <h1 className='text-md mb-3 md:mb-6 tracking-wide'>In collaboration with IKEA</h1>
            <Link href="#" className='underline tracking-wide font-semibold underline-offset-4 hover:text-violet-500'>Learn More</Link>
        </div>
    </div>
   </div>
    
  )
}

export default Home