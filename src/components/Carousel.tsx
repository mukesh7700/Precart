import { useState } from "react";
import { m } from "framer-motion";
import { BackArrow, NextArrow } from "@/components/svgs";
import { IconButton } from "@jamsr-ui/react";
import Link from "next/link";

const slides = [
  {
    src: "/Carousel1.jpg",
    title: "Fall favorites",
    description:
      "Our always-in-season staple, in brand new colors and your favorite fits.",
    buttons: [{ text: "Shop women's clothing", link: "/" }],
  },
  {
    src: "/Carousel2.jpg",
    title: "New styles",
    description:
      "From lightweight layers to the perfect pair of pants, new seasonal favorites are here.",
    buttons: [
      { text: "Shop men", link: "/help" },
      { text: "Shop women", link: "/help" },
    ],
  },
  {
    src: "/Carousel3.jpg",
    title: "Up to 50% off",
    description: "Summer sale",
    buttons: [
      { text: "Shop men", link: "/help" },
      { text: "Shop women", link: "/help" },
    ],
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full p-4 mx-auto overflow-hidden">
      <div className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center">
        {slides.map((slide, index) => (
          <m.div
            key={index}
            className="absolute w-full h-full flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: index === currentIndex ? 10 : 1 }}  
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 px-4 text-center w-2/3">
              <h2 className="text-5xl font-bold">{slide.title}</h2>
              <p className="text-md">{slide.description}</p>
              <div className="mt-2 flex justify-center gap-2">
                {slide.buttons.map((button, btnIndex) => (
                  <Link
                    key={btnIndex}
                    href={button.link}
                    passHref
                    className="text-white hover:text-neutral-200 font-semibold text-lg px-4 py-2 rounded-lg underline underline-offset-4 tracking-tight leading-tight"
                  >
                    {button.text}
                    
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute bottom-4 text-sm bg-neutral-200 text-black px-3 py-1 rounded-full">
              {currentIndex + 1} / {slides.length}
            </div>
          </m.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <IconButton
        label="back"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white z-20"
      >
        <BackArrow />
      </IconButton>

      <IconButton
        label="next"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white z-20"
      >
        <NextArrow />
      </IconButton>
    </div>
  );
};

export default Carousel;
