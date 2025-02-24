"use client";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
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

  const openMenu = () => setIsMenuOpen(true);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSearch = () => setIsSearchOpen(true);

  return (
    <>
      <Header className="flex justify-between " {...props}>
        <div className="container max-w-[1280px] mx-auto flex justify-between py-4 items-center">
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
                    className="hover:underline ui-hover:text-neutral-500 underline-offset-8 text-md  "
                  >
                    {label}
                  </Button>
                }
                className="p-0 mt-2 bg-transparent shadow-none"
                triggerOn="hover"
              >
                <div className="">{content}</div>
              </Popover>
            ))}
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
                popover: "min-w-[300px] ",
                content: "bg-[#121212]  border-none p-2",
              }}
              trigger={
                <IconButton radius="full" label="Popover Trigger">
                  <Avatar
                    alt="image"
                    className="flex"
                    src="/images/avatar/profile.jpg"
                    width={100}
                    height={100}
                    {...props}
                  />
                </IconButton>
              }
            >
              <MenuItem className="mb-3">
                <Link href="/account">
                  <Card className=" p-1 border-none  bg-transparent">
                    <CardHeader
                      heading="James Collins"
                      startContent={<Avatar
                        alt="image"
                        className="flex"
                        src="/images/avatar/profile.jpg"
                        width={100}
                        height={100}
                        {...props}
                      />}
                      subHeading="jamescollins@site.so"
                      className="p-0"
                    />
                  </Card>
                </Link>
              </MenuItem>
              <Divider className="mx-2" />
              <Menu1 />
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
