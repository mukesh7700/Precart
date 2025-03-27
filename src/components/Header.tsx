"use client";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Header,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  type HeaderProps,
} from "@jamsr-ui/react";
import Link from "next/link";
import { useState } from "react";

import { CiMenuKebab } from "react-icons/ci";

import DrawerUsage from "@/components/Drawer";

import Home from "@/components/Home";
import Men from "@/components/Men";
import Women from "@/components/Women";

import Cart from "@/components/Cart";
import Search from "@/components/Search";

import Sales from "@/components/Sales";
import Kids from "@/components/Kids";

import Menu1 from "@/components/Menu1";
import { CartIcon, Logo, SearchIcon } from "./svgs";

const popoverData = [
  { label: "Men", content: <Men /> },
  { label: "Women", content: <Women /> },
  { label: "Kids", content: <Kids /> },
  { label: "Accessories", content: <Home /> },
  { label: "Sales", content: <Sales /> },
];

const HeaderUsage = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const openMenu = () => setIsMenuOpen(true);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSearch = () => setIsSearchOpen(true);

  return (
    <>
      <Header className="flex justify-between " {...props}>
        <div className="container max-w-[1280px] mx-auto flex justify-between px-2 md:px-0 py-4 items-center">
          <div className="flex  items-center gap-4  w-fit">
            <Link href="/">
              <Logo className="h-[22px]   fill-black dark:fill-white" />
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center w-full    ">
            {popoverData.map(({ label, content }, index) => (
              <Popover
                key={index}
                trigger={
                  <Button
                    variant="text"
                    disableRipple
                    disableAnimation
                    className={` ui-hover:text-neutral-500   text-md ${
                      isOpen === index ? "text-neutral-500" : ""
                    }`}
                  >
                    {label}
                  </Button>
                }
                className="w-screen left-0 right-0 mx-auto p-0 shadow-none  bg-transparent backdrop-blur-none"
                triggerOn="hover"
                onOpenChange={(open) => setIsOpen(open ? index : null)}
              >
                <div className="flex justify-center me-2">
                  <div className="max-w-[1280px] w-full mx-auto">{content}</div>
                </div>
              </Popover>
            ))}
            <Link href="https://github.com/mukesh7700/Precart" target="_blank">
              <Chip variant="outlined" color="danger" className="outline-1 px-0">
               
                <Chip variant="dot" color="danger" className="text-danger font-semibold">Download</Chip>{" "}
              </Chip>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <IconButton
              variant="light"
              label=""
              radius="full"
              onClick={openSearch}
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              variant="light"
              label=""
              radius="full"
              onClick={openCart}
            >
              <CartIcon />
            </IconButton>

            <Menu
              classNames={{
                popover: "min-w-[250px] ",
                content: "  border-none p-0 ",
              }}
              trigger={
                <IconButton label="trigger" radius="full" className="py-0">
                  <Avatar
                    alt="image"
                    className="flex"
                    src="https://i.pravatar.cc/300?u=20"
                    width={100}
                    height={100}
                  />
                </IconButton>
              }
              lockScroll={false}
            >
              <div className="p-2">
                <MenuItem>
                  <Link href="/account">
                    <Card className=" p-1 border-none  bg-transparent">
                      <CardHeader
                        heading="James Collins"
                        startContent={
                          <Avatar
                            alt="image"
                            className="flex "
                            src="https://i.pravatar.cc/300?u=20"
                            width={100}
                            height={100}
                          />
                        }
                        subHeading="jamescollins@site.so"
                        className="p-0"
                      />
                    </Card>
                  </Link>
                </MenuItem>
              </div>
              <Divider />
              <div className="p-2">
                <Menu1 />
              </div>
            </Menu>
            <IconButton label="" className="md:hidden" onClick={openMenu}>
              <CiMenuKebab />
            </IconButton>
          </div>
        </div>
      </Header>

      <DrawerUsage isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} onClose={closeCart} />

      <Search isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
    </>
  );
};
export default HeaderUsage;
