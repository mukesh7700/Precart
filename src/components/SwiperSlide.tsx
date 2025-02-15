"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper as SwiperType } from "swiper/types";

// Dummy images (replace with actual image URLs)
const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

const CustomSwiper: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;
      if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
        setInitialized(true); // Force re-render
      }
    }
  }, [initialized]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        
        navigation={{ prevEl: null, nextEl: null }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="rounded-xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg text-black"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-lg text-black"
      >
        <IoIosArrowForward size={24} />
      </button>
    </div>
  );
};

export default CustomSwiper;
