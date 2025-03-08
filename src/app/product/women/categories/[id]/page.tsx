"use client";
import { useParams } from "next/navigation";
import womencardData from "@/data/WomenCloths";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  IconButton,
  Rating,
  Select,
  SelectItem,
} from "@jamsr-ui/react";
import Carousel2 from "@/components/Carousel2";
import Breadcrumb from "@/components/Breadcrumb";
import Carousel3 from "@/components/Carousel3";
import { Batch, Clock, Heart, Return } from "@/components/svgs";
import Link from "next/link";
import TabImageSwiper from "@/components/TabImageSwiper";
import mencardData from "@/data/MenCloths";
import ShopingCard from "@/components/ShopingCard";

const ProductPage = () => {
  const { id } = useParams();
  const productIndex = Array.isArray(id) ? id[0] : id; // Convert array to string if needed

  const product = womencardData.find(
    (item) => item.title.replace(/\s+/g, "-").toLowerCase() === productIndex
  );

  if (!product) {
    return <h1 className="text-center text-xl py-10">Product Not Found</h1>;
  }

  const sizes = Array.from({ length: (12 - 6.5) / 0.5 + 1 }, (_, i) =>
    (6.5 + i * 0.5).toFixed(1)
  );

  return (
    <div className="container mx-auto max-w-[1280px] py-10 ">
      <div className="flex gap-4">
        <div className="w-1/2 h-[500px] sticky top-[70px]">
          <div className="mb-2  ">
            <Breadcrumb />
          </div>
          <Carousel2 images={product.productImages} />
        </div>
        <div className="w-1/2 max-w-[500px]">
          <h1 className="text-md text-neutral-500">{product.description}</h1>
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <h1 className="text-xl font-semibold ">{product.price}</h1>
          <div className="py-2">
            <Rating
              isReadonly
              defaultValue={product.rating || 3}
              classNames={{
                starWrapper: " data-[checked=true]:text-yellow-400",
                star: "size-3",
              }}
            />
            <p className="text-sm text-neutral-500 tracking-tight">
              Includes reviewers who received this item for free{" "}
            </p>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="py-2">
              <h3 className="text-md font-medium mb-2"> Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div key={index}>
                    <Avatar
                      src={color.colorImage}
                      alt={color.colorName}
                      className="size-10 cursor-pointer border border-neutral-300  transition-all"
                    />
                    <p className="text-xs text-neutral-500 text-center mt-1">
                      {color.colorName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Carousel3 />
          <div className="py-2">
            <p className="text-md font-semibold">Sizes</p>
            <div className="py-2 grid grid-cols-4 gap-4">
              {sizes.map((num) => (
                <button
                  key={num}
                  className="border border-neutral-300 py-2 text-sm rounded-md"
                >
                  {num}
                </button>
              ))}
            </div>
            <p className="text-sm flex items-center text-orange-400">
              <Clock className="w-4 h-4" />
              Low in stock
            </p>
          </div>
          <div className="py-2 flex gap-2 justify-between items-center">
            <Select className="w-[60px]" defaultValue={["1"]}>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <SelectItem value={String(num)} key={num}>
                  {num}
                </SelectItem>
              ))}
            </Select>
            <Button
              size="lg"
              className="flex-grow bg-neutral-300 text-black ui-hover:bg-neutral-200"
            >
              Add to cart
            </Button>
            <IconButton
              label="like"
              disableAnimation
              disableRipple
              className=" bg-transparent border border-neutral-500"
            >
              <Heart className="h-6 w-6" />
            </IconButton>
          </div>
          <div className="py-2 text-center text-neutral-500 tracking-wide">
            <h1>
              4 interest-free payments of $10 with{" "}
              <span className="font-bold text-current"> Klarna.</span>
            </h1>
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-blue-500"
            >
              Learn more
            </Link>
          </div>
          <div className="py-2">
            <h1 className="text-lg font-semibold">Shipping</h1>
            <p className="text-sm text-neutral-500 tracking-wide">
              You&apos;ll see our shipping options at checkout.
            </p>
            <ul className="py-4 text-semibold">
              <li className="flex gap-2 mb-2">
                <Batch className=" h-6 w-6" /> <p>Secure checkout</p>
              </li>
              <li className="flex gap-2">
                {" "}
                <Return className=" h-6 w-6" />
                <p>30 days return</p>
              </li>
            </ul>
          </div>
          <div className="py-2">
            <Accordion isMultiple>
              <AccordionItem aria-label="Accordion 1" heading="Description">
                <div>
                  <p className="py-2 text-sm text-neutral-500">
                    Sink into pure, simple comfort the moment you step in the
                    door. mahabis classic has a pared-back design for those who
                    love the beautiful yet understated things in life.{" "}
                  </p>
                  <ul className="list-disc pl-5 text-neutral-500">
                    <li className="py-2">Iconic, understated design.</li>
                    <li className="py-2">Premium felt upper.</li>
                    <li className="py-2">100% wool lining. </li>
                    <li className="py-2">
                      Machine washable at 30°, remove insoles and wash ugbru a
                      wool/delicates cycle.{" "}
                    </li>
                    <li className="py-2">
                      Neoprene heel gently secures your foot in place.{" "}
                    </li>
                    <li className="py-2">
                      Contoured footbed for extra support.{" "}
                    </li>
                    <li className="py-2">Eco-friendly packaging </li>
                    <li className="py-2">
                      One tree planted for every pair bought
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem aria-label="Accordion 2" heading="Size and Fit">
                <div className="py-2">
                  <ul className="list-disc pl-5 text-neutral-500">
                    <li className="py-2">
                      For wider feet, we suggest going up a size
                    </li>
                    <li className="py-2">
                      If you&apos;re usually a half size, we recommend going for the
                      larger size.
                    </li>
                  </ul>
                </div>
              </AccordionItem>
              <AccordionItem
                aria-label="Accordion 3"
                heading="Shipping and Returns"
              >
                <div className="py-2 text-sm text-neutral-500">
                  <p>
                    Free standard shipping ugbru orders over $50 and free 30-day
                    returns.{" "}
                    <Link
                      href="#"
                      className="underline underline-offset-4 hover:text-blue-500"
                    >
                      {" "}
                      Learn more.
                    </Link>
                  </p>
                  <p>
                    Returns must be received within 30 days of shipping
                    confirmation. In order to process your return, items must be
                    unworn and tags must be attached.
                  </p>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="py-2">
            <h1 className="text-lg font-semibold">Goes well with...</h1>
            <TabImageSwiper
            items={mencardData.slice(0, 6).map((card, index) => (
              <ShopingCard
                href="/"
                key={index}
                imageSrc={card.imageSrc}
                altText={card.altText}
                title={card.title}
                description={card.description}
                price={card.price}
                
                isTrending={card.isTrending}
                
                
                showInfoText="Quick view"
              />
            ))}
            />
          </div>
        </div>
      </div>

      <Button className="mt-5">Add to Cart</Button>
    </div>
  );
};

export default ProductPage;
