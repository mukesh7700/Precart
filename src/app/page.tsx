"use client";
import Link from "next/link";
import { IconButton, Tab, Tabs } from "@jamsr-ui/react";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import Image from "next/image";
import CardComponent from "@/components/Card";
import CardComponent2 from "@/components/Card2";
import { MdNavigateNext } from "react-icons/md";
import { Adids } from '@/components/svgs/Adids.svg';

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
    imageSrc: "/Men1.jpg",
    altText: "Clothing Item",
    title: "Slim Lyocell Trousers",
    description: "Men's Trousers",
    price: "$50",
  },
  {
    imageSrc: "/Men2.jpg",
    altText: "Clothing Item",
    title: "Classic Denim Jacket",
    description: "Men's Outerwear",
    price: "$80",
  },
  {
    imageSrc: "/Men3.jpg",
    altText: "Clothing Item",
    title: "Cotton Crew Neck Tee",
    description: "Men's T-Shirt",
    price: "$25",
  },
  {
    imageSrc: "/Men4.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/Men5.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
  {
    imageSrc: "/Men6.jpg",
    altText: "Clothing Item",
    title: "Casual Leather Shoes",
    description: "Men's Footwear",
    price: "$120",
  },
];

const page = () => {
  const scrollContainer = useRef(null);

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
        <section className="h-96 bg-zinc-600 rounded-lg m-5"></section>
        <section className=" flex p-5 justify-center gap-6 items-center">
          <div className="text-center ">
            <Link href="#">
              <Image
                src="/shirt.avif"
                width={300}
                height={500}
                alt="Picture of the author"
                className="h-20 w-20 mb-2 rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"
              />
            </Link>
            T Shirt
          </div>
          <div className="text-center ">
            <Link href="#">
              <Image
                src="/trouser.avif"
                width={300}
                height={500}
                alt="Picture of the author"
                className="h-20 w-20 mb-2  rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"
              />
            </Link>
            Trousers
          </div>
          <div className="text-center ">
            <Link href="#">
              <Image
                src="/shoes.avif"
                width={300}
                height={500}
                alt="Picture of the author"
                className="h-20 w-20 mb-2  rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"
              />
            </Link>
            Shose
          </div>
          <div className="text-center ">
            <Link href="#">
              <Image
                src="/jacket.avif"
                width={300}
                height={500}
                alt="Picture of the author"
                className="h-20 w-20 mb-2  rounded-full hover:outline outline-2 outline-offset-4 outline-zinc-600"
              />
            </Link>
            Jackets
          </div>
        </section>
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
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <Adids/>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default page;
