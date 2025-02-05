"use client";
import Link from "next/link";
import { IconButton, Tab, Tabs, Text } from "@jamsr-ui/react";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";

import CardComponent from "@/components/HoverButtonCard";
import CardComponent2 from "@/components/GridCard";
import Card3 from "@/components/HoverCard";
import { MdNavigateNext } from "react-icons/md";
import { Adids, Batch, HM, NewBalance, Nick, NorthFace, Puma } from '../components/svgs';
import Carousel from "@/components/Carousel";
import ItemList from "@/components/ItemList";

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
    images: ["/Shoes1.jpg", "/Shoes2.jpg", "/Shoes3.jpg"],
    title: "Nike Shoes",
    subtitle: "Starting from $99",
    linkText: "View all",
    linkHref: "/products/nike-shoes",
  },
  {
    id: 2,
    images: ["/Men1.jpg", "/Men2.jpg", "/Men3.jpg"],
    title: "Men's Cloting",
    subtitle: "Starting from $39",
    linkText: "View all",
    linkHref: "/products/stylish-bags",
  },
  {
    id: 3,
    images: ["/image1.jpg", "/images2.jpg", "/images3.jpg"],
    title: "Women's Clothing",
    subtitle: "Starting from $59",
    linkText: "Veiw all",
    linkHref: "/products/luxury-watches",
  },
];


