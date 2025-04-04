"use client"
import {  Chip, } from "@jamsr-ui/react";

import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";




const Footer2 = () => {
  const { theme, toggleTheme } = useTheme();// Default to dark mode

  

  return (
    <div className="px-3 py-5 border-t border-zinc-600">
      <div className="container mx-auto max-w-[1280px]">
        
        
        
        <div className="flex justify-center items-center gap-2  text-zinc-600 text-sm font-semibold">
         
         
          <Chip variant="dot" className=" hover:underline underline-offset-2">Terms</Chip>
          <Chip variant="dot" className=" hover:underline underline-offset-2">Privacy</Chip>
          <Chip variant="dot" className=" hover:underline underline-offset-2">Your Privacy Choices</Chip>
          <Chip variant="dot" className=" hover:underline underline-offset-2" onClick={toggleTheme}>
         {theme === 'light' ?  <FiMoon />:<MdOutlineWbSunny /> } 
          </Chip>
         
        </div>
      </div>
    </div>
  );
};

export default Footer2;
