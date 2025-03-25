"use client";
import { useState } from 'react';
import Image from 'next/image';
import { BackArrow, NextArrow } from "@/components/svgs";

interface CarouselProps {
  images?: string[];
}



export default function Carousel({ images = [] }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevImage = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
      scrollToThumbnail(activeIndex - 1);
    }
  };

  const nextImage = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex((prev) => prev + 1);
      scrollToThumbnail(activeIndex + 1);
    }
  };

  const scrollToThumbnail = (index: number) => {
    const thumbnail = document.getElementById(`thumbnail-${index}`);
    if (thumbnail) {
      thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  };

  return (
    <div className="flex gap-4 max-h-[600px]">
      <div className="flex flex-col gap-2 overflow-auto w-fit-content ">
        {images.map((img, index) => (
          <div 
            key={index} 
            id={`thumbnail-${index}`} 
            onClick={() => setActiveIndex(index)} 
            className={`cursor-pointer ${index === activeIndex ? 'brightness-50' : ''}`}
          >
            <Image src={img} width={80} height={80} alt={`thumbnail-${index}`} className="rounded-lg" />
          </div>
        ))}
      </div>

      <div className="relative w-[500px] h-[600px]">
        {images.length > 0 && (
          <Image src={images[activeIndex]} fill alt={`main-${activeIndex}`} className="rounded-lg object-cover" />
        )}
        <div className='inline-block absolute bottom-2 right-2'>
          <button 
            className={`bg-white text-black p-2 rounded-full shadow me-2 ${activeIndex === 0 ? 'brightness-75' : ''}`}  
            onClick={prevImage} 
            disabled={activeIndex === 0}
          >
            <BackArrow className="h-4 w-4" />
          </button>
          <button 
            className={`bg-white text-black p-2 rounded-full shadow ${activeIndex === images.length - 1 ? 'brightness-50' : ''}`}  
            onClick={nextImage} 
            disabled={activeIndex === images.length - 1}
          >
            <NextArrow className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
