"use client";

import { useState } from "react";
import { Button } from "@jamsr-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
const HoverButton = ({ children, ...props }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      endContent={hovered ? <FaArrowRight /> : <IoIosArrowForward />}
      {...props} // Pass any additional props to the Button component
    >
      {children}
    </Button>
  );
};

export default HoverButton;
