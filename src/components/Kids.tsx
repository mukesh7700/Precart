import Link from 'next/link';
import React from 'react';
import kids from "@/data/Kids";

const Kids = () => {
    return (
        <div className='w-screen'>
            <div className="container mx-auto">
                <div className="grid md:grid-flow-col-dense md:my-4">
                    {kids.map((products) => (
                        <div key={products.Id} className="md:py-4">
                            {products.item.map((product) => (
                                <React.Fragment key={product.title}>
                                    <h1 className="text-md font-semibold md:my-6">{product.title}</h1>
                                    {product.items.map((item) => (
                                        <Link
                                            href="#"
                                            className="text-sm text-neutral-400 underline-offset-4 hover:underline hover:text-white mb-3 block"
                                            key={item.title}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                    <div className="hidden md:block p-2 w-full h-full bg-gradient-to-tl from-blue-800 via-purple-600 to-orange-400 rounded-xl cursor-pointer relative">
                        <div
                            className="px-4 py-6 h-full rounded-xl cursor-pointer"
                            style={{
                                backgroundImage: "url('/kids.jpg')",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                
                            }}
                        >
                            <Link
                                href="#"
                                className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-md tracking-wider rounded-full px-2 bg-gradient-to-r from-neutral-500 via-neutral-500 to-neutral-300"
                            >
                                Shop now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[15px] md:bg-neutral-500">
                <div className="container mx-auto md:flex justify-between gap-8 items-center">
                    <div className="flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer">
                        <img src="/Shoes.avif" alt="shoes" className="h-[40px] w-[40px] rounded-md" />
                        <h1 className="text-md font-semibold tracking-wider">Shoes</h1>
                    </div>
                    <div className="flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer">
                        <img src="/Accessories.avif" alt="accessories" className="h-[40px] w-[40px] rounded-md" />
                        <h1 className="text-md font-semibold tracking-wider">Accessories</h1>
                    </div>
                    <div className="flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer">
                        <img src="/Beg.avif" alt="backpacks" className="h-[40px] w-[40px] rounded-md" />
                        <h1 className="text-md font-semibold tracking-wider">Backpacks</h1>
                    </div>
                    <div className="flex items-center grow p-1 gap-4 md:hover:bg-black rounded-md cursor-pointer">
                        <img src="/Shorts.avif" alt="socks" className="h-[40px] w-[40px] rounded-md" />
                        <h1 className="text-md font-semibold tracking-wider">Shorts</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kids;
