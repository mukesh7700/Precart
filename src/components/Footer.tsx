import { Button, Input } from "@jamsr-ui/react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { IoIosGlobe } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";


const helpData = [
    {
      category: "Help ",
      items: [
        { name: "Help Center", link: "/help-center" },
        { name: "FAQs", link: "/faqs" },
        { name: "Subscription", link: "/subscription" },
        { name: "Order Status", link: "/order-status" },
        { name: "Returns & Exchanges", link: "/returns" },
        { name: "Contact Us", link: "/contact-us" },
      ],
    },
    
    {
      category: "Resources",
      items: [
        { name: "Gift Cards", link: "/gift-cards" },
        { name: "Find a Store", link: "/find-store" },
        { name: "Membership", link: "/membership" },
      ],
    },
    {
      category: "Company",
      items: [
        { name: "Newsroom", link: "/newsroom" },
        { name: "New Features", link: "/new-features" },
        { name: "Careers", link: "/careers" },
        { name: "Investors", link: "/investors" },
        { name: "Purpose", link: "/purpose" },
      ],
    },
  ];

const Footer = () => {
  return (
    <div className="px-3 py-5">
      <div className="container mx-auto">
        <div>
          <h1 className="text-xl font-semibold ">Subscribe & get 10% off </h1>
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
          <h3 className="text-lg font-semibold ">{section.category}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="leading-loose hover:underline underline-offset-2 text-zinc-400 hover:text-zinc-300 text-lg " >{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <div>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-zinc-400 text-lg font-semibold ">
            <CiLocationOn/> 
            Location
            <GrFormNext/>
            </Link>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-zinc-400 text-lg font-semibold ">
            <IoIosGlobe />
            United Kingdom
            <GrFormNext/>
            </Link>
            <Link href="#" className="flex items-center gap-2 leading-loose  underline-offset-2  hover:text-zinc-400 text-lg font-semibold ">
            <FiMessageSquare /> 
            Send us feedback
            <GrFormNext/>
            </Link>
            
        </div>
        <div className="my-10">
            <h1 className="text-lg font-semibold ">Stay connected</h1>
            <div className="flex gap-5 py-2">
            <Link href="#" className="  text-zinc-400 hover:text-white text-lg font-semibold ">
            <FaInstagram />
            
            
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white text-lg font-semibold ">
            <FaYoutube />
            
            
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white text-lg font-semibold  ">
            <RiTwitterXLine />
            
            
            </Link>
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
