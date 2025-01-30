"use client";
import {
  Avatar,
 
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
import { ChevronDownIcon,  SearchIcon } from "@jamsr-ui/shared-icons";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import DrawerUsage from "@/components/Drawer";
import PrelineTemplates from "./PrelineTemplates";

import Home from "@/components/Home"
import Men from "@/components/Men"
import Women from "@/components/Women"
import { useId } from "react";
import Cart from "@/components/Cart";
import Search from "@/components/Search";
import Image from "next/image";
import Sales from "@/components/Sales";
import Kids from "@/components/Kids";
import Pages from "@/components/Pages";

import Menu1 from "@/components/Menu1";


const popoverData = [
  { label: "pages", content: <Pages /> },
  { label: "Men", content: <Men /> },
  { label: "Women", content: <Women /> },
  { label: "Kids", content: <Kids /> },
  { label: "Home", content: <Home /> },
  { label: "Sales", content: <Sales /> },
];

const AvatarItem = () => {
  const id = useId();
  return (
    <Avatar
      alt="image"
      className="flex"
      src="data:image/jpeg;base64,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"
      width={100}
      height={100}
    />
  );
};



const HeaderUsage = (props: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);

  return (
    <>
      <Header className="flex justify-between px-4" {...props}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <Link href="/">
              <svg
                className="n5h7m mf27b"
                width="116"
                height="32"
                viewBox="0 0 116 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
                  className="efiz9 dark:fill-white"
                  fill="currentColor"
                ></path>
                <path
                  d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                  className="vbrlo dark:stroke-white"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <path
                  d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                  className="vbrlo dark:stroke-white"
                  stroke="currentColor"
                  strokeWidth="2"
                ></path>
                <circle
                  cx="13"
                  cy="16.5214"
                  r="5"
                  className="efiz9 dark:fill-white"
                  fill="currentColor"
                ></circle>
              </svg>
            </Link>
            <Popover
              trigger={
                <IconButton size="sm" variant="light" label="Popover Trigger">
                  <ChevronDownIcon />
                </IconButton>
              }
              className="p-2"
            >
              <PrelineTemplates />
            </Popover>
          </div>
          <div className="hidden md:flex justify-center items-center  gap-6">
            {popoverData.map(({ label, content }, index) => (
              <Popover
                key={index}
                trigger={
                  <IconButton
                    variant="text"
                    label="Popover Trigger"
                    className="hover:underline underline-offset-8"
                  >
                    {label}
                  </IconButton>
                }
                className="p-0 max-w-fit"
                triggerOn="hover"
              >
                <div  >{content}</div>
              </Popover>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">

            <IconButton variant="light" label="" radius="full" onClick={openSearch} >
              <SearchIcon />
            </IconButton>


            <Popover
              trigger={
                <IconButton variant="light" label="" radius="full">
                  <FaRegHeart />
                </IconButton>
              }
              className="p-2"
              placement="bottom-start"
            >
              <div className="p-3 ">
                <h1 className="text-xl mb-2 font-semibold">Favorites</h1>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src="data:image/jpeg;base64,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"
                      width={100}
                      height={200}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">
                      Everyday Solid Black T-Shirt
                    </h1>
                    <p className="text-md my-3">
                      <span className="line-through">$60</span>
                      <span className="text-red-600">$40</span>
                    </p>
                    <Link
                      href="http://"
                      className="underline underline-offset-2 font-semibold text-md hover:text-violet-600"
                    >
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      src="data:image/jpeg;base64,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"
                      width={100}
                      height={200}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="my-3 ">
                    <h1 className="text-lg font-semibold">Nike Air Force 1</h1>
                    <p className="text-md my-3">
                      <span className="line-through">$139</span>{" "}
                    </p>
                    <Link
                      href="http://"
                      className="underline underline-offset-2 font-semibold text-md hover:text-violet-600"
                    >
                      Remove
                    </Link>
                  </div>
                </div>
                <div className="text-center font-semibold text-md mt-2">
                  <Link
                    href="/favorites"
                    className="underline underline-offset-2 hover:text-violet-600"
                  >
                    View favorites
                  </Link>
                </div>
              </div>
            </Popover>
            <IconButton variant="light" label="" radius="full" onClick={openCart} >
              <RiShoppingBag4Line />
            </IconButton>

            {/* <Popover
              placement="bottom-start"
              trigger={
                <IconButton radius="full" label="Popover Trigger">
                  <Avatar alt="" width={100} height={100}>
                    Avatar
                  </Avatar>
                </IconButton>
              }
              className="p-2"
            >
              <div>
                <Link href="/account">
                  <Card className="hover:bg-zinc-800 pb-4">
                    <CardHeader
                      heading="James Collins"
                      startContent={<AvatarItem />}
                      subHeading="jamescollins@site.so"
                    />
                  </Card>
                </Link>

                <SidebarUsage />
              </div>
            </Popover> */}
            <Menu
              classNames={{
                popover: "min-w-[300px] ",
                content: "bg-[#121212] border border-neutral-500   p-2"
              }}
              trigger={<IconButton radius="full" label="Popover Trigger">
                <Avatar alt="" width={100} height={100}>
                  Avatar
                </Avatar>
              </IconButton>}
            >
              <MenuItem className="mb-3">
                <Link href="/account">
                  <Card className=" p-0  bg-transparent">
                    <CardHeader
                      heading="James Collins"
                      startContent={<AvatarItem />}
                      subHeading="jamescollins@site.so"
                      className="p-0"
                    />
                  </Card>
                </Link>
              </MenuItem>
              <Divider className="mx-2"/>
              <Menu1/>

            </Menu>
            <IconButton label="" className="md:hidden" onClick={openMenu}>
              <CiMenuKebab />
            </IconButton>

          </div>
        </div>

      </Header>

      <DrawerUsage
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        onClose={closeMenu}
      />

      {/* Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        onClose={closeCart}
      />

      <Search
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        onClose={closeSearch}
      />
    </>
  );
};
export default HeaderUsage;
