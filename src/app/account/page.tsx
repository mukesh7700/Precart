import Card4 from "@/components/BorderCard4";
import {
  Account,
  Email,
  Gift,
  Location,
  Return,
  ShopingBeg,
  Wallet,
} from "@/components/svgs";
import { Avatar, Card, CardHeader } from "@jamsr-ui/react";
import Link from "next/link";
import React from "react";

import { MdNavigateNext } from "react-icons/md";

const AvatarItem = () => {
  return (
    <Avatar
      alt="image"
      className="flex"
      src="https://i.pravatar.cc/300?u=20"
      width={100}
      height={100}
    />
  );
};

const account = [
  {
    logo: <Account />,
    title: "Account",
    subtitle: "Update your details, email preferences and passowrd",
    linkHref: "/personal-info",
  },
  {
    logo: <ShopingBeg />,
    title: "My Orders",
    subtitle: "Cheack the status of your orders or see past orders",
    linkHref: "/my-order",
  },
  {
    logo: <Location />,
    title: "Addresses",
    subtitle: "Manage your billing & shipping addresses",
    linkHref: "/addresses",
  },
  {
    logo: <Wallet />,
    title: "Payment",
    subtitle: "Manage credit cards",
    linkHref: "/payment",
  },
  {
    logo: <Email />,
    title: "Email Newsletter",
    subtitle: "Select which emails you want to receive from us",
    linkHref: "/email-newsletter",
  },
  {
    logo: <Gift />,
    title: "Gift Cards",
    subtitle: "View blance or redeem a card, and purchease a new Gift Card",
    linkHref: "/gift-card",
  },
  {
    logo: <Return />,
    title: "Returns &Refunds",
    subtitle: "Manage your returns and refunds",
    linkHref: "/return-and-refund",
  },
];

const page = () => {
  return (
    <section className="container max-w-[1280px] mx-auto">
      <div className="py-10 ">
        <p className="text-2xl md:3xl font-semibold">Account</p>
        <div className="flex justify-between items-center">
          <Card className="px-0 pb-4 border-none bg-transparent">
            <CardHeader
              heading="James Collins"
              startContent={<AvatarItem />}
              subHeading="jamescollins@site.so"
            />
          </Card>
          <Link
            href="#"
            className="text-lg font-semibold  underline underline-offset-8 hover:text-violet-400"
          >
            Logout
          </Link>
        </div>
        <div className="py-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {account.map((item, index) => (
            <Card4
              key={index}
              logo={item.logo}
              title={item.title}
              subtitle={item.subtitle}
              linkHref={item.linkHref}
            />
          ))}
        </div>
        <div className="py-10 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Need assistance? </p>
            <p className="text-md text-neutral-500">
              Ask our customer service <br />
              Mon to Sun, 5 am to 8 pm PT
            </p>
          </div>
          <Link
            href="/help"
            className="hover:text-violet-500 underline underline-offset-4 flex items-center text-md font-semibold "
          >
            Contact us <MdNavigateNext />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
