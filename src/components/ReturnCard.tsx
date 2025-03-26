"use client";

import { useTheme } from "@/context/ThemeContext";

import React, { useState } from "react";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Chip,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@jamsr-ui/react";
import Link from "next/link";
import { Cardimg, GiftImg, PayPalIcon } from "./svgs";

interface ReturnCardProps {
  imageSrc: string;
  productName: string;
  color: string;
  size: string;
  quantity: number;
  stock: number; // Added stock prop
  isReturnable: boolean;
}
const ReturnCard: React.FC<ReturnCardProps> = ({
  imageSrc,
  productName,
  color,
  size,
  quantity,
  stock,
  isReturnable,
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const sizes = Array.from({ length: (10 - 6.5) / 0.5 + 1 }, (_, i) =>
    (6.5 + i * 0.5).toFixed(1)
  );

  return (
    <div className="mb-2">
      <div
        className={`rounded-2xl p-2  ${
          theme === "light" ? "bg-neutral-100" : "bg-zinc-800"
        }`}
      >
        <div
          className={`rounded-2xl p-2 ${
            theme === "light" ? "bg-white" : "bg-[#080808]"
          }`}
        >
          <div className="p-1">
            <div className="flex justify-start items-start gap-4">
              <div className="h-[120px] w-[90px] rounded-lg overflow-hidden ">
                <Image
                  width={200}
                  height={200}
                  src={imageSrc}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <h1 className="text-md  flex justify-between ">
                  {productName}{" "}
                  <Checkbox
                    radius="full"
                    onCheckedChange={() => setIsOpen(!isOpen)}
                  />
                </h1>

                <p className="text-sm text-neutral-500 leading-loose">
                  Color: {color}
                </p>
                <p className="text-sm text-neutral-500 leading-loose">
                  Size: {size}
                </p>
                <p className="text-sm text-neutral-500 leading-loose">
                  Qty: {quantity}
                </p>
              </div>
            </div>
          </div>
          {isOpen && (
            <Tabs
              variant="underlined"
              defaultValue="tab1"
              classNames={{
                tabList:
                  "w-full justify-center p-0 border-b border-neutral-500 rounded-none",
                cursor: "bg-white w-full",
              }}
            >
              <Tab value="tab1" heading="Exchange" className="p-0">
                {stock === 0 ? (
                  <div>
                    <h1 className="text-sm font-semibold leading-6">
                      Out of Stock
                    </h1>
                    <p className="text-sm text-neutral-500 tracking-wider leading-6">
                      This item is only available for exchange in a different
                      color, as all sizes are sold out. Alternatively, you can
                      return it.{" "}
                    </p>
                    <Link
                      href="/"
                      className="text-sm font-semibold tracking-wider leading-6 underline underline-offset-4 hover:text-blue-400"
                    >
                      Looking for something similar?{" "}
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-neutral-500 tracking-wider leading-6">
                      We are unable to accept a return for this item as it has
                      exceeded the 30-day return period.{" "}
                    </p>
                    <h1 className="text-sm font-semibold tracking-wider leading-6">
                      Available sizes in this color{" "}
                    </h1>
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
                    <Button className="w-full my-2" size="lg" color="primary">
                      Exchange for: size {size}
                    </Button>
                  </div>
                )}
              </Tab>
              <Tab value="tab2" heading="Return" disabled={!isReturnable}>
                <div>
                  <Select
                    className="w-full mb-4"
                    label="Select return reason "
                    placeholder="Return reason"
                  >
                    <SelectItem value="apple">Too big</SelectItem>
                    <SelectItem value="blueberry">Too small</SelectItem>
                    <SelectItem value="watermelon">
                      Size different from order
                    </SelectItem>
                    <SelectItem value="banana">Wrong item sent</SelectItem>
                    <SelectItem value="orange">Item not ordered</SelectItem>
                    <SelectItem value="kiwi">
                      Item does not match description
                    </SelectItem>
                    <SelectItem value="pineapple">
                      Color different from order
                    </SelectItem>
                    <SelectItem value="lemon">Item arrived late</SelectItem>
                    <SelectItem value="grape">Item arrived damaged</SelectItem>
                  </Select>
                          
                  <RadioGroup  name="return" defaultValue="male">
                    <div className="p-2 border-2 border-neutral-500 rounded-lg mb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1  ">
                          <Radio  name="return" value="Gift" />
                          <h1>Gift Card</h1>
                          <Chip
                            variant="flat"
                            color="success"
                            size="sm"
                            className="px-2 border"
                          >
                            Fastest
                          </Chip>
                        </div>
                        <GiftImg className="w-7 h-7" />
                      </div>
                      <h1 className="text-sm text-neutral-500 tracking-wider leading-4 p-2">You will receive the gift card by email immediately after we process your return at the warehouse. It will be valid for 3 years. </h1>
                    </div>
                    <div className="p-2 border-2 border-neutral-500 rounded-lg mb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1  ">
                          <Radio name="return" value="Original"/>
                          <h1>Original payment method </h1>
                          
                        </div>
                        <PayPalIcon className=" h-5" />
                      </div>
                      <h1 className="text-sm text-neutral-500 tracking-wider leading-4 p-2">Your refund will be issued within 14 business days after we process your return at the warehouse. </h1>
                    </div>
                    <div className="p-2 border-2 border-neutral-500 rounded-lg mb-2">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-1  ">
                          <Radio name="return" value="Card" />
                          <h1>Credit or Debit Card </h1>
                          
                        </div>
                        <Cardimg className="w-7 h-7" />
                      </div>
                      <h1 className="text-sm text-neutral-500 tracking-wider leading-4 p-2">Your refund will be issued to your credit or debit card within 10 business days after your return is l4xe5 at the warehouse. </h1>
                    </div>
                  </RadioGroup>
                </div>
              </Tab>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReturnCard;
