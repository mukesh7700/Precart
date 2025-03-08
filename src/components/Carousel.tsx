import { useState } from "react";
import { m } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@jamsr-ui/react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "/images/carousel/4.png",
    title: "Fall favorites",
    description:
      "Our always-in-season staple, in brand new colors and your favorite fits.",
    buttons: [{ text: "Shop women's clothing", link: "/product/women/mini-categories"}],
  },
  {
    src: "/images/carousel/5.png",
    title: "New styles",
    description:
      "From lightweight layers to the perfect pair of pants, new seasonal favorites are here.",
    buttons: [
      { text: "Shop men", link: "/men" },
      { text: "Shop women", link: "/product/women/categories" },
    ],
  },
  {
    src: "/images/carousel/6.png",
    title: "Up to 50% off",
    description: "Summer sale",
    buttons: [
      { text: "Shop men", link: "/men" },
      { text: "Shop women", link: "/product/women/categories" },
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full  py-4 mx-auto overflow-hidden">
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[480px]  flex items-center justify-center">
        {slides.map((slide, index) => (
          <m.div
            key={index}
            className="absolute  w-full h-full flex flex-col items-center justify-center text-white text-center bg-black  rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: index === currentIndex ? 10 : 1 }}  
          >
            
  <Image
    src={slide.src}
    alt={slide.title}
    layout="fill"
    objectFit="cover"
    className="rounded-lg"
  />



            <div className={`text-black/75 absolute top-1/2 ${
      index === 0 ? "left-1/2 -translate-x-1/2" : "left-[33%]"
    } -translate-y-1/2 px-4 text-center w-2/3`}>
              <h2 className="text-5xl font-bold ">{slide.title}</h2>
              <p className="text-md">{slide.description}</p>
              <div className="mt-2 flex justify-center gap-2">
                {slide.buttons.map((button, btnIndex) => (
                  <Link
                    key={btnIndex}
                    href={button.link}
                    passHref
                    className=" hover:text-black font-semibold text-lg px-4 py-2 rounded-lg underline underline-offset-4 tracking-tight leading-tight"
                  >
                    {button.text}
                    
                  </Link>
                ))}
              </div>
            </div>
            
          </m.div>
        ))}
      </div>

       {/* Pagination Dots (Fixed Position & z-index) */}
       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>


      {/* Navigation Buttons */}
      <IconButton
      
      disableRipple
        label="back"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 ui-hover:bg-white  bg-white text-black p-2 rounded-full  z-20"
      >
        <IoIosArrowBack size={24} />
      </IconButton>

      <IconButton
      
      disableRipple
        label="next"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 ui-hover:bg-white bg-white p-2 rounded-full text-black z-20"
      >
        <IoIosArrowForward size={24} />
      </IconButton>
    </div>
  );
};

export default Carousel;
