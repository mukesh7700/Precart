"use client";
import Link from "next/link";
import { Tab, Tabs, Text } from "@jamsr-ui/react";

import CardComponent from "@/components/HoverButtonCard";
import CardComponent2 from "@/components/GridCard";
import Card3 from "@/components/HoverCard";

import {
  Adids,
  Batch,
  HM,
  NewBalance,
  NextArrow,
  Nick,
  NorthFace,
  Puma,
  Return,
  Van,
} from "../components/svgs";
import Carousel from "@/components/Carousel";
import ItemList from "@/components/ItemList";
import CustomSwiper from "@/components/SwiperSlide";
import TabImageSwiper from "@/components/TabImageSwiper";
import womencardData from "@/data/WomenCloths";
import mencardData from "@/data/MenCloths";

interface Product {
  id: number;
  images: string[];
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
}

const products: Product[] = [
  {
    id: 1,
    images: [
      "/images/others/shoes/1.webp",
      "/images/others/shoes/2.webp",
      "/images/others/shoes/3.webp",
    ],
    title: "Nike Shoes",
    subtitle: "Starting from $99",
    linkText: "View all",
    linkHref: "/product/shoes",
  },
  {
    id: 2,
    images: ["/images/men/11.jpg", "/images/men/12.jpg", "/images/men/9.jpg"],
    title: "Men's Cloting",
    subtitle: "Starting from $39",
    linkText: "View all",
    linkHref: "product/men",
  },
  {
    id: 3,
    images: [
      "/images/women/8.jpg",
      "/images/women/10.jpg",
      "/images/women/1.jpg",
    ],
    title: "Women's Clothing",
    subtitle: "Starting from $59",
    linkText: "Veiw all",
    linkHref: "/product/women/categories",
  },
];



const shoes = [
  {
    imageSrc: "/images/others/shoes/1.webp",
    altText: "Clothing Item",
    text: "AIR JORDAN",
  },
  {
    imageSrc: "/images/others/shoes/8.webp",
    altText: "Clothing Item",
    text: "AIR JORDAN1",
  },
  {
    imageSrc: "/images/others/shoes/6.webp",
    altText: "Clothing Item",
    text: "DUNK",
  },
  {
    imageSrc: "/images/others/shoes/7.webp",
    altText: "Clothing Item",
    text: "AIR FORCE1",
  },
  {
    imageSrc: "/images/others/shoes/10.webp",
    altText: "Clothing Item",
    text: "BLAZER",
  },
  {
    imageSrc: "/images/others/shoes/3.webp",
    altText: "Clothing Item",
    text: "ADIDAS",
  },
  
];

const items = [
  { name: "T Shirt", image: "/images/others/tShirt/1.webp", link: "/men-&-women" },
  { name: "Trousers", image: "/images/others/tShirt/2.webp", link: "/men-&-women" },
  { name: "Shoes", image: "/images/others/shoes/1.webp", link: "/men-&-women" },
  { name: "Jackets", image: "/images/others/tShirt/3.webp", link: "/men-&-women" },
];

const Page = () => {
  const handleLike = () => {
    console.log("Liked!");
  };

  

  return (
    
      <div className="container max-w-[1280px] mx-auto p-2 md:p-0">
        <section className="">
          <Carousel />
        </section>
        <ItemList items={items}  />
        <section className=" text-center">
          <h1 className="text-3xl font-semibold my-3">Trending Now </h1>
          <Tabs
            classNames={{
              tab: " w-[200px] ",
              
            }}
            variant="bordered"
            defaultValue="men"
          >
            <Tab value="men" heading="Men">
              <div className=" py-6 w-full">
                <TabImageSwiper
                  items={mencardData.slice(0, 6).map((card, index) => (
                    <CardComponent
                      href="/product/women/categories/product-details"
                      key={index}
                      imageSrc={card.imageSrc}
                      altText={card.altText}
                      title={card.title}
                      description={card.description}
                      price={card.price}
                      mainPrice={card.mainPrice}
                      isTrending={card.isTrending}
                      onLike={handleLike}
                      colors={card.colors}
                      showInfoText="Quick view"
                    />
                  ))}
                />
              </div>
              <div className="py-4 flex justify-center">
                <Link
                  href="product/men"
                  className="hover:text-blue-400 hover:underline underline-offset-4 flex items-center text-lg "
                >
                 <p>Show all men</p>
                 <NextArrow className="h-3" />
                </Link>
              </div>
            </Tab>
            <Tab value="women" heading="Women">
              <div>
                <div className=" py-6 w-full">
                  <TabImageSwiper
                    items={womencardData.slice(0, 6).map((card, index) => (
                      <CardComponent
                        href="/product/women/categories/product-details"
                        key={index}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        isTrending={card.isTrending}
                        onLike={handleLike}
                        mainPrice={card.price}
                        
                        showInfoText="Quick view"
                      />
                    ))}
                  />
                </div>
                <div className="py-5 flex justify-center">
                  <Link
                    href="/product/women/categories"
                    className="  hover:text-blue-400 hover:underline underline-offset-4 flex items-center text-lg "
                  >
                    <p>Show all women</p>
                    <NextArrow className="h-3" />
                  </Link>
                </div>
              </div>
            </Tab>
          </Tabs>
        </section>
        <section className="py-5 text-center">
          <h1 className="text-3xl font-semibold my-3">
            The better way to shop with Precart top-products{" "}
          </h1>
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <CardComponent2
                key={product.id}
                images={product.images}
                title={product.title}
                subtitle={product.subtitle}
                linkText={product.linkText}
                linkHref={product.linkHref}
              />
            ))}
          </div>
        </section>
        <section className="py-5 text-center">
          <div className="flex justify-center items-center  gap-10 lg:gap-[100px]">
            <Adids className="h-[75px] w-[75px]" />
            <Nick className="h-[75px] w-[75px]" />
            <NewBalance className="h-[75px] w-[75px]" />
            <NorthFace className="h-[75px] w-[75px]" />
            <Puma className="h-[75px] w-[75px]" />
            <HM className="h-[75px] w-[75px]" />
          </div>
        </section>
        <section className="py-5 text-center">
          <h1 className="text-3xl font-semibold my-3">Shoes by classics</h1>
          <CustomSwiper
            items={shoes.map((card, index) => (
              <Card3
                key={index}
                images={card.imageSrc}
                altText={card.altText}
                ButtonText={card.text}
              />
            ))}
          />
        </section>
        <section className="p-5 text-center">
          <div className="md:flex justify-between items-center gap-16 py-10">
            <div className="text-center ">
              <Batch className="mx-auto mb-2 h-10 w-10" />
              <Text as="h3" variant="body2">
                Secure checkout
              </Text>
              <p className="text-neutral-500">
                Shop with confidence using our encrypted payment system that
                protects your sensitive information.
              </p>
            </div>
            <div className="text-center my-8 ">
              <Van className="mx-auto mb-2 h-10 w-10" />
              <Text as="h3" variant="body2">
                Free shipping
              </Text>
              <p className="text-neutral-500">
                Enjoy complimentary delivery gbx61 all orders, with no minimum
                purchase required.
              </p>
            </div>
            <div className="text-center ">
              <Return className="mx-auto mb-2 h-10 w-10" />
              <Text as="h3" variant="body2">
                30 days return
              </Text>
              <p className="text-neutral-500 ">
                Not satisfied? Return any item within 30 days of purchase for a
                full refund or exchange.
              </p>
            </div>
          </div>
        </section>
      </div>
  
  );
};

export default Page;
