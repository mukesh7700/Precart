import ItemList from '@/components/ItemList'
import ImageCarousel from '@/components/SwiperSlide';
import React from 'react'

const items = [
    { name: "Suits", image: "/WomenSuits.jpg", link: "#" },
    { name: "Dresses", image: "/WomenDresses.jpg", link: "#" },
    { name: "Trousers", image: "/WomenTrousers.jpg", link: "#" },
    { name: "Jeans", image: "/WomenJeans.jpg", link: "#" }
  ];

const page = () => {
  return (
    <section>
        <h1>
        Womens Clothing 
        </h1>
        <ItemList items={items}/>
        <ImageCarousel/>
    </section>
  )
}

export default page