"use client";

import Order from "@/components/Order";
import { Select, SelectItem, Tab, Tabs } from "@jamsr-ui/react";

const tabs = [
  { heading: "Orders", value: "orders", content: <Order /> },
  {
    heading: "Open orders",
    value: "open-orders",
    content: "Looking for an order? You don't have an open order. ",
  },
  {
    heading: "Cancelled orders",
    value: "cancelled-orders",
    content: "Looking for an order? You don't have a cancelled order. ",
  },
];

const Page = () => {
  return (
    <div className="p-5 w-full min-h-full">
      {/* Top header */}
      <div className="flex justify-between items-center w-full mb-6">
        <div className="text-lg font-semibold w-1/2">Order history</div>
        <div className="flex items-center gap-2 w-1/2 justify-end">
          2 orders <span className="text-neutral-500"> placed in:</span>
          <Select className="max-w-fit" defaultValue={["2025"]}>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </Select>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <Tabs
          variant="underlined"
          classNames={{
            panel:
              " py-2 px-0 border-t border-neutral-800 text-md tracking-wide ",
            cursor: "w-full  ",
            base: " bg-transparent border-none shadow-none",
            tab: "p-2  text-md  hover: ",
            tabList: " p-0 rounded-none",
          }}
          aria-label="Order Tabs"
        >
          {tabs.map((item, index) => (
            <Tab
              key={index}
              value={item.value}
              heading={item.heading}
              className=""
            >
              <div>{item.content}</div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
