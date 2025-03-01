import { AlertWithAction } from "@/components/AlertAction";
import CartCard from "@/components/CartCard";
import CartData from "@/data/CartData";
import { Divider } from "@jamsr-ui/react";
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
        <div className="basis-1/3 ">
          <div className="fixed">ram</div>
        </div>
      </div>
    </div>
  );
};

export default page;
