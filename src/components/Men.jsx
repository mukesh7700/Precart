import Link from 'next/link'
import React from 'react'
import men from "@/data/Men"


const Men = () => {
    return (
        <div className='w-screen'>
            <div className=" container mx-auto ">

                <div className=" grid md:grid-flow-col-dense md:my-4  ">
                    {men.map((item, index) => (
                        <div key={index} className='md:py-4'>
                            <h1 className='text-md font-semibold md:my-6'>{item.title}</h1>
                            {item.items.map((item, index) => (
                                <Link href="#" className='text-sm text-neutral-400 underline-offset-4 hover:underline hover:text-white mb-3 block' key={index} >{item.title}</Link>
                            ))}
                        </div>
                    ))}
                    <div className= 'hidden md:block p-2 w-full h-full bg-gradient-to-tl  from-blue-800 via-purple-600 to-orange-400 rounded-xl cursor-pointer relative'>
                        <div className='px-4 py-6 h-full  rounded-xl cursor-pointer '
                            style={{
                                backgroundImage: "url('/Men3.jpg')",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        >

                            <Link href="#" className='absolute top-3/4 left-1/2 transform -translate-x-1/2 text-md  tracking-wider  rounded-full px-2 bg-gradient-to-r from-neutral-500 via-neutral-500 to-neutral-300  '>Shop now</Link>
                        </div>
                    </div>





                </div>
                



            </div>
            <div className='md:py-[15px] md:bg-neutral-500'>
            <div className=' container mx-auto md:flex justify-between gap-8 items-center '>
                    <div className='flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer '>
                        <img src="/shoes2.jpg" alt="shoes" className='h-[40px] w-[40px] rounded-md' />
                        <h1 className='text-md font-semibold tracking-wider'>Shoes</h1>
                    </div>
                    <div className='flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer'>
                        <img src="/Accessories.avif" alt="shoes" className='h-[40px] w-[40px] rounded-md' />
                        <h1 className='text-md font-semibold tracking-wider '>Accessories</h1>
                    </div>
                    <div className='flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer'>
                        <img src="/Beg.avif" alt="shoes" className='h-[40px] w-[40px] rounded-md' />
                        <h1 className='text-md font-semibold tracking-wider'>Backpacks</h1>
                    </div>
                    <div className='flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer'>
                        <img src="/Socks.avif" alt="shoes" className='h-[40px] w-[40px] rounded-md' />
                        <h1 className='text-md font-semibold tracking-wider'>Socks</h1>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Men