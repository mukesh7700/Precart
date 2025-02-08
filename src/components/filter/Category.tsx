"use client";
import React, { useState } from "react";

const Category: React.FC = () => {
  const [selectedPrices, setSelectedPrices] = useState([
    "$0-$25",
    "$50-$100",
    "$100-$150",
    "$150+",
  ]);

  const priceRanges = [
    { label: "Shirt", count: 47 },
    { label: "T-shirt", count: 89 },
    { label: "Polos", count: 35 },
    { label: "Trousers", count: 30 },
    { label: "Jeans", count: 21 },
    { label: "Shorts", count: 5 },
    { label: "Jackets", count: 15 },
    { label: "Sweatshirts", count: 44 },
    { label: "Sweaters", count: 1 },

    { label: "Hoodies", count: 21 },
    { label: "Blazers", count: 3 },
    { label: "Suits", count: 6 },  

  ];

  const toggleCheckbox = (label: any) => {
    setSelectedPrices((prev) =>
      prev.includes(label)
        ? prev.filter((price) => price !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="p-2 rounded-md bg-black mb-2">
      <h1 className="mb-3 font-semibold">Category</h1>
      <div>
        <div className="bg-black text-white p-2 rounded-lg ">
          {priceRanges.map(({ label, count }) => (
            <label
              key={label}
              className="flex items-center gap-2 p-2 hover:bg-neutral-900 w-full rounded-lg"
            >
              <input
                type="checkbox"
                checked={selectedPrices.includes(label)}
                onChange={() => toggleCheckbox(label)}
                className="w-4 h-4 accent-blue-500 "
              />
              <span className="flex-grow">{label}</span>
              <span className="text-gray-400">({count})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
