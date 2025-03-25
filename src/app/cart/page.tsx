"use client";
import { AlertWithAction } from "@/components/AlertAction";
import CartCard from "@/components/CartCard";
import ShopingCard from "@/components/ShopingCard";
import { PayPalIcon } from "@/components/svgs";
import TabImageSwiper from "@/components/TabImageSwiper";
import CartData from "@/data/CartData";
import mencardData from "@/data/MenCloths";
import { Button, Divider } from "@jamsr-ui/react";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto py-5 max-w-[1280px]">
      <div className="flex justify-between gap-5 ">
        <div className="basis-2/3">
          <AlertWithAction />
          {CartData.map((cart, index) => (
            <div key={index}>
              <CartCard
                imageSrc={cart.imageSrc}
                productName={cart.productName}
                color={cart.color}
                size={cart.size}
                quantity={cart.quantity}
                price={cart.price}
              />
              <Divider />
            </div>
          ))}
        </div>
        <div className="basis-1/3 p-4 ">
          <div className="sticky top-[70px] h-fix">
            <h1 className="text-lg ">Order Summary</h1>
            <ul className="leading-9 mb-2">
              <li className="flex justify-between">
                <p>Subtotal</p>
                <p className="">$ 100</p>
              </li>
              <li className="flex justify-between">
                <p>shipping</p>
                <p className="">-</p>
              </li>
              <li className="flex justify-between">
                <p>Estimated Tax</p>
                <p className=" text-neutral-500 underline underline-offset-2">Calculate</p>
              </li>
              <li className="flex justify-between">
                <p>Promo code</p>
                <p className=" text-neutral-500 underline underline-offset-2">Enter code</p>
              </li>
              <li className="flex justify-between text-neutral-500">
                <p>Sale</p>
                <p className="">-$20</p>
              </li>
              <li className="flex justify-between">
                <p>Total</p>
                <p className="">USD <span className="text-semibold"> $ 100</span></p>
              </li>

            </ul>
            <Button disableAnimation disableRipple variant="solid" color="primary" size="lg" className="w-full mb-2" >Checkout</Button>
            <Button disableAnimation disableRipple  variant="outlined"  className="w-full" ><PayPalIcon/></Button>
          </div>
        </div>
      </div>
      <section className="py-5">
        <h1 className="text-2xl font-semibold mb-2">You may also like</h1>
        <TabImageSwiper
          items={mencardData.slice(0, 6).map((card, index) => (
            <ShopingCard
              href="/product/women/categories/product-details"
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
              price={card.price}
              isTrending={card.isTrending}
              onLike={() => console.log("liked")}
              showInfoText="Quick view"
            />
          ))}
        />
      </section>
    </div>
  );
};

export default page;