const womencardData = [
  {
    imageSrc: "/image1.jpg",
    altText: "Clothing Item",
    title: "Slim Lyocell Trousers",
    description: "Men's Trousers",
    price: "$50",
  },
  {
    imageSrc: "/images2.jpg",
    altText: "Clothing Item",
    title: "Classic Denim Jacket",
    description: "Men's Outerwear",
    price: "$80",
  },
  {
    imageSrc: "/images3.jpg",
    altText: "Clothing Item",
    title: "Cotton Crew Neck Tee",
    description: "Men's T-Shirt",
    price: "$25",
  },
  {
    imageSrc: "/images4.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/images6.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/image7.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
];

const mencardData = [
  {
    imageSrc: "/trending/men/Trouser.jpg",
    altText: "Clothing Item",
    title: "Slim Lyocell Trousers",
    description: "Men's Trousers",
    price: "$50",
  },
  {
    imageSrc: "/trending/men/jacket.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/trending/men/Tshirt.jpg",
    altText: "Clothing Item",
    title: "Classic Denim Jacket",
    description: "Men's Outerwear",
    price: "$80",
  },
  {
    imageSrc: "/trending/men/Hoodie.jpg",
    altText: "Clothing Item",
    title: "Cotton Crew Neck Tee",
    description: "Men's T-Shirt",
    price: "$25",
  },
  {
    imageSrc: "/trending/men/WhiteTshirt.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  
  
];

const shoes = [

  {
    imageSrc: "/shoes1.jpg",
    altText: "Clothing Item",
    text: "AIR JORDAN"
  },
  {
    imageSrc: "/shoes2.jpg",
    altText: "Clothing Item",
    text: "AIR JORDAN1"

  },
  {
    imageSrc: "/shoes3.jpg",
    altText: "Clothing Item",
    text: "DUNK"

  },
  {
    imageSrc: "/shoes4.jpg",
    altText: "Clothing Item",
    text: "AIR FORCE1"

  },
  {
    imageSrc: "/shoes5.jpg",
    altText: "Clothing Item",
    text: "BLAZER"

  },
  {
    imageSrc: "/shoes.avif",
    altText: "Clothing Item",
    text: "ADIDAS"

  },
]

const items = [
  { name: "T Shirt", image: "/shirt.avif", link: "/help"},
  { name: "Trousers", image: "/trouser.avif", link: "#" },
  { name: "Shoes", image: "/shoes.avif", link: "#" },
  { name: "Jackets", image: "/jacket.avif", link: "#" }
];

const Page = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleLike = () => {
    console.log("Liked!");
  };

  const handleInfo = () => {
    console.log("Show info clicked!");
  };

  return (
    <div>
      <div className="container mx-auto ">
        <section className="">
          <Carousel/>
        </section>
        <ItemList items={items} />
        <section className="p-5 text-center">
          <h1 className="text-3xl font-semibold my-3">Trending now </h1>
          <Tabs
            classNames={{
              tab: " w-[200px] ",
            }}
            variant="bordered"
            defaultValue="men"
          >
            <Tab value="men" heading="Men">
              <div className="relative w-full">
                <IconButton
                  label=""
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full  bg-white  text-black "
                  onClick={scrollLeft}
                >
                  <IoIosArrowBack />
                </IconButton>

                <div
                  ref={scrollContainer}
                  className="flex  items-center flex-nowrap gap-2 overflow-hidden "
                >
                  <div className="flex gap-3 items-center flex-nowrap">
                    {mencardData.map((card, index) => (
                      <CardComponent
                        key={index}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        onLike={handleLike}
                        onInfo={handleInfo}
                        showInfoText="Quick view"
                      />
                    ))}
                  </div>
                </div>
                <IconButton
                  label=""
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white  text-black "
                  onClick={scrollRight}
                >
                  <GrFormNext />
                </IconButton>
              </div>
              <div className="py-5 flex justify-center">
                <Link
                  href="#"
                  className="hover:text-purple-600 hover:underline underline-offset-4 flex items-center text-lg "
                >
                  Show all men <MdNavigateNext />
                </Link>
              </div>
            </Tab>
            <Tab value="women" heading="Women">
              <div>
                <div className="relative w-full">
                  <IconButton
                    label=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full  bg-white  text-black "
                    onClick={scrollLeft}
                  >
                    <IoIosArrowBack />
                  </IconButton>

                  <div
                    ref={scrollContainer}
                    className="flex  items-center flex-nowrap gap-2 overflow-hidden "
                  >
                    <div className="flex gap-3 items-center flex-nowrap">
                      {womencardData.map((card, index) => (
                        <CardComponent
                          key={index}
                          imageSrc={card.imageSrc}
                          altText={card.altText}
                          title={card.title}
                          description={card.description}
                          price={card.price}
                          onLike={handleLike}
                          onInfo={handleInfo}
                          showInfoText="Quick view"
                        />
                      ))}
                    </div>
                  </div>
                  <IconButton
                    label=""
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-white  text-black "
                    onClick={scrollRight}
                  >
                    <GrFormNext />
                  </IconButton>
                </div>
                <div className="py-5 flex justify-center">
                  <Link
                    href="#"
                    className="hover:text-purple-600 hover:underline underline-offset-4 flex items-center text-lg "
                  >
                    Show all women <MdNavigateNext />
                  </Link>
                </div>
              </div>
            </Tab>
          </Tabs>
        </section>
        <section className="p-5 text-center">
          <h1 className="text-3xl font-semibold my-3">
            The better way to shop with Preline top-products{" "}
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <section className="p-5 text-center">

          <div className="flex justify-center items-center  gap-10 lg:gap-[100px]">
            <Adids className="h-[75px] w-[75px]" />
            <Nick className="h-[75px] w-[75px]" />
            <NewBalance className="h-[75px] w-[75px]" />
            <NorthFace className="h-[75px] w-[75px]" />
            <Puma className="h-[75px] w-[75px]" />
            <HM className="h-[75px] w-[75px]" />


          </div>


        </section>
        <section className="p-5 text-center">
          <h1 className="text-3xl font-semibold my-3">
            Shoes by classics
          </h1>
          <div className="relative w-full">

            <div

              className="flex  items-center justify-center flex-nowrap gap-2 overflow-hidden "
            >
              <div className="flex gap-5 items-center justify-center flex-nowrap">
                {shoes.map((card, index) => (
                  <Card3
                    key={index}
                    images={card.imageSrc}
                    altText={card.altText}
                    ButtonText={card.text}
                  />
                ))}

              </div>
            </div>

          </div>
        </section>
        <section className="p-5 text-center">
          <div className="md:flex justify-between items-center gap-16 py-10">
            <div className="text-center ">
              <Batch className="mx-auto mb-2" />
              <Text as="h3" variant="body2" >Secure checkout </Text>
              <p className="text-neutral-500">Shop with confidence using our encrypted payment system that protects your sensitive information. </p>

            </div>
            <div className="text-center my-8 ">
              <Batch className="mx-auto mb-2" />
              <Text as="h3" variant="body2" >Secure checkout </Text>
              <p className="text-neutral-500">Shop with confidence using our encrypted payment system that protects your sensitive information. </p>

            </div>
            <div className="text-center ">
              <Batch className="mx-auto mb-2" />
              <Text as="h3" variant="body2" >Secure checkout </Text>
              <p className="text-neutral-500 ">Shop with confidence using our encrypted payment system that protects your sensitive information. </p>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
