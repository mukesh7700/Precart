'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardComponent from './HoverButtonCard';

const slides = [
  { src: "/trending/men/Trouser.jpg", title: "Slide 1", description: "This is the first slide description.", price: " 1" },
  { src: "/trending/men/Trouser.jpg", title: "Slide 2", description: "This is the second slide description.", price: " 1" },
  { src: "/trending/men/Trouser.jpg", title: "Slide 3", description: "This is the third slide description.", price: " 1" },
  { src: "/trending/men/Hoodie.jpg", title: "Slide 4", description: "This is the fourth slide description.", price: " 1" },
  
];

const Carousel = () => {

  const handleLike = () => {
    console.log("Liked!");
  };

  const handleInfo = () => {
    console.log("Show info clicked!");
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 }, // Small screens (sm: 2 images)
          768: { slidesPerView: 3 }, // Medium screens (md: 3 images)
          1024: { slidesPerView: 4 }, // Large screens (lg: 4 images)
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardComponent
                                      key={index}
                                      imageSrc={slide.src}
                                      altText={slide.title}
                                      title={slide.title}
                                      description={slide.description}
                                      price={slide.price}
                                      onLike={handleLike}
                                      onInfo={handleInfo}
                                      showInfoText="Quick view"
                                    />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;