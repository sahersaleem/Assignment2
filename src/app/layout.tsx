import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import {Inter} from "next/font/google"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight:"500",
  variable: "--font-geist-inter"
})


const heebo = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight:"500",
  variable: "--font-geist-heebo"
})










export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${heebo.className} antialiased bg-[#FAF5F6]`}
      >
      
        {children}
      </body>
    </html>
  );
}
