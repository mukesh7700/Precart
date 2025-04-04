// components/LayoutContent.tsx
"use client";

import { usePathname } from "next/navigation";
import HeaderUsage from "@/components/Header";
import Footer from "@/components/Footer";
import Header2 from "./Header2";
import Footer2 from "./Footer2";


export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/registration" || pathname === "/forgot-password" || pathname === "/reset-password" || pathname === "/verify-email" || pathname === "/verify-email/success";

  return (
    <>
      {isAuthPage ? <Header2 /> : <HeaderUsage isBordered />}
      <main className="flex-1 flex ">{children}</main>
      {isAuthPage ? <Footer2 /> : <Footer />}
    </>
  );
}
