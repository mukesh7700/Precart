'use client';

import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Card } from '@jamsr-ui/react';
import { useTheme } from '@/context/ThemeContext';
import { Eye, Info, Trending } from './svgs';

const titles = [
    { text: ' Trending item - 71 sold in the last day', icon: <Trending  /> },
    { text: 'Popular - 25 people are looking at this now ', icon: <Info  /> },
    { text: 'Model is 6 0 tall and is wearing size 10', icon: <Eye  /> },
    
  ];


export default function TitleCarousel() {
  const [index, setIndex] = useState(0);
  const {theme} = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className= {`flex border-none  justify-center items-center   text-neutral-500 text-sm tracking-tight p-4 rounded-lg overflow-hidden relative w-full ${theme === "light" ? "bg-neutral-100" : "bg-neutral-800"}`}>
      <AnimatePresence mode="wait">
        <m.div
          key={titles[index].text}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute flex items-center gap-2"
        >
         {titles[index].icon} {titles[index].text}
        </m.div>
      </AnimatePresence>
    </Card>
  );
}
