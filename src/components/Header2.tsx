"use client";
import { Header, type HeaderProps } from "@jamsr-ui/react";
import Link from "next/link";
import { Logo } from "./svgs";

const Header2 = (props: HeaderProps) => {
  return (
    <>
      <Header className="flex justify-center bg-transparent border-b border-neutral-500 " {...props}>
        <div className="container max-w-[1280px] mx-auto flex justify-center px-2 md:px-0 py-4 items-center">
          <div className=" flex justify-center  items-center gap-4  w-fit">
            <Link href="/">
              <Logo  className="h-[22px]   fill-black dark:fill-white" />
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};
export default Header2;
