"use client";
import { Button, Tab, Tabs } from "@jamsr-ui/react";
import { useState } from "react";
import { IoIosArrowRoundForward, IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
const PrelineTemplates = () => {
    
  const [hovered, setHovered] = useState(false);
      
  return (
    <div>
        <Tabs variant="underlined" className="w-80 md:w-96">
      <Tab value="photos" heading="Photos">
        <div>
            <div className="flex justify-between items-center">
                <h1>Templates (12)</h1>
                <Button className="flex items-center"
      onMouseEnter={() => setHovered(true)} // Set hovered state to true on hover
      onMouseLeave={() => setHovered(false)} // Reset hovered state when mouse leaves
      endContent={hovered ? <FaArrowRight />  : <IoIosArrowForward />}
    >
      Purchase
    </Button>
            </div>
            <div>

            </div>
        </div>
      </Tab>
      <Tab value="music" heading="Music"></Tab>
    </Tabs>
    
    
    </div>
    
    
  );
};

export default PrelineTemplates;
