"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper as SwiperType } from "swiper/types";

interface CustomSwiperProps {
  items: ReactNode[]; // Accepts array of React components
  
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ items }) => {
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
        setInitialized(true);
      }
    }
  }, [initialized]);

  return (
    <div className="relative w-full flex justify-center  ">
      <Swiper
        modules={[Navigation, ]}
        spaceBetween={20}
        slidesPerView={2} // 🔥 Ensures 2 items on small screens
        breakpoints={{
          480: { slidesPerView: 2 },  // Phones
          640: { slidesPerView: 3 },  // Small devices (mobile)
          768: { slidesPerView: 4 },  // Tablets
          1024: { slidesPerView: 5 }, // Laptops
          1280: { slidesPerView: 6 }, // Large desktop screens
        }}
        
        
        navigation={{ prevEl: null, nextEl: null }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="rounded-xl   shadow-lg"
      >
        {items.map((component, index) => (
          <SwiperSlide key={index} className="mx-auto " >{component}</SwiperSlide>
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
