"use client";
import { useTheme } from "@/context/ThemeContext";
import { Chip } from "@jamsr-ui/react";
import React from "react";

const AddressCard = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`rounded-2xl p-2 max-w-[300px] ${
        theme === "light" ? "bg-neutral-100" : "bg-zinc-800"
      }`}
    >
      <div
        className={`rounded-2xl py-4 px-3 ${
          theme === "light" ? "bg-white" : "bg-black"
        }`}
      >
        <div className="flex justify-between">
          <h1>Breannabury </h1>
          <Chip>Default</Chip>
        </div>
        <div>
          <p className="text-sm tracking-wide leading-7">
            James Collins <br />
            280 Suzanne Throughway <br />
            New York, Breannabury, OR 45801, US <br />
            +44 000 000 0001
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4"></div>
    </div>
  );
};

export default AddressCard;
