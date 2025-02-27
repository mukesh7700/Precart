"use client"
import { Button, Chip, Input } from "@jamsr-ui/react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { IoIosGlobe } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";


const helpData = [
    {
      category: "Help ",
      items: [
        { name: "Help Center", link: "/" },
        { name: "FAQs", link: "/faqs" },
        { name: "Subscription", link: "/" },
        { name: "Order Status", link: "/" },
        { name: "Returns & Exchanges", link: "/" },
        { name: "Contact Us", link: "/" },
      ],
    },
    
    {
      category: "Resources",
      items: [
        { name: "Gift Cards", link: "/" },
        { name: "Find a Store", link: "/" },
        { name: "Membership", link: "/" },
      ],
    },
    {
      category: "Company",
      items: [
        { name: "Newsroom", link: "/" },
        { name: "New Features", link: "/" },
        { name: "Careers", link: "/" },
        { name: "Investors", link: "/" },
        { name: "Purpose", link: "/" },
      ],
    },
  ];

const Footer = () => {
  const { theme, toggleTheme } = useTheme();// Default to dark mode

  

  return (
    <div className="px-3 py-5 border-t border-zinc-600">
      <div className="container mx-auto max-w-[1280px]">
        <div>
          <h1 className="text-lg font-semibold ">Subscribe & get 10% off </h1>
        </div>
        <div className="flex gap-3 py-2 ">
          <div>
            <Input type="email" />
          </div> 
          <div>
            <Button variant="solid">Sign up</Button>
          </div>
        </div>
        <div className="py-5 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {helpData.map((section) => (
        <div key={section.category}>
          <h3 className="text-md font-semibold ">{section.category}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="leading-loose hover:underline underline-offset-2 text-zinc-400 hover:text-current text-md " >{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <div>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-neutral-500 text-md font-semibold ">
            <CiLocationOn/> 
            Location
            <GrFormNext/>
            </Link>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-zinc-400 text-md font-semibold ">
            <IoIosGlobe />
            United Kingdom
            <GrFormNext/>
            </Link>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-zinc-400 text-md font-semibold ">
            <FiMessageSquare /> 
            Send us feedback
            <GrFormNext/>
            </Link>
            
        </div>
        <div className="my-10">
            <h1 className="text-md font-semibold   ">Stay connected</h1>
            <div className="flex gap-5 py-2">
            <Link href="/" className="  text-zinc-400 hover:text-current text-lg font-semibold ">
            <FaInstagram />
            
            
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-current text-lg font-semibold ">
            <FaYoutube />
            
            
            </Link>
            <Link href="/" className="text-zinc-400 hover:text-current text-lg font-semibold  ">
            <RiTwitterXLine />
            
            
            </Link>
            </div>
        </div>
      </div>
        </div>
        <div className="flex items-center gap-2  text-zinc-600 text-sm font-semibold">
         
         
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

export default Footer;
