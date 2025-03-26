
import { Input } from '@jamsr-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const page = () => {
  return (
    <section>
        <div className='text-center  p-20'
    style={{
        backgroundImage:"url('/banner.jpg')" ,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} >
        <h1 className='text-5xl font-semibold text-white'>Get Help</h1>
        <div className='w-1/2 mx-auto mt-5'>
        <Input startContent={<BiSearch className='h-[20px] w-[20px]'  />}  size="lg" isFilled variant="standard" className='h-[50px] w-1/2'  placeholder="How can we help you ?" />
        </div>
        
      </div>
      <div className='container mx-auto max-w-[1280px] flex'>
        <div className='p-5 border-e border-neutral-500 hidden lg:block h-fit sticky top-[50px]'>ram</div>
        <div className='py-10 px-16 h-screen'>
            <h1 className='font-semibold' >Delivery</h1>
            <div className=''></div>
            
        </div>
      </div>
    </section>
    
  )
}

export default page