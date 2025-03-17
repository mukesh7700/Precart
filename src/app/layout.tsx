import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UIConfigProvider, UIProvider } from "@jamsr-ui/react";
import HeaderUsage from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Precart – eCommerce website Template with JamsrUI, Next.js, & Tailwind CSS",
  description:
    "Precart – eCommerce website Template with JamsrUI, Next.js, & Tailwind CSS",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
        <UIProvider>
          <UIConfigProvider
            card={{
              isBordered: true,
              className: "border border-[hsl(210,9.8%,16.1%)] bg-transparent",
            }}
          >
            <HeaderUsage isBordered />

            <main className="flex-grow h-full">{children}</main>

            <Footer />
          </UIConfigProvider>
        </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
