import Link from 'next/link';
import React from 'react';
import pages from "@/data/Pages";

const Pages = () => {
    return (
        <div className='w-screen'>
            <div className="container mx-auto">
                <div className="grid grid-flow-col-dense my-4">
                    {pages.map((products) => (
                        <div key={products.Id} className="py-4">
                            {products.item.map((product) => (
                                <React.Fragment key={product.title}>
                                    <h1 className="text-md font-semibold my-6">{product.title}</h1>
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
                    
                </div>
            </div>

            
        </div>
    );
};

export default Pages;
