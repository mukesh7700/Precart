import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@jamsr-ui/react";
import HeaderUsage from "@/components/Header";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precart – eCommerce website Template with JamsrUI, Next.js, & Tailwind CSS",
  description: "Precart – eCommerce website Template with JamsrUI, Next.js, & Tailwind CSS",
  icons: {
    icon: "/fevicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UIProvider>
          <HeaderUsage isBordered />

          {children}
          
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
