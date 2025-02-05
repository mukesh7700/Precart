"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
];

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation ]}
        slidesPerView={3}
        spaceBetween={20}
        
        navigation
        
        breakpoints={{
          768: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
        className="p-4"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image width={400} height={400} src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
